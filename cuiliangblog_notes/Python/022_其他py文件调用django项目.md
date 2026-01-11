# 其他py文件调用django项目

> 来源: Python
> 创建时间: 2022-03-19T09:46:45+08:00
> 更新时间: 2026-01-11T09:25:31.387529+08:00
> 阅读量: 982 | 点赞: 0

---

```bash
import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "rice_field.settings")
django.setup()
from public.models import SensorHistory, Sensor
```

<font style="color:rgb(77, 77, 77);">将配置添加到pycharm中的python配置中</font>

![](https://via.placeholder.com/800x600?text=Image+0666eac6a00cfbf0)


