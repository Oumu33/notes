# Redis
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


