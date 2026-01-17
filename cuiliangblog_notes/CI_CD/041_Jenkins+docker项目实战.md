# Jenkins+docker项目实战

> 来源: CI/CD
> 创建时间: 2024-05-14T16:55:38+08:00
> 更新时间: 2026-01-12T14:23:28.712660+08:00
> 阅读量: 2421 | 点赞: 0

---

# 准备工作
## 服务器列表
| 服务器名称 | 主机名 | IP | 部署服务 |
| --- | --- | --- | --- |
| 代码托管服务器 | gitlab | 192.168.10.72 | Gitlab |
| 持续集成服务器 | jenkins | 192.168.10.73 | Jenkins、Maven、Docker |
| 代码审查服务器 | sonarqube | 192.168.10.71 | SonarQube |
| 镜像仓库服务器 | harbor | 192.168.10.100 | Docker、harbor |
| 服务部署服务器 | springboot | 192.168.10.74 | Docker |


## 服务部署(rpm方式)
gitlab部署

参考文档：[https://www.cuiliangblog.cn/detail/section/92727905](https://www.cuiliangblog.cn/detail/section/92727905)

jenkins部署

参考文档：[https://www.cuiliangblog.cn/detail/section/15130009](https://www.cuiliangblog.cn/detail/section/15130009)

docker部署

参考文档：[https://www.cuiliangblog.cn/detail/section/26447182](https://www.cuiliangblog.cn/detail/section/26447182)

harbor部署

参考文档：[https://www.cuiliangblog.cn/detail/section/15189547](https://www.cuiliangblog.cn/detail/section/15189547)

SonarQube部署

参考文档：[https://www.cuiliangblog.cn/detail/section/131467837](https://www.cuiliangblog.cn/detail/section/131467837)

# harbor项目权限配置
## 创建项目
Harbor的项目分为公开和私有的:  
公开项目:所有用户都可以访问，通常存放公共的镜像，默认有一个library公开项目。  
私有项目:只有授权用户才可以访问，通常存放项目本身的镜像。 我们可以为微服务项目创建一个新的项目  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713450576001-00d81474-d0d3-45c5-bb5a-36e6b3abd867.png#averageHue=%237d7d7d&clientId=u78aaef0c-714d-4&from=paste&height=814&id=uc198b63a&originHeight=814&originWidth=1176&originalType=binary&ratio=1&rotation=0&showTitle=false&size=80355&status=done&style=none&taskId=u680d0615-53fc-4ad7-b4eb-36d7ebc8982&title=&width=1176)

## 创建用户
创建一个普通用户cuiliang。  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713450639192-d53761e4-9551-4760-8ac0-32563e7a0d98.png#averageHue=%23848484&clientId=u78aaef0c-714d-4&from=paste&height=829&id=u5bb7ca1c&originHeight=829&originWidth=1171&originalType=binary&ratio=1&rotation=0&showTitle=false&size=68022&status=done&style=none&taskId=u1af0b440-06ea-4ab7-b963-1ab3e125e6c&title=&width=1171)

## 配置项目用户权限
在spring_boot_demo项目中添加普通用户cuiliang，并设置角色为开发者。  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713450700161-72988a92-4760-460c-8bc4-2c94a54c9eb8.png#averageHue=%237b7b7b&clientId=u78aaef0c-714d-4&from=paste&height=795&id=uc3d73123&originHeight=795&originWidth=1175&originalType=binary&ratio=1&rotation=0&showTitle=false&size=89004&status=done&style=none&taskId=ubaa5e8a8-6314-484d-a480-1090723a88c&title=&width=1175)  
权限说明

| 角色 | 权限 |
| --- | --- |
| 访客 | 对项目有只读权限 |
| 开发人员 | 对项目有读写权限 |
| 维护人员 | 对项目有读写权限、创建webhook权限 |
| 项目管理员 | 出上述外，还有用户管理等权限 |


## 上传下载镜像测试
可参考文章[https://www.cuiliangblog.cn/detail/section/15189547](https://www.cuiliangblog.cn/detail/section/15189547)，此处不再赘述。

# gitlab项目权限配置
具体gitlab权限配置参考文档：[https://www.cuiliangblog.cn/detail/section/131513569](https://www.cuiliangblog.cn/detail/section/131513569)  
创建开发组develop，用户cuiliang，项目spring boot demo

## 创建组
管理员用户登录，创建群组，组名称为devops，组权限为私有

![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1718764833183-249ea21e-45ad-412a-9d70-66ee5b47b1ad.png)

## 创建项目
导入外部项目，地址为[https://gitee.com/cuiliang0302/spring_boot_demo.git](https://gitee.com/cuiliang0302/spring_boot_demo.git)，并指定devops，项目类型为私有。

![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1718764935565-6fff7323-b236-4857-95e1-056b532f63a9.png)

## 创建用户
创建一个普通用户cuiliang  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713491244121-535b56ef-f11d-4231-a9c7-b3acf1ee8980.png#averageHue=%23ebcc9f&clientId=uf408dce8-3bd6-4&from=paste&height=975&id=u9HkQ&originHeight=975&originWidth=1142&originalType=binary&ratio=1&rotation=0&showTitle=false&size=80730&status=done&style=none&taskId=uad8519bc-31ca-451e-8a6a-266867559f8&title=&width=1142)

## 用户添加到组中
将cuiliang添加到群组devops中，cuiliang角色为Developer

![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1718765097936-cc845d32-e417-407a-aed6-2ac562dfb12c.png)

## 开启分支推送权限
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713492747131-f9c230c1-8512-4ee2-a2e8-8101cc0092e5.png#averageHue=%23fbf0d9&clientId=uc57bc442-c756-4&from=paste&height=1023&id=NJrt6&originHeight=1023&originWidth=1632&originalType=binary&ratio=1&rotation=0&showTitle=false&size=146446&status=done&style=none&taskId=u315e9d11-5a71-4441-b60f-c92e4618c3a&title=&width=1632)

# jenkins流水线配置
## 拉取gitlab仓库代码
具体步骤可参考文档：[https://www.cuiliangblog.cn/detail/section/127410630](https://www.cuiliangblog.cn/detail/section/127410630)，此处以账号密码验证为例，并启用webhook配置。  
jenkins流水线配置如下  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713879716636-73836bff-15b5-4b9e-8964-80458011b919.png#averageHue=%23fefefe&clientId=ue8719f30-2a49-4&from=paste&height=1114&id=udb524a98&originHeight=1114&originWidth=1517&originalType=binary&ratio=1&rotation=0&showTitle=false&size=75562&status=done&style=none&taskId=u9857edc3-d29b-4c77-9a04-c66497079ba&title=&width=1517)  
拉取代码部分的jenkinsfile如下

```groovy
pipeline {
    agent any
    stages {
        stage('拉取代码') {
            environment {
                // gitlab仓库信息
                GITLAB_CRED = "gitlab-cuiliang-password"
                GITLAB_URL = "http://192.168.10.72/devops/spring_boot_demo.git"
            }
            steps {
                echo '开始拉取代码'
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: "${GITLAB_CRED}", url: "${GITLAB_URL}"]])
                echo '拉取代码完成'
            }
        }
    }
}
```

当git仓库提交代码后，Gitlab会自动请求Jenkins的webhook地址，自动触发流水线，执行结果如下：  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713879758227-09dcf91f-2f79-4e2a-8ac2-2d3e79dba579.png#averageHue=%23e5e5e4&clientId=ue8719f30-2a49-4&from=paste&height=680&id=LsPpf&originHeight=680&originWidth=884&originalType=binary&ratio=1&rotation=0&showTitle=false&size=65988&status=done&style=none&taskId=u8d99dea4-bf7f-4019-bd86-a50c56052ab&title=&width=884)

## Maven打包编译
具体步骤可参考文档：[https://www.cuiliangblog.cn/detail/section/131898197](https://www.cuiliangblog.cn/detail/section/131898197)  
打包编译部分的jenkinsfile如下

```groovy
pipeline {
    agent any
    stages {
        stage('拉取代码') {
            ……
        }

        stage('打包编译') {
            steps {
                echo '开始打包编译'
                sh 'mvn clean package'
                echo '打包编译完成'
            }
        }
    }
}
```

触发流水线结果如下  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713881693245-522ce4e2-e5f4-4232-9e2b-1a57aeb949cb.png#averageHue=%23fbfafa&clientId=ue8719f30-2a49-4&from=paste&height=627&id=u971f6a89&originHeight=627&originWidth=1009&originalType=binary&ratio=1&rotation=0&showTitle=false&size=61501&status=done&style=none&taskId=u50b971ee-2967-4b82-ba5b-aa1a3b1866c&title=&width=1009)

## SonarQube代码审查
具体步骤可参考文档：[https://www.cuiliangblog.cn/detail/section/165534414](https://www.cuiliangblog.cn/detail/section/165534414)  
代码审查阶段的jenkinsfile如下

```groovy
pipeline {
    agent any
    stages {
        stage('拉取代码') {
            ……
        }

        stage('打包编译') {
            ……
        }

        stage('代码审查') {
            environment {
                // SonarQube信息
                SONARQUBE_SCANNER = "SonarQubeScanner"
                SONARQUBE_SERVER = "SonarQubeServer"
            }
            steps{
                echo '开始代码审查'
                script {
                    def scannerHome = tool "${SONARQUBE_SCANNER}"
                    withSonarQubeEnv("${SONARQUBE_SERVER}") {
                        sh "${scannerHome}/bin/sonar-scanner -Dproject.settings=cicd/sonar-project.properties"
                    }
                }
                echo '代码审查完成'
            }
        }
    }
}
```

触发流水线结果如下  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713881925428-34c182e6-c7be-43e7-ad1c-a2675f3f6c48.png#averageHue=%23e4e4e3&clientId=ue8719f30-2a49-4&from=paste&height=759&id=ub2bea565&originHeight=759&originWidth=1132&originalType=binary&ratio=1&rotation=0&showTitle=false&size=74227&status=done&style=none&taskId=ue46ada22-9856-4b1c-89ed-0d62cfdac3b&title=&width=1132)  
代码审查结果如下  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713881899977-4937a6d8-d856-4094-867b-2ba1984db80b.png#averageHue=%23dadada&clientId=ue8719f30-2a49-4&from=paste&height=338&id=u41f78ec9&originHeight=338&originWidth=1499&originalType=binary&ratio=1&rotation=0&showTitle=false&size=37425&status=done&style=none&taskId=ud7a6fd3e-54d7-498b-a589-f1420b0bb76&title=&width=1499)

## 构建并推送镜像至仓库
具体步骤可参考文档：[https://www.cuiliangblog.cn/detail/section/166573065](https://www.cuiliangblog.cn/detail/section/166573065)  
构建并推送镜像的jenkinsfile如下

```groovy
pipeline {
    agent any
    stages {
        stage('拉取代码') {
            ……
        }

        stage('打包编译') {
            ……
        }

        stage('代码审查') {
            ……
        }

        stage('构建镜像') {
            environment {
                // harbor仓库信息
                HARBOR_URL = "harbor.local.com"
                HARBOR_PROJECT = "devops"
                // 镜像名称
                IMAGE_TAG = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
            }
            steps {
                echo '开始构建镜像'
                script {
                    IMAGE_NAME = "${HARBOR_URL}/${HARBOR_PROJECT}/${IMAGE_APP}:${IMAGE_TAG}"
                    docker.build "${IMAGE_NAME}", "-f cicd/Dockerfile ."
                }
                echo '构建镜像完成'
                echo '开始推送镜像'
                script {
                    docker.withRegistry("https://${HARBOR_URL}", "${HARBOR_CRED}") {
                        docker.image("${IMAGE_NAME}").push()
                    }
                }
                echo '推送镜像完成'
                echo '开始删除镜像'
                script {
                    sh "docker rmi -f ${IMAGE_NAME}"
                }
                echo '删除镜像完成'
            }
        }
    }
}
```

触发流水线结果如下  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713882812879-77746b75-282e-42e7-8fcf-440f7c2f574e.png#averageHue=%23e0dfdf&clientId=ue8719f30-2a49-4&from=paste&height=589&id=u484562c1&originHeight=589&originWidth=1263&originalType=binary&ratio=1&rotation=0&showTitle=false&size=78162&status=done&style=none&taskId=uf19895af-1adb-4217-9c2c-c88eff24e38&title=&width=1263)  
查看harbor镜像仓库，已上传镜像  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713882852925-5dd1c00b-7553-448c-82b7-d5a479b7507e.png#averageHue=%231a2c36&clientId=ue8719f30-2a49-4&from=paste&height=606&id=u6da0a9d0&originHeight=606&originWidth=1708&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71224&status=done&style=none&taskId=u3a0c22db-049f-4d1c-957f-9513cfe6612&title=&width=1708)

## docker运行服务
远程执行命令具体内容可参考文档：[https://www.cuiliangblog.cn/detail/section/166296541](https://www.cuiliangblog.cn/detail/section/166296541)  
部署运行阶段的jenkinsfile如下

```groovy
pipeline {
    agent any
    environment {
        // 全局变量
        HARBOR_CRED = "harbor-cuiliang-password"
        IMAGE_NAME = ""
        IMAGE_APP = "demo"
    } 
    stages {
        stage('拉取代码') {
            ……
        }

        stage('打包编译') {
            ……
        }

        stage('代码审查') {
            ……
        }

        stage('构建镜像') {
            ……
        }
        stage('项目部署') {
            environment {
                // 目标主机信息
                HOST_NAME = "springboot1"
            }
            steps {
                echo '开始部署项目'
                // 获取harbor账号密码
                withCredentials([usernamePassword(credentialsId: "${HARBOR_CRED}", passwordVariable: 'HARBOR_PASSWORD', usernameVariable: 'HARBOR_USERNAME')]) {
                    // 执行远程命令
                    sshPublisher(publishers: [sshPublisherDesc(configName: "${HOST_NAME}", transfers: [sshTransfer(
                        cleanRemote: false, excludes: '', execCommand: "sh -x /opt/jenkins/springboot/deployment-docker.sh ${HARBOR_USERNAME} ${HARBOR_PASSWORD} ${IMAGE_NAME} ${IMAGE_APP}",
                        execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/opt/jenkins/springboot',
                        remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'cicd/deployment-docker.sh')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false
                    )])
                }
                echo '部署项目完成'
            }
        }
    }
}
```

触发流水线后运行结果如下  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713927156770-48181359-1411-4ed0-b8e8-529c78a1e8ba.png#averageHue=%23e1e1e0&clientId=uf89d0b0e-04d9-4&from=paste&height=586&id=u85a69165&originHeight=586&originWidth=1389&originalType=binary&ratio=1&rotation=0&showTitle=false&size=96939&status=done&style=none&taskId=ue9cd2c5a-eb80-4b35-9ffe-eede94eaf40&title=&width=1389)  
登录springboot服务器验证

```groovy
[root@springboot ~]# docker ps
CONTAINER ID   IMAGE                                            COMMAND                CREATED              STATUS                          PORTS                                       NAMES
e80896487125   harbor.local.com/spring_boot_demo/demo:8880a30   "java -jar /app.jar"   About a minute ago   Up About a minute (unhealthy)   0.0.0.0:8888->8888/tcp, :::8888->8888/tcp   demo
[root@springboot ~]# curl 127.0.0.1:8888/
<h1>Hello SpringBoot</h1><p>Version:v2 Env:test</p>[root@springboot1 ~]# 
[root@springboot ~]# ls /opt/jenkins/springboot/
deployment.sh  Dockerfile  email.html  Jenkinsfile  LICENSE  mvnw  mvnw.cmd  pom.xml  readme.md  sonar-project.properties  src  target  test
```

## 添加邮件通知推送
发送邮件配置具体内容可参考文档：[https://www.cuiliangblog.cn/detail/section/133029974](https://www.cuiliangblog.cn/detail/section/133029974)  
在项目根路径下新增email.html文件，内容如下

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${ENV, var="JOB_NAME"}-第${BUILD_NUMBER}次构建日志</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 1000px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      .container h2 {
        text-align: center;
      }
      .logo img {
        max-width: 150px;
        height: auto;
      }
      .content {
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 5px;
      }
      .footer {
        margin-top: 20px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="content">
        <h2>Jenkins ${PROJECT_NAME}项目构建结果</h2>
        <p>尊敬的用户：</p>
        <p>${PROJECT_NAME}项目构建结果为<span style="color:red;font-weight: bold;">${BUILD_STATUS}</span>，以下是详细信息：</p>
        <h4>构建信息</h4>
        <hr/>
        <ul>
          <li>项目名称：${PROJECT_NAME}</li>
          <li>构建编号：第${BUILD_NUMBER}次构建</li>
          <li>触发原因：${CAUSE}</li>
          <li>构建状态：${BUILD_STATUS}</li>
          <li>构建日志：<a href="${BUILD_URL}console">${BUILD_URL}console</a></li>
          <li>构建Url：<a href="${BUILD_URL}">${BUILD_URL}</a></li>
          <li>工作目录：<a href="${PROJECT_URL}ws">${PROJECT_URL}ws</a></li>
          <li>项目Url：<a href="${PROJECT_URL}">${PROJECT_URL}</a></li>
        </ul>
        <h4>失败用例</h4>
        <hr/>
        <p>$FAILED_TESTS</p>
        <h4>最近提交</h4>
        <hr/>
        <ul>
          ${CHANGES_SINCE_LAST_SUCCESS, reverse=true, format="%c", changesFormat="<li>%d [%a] %m</li>"}
        </ul>
        <h4>提交详情</h4>
        <hr/>
        <p><a href="${PROJECT_URL}changes">${PROJECT_URL}changes</a></p>
        <p style="margin-top:50px">如有任何疑问或需要帮助，请随时联系我们。</p>
      </div>
      <div class="footer">
        <p>此为系统自动发送邮件，请勿回复。</p>
      </div>
    </div>
  </body>
</html>
```

完整的jenkinsfile如下

```groovy
pipeline {
    agent any
    environment {
        // 全局变量
        HARBOR_CRED = "harbor-cuiliang-password"
        IMAGE_NAME = ""
        IMAGE_APP = "demo"
    } 
    stages {
        stage('拉取代码') {
            environment {
                // gitlab仓库信息
                GITLAB_CRED = "gitlab-cuiliang-password"
                GITLAB_URL = "http://192.168.10.72/devops/spring_boot_demo.git"
            }
            steps {
                echo '开始拉取代码'
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: "${GITLAB_CRED}", url: "${GITLAB_URL}"]])
                echo '拉取代码完成'
            }
        }
        stage('打包编译') {
            steps {
                echo '开始打包编译'
                sh 'mvn clean package'
                echo '打包编译完成'
            }
        }
        stage('代码审查') {
            environment {
                // SonarQube信息
                SONARQUBE_SCANNER = "SonarQubeScanner"
                SONARQUBE_SERVER = "SonarQubeServer"
            }
            steps{
                echo '开始代码审查'
                script {
                    def scannerHome = tool "${SONARQUBE_SCANNER}"
                    withSonarQubeEnv("${SONARQUBE_SERVER}") {
                        sh "${scannerHome}/bin/sonar-scanner -Dproject.settings=cicd/sonar-project.properties"
                    }
                }
                echo '代码审查完成'
            }
        }
        stage('构建镜像') {
            environment {
                // harbor仓库信息
                HARBOR_URL = "harbor.local.com"
                HARBOR_PROJECT = "devops"
                // 镜像名称
                IMAGE_TAG = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
            }
            steps {
                echo '开始构建镜像'
                script {
                    IMAGE_NAME = "${HARBOR_URL}/${HARBOR_PROJECT}/${IMAGE_APP}:${IMAGE_TAG}"
                    docker.build "${IMAGE_NAME}", "-f cicd/Dockerfile ."
                }
                echo '构建镜像完成'
                echo '开始推送镜像'
                script {
                    docker.withRegistry("https://${HARBOR_URL}", "${HARBOR_CRED}") {
                        docker.image("${IMAGE_NAME}").push()
                    }
                }
                echo '推送镜像完成'
                echo '开始删除镜像'
                script {
                    sh "docker rmi -f ${IMAGE_NAME}"
                }
                echo '删除镜像完成'
            }
        }
        stage('项目部署') {
            environment {
                // 目标主机信息
                HOST_NAME = "springboot1"
            }
            steps {
                echo '开始部署项目'
                // 获取harbor账号密码
                withCredentials([usernamePassword(credentialsId: "${HARBOR_CRED}", passwordVariable: 'HARBOR_PASSWORD', usernameVariable: 'HARBOR_USERNAME')]) {
                    // 执行远程命令
                    sshPublisher(publishers: [sshPublisherDesc(configName: "${HOST_NAME}", transfers: [sshTransfer(
                        cleanRemote: false, excludes: '', execCommand: "sh -x /opt/jenkins/springboot/deployment-docker.sh ${HARBOR_USERNAME} ${HARBOR_PASSWORD} ${IMAGE_NAME} ${IMAGE_APP}",
                        execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/opt/jenkins/springboot',
                        remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'cicd/deployment-docker.sh')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false
                    )])
                }
                echo '部署项目完成'
            }
        }
    }
    post {
        always {
            echo '开始发送邮件通知'
            // 构建后发送邮件
            emailext(
                subject: '构建通知：${PROJECT_NAME} - Build # ${BUILD_NUMBER} - ${BUILD_STATUS}!',
                body: '${FILE,path="email.html"}',
                to: 'cuiliang0302@qq.com'
            )
            echo '邮件通知发送完成'
        }
    }
}
```

触发流水线后运行结果如下  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713927297169-7efcdff6-3bb6-4d69-815e-853290dd86db.png#averageHue=%23e2e2e2&clientId=uf89d0b0e-04d9-4&from=paste&height=587&id=u92d31597&originHeight=587&originWidth=1523&originalType=binary&ratio=1&rotation=0&showTitle=false&size=98213&status=done&style=none&taskId=ub070dd20-1224-4185-990d-4d6988b8330&title=&width=1523)  
邮件通知内容如下  
![](https://cdn.nlark.com/yuque/0/2024/png/2308212/1713925186157-66a1610a-ccd0-493a-883e-e70ed1d15d48.png#averageHue=%23f6f6f6&clientId=u828434fe-67b4-4&from=paste&height=1151&id=uc26c6410&originHeight=1151&originWidth=1240&originalType=binary&ratio=1&rotation=0&showTitle=false&size=136552&status=done&style=none&taskId=u8476dcce-4cd8-415f-ba5f-f0e6391dba5&title=&width=1240)  
至此，整个CICD流程完成。


