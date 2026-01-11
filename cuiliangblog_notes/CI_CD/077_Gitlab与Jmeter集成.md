# Gitlab与Jmeter集成

> 来源: CI/CD
> 创建时间: 2024-06-13T21:10:15+08:00
> 更新时间: 2026-01-11T08:56:59.923082+08:00
> 阅读量: 362 | 点赞: 0

---

# 开启Gitlab pages
修改Gitlab配置文件

```bash
[root@gitlab ~]# vim /etc/gitlab/gitlab.rb
pages_external_url "http://pages.local.com/"
gitlab_pages['enable'] = true
gitlab_pages['insecure_ciphers'] = true
```

重启Gitlab

```bash
[root@gitlab ~]# gitlab-ctl reconfigure
[root@gitlab ~]# gitlab-ctl restart
```

菜单出现pages页面则说明成功开启。

![](https://via.placeholder.com/800x600?text=Image+0806103916798c08)

# 配置流水线
```bash
stages:
  - test
pages: # job 的名称必须要是 pages
  stage: test
  image: harbor.local.com/cicd/jmeter:5.6.3
  tags:
    - docker
  script: # 生成站点
    - ls "$PWD/jmeter/"
    - "jmeter -n -t $PWD/jmeter/demo.jmx -l report.jt1 -e -o $PWD/public -Jjemter.save.saveservice.output_format=csv -Dserver.rmi.ssl.disable=true"
    - ls $PWD/public/
  artifacts: # 制品
    paths:
      - public
```

# 查看验证
![](https://via.placeholder.com/800x600?text=Image+af3091d8f7f532d5)

添加hosts文件后访问测试

![](https://via.placeholder.com/800x600?text=Image+480a9a14f59805a3)


