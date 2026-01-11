# 异常处理Exceptions

> 来源: Python
> 创建时间: 2021-03-20T23:02:44+08:00
> 更新时间: 2026-01-11T09:25:41.433698+08:00
> 阅读量: 587 | 点赞: 0

---

1. 定义自定义处理方法(booktest/my_exception.py)

```python
from rest_framework.views import exception_handler
from rest_framework.response import Response
from django.db import DatabaseError
def custom_exception_handler(exc, context):
    #1,调用系统方法,处理了APIException的异常,或者其子类异常
    response = exception_handler(exc, context)
    #2,判断response是否有值
    if response is not None:
        response.data['status_code'] = response.status_code
    else:
        if isinstance(exc, DatabaseError):
            response = Response("数据库大出血")
        else:
            response = Response("其他异常!")
    return response
```

2. 全局配置(settings.py)

```python
REST_FRAMEWORK = {
    ...
    'EXCEPTION_HANDLER': 'booktest.my_exception.custom_exception_handler'
}
```

3. 测试(views.py)

```python
class TestView(APIView):
    # throttle_scope = "uploads"
    def get(self,request):
        # raise DatabaseError("DatabaseError!!!")
        raise Exception("报错了!!!")
        # raise APIException("APIException!!!")
        # raise ValidationError("ValidationError!!!")
        return Response("testing....")
```

<font style="color:#C88FD0;"></font>




