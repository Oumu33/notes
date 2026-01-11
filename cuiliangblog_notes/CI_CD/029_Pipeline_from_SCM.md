# Pipeline from SCM

> 来源: CI/CD
> 创建时间: 2023-07-05T22:57:16+08:00
> 更新时间: 2026-01-11T08:52:01.847965+08:00
> 阅读量: 1694 | 点赞: 0

---

前面的示例中都是直接在jenkins中编写Pipeline代码，后续随着项目的增多，不便维护。在实际生产环境中，通常会把Pipeline脚本放在项目代码中一起进行版本控制

# 项目更改
## 新增jenkinsfile文件
在项目的根目录，建立Jenkinsfile文件，内容如下

![](https://via.placeholder.com/800x600?text=Image+09119dd5fe2bb4d4)

```bash
pipeline {
    agent any

    stages {
        stage('拉取代码') {
            steps {
                echo '拉取代码'
            }
        }
        stage('编译构建') {
            steps {
                echo '编译构建'
            }
        }
        stage('项目部署') {
            steps {
                echo '项目部署'
            }
        }
    }
}
```

# jenkins配置
## 修改流水线任务配置
修改流水线定义，改为pipeline script from SCM，现在仓库地址并选择认证方式。

![](https://via.placeholder.com/800x600?text=Image+f313465cfc8f495d)

指定脚本路径为默认项目根目录下的Jenkinsfile

![](https://via.placeholder.com/800x600?text=Image+df18dac52bff664e)

## 构建测试
保存任务后，点击立即构建，此时构建状态试图如下所示，第一步变成了Checkout SCM

![](https://via.placeholder.com/800x600?text=Image+87321e41f29ed92b)


