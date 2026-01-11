# 认证Authentication

> 来源: Python
> 创建时间: 2021-03-20T21:46:59+08:00
> 更新时间: 2026-01-11T09:25:40.640492+08:00
> 阅读量: 640 | 点赞: 0

---

1. 可以在配置文件中配置全局默认的认证方案（常用）

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.BasicAuthentication',   # 基本认证
        'rest_framework.authentication.SessionAuthentication',  # session认证
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',  # POST请求的Token验证
    )
}
```

2. 也可以在每个视图中通过设置authentication_classess属性来设置

```python
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.views import APIView
class ExampleView(APIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    ...
```

3. 认证失败会有两种可能的返回值：
+ 401 Unauthorized 未认证
+ 403 Permission Denied 权限被禁止
4. 在apache的httpd.conf中加入一行配置，传递uwsgi的认证信息

```plain
WSGIPassAuthorization On
```




