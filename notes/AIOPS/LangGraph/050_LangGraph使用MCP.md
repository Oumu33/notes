# LangGraph使用MCP
# LangGraph搭建MCP客户端
作为大模型开发者，掌握MCP工具开发流程是基本功，这里我们先尝试自定义MCP工具，并将其接入LangGraph。

## <font style="color:rgb(48, 49, 51);">创建 mcp server</font>
```python
import json
import os
import httpx
import dotenv
from mcp.server.fastmcp import FastMCP
from loguru import logger

dotenv.load_dotenv()

# 创建FastMCP实例，用于启动天气服务器SSE服务
mcp = FastMCP("WeatherServerSSE", host="0.0.0.0", port=8000)



@mcp.tool()
def get_weather(city: str) -> str:
    """
    查询指定城市的即时天气信息。
    参数 city: 城市英文名，如 Beijing
    返回: OpenWeather API 的 JSON 字符串
    """
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": city,
        "appid": os.getenv("OPENWEATHER_API_KEY"),
        "units": "metric",
        "lang": "zh_cn"
    }
    resp = httpx.get(url, params=params, timeout=10)
    data = resp.json()
    logger.info(f"查询 {city} 天气结果：{data}")
    return json.dumps(data, ensure_ascii=False)


if __name__ == "__main__":
    logger.info("启动 MCP SSE 天气服务器，监听 http://0.0.0.0:8000/sse")
    # 运行MCP客户端，使用Server-Sent Events(SSE)作为传输协议
    mcp.run(transport="sse")
```

<font style="color:rgb(144, 147, 153);background-color:rgb(246, 248, 250);"></font><font style="color:rgb(48, 49, 51);">运行 server</font>

```bash
# uv run server.py
2025-08-20 10:27:26.789 | INFO     | __main__:<module>:36 - 启动 MCP SSE 天气服务器，监听 http://0.0.0.0:8000/sse
```

## <font style="color:rgb(48, 49, 51);">创建 mcp配置文件</font>
<font style="color:rgb(48, 49, 51);">mcp.json 文件内容如下：</font>

```json
{
  "mcpServers": {
    "weather": {
      "url": "http://127.0.0.1:8000/sse",
      "transport": "sse"
    },
    "fetch": {
      "command": "/root/.local/bin/uvx",
      "args": ["mcp-server-fetch"],
      "transport": "stdio"
    }
  }
}
```

## <font style="color:rgb(48, 49, 51);">LangGraph 客户端</font>
```python
import asyncio
import json
from typing import Any, Dict
from dotenv import load_dotenv
from langchain_mcp_adapters.client import MultiServerMCPClient
from langchain_ollama import ChatOllama
from langgraph.checkpoint.memory import InMemorySaver
from langgraph.prebuilt import create_react_agent
from loguru import logger

# 加载 .env 文件中的环境变量，override=True 表示覆盖已存在的变量
load_dotenv(override=True)

checkpointer = InMemorySaver()
config = {"configurable": {"thread_id": "user-001"}}


def load_servers(file_path: str = "mcp.json") -> Dict[str, Any]:
    """
    从指定的 JSON 文件中加载 MCP 服务器配置。

    参数:
        file_path (str): 配置文件路径，默认为 "mcp.json"

    返回:
        Dict[str, Any]: 包含 MCP 服务器配置的字典，若文件中没有 "mcpServers" 键则返回空字典
    """
    with open(file_path, "r", encoding="utf-8") as file:
        data = json.load(file)
        return data.get("mcpServers", {})


async def run_chat_loop() -> None:
    """
    启动并运行一个基于 MCP 工具的聊天代理循环。

    该函数会：
    1. 加载 MCP 服务器配置；
    2. 初始化 MCP 客户端并获取工具；
    3. 创建基于 Ollama 的语言模型和代理；
    4. 启动命令行聊天循环；
    5. 在退出时清理资源。

    返回:
        None
    """
    # 1️ 加载服务器配置
    servers_cfg = load_servers()

    # 2️ 初始化 MCP 客户端并获取工具
    mcp_client = MultiServerMCPClient(servers_cfg)
    tools = await mcp_client.get_tools()
    logger.info(f"✅ 已加载 {len(tools)} 个 MCP 工具： {[t.name for t in tools]}")

    # 3 初始化语言模型
    llm = ChatOllama(model="qwen3:8b", reasoning=False)
    # 4 构建LangGraph Agent
    prompt = """
    你是一个智能体，可以调用以下函数：
    1. get_weather(city: str) —— 获取指定地点的天气
    2. fetch(url: str) —— 请求指定 URL 并返回内容网页的内容
    
    请根据用户的自然语言请求，判断是否需要调用函数，并严格按照函数输入格式返回调用指令。
    如果不需要调用函数，就直接回答。
    """
    agent = create_react_agent(model=llm, prompt=prompt, tools=tools, checkpointer=checkpointer)
    # 5. CLI聊天
    logger.info("\n🤖 MCP Agent 已启动，输入 'quit' 退出")
    while True:
        user_input = input("\n你: ").strip()
        if user_input.lower() == "quit":
            break
        try:
            result = await agent.ainvoke({"messages": [("user", user_input)]}, config)
            print(f"\nAI: {result['messages'][-1].content}")
        except Exception as exc:
            logger.error(f"\n⚠️  出错: {exc}")

    # 6. 退出会话
    logger.info("🧹 已退出会话，Bye!")


if __name__ == "__main__":
    # 启动异步事件循环并运行聊天代理
    asyncio.run(run_chat_loop())

```

