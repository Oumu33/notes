# Gitlab与Jmeter集成

> 分类: CI/CD > Gitlab工具链集成
> 更新时间: 2026-01-10T23:34:02.459318+08:00

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

![](../../images/img_411.png)

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
![](../../images/img_412.png)

添加hosts文件后访问测试

![](../../images/img_413.png)

