# jenkins参数化构建

> 来源: CI/CD
> 创建时间: 2023-07-12T20:49:32+08:00
> 更新时间: 2026-01-11T08:52:13.379473+08:00
> 阅读量: 1548 | 点赞: 0

---

项目构建的过程中，我们通常需要根据用户的输入的不同参数，触发不同的构建步骤，从而影响整个构建结果。这时我们可以使用参数化构建。

接下来以gitee项目不同的分支来部署不同的项目为例演示。

# 项目创建测试分支并推送至仓库
## main生产分支内容
## ![](https://via.placeholder.com/800x600?text=Image+e57c07ab9dd0ab0e)
## test测试分支内容
![](https://via.placeholder.com/800x600?text=Image+bef6ddb90f475ded)

# 修改jenkins配置
## 添加字符串类型参数
![](https://via.placeholder.com/800x600?text=Image+f40fb9b26a8e2da3)

## 修改pipeline
在拉取代码环节，使用${branch}引用变量

```bash
pipeline {
    agent any

    stages {
        stage('拉取代码') {
            steps {
                checkout scmGit(branches: [[name: '*/${branch}']], extensions: [], userRemoteConfigs: [[credentialsId: 'gitee-cuiliang0302', url: 'https://gitee.com/cuiliang0302/sprint_boot_demo.git']])
            }
        }
        stage('编译构建') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('部署运行') {
            steps {
                sh 'nohup java -jar target/SpringBootDemo-0.0.1-SNAPSHOT.jar &'
                sh 'sleep 60'
            }
        }
    }
}
```

# 构建测试
## 设定参数
点击立即构建，输入变量参数test。

![](https://via.placeholder.com/800x600?text=Image+e1ccb8f36e4131b6)

## 结果验证
访问springboot页面如下所示

![](https://via.placeholder.com/800x600?text=Image+6cb485c99e62af91)