## <font style="color:rgb(48, 49, 51);">访问验证</font>
```bash
2025-09-29 14:39:46.748 | INFO     | __main__:run_chat_loop:53 - ✅ 已加载 2 个 MCP 工具： ['get_weather', 'fetch']

2025-08-20 10:42:04.410 | INFO     | __main__:run_chat_loop:28 - 
🤖 MCP Agent 已启动，输入 'quit' 退出
你: 上海天气怎么样

AI: 北京今天多云，气温为 29.15°C，体感温度为 27.79°C，湿度 26%，风速为 2.35 m/s。天气总体较为舒适。   

你: https://github.langchain.ac.cn/langgraph/reference/mcp/总结这篇文档

MCP 适配器 - LangChain 框架
…………
```

# 将LangGraph封装为MCP工具
作为双向MCP工具，我们不仅能借助LangGraph来创建MCP客户端并搭建智能体，我们还能将已经开发好的LangGraph项目便捷的封装为MCP工具。

LangGraph智能体后端服务对MCP功能是完全兼容的，一旦我们顺利开启LangGraph后端服务，即可在/mcp路由端口以流式HTTP模式调用LangGraph的智能体各项功能。这也是最便捷的将LangGraph智能体封装为MCP工具的方法。

## 使用 LangGraph CLI 启动服务
通过LangGraph CLI 命令行工具启动之前创建的 Langgraph 智能体，包含查询天气和写入文件两个工具。具体可参考文档：[https://www.cuiliangblog.cn/detail/section/236995727](https://www.cuiliangblog.cn/detail/section/236995727)

## 添加天气助手MCP工具
顺利开启后端服务后，我们就能在http://127.0.0.1:2024/mcp 处，以流式传输的MCP工具形式对其进行调用。例如现在保持天气助手服务开启状态，然后回到我们的LangGraph MCP项目中，在MCP工具配置文件中，加上天气助手的服务端口。

mcp.json 文件内容如下

```python
{
  "mcpServers": {
    "get_weather": {
      "url": "http://127.0.0.1:2024/mcp",
      "transport": "streamable_http"
    }
  }
}
```

## 更新提示词
```python
prompt = """
    你是一个智能体，当用户需要查询天气时，可以调用chatbot工具此时请创建如下格式消息进行调用：{"type": "human", "content": user_input}
    请根据用户的自然语言请求，判断是否需要调用函数，并严格按照函数输入格式返回调用指令。
    如果不需要调用函数，就直接回答。
    """
```

然后访问验证即可。


