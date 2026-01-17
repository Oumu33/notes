# API接口文档drf_yasg
## 安装drf_yasg
`pip install drf_yasg` 

## 项目使用drf_yasg
### 修改setting.py
```python
INSTALLED_APPS = [
    …………
    'drf_yasg'
]
```

### 修改根urls.py
```python
from django.urls import path, include
from django.contrib import admin
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Demo API",
        default_version='v1',
        description="Demo description",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('quickstart.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api-doc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
```

## 访问测试
![img_1344.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1344.png)




