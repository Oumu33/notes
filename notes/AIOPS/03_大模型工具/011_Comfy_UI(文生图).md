# Comfy UI(文生图)
# 介绍
## Comfy UI 介绍
 ComfyUI 是一个基于 **Node 图形化工作流**的文生图（Text-to-Image）生成工具，主要用于控制和扩展 **Stable Diffusion 模型的推理过程**。它最大的特点是使用**模块化节点（Node）图形界面**构建生成流程，适合高级用户进行深度定制与自动化处理。  

## ComfyUI 核心特点  
| 特性 | 说明 |
| --- | --- |
| 节点式图形界面 | 像 Blender、Unreal Engine 的 Blueprint 一样，用节点搭建整个图像生成流程。 |
| 透明的执行流程 | 用户可以逐步查看模型加载、提示词编码、图像生成、后处理等每一步。 |
| 支持高度自定义 | 支持自定义模型、控制图像尺寸、分辨率、步数、种子、采样器等细节。 |
| 模块丰富 | 提供 Prompt 编码器、CLIP、VAE、ControlNet、LoRA、图像输入输出等丰富节点。 |
| 扩展性强 | 支持社区插件（如AnimateDiff、Depth Control、Upscaler、Inpainting等）。 |


## ComfyUI 桌面版介绍
ComfyUI 桌面版（Desktop） 是一个独立的安装版本，可以像常规软件一样进行安装，支持快捷安装自动配置 Python环境及依赖 ，支持导入已有的 ComfyUI 设置、模型、工作流和文件，可以快速从已有的ComfyUI 便携版迁移到桌面版

## 安装硬件要求
ComfyUI 桌面版(Windows)硬件要求：

+ NVIDIA 显卡

ComfyUI 桌面版（MacOs）硬件要求：

+ ComfyUI 桌面版（MacOS） 目前仅支持 Apple Silicon
+ Apple Silicon 是苹果公司开发的一系列基于 ARM 架构的自家处理器，用于替代之前的 Intel 处理器，并且被广泛应用于苹果的各类设备中。Apple Silicon 处理器的推出标志着苹果从使用第三方处理器转向自研芯片，旨在提高性能、优化能效并增强其设备的集成度。
+ 主要的 Apple Silicon 处理器系列：M1、M2、M3系列。

