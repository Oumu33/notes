# logging

> 来源: Python
> 创建时间: 2021-04-24T18:04:06+08:00
> 更新时间: 2026-01-11T09:25:10.525865+08:00
> 阅读量: 919 | 点赞: 0

---

## python程序使用logging
### 创建一个logSetting.py文件，存放日志配置
```python
import logging
from logging import handlers
import os


def make_dir(make_dir_path):
    """如果文件夹不存在就创建"""
    path = make_dir_path.strip()
    if not os.path.exists(path):
        os.makedirs(path)
    return path


level_relations = {
        'debug': logging.DEBUG,
        'info': logging.INFO,
        'warning': logging.WARNING,
        'error': logging.ERROR,
        'crit': logging.CRITICAL
    }
# log文件名
log_name = 'mdist.log'
log = logging.getLogger(log_name)
format_str = logging.Formatter('%(asctime)s - %(pathname)s - [line:%(lineno)d] - %(levelname)s : %(message)s')
# 控制台显示等级
log.setLevel(level_relations.get("info"))
sh = logging.StreamHandler()
sh.setFormatter(format_str)
log_file_folder = os.path.abspath(os.path.join(os.path.dirname(__file__))) + os.sep + "../logs" + os.sep
make_dir(log_file_folder)
log_file_str = log_file_folder + os.sep + log_name
th = handlers.TimedRotatingFileHandler(filename=log_file_str, when='H', encoding='utf-8')
th.setFormatter(format_str)
# 控制台日志打印
# log.addHandler(sh)
log.addHandler(th)

# if __name__ == '__main__':
#     log.debug('debug')
#     log.info('info')
#     log.warning('警告')
#     log.error('报错')
#     log.critical('严重')
```

### main程序中使用日志
```python
from conf.logSetting import log
# 写入数据
def writeData(operator, siteTo, processResult):
		…………
        print("写入站点:%s\t写入索引:%s\t写入语句:%s" % (site, index_name, query))
        log.info("写入站点:%s\t写入索引:%s\t写入语句:%s" % (site, index_name, query))
```




