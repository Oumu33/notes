# Gitlab与Artifactory集成
# Artifactory配置
## 创建仓库
![](../../images/img_396.png)

## 获取命令
获取上传命令

![](../../images/img_397.png)

获取下载命令

![](../../images/img_398.png)

# gitlab配置
## 创建Artifactory密钥变量
![](../../images/img_399.png)

## 编辑流水线
```yaml
default:
  cache: 
    paths: # 定义全局缓存路径
     - target/

variables: # 定义制品存储路径
  ARTIFACT_NAME: $CI_PROJECT_NAME/$CI_COMMIT_BRANCH/$CI_COMMIT_SHORT_SHA-$CI_PIPELINE_ID.jar

stages:
  - build
  - product
  - deploy

build:
  stage: build
  tags:
    - java
  script:
    - mvn clean package # 编译打包
    - ls target

product: 
  stage: product
  tags: # 在java机器上传制品
    - java
  script:
    - curl -uadmin:$ARTIFACTORY_KEY -T target/*.jar "http://192.168.10.76:8081/artifactory/devops/$ARTIFACT_NAME"

deploy:
  stage: deploy
  tags: # 在docker机器下载制品
    - docker
  script:
    - apk add --update curl
    - curl -uadmin:$ARTIFACTORY_KEY -L -O "http://192.168.10.76:8081/artifactory/devops/$ARTIFACT_NAME"
    - ls
  cache:
    policy: push  #不上传缓存
```

## 查看上传信息
![](../../images/img_400.png)

## 查看下载信息
![](../../images/img_401.png)

