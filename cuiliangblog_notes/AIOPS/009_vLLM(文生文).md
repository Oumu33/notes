# vLLM(文生文)

> 来源: AIOPS
> 创建时间: 2025-07-13T08:03:07+08:00
> 更新时间: 2026-01-11T09:44:00.643635+08:00
> 阅读量: 1396 | 点赞: 0

---

# 介绍
## 什么是 vLLM
vLLM（Virtual Large Language Model）是由加州大学伯克利分校团队开发的高性能大模型推理框架，其核心特点围绕显存优化、高吞吐量、灵活性和易用性展开。

对比 ollama 作为个人开发者部署模型工具而言，vLLM 专注于高并发请求和大规模生产环境，适用于企业级应用和需要高效推理的场景。vLLM 通过优化内存管理和并发处理，适合处理高负载的生产环境 ‌。

## 对比 Ollama
| 项目 | **vLLM** | **Ollama** |
| --- | --- | --- |
| 目标用户 | 企业、平台级服务、研究人员 | 开发者、本地用户、轻量部署 |
| 安装方式 | Python包 + 手动模型配置 | 一键安装，自动拉取模型 |
| 使用方式 | 编写代码/API集成，需自己处理模型下载 | CLI 或 REST API，一句命令即可运行模型 |
| 支持模型格式 | HuggingFace Transformers（原生模型） | GGUF / ggml（量化模型） |
| 支持模型类型 | ChatGPT类 LLM，如 LLaMA、Mistral、GPT 等 | 同上，但通常只支持 Ollama 格式模型 |
| 是否支持批量推理 | ✅（支持连续 batching，适合高并发） | ❌（主要是单个用户请求场景） |
| KV Cache 管理 | ✅ 高性能动态 KV Cache | ✅ 有缓存，但不如 vLLM 精细 |
| 推理性能 | 🚀 适合高吞吐量/高并发生产环境 | 🐢 通常只适合本地桌面交互使用 |
| 模型切换/管理 | 需自己配置路径/权重/Tokenizer 等 | 简单 `ollama run llama2` |
| 量化模型支持 | 主要支持 FP16/BF16（可选 INT4/8） | 主要使用 GGUF（Q4_K_M、Q8_0 等量化格式） |
| GPU 支持 | ✅ 多 GPU 支持良好 | ✅ 支持 GPU |
| 多语言/多模型支持 | ✅ 可跑多个模型实例，灵活配置 | ❌ 通常只能跑一个模型 |
| 支持流式输出 | ✅ 是设计目标之一 | ✅ 支持 |
| Web UI | ❌（需自己搭建） | ✅ 官方带 Web UI |


## 高性能优势
### **分页注意力机制**
核心创新：借鉴操作系统虚拟内存分页机制，将注意力计算中的**Key/Value 缓存（KV Cache）**划分为固定大小的“页”，动态分配显存，显著减少内存碎片化。

+ 传统问题：传统框架需为每个请求预分配连续显存空间，导致利用率低（仅 20%-40%）。
+ vLLM 解决方案：按需分配显存页，支持动态扩展，显存利用率提升至接近 100%。

