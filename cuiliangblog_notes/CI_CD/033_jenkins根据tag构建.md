# jenkins根据tag构建

> 来源: CI/CD
> 创建时间: 2024-04-21T15:42:11+08:00
> 更新时间: 2026-01-11T08:52:22.631793+08:00
> 阅读量: 1084 | 点赞: 0

---

# 发布与回滚思路
正常功能发布时，是基于master分支发布的，所以我在成功发布后，会将当时的master分支自动打上tag，当需要回滚时，则基于tag分支进行发布即可。

![](https://via.placeholder.com/800x600?text=Image+88545caa2a6e2237)

# 安装配置Git Parameter
## 安装插件
要想出现tag模式的参数，需要[安装git](https://so.csdn.net/so/search?q=%E5%AE%89%E8%A3%85git&spm=1001.2101.3001.7020) Parameter 插件，在Jenkins的Manage Jenkins→Plugins→Available Plugins 中安装![](https://via.placeholder.com/800x600?text=Image+11c8c1500574414f)

## 验证
安装完成后在项目的配置页的This project is parameterized 中可以看到选项

![](https://via.placeholder.com/800x600?text=Image+647245e2f9fc070a)

## 仓库添加tag
初始化仓库，添加tag并提交

```bash
[root@tiaoban sprint_boot_demo]# git tag -a v1.0 -m "1.0版本"
[root@tiaoban sprint_boot_demo]# git tag -l
v1.0
[root@tiaoban sprint_boot_demo]# git push origin v1.0
Username for 'http://192.168.10.72': cuiliang
Password for 'http://cuiliang@192.168.10.72': 
枚举对象中: 1, 完成.
对象计数中: 100% (1/1), 完成.
写入对象中: 100% (1/1), 163 字节 | 163.00 KiB/s, 完成.
总共 1（差异 0），复用 0（差异 0），包复用 0
To http://192.168.10.72/develop/sprint-boot-demo.git
 * [new tag]         v1.0 -> v1.0

```

修改部分代码，并提交新版本。

```bash
[root@tiaoban sprint_boot_demo]# git commit -m "更新至v2" .
[main 0286318] 更新至v2
 1 file changed, 1 insertion(+), 1 deletion(-)
[root@tiaoban sprint_boot_demo]# git tag -a v2.0 -m "2.0版本"
[root@tiaoban sprint_boot_demo]# git tag -l
v1.0
v2.0
[root@tiaoban sprint_boot_demo]# git push origin v2.0 
Username for 'http://192.168.10.72': cuiliang
Password for 'http://cuiliang@192.168.10.72': 
枚举对象中: 18, 完成.
对象计数中: 100% (18/18), 完成.
使用 4 个线程进行压缩
压缩对象中: 100% (7/7), 完成.
写入对象中: 100% (10/10), 822 字节 | 822.00 KiB/s, 完成.
总共 10（差异 2），复用 0（差异 0），包复用 0
To http://192.168.10.72/develop/sprint-boot-demo.git
 * [new tag]         v2.0 -> v2.0
```

查看gitlab tag信息，发现已经有v1.0，2.0tag

![](https://via.placeholder.com/800x600?text=Image+ade9b41883bf8cf7)

# 使用tag变量发布
## 发布最新版本
生成pipeline，指定分支为${tag}

![](https://via.placeholder.com/800x600?text=Image+ab32e92793e1cec7)

发布验证

![](https://via.placeholder.com/800x600?text=Image+2efe713fa39c8d54)

## 手动发布指定版本
点击立即构建，在版本标签列表中可以查看到所有tag

![](https://via.placeholder.com/800x600?text=Image+2c59ebfbdb5f4d44)


