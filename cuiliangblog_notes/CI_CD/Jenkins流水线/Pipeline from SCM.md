# Pipeline from SCM
前面的示例中都是直接在jenkins中编写Pipeline代码，后续随着项目的增多，不便维护。在实际生产环境中，通常会把Pipeline脚本放在项目代码中一起进行版本控制

# 项目更改
## 新增jenkinsfile文件
在项目的根目录，建立Jenkinsfile文件，内容如下

![](../../images/img_627.png)

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

![](../../images/img_628.png)

指定脚本路径为默认项目根目录下的Jenkinsfile

![](../../images/img_629.png)

## 构建测试
保存任务后，点击立即构建，此时构建状态试图如下所示，第一步变成了Checkout SCM

![](../../images/img_630.png)