例如，LLaMA-7B 模型显存占用可从 14GB 压缩至 4GB（使用 [INT4 量化](https://zhida.zhihu.com/search?content_id=258701331&content_type=Article&match_order=1&q=INT4+%E9%87%8F%E5%8C%96&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NTI2Mzg1MDYsInEiOiJJTlQ0IOmHj-WMliIsInpoaWRhX3NvdXJjZSI6ImVudGl0eSIsImNvbnRlbnRfaWQiOjI1ODcwMTMzMSwiY29udGVudF90eXBlIjoiQXJ0aWNsZSIsIm1hdGNoX29yZGVyIjoxLCJ6ZF90b2tlbiI6bnVsbH0.gztzw_p6ogwp2RM7JPHtE3nHaoH5XEcVWyfd9KExTjI&zhida_source=entity)）。 支持长上下文（如 128K 或 10M token）的高效处理，减少显存浪费。

### **连续批处理**
动态合并请求：实时合并多个推理请求，避免静态批处理的等待延迟，最大化 GPU 利用率。

吞吐量提升：

+ 相比 Hugging Face Transformers，吞吐量提升 24 倍（如 LLaMA-7B 模型）。
+ 在高并发场景下，吞吐量可达传统框架的 5-10 倍。

### **量化支持**
兼容主流量化方法：支持 GPTQ、AWQ、SqueezeLLM、FP8 KV Cache 等，显著降低显存占用和计算开销。

量化效果：

+ INT4 量化：将 7B 模型显存需求从 14GB 压缩至 4GB，同时保持精度损失<1%。
+ 适用于消费级显卡（如 RTX 4090）部署 7B-13B 模型。

### **高性能与分布式推理**
多 GPU 张量并行：支持分布式部署，例如在 4 块 A100 GPU 上运行 70B 参数模型。

CUDA 优化：使用 CUDA/HIP 图（CUDA Graphs）加速模型执行。 高性能 CUDA 内核优化，减少计算延迟。

## 易用性优势
### 易用性与兼容性
与 Hugging Face 无缝集成：支持 50+主流模型（如 LLaMA、Qwen、Mistral、XVERSE 等）。

OpenAI API 兼容：可直接替换 OpenAI 接口，提供标准 API 服务（如/v1/completions）。

灵活的部署选项：支持流式输出、前缀缓存、多 LoRA 适配及离线批量推理。

### **解码算法多样性**
并行采样（Parallel Sampling）：单次前向传播生成多个输出（如多种回答），降低计算成本。

波束搜索（Beam Search）：提升生成文本的准确性和多样性。

自定义解码策略：支持根据场景选择最优解码算法。

# 模型部署
## 部署环境准备
vLLM 是一个 Python 库，包含预编译的 C++ 和 CUDA二进制文件。

接下来使用 4 张 H100 80G 显卡并行跑 DeepSeek-R1 32B模型  

为方便部署使用，通过 docker 方案部署，需要对系统环境进行初始化配置，具体可参考文档：[https://www.cuiliangblog.cn/detail/section/189768582](https://www.cuiliangblog.cn/detail/section/189768582)

## 下载模型权重
我们可以提前下载模型权重到本地目录，启动时指定模型权重文件路径既可，避免启动过程中下载超时。

由于直接从huggingface 下载数据可能会出现超时情况，因此建议登录[https://modelscope.cn/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B](https://modelscope.cn/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B)国内站点，获取下载命令

```bash
# 安装modelscope下载工具
pipx install modelscope
# 下载deepseek模型权重到指定目录
modelscope download --model deepseek-ai/DeepSeek-R1-Distill-Qwen-32B --local_dir /mnt/afs/hf_models --max-workers=10

 _   .-')                _ .-') _     ('-.             .-')                              _ (`-.    ('-.
( '.( OO )_             ( (  OO) )  _(  OO)           ( OO ).                           ( (OO  ) _(  OO)
 ,--.   ,--.).-'),-----. \     .'_ (,------.,--.     (_)---\_)   .-----.  .-'),-----.  _.`     \(,------.
 |   `.'   |( OO'  .-.  ',`'--..._) |  .---'|  |.-') /    _ |   '  .--./ ( OO'  .-.  '(__...--'' |  .---'
 |         |/   |  | |  ||  |  \  ' |  |    |  | OO )\  :` `.   |  |('-. /   |  | |  | |  /  | | |  |
 |  |'.'|  |\_) |  |\|  ||  |   ' |(|  '--. |  |`-' | '..`''.) /_) |OO  )\_) |  |\|  | |  |_.' |(|  '--.
 |  |   |  |  \ |  | |  ||  |   / : |  .--'(|  '---.'.-._)   \ ||  |`-'|   \ |  | |  | |  .___.' |  .--'
 |  |   |  |   `'  '-'  '|  '--'  / |  `---.|      | \       /(_'  '--'\    `'  '-'  ' |  |      |  `---.
 `--'   `--'     `-----' `-------'  `------'`------'  `-----'    `-----'      `-----'  `--'      `------'

Downloading Model from https://www.modelscope.cn to directory: /mnt/afs/hf_models

Successfully Downloaded from model deepseek-ai/DeepSeek-R1-Distill-Qwen-32B.
```

除了使用魔塔外，也可以使用[https://hf-mirror.com/](https://hf-mirror.com/)镜像站下载模型权重。

```yaml
# 设置下载地址
export HF_ENDPOINT="https://hf-mirror.com"
# 安装huggingface-cli下载工具
pip3 install -U huggingface_hub
# 下载模型权重
# hf download \
  deepseek-ai/DeepSeek-R1-Distill-Qwen-32B \
  --local-dir /mnt/afs/hf_models/DeepSeek-R1-Distill-Qwen-32B 
```

## k8s<font style="color:rgb(41, 49, 61);">单机 TP 模式</font>部署
登录huggingface[https://huggingface.co/deepseek-ai/DeepSeek-R1](https://huggingface.co/deepseek-ai/DeepSeek-R1) 获取启动命令

![](https://via.placeholder.com/800x600?text=Image+91c1c46757acdc33)

按照提示参数，我们进行一些调整

```bash
docker run -d \
  -e CUDA_VISIBLE_DEVICES=0,1,2,3 \
  -e TORCH_CUDA_ARCH_LIST="8.0" \
  --gpus all \
  --name vllm-deepseek-r1 \
  -v /mnt/afs/hf_models:/models \
  -p 8000:8000 \
  --ipc=host \
  --shm-size=64g \
  swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/vllm/vllm-openai:v0.9.2 \
  --model /models \
  --tensor-parallel-size 4 \
  --dtype float16 \
  --max-model-len 128000 \
  --api-key my-secret-key
```

docker 参数项说明：

| 参数 | 说明 |
| --- | --- |
| `CUDA_VISIBLE_DEVICES=0,1,2,3` | 指定使用前 4 张显卡运行 |
| ` TORCH_CUDA_ARCH_LIST="8.0"` | 指定 A100 GPU 架构，避免默认编译所有架构   |
| `--gpus all` |  上述 4 张显卡全部分配进容器  |
| `-v /mnt/local-nvme/hf_models:/root/.cache/huggingface` | 将宿主机的 `/data/hf_models`<br/> 映射为容器内 HuggingFace 缓存目录，避免每次重新下载模型 |
| `-p 8000:8000` | 将容器内 API 端口 8000 映射到主机端口 8000 |
| `--ipc=host` | 使用主机的进程间通信机制（避免多进程模型死锁） |
| `--shm-size 64g` | 设置共享内存（shared memory）大小为 64GB，防止运行中出现 OOM 错误 |
| `vllm/vllm:latest` | 使用 vLLM 官方发布的最新镜像（含 Triton 推理优化） |


vllm 启动参数说明：

| 参数 | 说明 |
| --- | --- |
| `--model /models` | 指定模型权重文件路径 |
| `--tensor-parallel-size 4` | 启动 **4 张 GPU 的张量并行**，每张卡分担 1/4 的模型权重和计算 |
| `--dtype float16` | 使用半精度推理（FP16），显著减少显存占用，提高推理速度 |
| `--max-model-len 128000` | 设置上下文窗口为 128K tokens（DeepSeek-R1 支持超长上下文） |
| `--api-key my-secret-key` |  启用 API 密钥验证   |


查看 容器运行状态

```bash
docker ps                                                                                                                                                              
CONTAINER ID   IMAGE                                                                        COMMAND                  CREATED          STATUS          PORTS                    NAMES                            
63f381ea7223   swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/vllm/vllm-openai:v0.9.2   "python3 -m vllm.ent…"   20 seconds ago   Up 12 seconds   0.0.0.0:8000->8000/tcp   vllm-deepseek-r1
```

访问 8000 接口，查看模型信息

```bash
# curl http://localhost:8000/v1/models -H "Authorization: Bearer my-secret-key"
{"object":"list","data":[{"id":"/models","object":"model","created":1752587580,"owned_by":"vllm","root":"/models","parent":null,"max_model_len":128000,"permission":[{"id":"modelperm-e49e7eec185d4af0812fb3710beee4c4","object":"model_permission","created":1752587580,"allow_create_engine":false,"allow_sampling":true,"allow_logprobs":true,"allow_search_indices":false,"allow_view":true,"allow_fine_tuning":false,"organization":"*","group":null,"is_blocking":false}]}]}#  
```

## k8s <font style="color:rgb(41, 49, 61);">多机 TP 模式</font>部署
除了单机多卡外，vLLM 支持**多节点（multi-node）分布式部署**，尤其适合像你这种要部署 **DeepSeek-R1 这类大模型**，单机显存不够时非常有用，需要使用 ray+vllm 实现。接下来使用 k8s 演示使用 2 个节点，每个节点 2 张显卡部署 deepseek-r1。

资源清单内容如下：

```yaml
apiVersion: v1
kind: Service
metadata:
  name: vllm-headless
  labels:
    app: vllm
spec:
  clusterIP: None
  selector:
    app: vllm
  ports:
    - name: http
      port: 8000
      targetPort: 8000
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: vllm
spec:
  serviceName: vllm-headless
  replicas: 2  # 2 节点
  selector:
    matchLabels:
      app: vllm
  template:
    metadata:
      labels:
        app: vllm
    spec:
      restartPolicy: Always
      containers:
        - name: vllm
          image: swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/vllm/vllm-openai:v0.9.2
          ports:
            - containerPort: 8000
          env:
            - name: TORCH_CUDA_ARCH_LIST
              value: "8.0"
          command: ["python3"]
          args:
            - -m
            - vllm.entrypoints.openai.api_server
            - --model
            - /models
            - --tensor-parallel-size # 张量并行大小
            - "2"
            - --pipeline-parallel-size # 管道并行大小
            - "2"
            - --dtype
            - float16
            - --max-model-len
            - "128000"
            - --api-key
            - my-secret-key
          volumeMounts:
            - mountPath: /models
              name: model-volume
          resources:
            limits:
              nvidia.com/gpu: '2'  # 每节点 2 张 GPU
              cpu: '2'
              memory: 10Gi
      volumes:
        - name: model-volume
          hostPath:
            path: /mnt/afs/hf_models
            type: Directory

```

查看资源状态

```yaml
# kubectl get pod -o wide
NAME        READY   STATUS    RESTARTS   AGE     IP             NODE       NOMINATED NODE   READINESS GATES
vllm-0      1/1     Running   0          2m19s   10.240.0.40    real-334   <none>           <none>
vllm-1      1/1     Running   0          2m19s   10.240.0.41    real-335   <none>           <none>
# kubectl get svc              
NAME             TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
vllm-headless    ClusterIP   None             <none>        8000/TCP   2m19s
```

# 跟 vLLM 推理服务交互
## 通过 python 代码交互
服务器运行后，可以通过 python 代码调用其 API：

```plain
from openai import OpenAI

client = OpenAI(base_url='http://localhost:3000/v1', api_key='na')

# Use the following func to get the available models
# model_list = client.models.list()
# print(model_list)

chat_completion = client.chat.completions.create(
   model="deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
   messages=[
      {
            "role": "user",
            "content": "Tell me something about large language models."
      }
   ],
   stream=True,
)
for chunk in chat_completion:
   print(chunk.choices[0].delta.content or"", end="")
```

## 通过 cli 交互
```plain
curl -X POST "http://localhost:8000/v1/chat/completions" \
 -H "Content-Type: application/json" \
 --data '{
  "model": "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
  "messages": [
   {
    "role": "user",
    "content": "What is the capital of France?"
   }
  ]
 }
```