# ComfyUI 桌面版下载安装
## 准备工作
1. 安装 git。下载地址：[https://git-scm.com/downloads/win](https://git-scm.com/downloads/win)
2. 下载 Comfy UI。下载地址：[https://www.comfy.org/zh-cn/download](https://www.comfy.org/zh-cn/download)

## 桌面版安装步骤
### 开始安装
1. 双击下载到的安装包文件，首先将会执行一次自动安装，并在桌面生成一个ComfyUI 桌面版的快捷方式，并自动进入欢迎页面。

![](https://via.placeholder.com/800x600?text=Image+3e50a9a5bc27a48d)

### 开始使用
点击“开始使用”开始初始化步骤。直接点击“下一个”。

若要了解更多看下面选项的解释。

+ Nvidia :最佳选项，支持使用 pytorch 和 [CUDA](https://zhida.zhihu.com/search?content_id=255323151&content_type=Article&match_order=1&q=CUDA&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NTMxNzM0NDAsInEiOiJDVURBIiwiemhpZGFfc291cmNlIjoiZW50aXR5IiwiY29udGVudF9pZCI6MjU1MzIzMTUxLCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.JITb8kYi9tG_SFC9EG5B613MvlHlU8K0eTmlemb3nSE&zhida_source=entity)
+ Manual Configuration : 手动配置。你需要手动安装和配置 python 运行环境，专业人士用的，普通用户不要选，除非你对环境配置比较熟悉。
+ 启用 CPU 模式: 仅适用于开发人员和特殊情况，除非你确定你需要使用这个模式，否则不要选择。

![](https://via.placeholder.com/800x600?text=Image+b4e2601091a9235a)

### 选择安装目录
选择安装目录。选择完毕后点击“下一个”。

+ 这个安装目录会存放：Python 环境、Models 模型文件、Custom Nodes 自定义节点
+ ComfyUI 并非所有文件都安装在此目录下，部分文件默认会安装在 C 盘。

注意事项

+ 安装路径不要有中文文件夹，中文容易解析错误，部分功能会报错。
+ 选一个存储空间大的硬盘。最小15G剩余空间。这只是安装程序的空间。要想真正放开了用，最好硬盘剩余空间1T以上。后期的很多模型一个就几十G，如果硬盘空间小基本没办法安装几个模型。
+ 最好安装在固态硬盘上，固态硬盘传输速度快。模型很大如果传输速度慢，加载模型就会浪费很多时间。

![](https://via.placeholder.com/800x600?text=Image+644d28c38ef1a57f)

### 进行文件迁移
这一步主要针对之前已经安装过comfyUI整合包版本的使用者。如果你之前没有安装过comfyUI整合包版直接点击“下一个”

如果之前安装过comfyUI整合包版本，选择安装目录。

![](https://via.placeholder.com/800x600?text=Image+c77723caa56c4719)

### 桌面版设置
![](https://via.placeholder.com/800x600?text=Image+5f775277a88b34d8)

这一步是偏好设置，设置完毕后点击“安装”

+ 自动更新: 是否设置在 ComfyUI 更新可用时自动更新（建议打开）
+ 使用情况指标: 如果启用，我们将收集匿名的使用数据 用于帮助我们改进 ComfyUI（建议关闭）
+ 镜像设置: 这里是重点，很多人卡在这里。建议打开梯子安装，如果没有梯子需要手动指定国内源地址
+ 如果是绿色的对钩，直接点击“安装”。如果是红色的X,点击右侧的+，进行手动设置。

![](https://via.placeholder.com/800x600?text=Image+cc5d9962363bc4a3)

Python 安装镜像，使用以下地址：

+ https://python-standalone.org/mirror/astral-sh/python-build-standalone

PyPI 镜像地址使用以下地址之一

+ 阿里云：https://mirrors.aliyun.com/pypi/simple/
+ 腾讯云：https://mirrors.cloud.tencent.com/pypi/simple/
+ 中国科技大学：https://pypi.mirrors.ustc.edu.cn/simple/
+ 上海交通大学：https://pypi.sjtu.edu.cn/simple/

Torch 镜像使用以下地址

+ 阿里云: https://mirrors.aliyun.com/pytorch-wheels/cu121/

设置完毕后点击“安装”程序会自动进行环境的部署，时间较长，耐心等待部署完毕。

![](https://via.placeholder.com/800x600?text=Image+dad61ddb6535dac8)

部署完毕后自动打开操作页面，安装成功。

![](https://via.placeholder.com/800x600?text=Image+19599fcd8359fe6f)

# Comfy UI 配置
## 下载模型
点击工作流——>浏览模板——>Flux——>使用官方预设的第二个模板（Flux Kontext Dev）

![](https://via.placeholder.com/800x600?text=Image+f811effbbba2f261)

根据提示下载对应模型文件

![](https://via.placeholder.com/800x600?text=Image+67ef99801f025a0f)

## 安装提示词插件
好的提示词可以让我们生成更加符合我们要求的图片，我们可以使用 AI 模型帮助我们编写一段关于 Comfy UI 的英文提示词。

点击节点管理

![](https://via.placeholder.com/800x600?text=Image+3a01204d0d1c1a41)

搜索提示词小助手

![](https://via.placeholder.com/800x600?text=Image+f6ef90ac484cf800)

配置提示词 api key

![](https://via.placeholder.com/800x600?text=Image+37537c658dbb7f2d)

## 安装性能监控插件
<font style="color:rgb(60, 60, 67);">使用插件管理器安装，安装完成之后，重启 ComfyUI。</font>

![](https://via.placeholder.com/800x600?text=Image+f1c8a5e1d3795a73)

# Comfy UI 使用
## 模型下载
打开第三方工作流，可能会提示模型权重加载失败，此时就要手动下载安装模型。

![](https://via.placeholder.com/800x600?text=Image+aef394e0419f7b34)

打开 model manager 搜索模型

![](https://via.placeholder.com/800x600?text=Image+37fa0918dc4a2c7e)

因为 你用的是 `CheckpointLoaderSimple` 节点，所以要下载`checkpoints` 类型的模型  

![](https://via.placeholder.com/800x600?text=Image+118a9f9a0f81e6d6)

# 工作流配置
推荐使用 flux 进行文生图，具体可参考文档：[https://docs.comfy.org/zh-CN/tutorials/flux/flux-1-kontext-dev](https://docs.comfy.org/zh-CN/tutorials/flux/flux-1-kontext-dev)

## 新建工作流
点击工作流——>浏览模板——>Flux——>使用官方预设的第二个模板（Flux Kontext Dev）

![](https://via.placeholder.com/800x600?text=Image+95c0dbcdd83608f8)

## 人物修改
需要注意的是提示词必须为英文，可以先编写中文提示词，然后使用插件翻译。

### 局部替换
例如更换衣服颜色

![](https://via.placeholder.com/800x600?text=Image+21ec8d48b72673a8)

更换背景

![](https://via.placeholder.com/800x600?text=Image+2f6d2a837c8e968e)

### 修改元素
增加元素

![](https://via.placeholder.com/800x600?text=Image+87dd5efbaeca4e0b)

删除元素

![](https://via.placeholder.com/800x600?text=Image+8b3d88bf45ffa05e)

### 人物保持
让人物不变，改为在不同场景下做不同动作

![](https://via.placeholder.com/800x600?text=Image+c3c8a4bd39b1db55)

## 物品修改
提取物品信息

![](https://via.placeholder.com/800x600?text=Image+d9369ce199ccb2b7)

人物与物品组合

![](https://via.placeholder.com/800x600?text=Image+fa0846c6dd9d945f)

## 风格修改
修改人物为指定风格

![](https://via.placeholder.com/800x600?text=Image+9044403df33903dc)


