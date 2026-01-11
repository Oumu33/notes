# pipeline-阶段并行

> 来源: CI/CD
> 创建时间: 2024-05-23T22:09:18+08:00
> 更新时间: 2026-01-11T08:56:27.552143+08:00
> 阅读量: 461 | 点赞: 0

---

# needs阶段并行
可无序执行作业，无需按照阶段顺序运行某些作业，可以让多个阶段同时运行。

```yaml
stages: # 定义作业的阶段，所有作业按stages指定的顺序执行
  - build
  - test

build1:
  stage: build
  script: 
    - echo "build1"
    - sleep 5
    
build2:
  stage: build
  script: 
    - echo "build2"
    - sleep 30

test1:
  stage: test
  script: 
    - echo "test1"
    - sleep 10
  needs: ["build1"] # build1任务执行完成即可执行该作业
    
test2:
  stage: test
  script: 
    - echo "test2"
    - sleep 20
  needs: ["build2"] # build2任务执行完成即可执行该作业
```

查看流水线信息，如果不设置needs的话，必须build两个job都完成才会执行test的两个job。

![](https://via.placeholder.com/800x600?text=Image+914ae97025bee0a0)

# 


# 



