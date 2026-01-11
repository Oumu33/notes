# jenkins与SonarQube连接

> 来源: CI/CD
> 创建时间: 2024-04-14T14:54:10+08:00
> 更新时间: 2026-01-11T08:54:09.184524+08:00
> 阅读量: 1497 | 点赞: 0

---

# <font style="color:rgb(77, 77, 77);">jenkins安装插件</font>
## **<font style="color:rgb(77, 77, 77);">下载SonarQube插件</font>**
<font style="color:rgb(77, 77, 77);">进入Jenkins的系统管理->插件管理->可选插件，搜索框输入sonarqube，安装重启。</font>

![](https://via.placeholder.com/800x600?text=Image+9b2709ed251b391f)

## 启用SonarQube
<font style="color:rgb(77, 77, 77);">Jenkins的系统管理->系统配置，添加SonarQube服务。</font>

![](https://via.placeholder.com/800x600?text=Image+ba3d0498dab93899)

# SonarQube配置
## 禁用审查结果上传到SCM功能
![](https://via.placeholder.com/800x600?text=Image+133e4237712ed21d)

## 生成token
![](https://via.placeholder.com/800x600?text=Image+f24c8dd1a9a38f56)

# jenkins配置
## 添加令牌
<font style="color:rgb(77, 77, 77);">Jenkins的系统管理->系统配置->添加token</font>

![](https://via.placeholder.com/800x600?text=Image+034b0f3423bcef7f)

<font style="color:rgb(77, 77, 77);">类型切换成Secret text，粘贴token，点击添加。</font>

![](https://via.placeholder.com/800x600?text=Image+a4e6ee40f4495ad1)

<font style="color:rgb(77, 77, 77);">选上刚刚添加的令牌凭证，点击应用保存。</font>

![](https://via.placeholder.com/800x600?text=Image+f11fc7648f3d964f)

<font style="color:rgb(77, 77, 77);"></font>

## <font style="color:rgb(77, 77, 77);">SonarQube Scanner 安装</font>
<font style="color:rgb(77, 77, 77);">进入Jenkins的系统管理->全局工具配置，下滑找到图片里的地方，点击新增SonarQube Scanner，我们选择自动安装并选择最新的版本。</font>

![](https://via.placeholder.com/800x600?text=Image+f20089ceb22978d6)

# <font style="color:rgb(77, 77, 77);">非流水线项目添加代码审查</font>
## 添加构建步骤
编辑之前的自由风格构建的demo项目，在构建阶段新增步骤。

![](https://via.placeholder.com/800x600?text=Image+dfc38ed028ae1257)

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

![](https://via.placeholder.com/800x600?text=Image+f94d3fba3945918f)

查看SonarQube扫描结果

![](https://via.placeholder.com/800x600?text=Image+133919ff62f7a0de)

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
![](https://via.placeholder.com/800x600?text=Image+35bcd5f5533ee29a)

 		

 	 


