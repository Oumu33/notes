# 其他py文件调用django项目

> 分类: Python > Django
> 更新时间: 2026-01-10T23:34:29.255821+08:00

---

```bash
import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "rice_field.settings")
django.setup()
from public.models import SensorHistory, Sensor
```

<font style="color:rgb(77, 77, 77);">将配置添加到pycharm中的python配置中</font>

![](../../images/img_4155.png)

