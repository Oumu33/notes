# jenkins与SonarQube连接
# <font style="color:rgb(77, 77, 77);">jenkins安装插件</font>
## **<font style="color:rgb(77, 77, 77);">下载SonarQube插件</font>**
<font style="color:rgb(77, 77, 77);">进入Jenkins的系统管理->插件管理->可选插件，搜索框输入sonarqube，安装重启。</font>



## 启用SonarQube
<font style="color:rgb(77, 77, 77);">Jenkins的系统管理->系统配置，添加SonarQube服务。</font>



# SonarQube配置
## 禁用审查结果上传到SCM功能


## 生成token
![img_384.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_384.png)

# jenkins配置
## 添加令牌
<font style="color:rgb(77, 77, 77);">Jenkins的系统管理->系统配置->添加token</font>

![img_3680.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3680.png)

<font style="color:rgb(77, 77, 77);">类型切换成Secret text，粘贴token，点击添加。</font>



<font style="color:rgb(77, 77, 77);">选上刚刚添加的令牌凭证，点击应用保存。</font>



<font style="color:rgb(77, 77, 77);"></font>

## <font style="color:rgb(77, 77, 77);">SonarQube Scanner 安装</font>
<font style="color:rgb(77, 77, 77);">进入Jenkins的系统管理->全局工具配置，下滑找到图片里的地方，点击新增SonarQube Scanner，我们选择自动安装并选择最新的版本。</font>

![img_944.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_944.png)

# <font style="color:rgb(77, 77, 77);">非流水线项目添加代码审查</font>
## 添加构建步骤
编辑之前的自由风格构建的demo项目，在构建阶段新增步骤。



analysis properties参数如下

```bash
# 项目名称id，全局唯一
sonar.projectKey=sprint_boot_demo
# 项目名称
sonar.projectName=sprint_boot_demo
sonar.projectVersion=1.0
# 扫描路径，当前项目根目录
sonar.sources=./src
# 排除目录
sonar.exclusions=**/test/**,**/target/**
# jdk版本
sonar.java.source=1.17
sonar.java.target=1.17
# 字符编码
sonar.sourceEncoding=UTF-8
# binaries路径
sonar.java.binaries=target/classes
```

## 构建并查看结果
jenkins点击立即构建，查看构建结果

![img_3680.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3680.png)

查看SonarQube扫描结果



# 流水线项目添加代码审查
## 创建sonar-project.properties文件
项目根目录下，创建sonar-project.properties文件，内容如下

```bash
# 项目名称id，全局唯一
sonar.projectKey=sprint_boot_demo
# 项目名称
sonar.projectName=sprint_boot_demo
sonar.projectVersion=1.0
# 扫描路径，当前项目根目录
sonar.sources=./src
# 排除目录
sonar.exclusions=**/test/**,**/target/**
# jdk版本
sonar.java.source=1.17
sonar.java.target=1.17
# 字符编码
sonar.sourceEncoding=UTF-8
# binaries路径
sonar.java.binaries=target/classes
```

## 修改Jenkinsfile
加入SonarQube代码审查阶段 

```bash
pipeline {
    agent any

    stages {
        stage('拉取代码') {
            steps {
                echo '开始拉取代码'
                checkout([$class: 'GitSCM', 
                          branches: [[name: '*/main']], 
                          userRemoteConfigs: [[url: 'https://gitee.com/cuiliang0302/sprint_boot_demo.git']]])
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
            steps {
                echo '开始代码审查'
                script {
                    // 引入SonarQube scanner，名称与jenkins 全局工具SonarQube Scanner的name保持一致
                    def scannerHome = tool 'SonarQube'
                    // 引入SonarQube Server，名称与jenkins 系统配置SonarQube servers的name保持一致
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
                echo '代码审查完成'
            }
        }
        
        stage('部署项目') {
            steps {
                echo '开始部署项目'
                echo '部署项目完成'
            }
        }
    }
}

```

## 构建测试


 		

 	 


