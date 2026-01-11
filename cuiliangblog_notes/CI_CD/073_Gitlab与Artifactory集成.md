# Gitlab与Artifactory集成
# Artifactory配置
## 创建仓库
![](https://via.placeholder.com/800x600?text=Image+13d6456988eb2f37)

## 获取命令
获取上传命令

![](https://via.placeholder.com/800x600?text=Image+f73ff464858c11c4)

获取下载命令

![](https://via.placeholder.com/800x600?text=Image+efdbc1c853ef9dbd)

# gitlab配置
## 创建Artifactory密钥变量
![](https://via.placeholder.com/800x600?text=Image+e6e2d62b5d38be30)

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
![](https://via.placeholder.com/800x600?text=Image+39213200e38e7e71)

## 查看下载信息
![](https://via.placeholder.com/800x600?text=Image+e32d304537568136)


