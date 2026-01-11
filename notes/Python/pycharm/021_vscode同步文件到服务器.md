# vscode同步文件到服务器
# 安装插件
![](https://via.placeholder.com/800x600?text=Image+afd2020c679e7e20)

# 配置同步
打开命令面板，搜索配置项

![](https://via.placeholder.com/800x600?text=Image+ceb4f20e3aff6581)

修改sftp配置文件

```json
{
    "name": "XXX服务器",
    "host": "XXXXXX",
    "protocol": "sftp",
    "port": XXX,
    "username": "root",
    "password": "XXX",
    "privateKeyPath": "C:/Users/cuiliang/.ssh/id_rsa", // 密码和密钥二选一
    "remotePath": "/root/rsync",
    "uploadOnSave": true,
    "useTempFile": false,
    "openSsh": false,
    "ignore": [
        ".vscode",
        ".git",
        ".DS_Store"
    ],
    "watcher": {
        "files": "**/*",
        "autoUpload": true,
        "autoDelete": true
    }
}

```

打开命令面板，连接服务器

![](https://via.placeholder.com/800x600?text=Image+beec01be0b7e0134)


