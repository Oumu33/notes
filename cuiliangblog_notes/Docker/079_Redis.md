# Redis

> 来源: Docker
> 创建时间: 2022-11-01T10:28:38+08:00
> 更新时间: 2026-01-11T09:30:19.949748+08:00
> 阅读量: 720 | 点赞: 0

---

# 拉取镜像
```dockerfile
[root@aliyun docker]# docker pull redis
```

# 运行容器
```bash
[root@aliyun docker]# docker run --name redis -p 6379:6379 -d --restart=always redis --requirepass 123.com
```

# 访问验证
```bash
[root@aliyun docker]# docker exec -it redis redis-cli
127.0.0.1:6379> auth 123.com
OK
```


