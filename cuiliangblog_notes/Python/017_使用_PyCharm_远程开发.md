# 使用 PyCharm 远程开发
> 在 linux 主机上使用 vim 开发 Ansible 模块或插件，对于新手来说不是很方便。大多数人的工作环境都是基于 Windows 环境的，但是 Ansible 不能运行在 Windows 环境下，这个时候我们想使用 Windows 环境下的 PyCharm 工具时，只能通过远程连接的方式进行开发 playbook 或模块插件。
>



接下来，跟我一起来配置 PyCharm 工具，使其能够远程开发 Ansible 相关程序。

# 远程主机
OS: `cetnos 7.7 x64`

Python: `2.7.5`

Ansible: `2.9.6`

# 工作空间
新建一个工作目录，本次使用`D:\dev\ansible`目录

# 设置 Python Interpreter
使用 PyCharm 打开创建好的工作目录，选中项目，打开选项`Files`\=>`Settings`\=>`Project: ansible`\=>`Project Interpreter`

![](https://via.placeholder.com/800x600?text=Image+27dafb450cf5f829)

在`Project Interpreter` 右侧选择`Add`添加 

![](https://via.placeholder.com/800x600?text=Image+4422ba17f0b66f63)

选择 `SSH Interpreter` 进行设置远程主机的连接信息 

![](https://via.placeholder.com/800x600?text=Image+60207e3375ca302e)

输入连接信息后，还需填写认证信息。 

![](https://via.placeholder.com/800x600?text=Image+531b4a9ddb12d546)

认证通过后，就要设置远程主机的 `Python` 可执行路径和需要同步的目录 

> 本次使用的时工作目录和远程的`/etc/ansible`目录进行同步
>

![](https://via.placeholder.com/800x600?text=Image+bc37b3029184a9ab)

设置完成后，点击 **OK** 确认设置 

# 同步目录
我们工作空间此刻还是空的，需要与远程目录进行同步，将远程目录的数据下载到工作空间

选中项目，打开选项`Tools`\=>`Deployment`\=>`Download from root@192.168.77.130:22` ![](https://via.placeholder.com/800x600?text=Image+cd7ea3b6adef0ddc)

![](https://via.placeholder.com/800x600?text=Image+859afe6d5a8c4f4a)

等待一会，就同步完成了 

# 开发文件
![](https://via.placeholder.com/800x600?text=Image+4797d1b3420ff179)

这个时候，我们在`library`目录中创建一个`remote_copy.py` 文件 

可以发现，我们在 Windows 上也能 import ansible 相关信息了。

![](https://via.placeholder.com/800x600?text=Image+b2fcd711e500f78f)  
pycharm 会在后台起一个进程来监控工作空间的变动，如有变动将会同步到远程主机目录

点击左下角的`Python Console` 可以进入远程主机的 python 解释器中 ![](https://via.placeholder.com/800x600?text=Image+5d08501bf07dde5b)

# 执行命令
在我们需要运行 ansible 模块或插件时，我们可以远程连接到主机上进行操作 ansible 命令运行 playbook

![](https://via.placeholder.com/800x600?text=Image+ff252a63333356df)

打开选项`Tools`\=>`Start SSH session...`, 选择 192.168.77.130 主机 

连接成功后，就可以在`Terminal`界面操作 ansible 命令了

![](https://via.placeholder.com/800x600?text=Image+1cb6684c255bb05b)


