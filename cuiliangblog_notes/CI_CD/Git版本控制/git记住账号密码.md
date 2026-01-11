# git记住账号密码

> 分类: CI/CD > Git版本控制
> 更新时间: 2026-01-10T23:33:54.104519+08:00

---

# 记住账号密码
进入项目目录

`git config --global credential.helper store`

然后会生成一个本地文件用于记录用户名和密码，这个文件我们无需关心

再次git pull一下，会让输入用户名和密码。这次输入之后以后就不会每次输入了。

# 清除用户名和密码
运行一下命令缓存输入的用户名和密码

+ Windows主机

```bash
git config --global credential.helper wincred
```

+ mac

```bash
git config --global credential.helper osxkeychain
```

+ linux

```plain
git config --global credential.helper store
```



