# Django日志
## 1. 新建log配置文件
```python
import os.path
from pathlib import Path
from loguru import logger

LOG_DIR = os.path.join(Path(__file__).resolve().parent.parent.parent, 'logs')
info_log = os.path.join(LOG_DIR, "info.log")
error_log = os.path.join(LOG_DIR, "error.log")
# logger配置
config = {
    "rotation": "00:00",  # 每天0点生成新文件
    "encoding": "utf-8",
    "retention": "7 days",
    "backtrace": True,  # 异常回溯
    "diagnose": True
}
logger.add(info_log, level='INFO', **config)
logger.add(error_log, level='ERROR', **config)
```

+ 然后在setting中引入设置
+ `<font style="color:#cc7832;">from </font>grafanaTools.settings.log <font style="color:#cc7832;">import *</font>`

## 2. view视图调用日志
```python
from loguru import logger
logger.info('验证码：{}'.format(send.code))
logger.error("异常DataSource：".format(data))
```




