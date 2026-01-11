# CI/CD 完整教程

## 目录

### Git版本控制

- [git常用命令](#128372845)
- [git记住账号密码](#97613822)
- [git远程仓库](#78247225)
- [SSH公钥](#15129950)
- [git tag](#80333097)

### SonarQube代码扫描

- [SonarQube介绍](#131465236)
- [SonarQube部署(rpm)](#131467837)
- [SonarQube部署(docker)](#131602160)
- [SonarQube部署(k8s)](#165547985)
- [SonarQube使用](#165497613)

### Artifactory制品库

- [Artifactory介绍](#172000780)
- [Artifactory部署(rpm)](#172000978)
- [Artifactory部署(docker)](#172001741)
- [Artifactory部署(k8s)](#172001796)
- [Artifactory使用](#172039867)

### Jmeter自动化测试

- [Jmeter介绍](#173489744)
- [Jmeter部署(源码+docker)](#173491430)
- [Jmeter使用](#173494371)

### Jenkins安装部署

- [jenkins部署(rpm)](#15130009)
- [jenkins部署(docker)](#131404558)
- [jenkins部署(k8s)](#131416735)

### Jenkins基础配置

- [jenkins基本设置](#131416679)
- [jenkins用户权限](#131549677)
- [jenkins凭据管理](#131888848)
- [slave集群配置](#166306888)

### Jenkins流水线

- [Pipeline简介](#132343694)
- [Pipeline语法入门](#132344420)
- [流水线语法详解](#166568005)
- [Pipeline from SCM](#132346649)
- [jenkins构建触发器](#133017128)
- [jenkins参数化构建](#133020477)
- [jenkins邮件通知配置](#133029974)
- [jenkins根据tag构建](#166554656)

### Jenkins工具链集成

- [jenkins与gitlab连接](#127410630)
- [jenkins与Maven集成](#131898197)
- [jenkins与k8s连接](#127230452)
- [jenkins与SonarQube连接](#165534414)
- [jenkins远程服务器执行shell](#166296541)
- [Jenkins与Harbor连接](#166573065)

### Jenkins CICD项目实战

- [CI/CD项目介绍](#174295850)
- [Jenkins+docker项目实战](#169621642)
- [Jenkins+k8s项目实战](#166584265)

### Gitlab安装部署

- [gitlab部署(rpm)](#92727905)
- [gitlab部署(docker)](#126398301)
- [gitlab部署(k8s)](#131418586)

### Gitlab基本配置与使用

- [gitlab设置](#127165260)
- [gitlab权限](#131513569)
- [gitlab监控](#178422252)

### Gitlab CI/CD介绍

- [Gitlab CI/CD简介](#169961433)
- [Gitlab与Jenkins对比](#122643037)

### Gitlab Runner

- [runner介绍](#123124571)
- [runner安装](#123128550)
- [runner注册](#123863613)
- [runner命令](#170338439)
- [runner执行器](#123863610)
- [runner部署与注册(yaml)](#172302364)
- [kubernetes类型runner优化](#174152592)
- [runner部署与注册(helm)](#179207220)
- [runner监控](#178535441)

### Gitlab流水线

- [运行流水线任务](#170338864)
- [pipeline-基础语法](#170373752)
- [pipeline-条件分支](#170615327)
- [pipeline-缓存](#170564184)
- [pipeline-制品库](#170850834)
- [pipeline-阶段并行](#170853497)
- [pipeline-引入配置](#170855849)
- [pipeline-管道触发](#170855955)
- [pipeline-容器](#171542631)
- [pipeline-环境](#171809764)
- [流水线语法总结](#170373357)

### Gitlab工具链集成

- [Gitlab与编译环境集成](#171824103)
- [Gitlab与SonarQube集成](#171824336)
- [Gitlab与Artifactory集成](#171824788)
- [Gitlab与Harbor集成](#171825091)
- [Gitlab与k8s集成(runner方式)](#171825012)
- [Gitlab与k8s集成(agent方式)](#172997707)
- [Gitlab与Jmeter集成](#173583055)
- [Gitlab与Email集成](#173068275)

### ArgoCD与GitOps入门

- [GitOps](#177847499)
- [ArgoCD简介](#174701863)
- [ArgoCD部署](#119667444)
- [ArgoCD快速体验](#119675638)
- [ArgoCD仓库管理](#241614266)
- [ArgoCD集群管理](#241622344)
- [ArgoCD项目管理](#174837249)
- [ArgoCD监控](#178422013)

### ArgoCD创建APP

- [Directory APP](#174775527)
- [Helm App创建](#174782935)
- [Kustomize App创建](#174782965)

### ArgoCD应用发布

- [ArgoCD Rollouts](#174841576)
- [蓝绿部署](#174841574)
- [金丝雀发布](#174841570)
- [App of Apps模式](#174841631)
- [多集群应用部署](#174841645)
- [ApplicationSet应用集](#174841493)
- [Application管理最佳实践](#241726007)

### CI/CD项目综合实践

- [gitlab+linux项目实践](#173479217)
- [gitlab+docker项目实践](#172326640)
- [gitlab+k8s项目实践](#173478562)
- [GitOps项目实践](#177846948)


---

<a id="128372845"></a>

## Git版本控制 - git常用命令

# 仓库操作  
## git init
这可能是你创建新项目时要使用的第一个命令。它用于初始化一个新的、空的 Git 仓库。使用这个命令的语法非常简单：

```plain
git init
```

执行 `git init` 命令后，Git 会在当前目录下创建一个名为 `.git` 的子目录，这个子目录包含 Git 用来跟踪版本控制所需的所有文件和目录。具体来说，包括以下文件和目录：

+  `HEAD` 文件：存储当前位置指针，指向当前工作区的分支。 
+  `config` 文件：存储仓库的配置信息，比如远程仓库的 URL ，你的邮箱和用户名等。 
+  `description` 文件：供 Gitweb 使用，显示仓库的描述。 
+  `hooks` 目录：保存在执行 Git 命令时触发的自定义 hooks 脚本。 
+  `info` 目录：用于排除提交规则，与 .gitignore 功能类似。他们的区别在于.gitignore 这个文件本身会提交到版本库中去，用来保存的是公共需要排除的文件；而 info/exclude 这里设置的则是你自己本地需要排除的文件，他不会影响到其他人，也不会提交到版本库中去。 
+  `objects` 目录：Git 的对象数据库。 
+  `refs` 目录：存储着分支和标签的引用。 
+  `index` 文件：用于追踪文件的更改。 
+  `logs` 目录：用于记录操作信息。 

## git clone
通常情况下，你已经有一个现有的 Git 仓库（有时托管在像 GitHub 或 Bitbucket 这样的网站上），并希望将其复制到本地计算机。在这种情况下，你需要使用的命令是 `git clone`。简单来说，这个命令用于创建现有仓库的副本或克隆：

```plain
git clone [url-to-existing-git-repo]
```

## git push
到目前为止，我们运行的所有命令都只影响了本地环境。现在，是时候通过使用 git push 命令将您最新提交的更改推送到远程仓库（通常托管在 GitHub 和 Bitbucket 等网站上）与其他开发者分享了：

```plain
git push <remote> <name-of-branch>
```

例如：

```plain
git push origin master
```

在该示例中，我们将 master 分支推送到名为 origin 的远程仓库（在 Git 中是远程仓库的默认名称）。

一旦您推送了更改，其他团队成员就可以看到它们、审查它们并将它们拉取到他们自己的本地 Git 仓库副本中。

## git pull
git pull 命令与 git push 命令正好相反。您可以使用它将其他开发者所做的更改下载到您的本地仓库中：

```plain
git pull <remote> <name-of-branch>
```

上述命令将下载远程仓库中指定分支的新提交，并尝试将它们合并到您本地的该分支副本中。实际的命令将类似以下示例，使用 origin 远程仓库和 master 分支：

```plain
git pull origin master
```

有趣的是，git pull 命令实际上只是 git fetch 命令和 git merge 命令的组合。其中，git fetch 命令用于将远程分支下载到本地仓库，而 git merge 命令用于将已下载的分支合并到本地副本中。

# 查看状态与历史  
## git status
Git 会持续监控您的项目工作目录中的变化，这些变化可能涉及创建新文件、添加文件以进行跟踪、删除文件、更改文件权限、修改文件名或内容等。您可以使用 git status 命令，查看 Git 在某个特定时间所记录的变化情况。

```plain
git status
```

## git log
如果您想查看 Git 分支上所有提交的历史记录，可以使用 git log 命令。git log 命令按时间顺序显示所有提交的有序列表，包括作者、日期和提交信息，从最新到最旧：

```plain
git log
```

若要按从旧到新的顺序列出提交，请使用 --reverse 选项：

```plain
git log --reverse
```

如果您是一个视觉化的人，可以尝试使用以下命令选项，在终端中显示提交历史的图形化表示：

```plain
git log --all --graph --decorate
```

这对于查看分支在开发过程中如何分叉和合并回来非常有用。

# 暂存与提交
## git add
一旦在您的工作目录中对文件做出更改并通过 git status 命令确认更改完全正确，就可以将这些变化添加到 Git 的暂存区中。

您可以使用 git add 命令将单个文件添加到暂存区：

```plain
git add <your-file-name>
```

或者，如果您有多个更改的文件，您可以使用 -A 选项将它们全部添加到暂存区：

```plain
git add -A
```

另外，您也可以使用单个点号代替 -A 选项：

```plain
git add .
```

## git commit
一旦您的更改已经被暂存，就可以使用 git commit 命令将这些更改保存到 Git 仓库中。一个 Git commit 是一组文件更改，作为一个单元存储在 Git 中。

在此过程中，您应该提供一个清晰明确的提交信息，以便其他开发者能够轻松理解其目的：

```plain
git commit -m "some useful comment about your change"
```

一个常见的经验法则是使用祈使语气编写提交信息。

下面是一张图片，帮助您更好地理解 Git 中更改是如何从工作目录流转到暂存区，最终提交到仓库的：



![](images/img_1.png)

## git stash
有时候，您在工作目录中修改了一些文件，但是意识到需要先处理其他事情。然而，您又不想丢失已经完成的工作。在这种情况下，可以使用 git stash 命令将所有未提交的更改保存在工作目录中，以便稍后可以找回它们。

```plain
git stash
```

使用 git stash 命令后，您的工作副本将被清理（所有更改将消失）。但是不要担心，它们并没有丢失，git stash 只是将这些更改放在临时存储中，您可以使用 git stash pop 命令找回它们：

```plain
git stash pop
```

在这里，pop 子命令将重新应用存储在 stash 中的最后一个状态，以便您可以继续上次的工作。

## git 忽略提交
在提交到 git 仓库时，本地的密码、日志、venv 等文件是不需要提交到 git 仓库的，此时可以创建  `.gitignore`文件，填写忽略的文件或文件夹名称（支持通配符匹配）

如果文件已经被提交到仓库，即使后来加到 `.gitignore`，Git 仍然会继续跟踪它。  

此时需要执行如下操作

```bash
# 清除缓存
git rm -r --cached .
# 重新添加所有文件（Git 会忽略 .gitignore 中的内容）
git add .
# 提交更改
git commit -m "update .gitignore and remove ignored files from tracking"
```

# 分支管理
## git branch
您可以将 Git 分支看作是一系列提交或开发历程。实际上，分支名称只是一个指向特定 commit ID 的标签。每个 commit ID 都链接回其父 commit ID，形成了一条开发历史链。

git branch 命令就像一把瑞士军刀，它可以展示当前 Git 仓库中的所有分支。带有星号标记的分支是您当前所在的分支：

```plain
git branch
```

要创建一个新分支，只需使用以下命令并指定您的新分支名称即可：

```plain
git branch <new-branch-name>
```

## git checkout
使用 git checkout 命令可以在不同的分支之间进行切换，它会更新您的工作目录以反映所选分支的最新版本：

```plain
git checkout <name-of-branch>
```

此外，git checkout 命令还可以同时创建一个新分支并切换到该分支：

```plain
git checkout -b <name-of-branch>
```

## git merge
那么，您已经在新分支上进行了多次提交，完成了您的工作。接下来该怎么做呢？

通常情况下，这些更改应该合并回主代码分支（默认情况下通常称为 master 分支）。我们可以使用 git merge 命令来完成合并操作。

```plain
git merge <branch-to-merge-from>
```

请注意，git merge 命令将指定分支中的提交合并到当前所在的分支中。因此，在运行该命令之前，您需要首先切换到要合并的分支上。

# 
# 
# 


---

<a id="97613822"></a>

## Git版本控制 - git记住账号密码

# 记住账号密码
进入项目目录

`git config --global credential.helper store`

然后会生成一个本地文件用于记录用户名和密码，这个文件我们无需关心

再次git pull一下，会让输入用户名和密码。这次输入之后以后就不会每次输入了。

# 清除用户名和密码
运行一下命令缓存输入的用户名和密码

+ Windows主机

```bash
git config --global credential.helper wincred
```

+ mac

```bash
git config --global credential.helper osxkeychain
```

+ linux

```plain
git config --global credential.helper store
```





---

<a id="78247225"></a>

## Git版本控制 - git远程仓库

## 添加远程仓库地址
git remote set-url --add origin [url]

### 修改远程仓库地址
git remote set-url origin [url]

### 删除远程仓库地址
git remote rm origin

### 新建远程仓库地址
git remote add origin [url]

### 查看远程仓库地址
git remote -v



---

<a id="15129950"></a>

## Git版本控制 - SSH公钥

1. <font style="background-color:transparent;">生成 sshkey:</font>

`ssh-keygen <font style="color:#000080;">-t</font> rsa <font style="color:#000080;">-C</font> <font style="color:#DD1144;">"xxxxx@xxxxx.com"</font>  `

2. 按照提示完成三次回车，即可生成 ssh key。通过查看 `~/.ssh/id_rsa.pub` 文件内容，获取到你的 public key

`cat ~/.ssh/id_rsa.pub` 

`# ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....` 

![](images/img_2.png)

3. 复制生成后的 ssh key，通过仓库主页 **「管理」->「部署公钥管理」->「添加部署公钥」** ，添加生成的 public key 添加到仓库中。

![](images/img_3.png)

4. 添加后，在终端中输入ssh -T git@gitee.com

首次使用需要确认并添加主机到本机SSH可信列表。若返回 `Hi XXX! You've successfully authenticated, but Gitee.com does not provide shell access.` 内容，则证明添加成功。

![](images/img_4.png)

添加成功后，就可以使用SSH协议对仓库进行操作了。[](https://gitee.com/help/articles/4181#%E4%BB%93%E5%BA%93%E5%85%AC%E9%92%A5%E5%92%8C%E5%8F%AF%E9%83%A8%E7%BD%B2%E5%85%AC%E9%92%A5)



---

<a id="80333097"></a>

## Git版本控制 - git tag

## 版本格式
主版本号.次版本号.修订号，版本号递增规则如下：

1. 主版本号：当你做了不兼容的 API 修改，
2. 次版本号：当你做了向下兼容的功能性新增，
3. 修订号：当你做了向下兼容的问题修正。

## git tag命令
```json
/// 查看标签
// 打印所有标签
git tag
// 打印符合检索条件的标签
git tag -l 1.*.*
// 查看对应标签状态
git checkout 1.0.0

/// 创建标签(本地)
// 创建轻量标签
git tag 1.0.0-light
// 创建带备注标签(推荐)
git tag -a 1.0.0 -m "这是备注信息"
// 针对特定commit版本SHA创建标签
git tag -a 1.0.0 0c3b62d -m "这是备注信息"

/// 删除标签(本地)
git tag -d 1.0.0

/// 将本地标签发布到远程仓库
// 发送所有
git push origin --tags
// 指定版本发送
git push origin 1.0.0

/// 删除远程仓库对应标签
// Git版本 > V1.7.0
git push origin --delete 1.0.0
// 旧版本Git
git push origin :refs/tags/1.0.0
```

## git release
进入到项目仓库，选择release选项卡，可以点击create a new release/Draft a new release创建一个新的release



---

<a id="131465236"></a>

## SonarQube代码扫描 - SonarQube介绍

# <font style="color:rgb(38, 38, 38);"></font><font style="color:rgb(79, 79, 79);">简介</font>
SonarQube 是一个用于代码质量管理的开源平台，用于管理源代码的质量。同时 SonarQube 还对大量的持续集成工具提供了接口支持，可以很方便地在持续集成中使用 SonarQube。此外， SonarQube 的插件还可以对 Java 以外的其他编程语言提供支持，对国际化以及报告文档化也有良好的支持。

# <font style="color:rgb(18, 18, 18);">使用范围</font>
<font style="color:rgb(18, 18, 18);">通过插件形式，可以支持包括 Java,C#,C/C++、PL/SQL、Cobol、JavaScrip、Groovy、Ruby 等二十五种编程语言的代码质量管理与检测，针对不同的编程语言其所提供的分析方式也有所不同：对于所有支持的编程语言，SonarQube 都提供源了代码的静态分析功能；对于某些特定的编程语言，SonarQube 提供了对编译后代码的静态分析功能。</font>

<font style="color:rgb(18, 18, 18);">SonarQube 支持多种客户端集成方式，包括但不限于 Scanner 客户端、Ant、Gradle、Maven、Jenkins、IDEA 插件等。比较常用的为 Gradle 和 Maven。</font>

# <font style="color:rgb(38, 38, 38);"></font><font style="color:rgb(79, 79, 79);">组成</font>
![](images/img_5.png)

# <font style="color:rgb(38, 38, 38);">与CICD集成</font>
![](images/img_6.png)

开发人员在他们的ide中使用SonarLint运行分析本地代码。

开发人员将他们的代码提交到代码管理平台中（SVN，GIT等）

持续集成工具自动触发构建，调用SonarScanner对项目代码进行扫描分析

分析报告发送到SonarQube Server中进行加工

SonarQube Server 加工并且保存分析报告到SonarQube Database中，通过UI显示分析报告



---

<a id="131467837"></a>

## SonarQube代码扫描 - SonarQube部署(rpm)

# 准备工作
## 下载软件包
下载地址：[https://www.sonarsource.com/products/sonarqube/downloads/](https://www.sonarsource.com/products/sonarqube/downloads/)

安装文档：[https://docs.sonarqube.org/9.9/requirements/prerequisites-and-overview/](https://docs.sonarqube.org/9.9/requirements/prerequisites-and-overview/)

![](images/img_7.png)

## 软件版本
从官方文档可知，<font style="color:rgba(0, 0, 0, 0.8);">SonarQube9.9.1支持的java版本为Oracle JRE17或OpenJDK17，数据库版本为PostgreSQL11-15，Microsoft SQL Server的MSSQL Server 12.0-16.0或者Oracle19c和21C</font>

<font style="color:rgba(0, 0, 0, 0.8);">此处使用OpenJDK17+PostgreSQL15为例安装。</font>

# openjdk17安装
本次使用的系统为rockylinux8.8，yum仓库中有openjdk17包，直接安装即可。如果为其他版本操作系统，可以前往openjdk官网下载[https://developers.redhat.com/products/openjdk/download](https://developers.redhat.com/products/openjdk/download)

```bash
# 查看yum仓库openjdk信息
[root@sonarqube ~]# dnf list java-17-openjdk*
上次元数据过期检查：0:07:06 前，执行于 2023年06月27日 星期二 10时03分19秒。
可安装的软件包
java-17-openjdk.x86_64                                                               1:17.0.7.0.7-3.el8                                                   appstream
java-17-openjdk-demo.x86_64                                                          1:17.0.7.0.7-3.el8                                                   appstream
java-17-openjdk-devel.x86_64                                                         1:17.0.7.0.7-3.el8                                                   appstream
java-17-openjdk-headless.x86_64                                                      1:17.0.7.0.7-3.el8                                                   appstream
java-17-openjdk-javadoc.x86_64                                                       1:17.0.7.0.7-3.el8                                                   appstream
java-17-openjdk-javadoc-zip.x86_64                                                   1:17.0.7.0.7-3.el8                                                   appstream
java-17-openjdk-jmods.x86_64                                                         1:17.0.7.0.7-3.el8                                                   appstream
java-17-openjdk-src.x86_64                                                           1:17.0.7.0.7-3.el8                                                   appstream
java-17-openjdk-static-libs.x86_64                                                   1:17.0.7.0.7-3.el8                                                   appstream
[root@sonarqube ~]# dnf -y install java-17-openjdk*
[root@sonarqube ~]# java -version
openjdk version "17.0.10" 2024-01-16 LTS
OpenJDK Runtime Environment (Red_Hat-17.0.10.0.7-1) (build 17.0.10+7-LTS)
OpenJDK 64-Bit Server VM (Red_Hat-17.0.10.0.7-1) (build 17.0.10+7-LTS, mixed mode, sharing)
```

# <font style="color:rgba(0, 0, 0, 0.8);">PostgreSQL15安装部署</font>
## 下载软件包
软件包下载地址：[https://www.postgresql.org/download/](https://www.postgresql.org/download/)，根据系统环境选择合适的版本生成安装命令。

```bash
[root@sonarqube ~]# dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
[root@sonarqube ~]# dnf -qy module disable postgresql
[root@sonarqube ~]# dnf install -y postgresql15-server
[root@sonarqube ~]# /usr/pgsql-15/bin/postgresql-15-setup initdb
[root@sonarqube ~]# systemctl enable postgresql-15
[root@sonarqube ~]# systemctl start postgresql-15
```

## 设置密码postgres用户密码
```bash
[root@sonarqube ~]# su - postgres
[postgres@sonarqube ~]$ psql
psql (15.6)
输入 "help" 来获取帮助信息.

postgres=# ALTER USER postgres WITH PASSWORD 'postgres';
ALTER ROLE
```

## 开启远程访问
```bash
[root@sonarqube ~]# vim /var/lib/pgsql/15/data/postgresql.conf
listen_addresses = '*'
[root@sonarqube ~]# vim /var/lib/pgsql/15/data/pg_hba.conf
host    all             all             0.0.0.0/0            scram-sha-256
```

## 重启服务
```bash
[root@sonarqube ~]# systemctl restart postgresql-15
```

## 本地连接测试
```bash
[root@sonarqube ~]# psql -U postgres -h 127.0.0.1
用户 postgres 的口令：postgres
psql (15.6)
输入 "help" 来获取帮助信息.

postgres=# \l
                                                     数据库列表
   名称    |  拥有者  | 字元编码 |  校对规则   |    Ctype    | ICU Locale | Locale Provider |       存取权限        
-----------+----------+----------+-------------+-------------+------------+-----------------+-----------------------
 postgres  | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 |            | libc            | 
 template0 | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 |            | libc            | =c/postgres          +
           |          |          |             |             |            |                 | postgres=CTc/postgres
 template1 | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 |            | libc            | =c/postgres          +
           |          |          |             |             |            |                 | postgres=CTc/postgres
(3 行记录)

postgres=#
```

## 远程连接测试
```bash
[root@tiaoban ~]# dnf install postgresql -y
[root@tiaoban ~]# psql -U postgres -h 192.168.10.71
用户 postgres 的口令：postgres
psql (10.23, 服务器 15.6)
WARNING: psql major version 10, server major version 15.
         Some psql features might not work.
输入 "help" 来获取帮助信息.

postgres=# \l
                                     数据库列表
   名称    |  拥有者  | 字元编码 |  校对规则   |    Ctype    |       存取权限        
-----------+----------+----------+-------------+-------------+-----------------------
 postgres  | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | 
 template0 | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | =c/postgres          +
           |          |          |             |             | postgres=CTc/postgres
 template1 | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | =c/postgres          +
           |          |          |             |             | postgres=CTc/postgres
(3 行记录)
```

## 创建用户与库并授权
```bash
postgres=# CREATE ROLE sonarqube WITH LOGIN PASSWORD 'sonarqube';
CREATE ROLE
postgres=# CREATE DATABASE sonarqube;
CREATE DATABASE
postgres=# GRANT ALL PRIVILEGES ON DATABASE sonarqube TO sonarqube;
GRANT
postgres=# GRANT ALL ON SCHEMA public TO sonarqube;
GRANT
postgres=# \l
                                      数据库列表
   名称    |  拥有者  | 字元编码 |  校对规则   |    Ctype    |        存取权限        
-----------+----------+----------+-------------+-------------+------------------------
 postgres  | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | 
 sonarqube | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | =Tc/postgres          +
           |          |          |             |             | postgres=CTc/postgres +
           |          |          |             |             | sonarqube=CTc/postgres
 template0 | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | =c/postgres           +
           |          |          |             |             | postgres=CTc/postgres
 template1 | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | =c/postgres           +
           |          |          |             |             | postgres=CTc/postgres
(4 行记录)
```

# SonarQube安装
## 解压
```bash
[root@sonarqube ~]# wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-9.9.4.87374.zip
[root@sonarqube ~]# unzip -d /opt sonarqube-9.9.4.87374.zip
[root@sonarqube ~]# cd /opt
[root@sonarqube opt]# ls
sonarqube-9.9.4.87374
```

## 更改配置文件
```bash
[root@sonarqube opt]# vim /opt/sonarqube-9.9.4.87374/conf/sonar.properties
sonar.jdbc.username=sonarqube
sonar.jdbc.password=sonarqube
sonar.jdbc.url=jdbc:postgresql://localhost:5432/sonarqube
sonar.path.data=/data/sonarqube/data
sonar.path.temp=/data/sonarqube/temp
sonar.web.host=192.168.10.71
sonar.web.port=9000
```

## 配置用户与权限
```bash
[root@sonarqube opt]# useradd sonarqube
[root@sonarqube opt]# chown sonarqube:sonarqube -R /opt/sonarqube-9.9.4.87374
[root@sonarqube opt]# mkdir -p /data/sonarqube/data
[root@sonarqube opt]# mkdir -p /data/sonarqube/temp
[root@sonarqube opt]# chown sonarqube:sonarqube -R /data/sonarqube
```

## 配置系统参数（启动es需要）
修改文件描述符数目

```bash
[root@sonarqube opt]# vim /etc/profile
ulimit -n 65535
[root@sonarqube opt]# source /etc/profile
[root@sonarqube opt]# vim /etc/security/limits.conf
* soft nofile 65535
* hard nofile 65535
[root@sonarqube opt]# ulimit -n
65535
```

修改虚拟内存数大小

```bash
[root@sonarqube opt]# sysctl -w vm.max_map_count=262144
vm.max_map_count = 262144
[root@sonarqube opt]# cat >> /etc/sysctl.conf << EOF
vm.max_map_count=262144
EOF
[root@sonarqube opt]# sysctl -p 
vm.max_map_count = 262144
```

关闭swap分区

```bash
[root@sonarqube opt]# swapoff -a
[root@sonarqube opt]# sed -i '/ swap / s/^(.*)$/#\1/g' /etc/fstab
```

## 启动SonarQube
```bash
[root@sonarqube opt]# su - sonarqube 
[sonarqube@sonarqube ~]$ cd /opt/sonarqube-9.9.4.87374/bin/linux-x86-64/
[sonarqube@sonarqube linux-x86-64]$ ls
sonar.sh
[sonarqube@sonarqube linux-x86-64]$ ./sonar.sh start
```

然后访问192.168.10.71:9000端口即可。默认用户名密码为admin

## 添加服务启动脚本
```bash
[root@sonarqube opt]# vim /usr/lib/systemd/system/sonarqube.service
[Unit]
#描述
Description=Sonarube Service
#代表要在其他的某些程序完成之后再执行.这些服务启动后，才允许启动Sonarube服务
After=syslog.target network.target

[Service]
Type=forking
# 绝对地址
ExecStart=/opt/sonarqube-9.9.4.87374/bin/linux-x86-64/sonar.sh start
# 绝对地址
ExecStop=/opt/sonarqube-9.9.4.87374/bin/linux-x86-64/sonar.sh stop
#启动的用户名
User=sonarqube
#启动的用户所在组
Group=sonarqube
Restart=always
#重启时间
RestartSec=120
LimitNOFILE=131072
LimitNPROC=8192

[Install]
WantedBy=multi-user.target

[root@sonarqube ~]# systemctl daemon-reload 
[root@sonarqube ~]# systemctl start sonarqube.service 
[root@sonarqube ~]# systemctl enable sonarqube.service 
```



---

<a id="131602160"></a>

## SonarQube代码扫描 - SonarQube部署(docker)

# 简易安装
## 下载地址
镜像下载地址：[https://hub.docker.com/_/sonarqube](https://hub.docker.com/_/sonarqube)

## 拉取镜像
```plain
docker pull sonarqube:9.9.4-community
```

## 运行容器
```plain
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:9.9.4-community
```

# 登录SonarQube
实例启动并运行后，使用系统管理员凭据登录到 [http://localhost:9000](http://localhost:9000/)

+ 用户名：admin
+ 密码：admin

登录成功后需要重置密码  
![](images/img_8.png)



---

<a id="165547985"></a>

## SonarQube代码扫描 - SonarQube部署(k8s)

参考文档：[https://docs.sonarsource.com/sonarqube/9.9/setup-and-upgrade/deploy-on-kubernetes/deploy-sonarqube-on-kubernetes/](https://docs.sonarsource.com/sonarqube/9.9/setup-and-upgrade/deploy-on-kubernetes/deploy-sonarqube-on-kubernetes/)

# 安装SonarQube
添加helm仓库

```bash
[root@tiaoban ~]# helm repo add sonarqube https://SonarSource.github.io/helm-chart-sonarqube
"sonarqube" has been added to your repositories
[root@tiaoban ~]# helm repo update
[root@tiaoban ~]# kubectl create namespace cicd
namespace/sonarqube created
[root@tiaoban ~]# helm pull sonarqube/sonarqube --untar
[root@tiaoban ~]# cd sonarqube/
[root@tiaoban sonarqube]# ls
CHANGELOG.md  Chart.lock  charts  Chart.yaml  ci  README.md  templates  values.schema.json  values.yaml
```

修改配置

```bash
[root@tiaoban sonarqube]# vim values.yaml
prometheusExporter: # 按需求开启指标监控
  enabled: true
persistence:
  enabled: true
  storageClass: nfs-client # 指定storageClass
postgresql:
  persistence:
    storageClass: nfs-client # 指定storageClass
plugins: # 安装分支代码扫描插件
  install:
    - https://github.com/mc1arke/sonarqube-community-branch-plugin/releases/download/1.18.0/sonarqube-community-branch-plugin-1.18.0.jar
jvmOpts: "-javaagent:/opt/sonarqube/extensions/plugins/sonarqube-community-branch-plugin-1.18.0.jar=web"
jvmCeOpts: "-javaagent:/opt/sonarqube/extensions/plugins/sonarqube-community-branch-plugin-1.18.0.jar=ce"
```

安装SonarQube

```bash
[root@tiaoban sonarqube]# helm install sonarqube -n cicd . -f values.yaml
NAME: sonarqube
LAST DEPLOYED: Mon Apr 29 11:19:35 2024
NAMESPACE: cicd
STATUS: deployed
REVISION: 1
NOTES:
1. Get the application URL by running these commands:
  export POD_NAME=$(kubectl get pods --namespace cicd -l "app=sonarqube,release=sonarqube" -o jsonpath="{.items[0].metadata.name}")
  echo "Visit http://127.0.0.1:8080 to use your application"
  kubectl port-forward $POD_NAME 8080:9000 -n cicd
WARNING: 
         Please note that the SonarQube image runs with a non-root user (uid=1000) belonging to the root group (guid=0). In this way, the chart can support arbitrary user ids as recommended in OpenShift.
         Please visit https://docs.openshift.com/container-platform/4.14/openshift_images/create-images.html#use-uid_create-images for more information.

WARNING: The embedded PostgreSQL is intended for evaluation only, it is DEPRECATED, and it will be REMOVED in a future release.
         Please visit https://artifacthub.io/packages/helm/sonarqube/sonarqube#production-use-case for more information.
```

查看资源

```bash
[root@tiaoban sonarqube]# kubectl get all -n cicd 
NAME                         READY   STATUS    RESTARTS   AGE
pod/sonarqube-postgresql-0   1/1     Running   0          9m7s
pod/sonarqube-sonarqube-0    1/1     Running   0          4m47s

NAME                                    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
service/sonarqube-postgresql            ClusterIP   10.106.30.230   <none>        5432/TCP   15m
service/sonarqube-postgresql-headless   ClusterIP   None            <none>        5432/TCP   15m
service/sonarqube-sonarqube             ClusterIP   10.100.65.45    <none>        9000/TCP   15m

NAME                                    READY   AGE
statefulset.apps/sonarqube-postgresql   1/1     15m
statefulset.apps/sonarqube-sonarqube    1/1     15m
```

# 创建ingress
以traefik为例

```bash
[root@tiaoban sonarqube]# cat ingress.yaml 
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: sonarqube
  namespace: cicd
spec:
  entryPoints:
    - web
  routes:
    - match: Host(`sonarqube.local.com`)
      kind: Rule
      services:
        - name: sonarqube-sonarqube
          port: 9000
[root@tiaoban sonarqube]# kubectl apply -f ingress.yaml 
ingressroute.traefik.containo.us/sonarqube created
```

# 访问验证
浏览器访问[http://sonarqube.local.com](http://sonarqube.local.com)，默认用户名密码为admin

![](images/img_9.png)



---

<a id="165497613"></a>

## SonarQube代码扫描 - SonarQube使用

# 安装中文插件
在插件管理中搜索并安装Chinese插件

![](images/img_10.png)

# <font style="color:rgb(77, 77, 77);">安装切换分支插件</font>
<font style="color:rgb(77, 77, 77);">因社区版是免费开源的，所以不提供扫描项目切换分支的功能，但适合真正生产环境的项目会具有多个分支，只能扫描主分支的SonarQube社区版显然很不满足你的需求，插件市场提供了一款可以切换分支的插件。</font>

<font style="color:rgb(77, 77, 77);">插件地址：https://github.com/mc1arke/sonarqube-community-branch-plugin</font>

## <font style="color:rgb(77, 77, 77);">下载插件</font>
<font style="color:rgb(77, 77, 77);">查看插件和SonarQube对应的版本：</font>

| SonarQube Version | Plugin Version |
| --- | --- |
| 10.3 | 1.18.0 |
| 10.2 | 1.17.1 |
| 10.1 | 1.16.0 |
| 10.0 | 1.15.0 |
| 9.9 (LTS) | 1.14.0 |


<font style="color:rgb(77, 77, 77);">下载指定版本的插件至插件目录。</font>

```bash
[root@sonarqube plugins]# pwd
/opt/sonarqube-9.9.4.87374/extensions/plugins
[root@sonarqube plugins]# wget https://github.com/mc1arke/sonarqube-community-branch-plugin/releases/download/1.14.0/sonarqube-community-branch-plugin-1.14.0.jar
[root@sonarqube plugins]# chown sonarqube:sonarqube sonarqube-community-branch-plugin-1.14.0.jar
```

## <font style="color:rgb(77, 77, 77);">修改SonarQube的配置</font>
新增插件地址。

```bash
[root@sonarqube conf]# pwd
/opt/sonarqube-9.9.4.87374/conf
[root@sonarqube conf]# vim sonar.properties
sonar.web.javaAdditionalOpts=-javaagent:./extensions/plugins/sonarqube-community-branch-plugin-1.14.0.jar=web
sonar.ce.javaAdditionalOpts=-javaagent:./extensions/plugins/sonarqube-community-branch-plugin-1.14.0.jar=ce
```

## <font style="color:rgb(77, 77, 77);">重启SonarQube</font>
```bash
[sonarqube@sonarqube ~]$ cd /opt/sonarqube-9.9.4.87374/bin/linux-x86-64/
[sonarqube@sonarqube linux-x86-64]$ ls
SonarQube.pid  sonar.sh
[sonarqube@sonarqube linux-x86-64]$ ./sonar.sh restart
/usr/bin/java
Gracefully stopping SonarQube...
Stopped SonarQube.
Starting SonarQube...
Started SonarQube.
```

# 分析项目
## 创建项目
单击创建新项目按钮。

![](images/img_11.png)创建项目名称。

![](images/img_12.png)

## 生成扫描命令
创建令牌。

![](images/img_13.png)

生成扫描命令

![](images/img_14.png)

## 扫描java项目
下载测试项目

```bash
[root@sonarqube opt]# git clone https://gitee.com/cuiliang0302/sprint_boot_demo.git
[root@sonarqube opt]# cd sprint_boot_demo/
[root@sonarqube sprint_boot_demo]# ls
email.html  Jenkinsfile  LICENSE  mvnw  mvnw.cmd  pom.xml  readme.md  src  test
```

在项目目录下执行如下命令。

```bash
[root@sonarqube sprint_boot_demo]# mvn clean verify sonar:sonar \
  -Dsonar.projectKey=demo \
  -Dsonar.host.url=http://192.168.10.71:9000 \
  -Dsonar.login=sqp_e9767cdfd04344119199edf53375e0e953dfd8d5
```

## 查看扫描结果
分析完成后，页面会自动刷新，将在SonarQube上看到第一个分析：

![](images/img_15.png)



---

<a id="172000780"></a>

## Artifactory制品库 - Artifactory介绍

# 什么是制品与制品库
## <font style="color:rgb(0, 0, 0);">制品</font>
<font style="color:rgb(32, 45, 64);">软件制品是指由源码编译打包生成的二进制文件，不同的开发语言对应着不同格式的二进制文件，这些二进制通常可以直接运行在服务器上。</font>

## <font style="color:rgb(0, 0, 0);">制品库</font>
<font style="color:rgb(32, 45, 64);">制品库用以管理源代码编译后的构建产物，例如Docker、Maven、Helm、npm、PyPI 包等常见制品库类型。制品库可以跟源代码协同进行版本化控制，可以与本地各构建工具和云上的持续集成、持续部署无缝结合，并支持漏洞扫描等特性，是一种企业处理软件开发过程中产生的所有包类型的标准化方式。</font>

# 为什么需要制品库
目前常规的制品管理存在如下问题：

+ 外部依赖下载速度慢；
+ 安全漏洞风险：第三方依赖包的安全风险管理形同虚设，或者滞后；针对引入进来的第三组件没有进行组件扫描，极易引入漏洞；
+ 版本管理混乱：交付包使用FTP或者SVN进行管理，管理粒度相对较粗；由于受到监管约束，一键部署是不可能任务，跨网段的包交付智能依赖于手工拷贝；
+ 制品存储风险：团队内部搭建的制品库是单点的，缺乏集群部署；
+ 资源浪费：因为没有统一的制品库，存在重复建设的问题；维护成本高，或者说目前根本就没有维护

# <font style="color:rgb(34, 34, 38);">Artifactory Jfrog与Nexus对比</font>
| 功能 | jfrog | nexus |
| --- | --- | --- |
| 语言&工具支持 | Maven、Docker、Bower（html&js）、Chef、Puppet、CocoaPods（IOS）、Conan（C/C++）、Debian、Ruby Gems、Git LFS、Gradle、Ivy、Npm、Nuget、Opkg、Php composer、Pypi、SBT、Vagrant（box）、Rpm、Generic（通用） | Bower、Java、Npm、Docker、Nuget、Pypi |
| 多 Docker 镜像注册中心 | 支持多 Docker 镜像注册中心，用户可以做 Docker 镜像的流水线 Promotion。   删除 Docker 镜像时不需要停服。 | 支持 Docker 镜像注册中心。   删除 Docker 镜像时需要停服。 |
| 是否支持 REST API | 全面覆盖的 REST API。与 UI 松耦合，可以基于 REST API 实现自己的 UI。 | 部分支持。 |
| 元数据 | 支持自定义属性以及属性集到任何 Layout 的二进制文件上; | Nexus2 支持 Custom metadata plugin。 |
| CI 集成 | 收集所有构建相关环境信息。   收集发布以及依赖的模块信息。   支持构建 Promotion 升级。   建立二进制文件和构建的关系，多维度管理二进制文件生命周期。支持可视化的正-反向依赖关系展示。 | 不支持。 |
| Checksum 检查 | 在上传时检查 Checksum，若发现该文件已经被上传过，则不重复上传。   若文件丢失 Checksum，会重新计算并记录。 | 不支持。 |
| 主动并发下载依赖 | 支持主动并发下载相关的依赖。例如 A依赖 B，B 依赖 C，Artifactory 在下载 A 的同时，会并发的下载 B 和 C。 | 不支持。 |
| 任意全局查询 | 提供 AQL（Artifactory Query Language）支持任何条件的查询，包括排序，过滤，返回字段等等。 | 支持有限的查询，例如通过名字查询。 |
| 深度文件查询 | 支持在任意可解压文件里搜索类文件，并提供地址。例如：在任意 Jar 包里找到 .Class 文件。 | 不支持。 |
| 仓库数据统计 | 提供仓库大小，实际存储大小，文件数量，下载量，上传者等统计 | 不支持 |
| 查看 Jar 文件 | 能够查看 Jar文件里的任何内容，包括 Jar 文件里的源代码。 | 不支持。 |
| 仓库复制 | 支持文件夹级别的文件实时复制。支持并发多地复制（Multi-Push）保证多地仓库的一致性。 | 不支持。 |
| 支持高可用 | 支持0宕机时间的高可用集群，并且可以自由水平扩展。支持 Active-Active 高可用。 | 支持Master-Slave。 |
| 数据库存储 | 安装包默认绑定 Apache Derby。   支持MySQL，PostgreSQL，Oracle，MS SQL Server。 | 安装包默认绑定 H2。 |
| 商业支持 | 不限制用户数量，不限制服务器硬件配置。   30天免费试用，并可以适当延期。   24/7 support，4小时响应时间。 | 按用户数量收费，不限制服务器数量。   14天免费试用，并可以适当延期。   24/7 support。 |




---

<a id="172000978"></a>

## Artifactory制品库 - Artifactory部署(rpm)

# <font style="color:rgba(0, 0, 0, 0.8);">PostgreSQL15安装部署</font>
## 下载软件包
软件包下载地址：[https://www.postgresql.org/download/](https://www.postgresql.org/download/)，根据系统环境选择合适的版本生成安装命令。

```bash
[root@sonarqube ~]# dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm
[root@sonarqube ~]# dnf -qy module disable postgresql
[root@sonarqube ~]# dnf install -y postgresql15-server
[root@sonarqube ~]# /usr/pgsql-15/bin/postgresql-15-setup initdb
[root@sonarqube ~]# systemctl enable postgresql-15
[root@sonarqube ~]# systemctl start postgresql-15
```

## 设置密码postgres用户密码
```bash
[root@sonarqube ~]# su - postgres
[postgres@sonarqube ~]$ psql
psql (15.6)
输入 "help" 来获取帮助信息.

postgres=# ALTER USER postgres WITH PASSWORD 'postgres';
ALTER ROLE
```

## 重启服务
```bash
[root@sonarqube ~]# systemctl restart postgresql-15
```

## 本地连接测试
```bash
[root@sonarqube ~]# psql -U postgres -h 127.0.0.1
用户 postgres 的口令：postgres
psql (15.6)
输入 "help" 来获取帮助信息.

postgres=# \l
                                                     数据库列表
   名称    |  拥有者  | 字元编码 |  校对规则   |    Ctype    | ICU Locale | Locale Provider |       存取权限        
-----------+----------+----------+-------------+-------------+------------+-----------------+-----------------------
 postgres  | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 |            | libc            | 
 template0 | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 |            | libc            | =c/postgres          +
           |          |          |             |             |            |                 | postgres=CTc/postgres
 template1 | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 |            | libc            | =c/postgres          +
           |          |          |             |             |            |                 | postgres=CTc/postgres
(3 行记录)

postgres=#
```

## 创建用户与库并授权
```bash
postgres=# CREATE ROLE artifactory WITH LOGIN PASSWORD 'artifactory';
CREATE ROLE
postgres=# CREATE DATABASE artifactory;
CREATE DATABASE
postgres=# GRANT ALL PRIVILEGES ON DATABASE artifactory TO artifactory;
GRANT
postgres=# \c artifactory
您现在已经连接到数据库 "artifactory",用户 "postgres".
artifactory=# GRANT ALL PRIVILEGES ON SCHEMA public TO artifactory;
GRANT
postgres=# \l
                                                       数据库列表
    名称     |  拥有者  | 字元编码 |  校对规则   |    Ctype    | ICU Locale | Locale Provider |         存取权限         
-------------+----------+----------+-------------+-------------+------------+-----------------+--------------------------
 artifactory | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 |            | libc            | =Tc/postgres            +
             |          |          |             |             |            |                 | postgres=CTc/postgres   +
             |          |          |             |             |            |                 | artifactory=CTc/postgres
 postgres    | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 |            | libc            | 
 template0   | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 |            | libc            | =c/postgres             +
             |          |          |             |             |            |                 | postgres=CTc/postgres
 template1   | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 |            | libc            | =c/postgres             +
             |          |          |             |             |            |                 | postgres=CTc/postgres
(4 行记录)
```

## 验证
```bash
[root@artifactory ~]# psql -U artifactory -h 127.0.0.1
用户 artifactory 的口令：artifactory
psql (15.7)
输入 "help" 来获取帮助信息.

artifactory=> \c artifactory
您现在已经连接到数据库 "artifactory",用户 "artifactory".
artifactory=> CREATE TABLE test_table (id SERIAL PRIMARY KEY, name VARCHAR(50));
CREATE TABLE
artifactory-> \dt
                   关联列表
 架构模式 |    名称    |  类型  |   拥有者    
----------+------------+--------+-------------
 public   | test_table | 数据表 | artifactory
(1 行记录)
```

# 安装Artifactory
## 下载并安装Artifactory
下载地址：[https://jfrog.com/community/download-artifactory-oss/](https://jfrog.com/community/download-artifactory-oss/)

yum安装

```bash
[root@artifactory ~]# wget https://releases.jfrog.io/artifactory/artifactory-rpms/artifactory-rpms.repo -O jfrog-artifactory-rpms.repo;
[root@artifactory ~]# mv jfrog-artifactory-rpms.repo /etc/yum.repos.d/
[root@artifactory ~]# yum install jfrog-artifactory-oss
```

rpm安装

```bash
[root@artifactory ~]# wget https://releases.jfrog.io/artifactory/artifactory-rpms/jfrog-artifactory-oss/jfrog-artifactory-oss-[RELEASE].rpm?_gl=1*1tj9am9*_ga*NjQ2OTM1MjY0LjE3MTcyNTI1NDE.*_ga_SQ1NR9VTFJ*MTcxNzI1MjU0MC4xLjEuMTcxNzI1MjcxNy4wLjAuNTI5NjE3MDM3*_fplc*THI3bGR2a3FVeG1nR3AwQ2glMkJMTlhXTnd4bUVVMTdZTWlpRmJIJTJGSlpLcWlGVEdITXNjVFBvSHUwZ3U4bnZSTVhqbHU2TE9adEVGWCUyRnNpZnRFTnZBNW1xdWZBMGU2WiUyRjZzMjJYRnBmUzZaYyUyRmFkeFhiY0ZrUTJFb1FDZ0pSZyUzRCUzRA..
[root@artifactory ~]# rpm -ivh jfrog-artifactory-oss-7.84.12.rpm
```

## 配置数据库连接地址
```bash
[root@artifactory ~]# vim /var/opt/jfrog/artifactory/etc/system.yaml
  database:
    type: postgresql
    driver: org.postgresql.Driver
    url: "jdbc:postgresql://localhost:5432/artifactory"
    username: artifactory
    password: artifactory
```

# 启动服务
```bash
[root@artifactory ~]# systemctl start artifactory
[root@artifactory ~]# systemctl enable artifactory
```

# 访问验证
浏览器访问8020端口，默认用户名admin，默认密码password

![](images/img_16.png)





---

<a id="172001741"></a>

## Artifactory制品库 - Artifactory部署(docker)

# 拉取镜像
```bash
[root@artifactory ~]# docker pull releases-docker.jfrog.io/jfrog/artifactory-oss:latest
```

# 运行容器
```bash
docker run --name artifactory -v $JFROG_HOME/artifactory/var/:/var/opt/jfrog/artifactory -d -p 8081:8081 -p 8082:8082 releases-docker.jfrog.io/jfrog/artifactory-oss:latest
```

# 配置PostgreSQL15数据库
pgsql 数据库安装与创建账号授权参考上一章配置

```bash
[root@artifactory ~]# vim /opt/docker/artifactory/etc/system.yaml
  database:
    type: postgresql
    driver: org.postgresql.Driver
    url: "jdbc:postgresql://192.168.10.73:5432/artifactory"
    username: artifactory
    password: artifactory
```

配置完成后重启容器即可。



---

<a id="172001796"></a>

## Artifactory制品库 - Artifactory部署(k8s)

helm repo add jfrog [https://charts.jfrog.io/](https://charts.jfrog.io/)

helm install -name artifactory jfrog/artifactory-oss



---

<a id="172039867"></a>

## Artifactory制品库 - Artifactory使用

# 新建仓库
## 新建本地仓库
![](images/img_17.png)

## 选择仓库类型
![](images/img_18.png)

## 填写仓库信息
![](images/img_19.png)

## 查看仓库信息
![](images/img_20.png)

## 修改文件大小限制
<font style="color:rgb(77, 77, 77);">认是限制上传文件大小为100MB，我们把它改成0，即不限制大小</font>

![](images/img_21.png)

# 上传制品到Artifactory
## 通过web页面上传
选择上传的仓库

![](images/img_22.png)

选择文件

![](images/img_23.png)

查看文件信息

![](images/img_24.png)

## 通过API上传
获取api上传命令

![](images/img_25.png)

上传文件测试

```bash
[root@client2 ~]# ls
anaconda-ks.cfg
[root@client2 ~]# curl -X PUT -u admin:cmVmdGtuOjAxOjE3NDg4NzUyNzE6d0k0c1VxTDdNZnFMNFBNelhiSUtkY2xtVUNY  -T  anaconda-ks.cfg  "http://192.168.10.76:8082/artifactory/demo/anaconda-ks.cfg"
{
  "repo" : "demo",
  "path" : "/anaconda-ks.cfg",
  "created" : "2024-06-02T10:25:46.892+08:00",
  "createdBy" : "admin",
  "downloadUri" : "http://192.168.10.76:8082/artifactory/demo/anaconda-ks.cfg",
  "mimeType" : "application/octet-stream",
  "size" : "1174",
  "checksums" : {
    "sha1" : "15bce48ca41a1e4841e5a1c76761a61970658627",
    "md5" : "f86bac0477b416f1cc582562c3495ede",
    "sha256" : "34819659c8e124ed029db6a40c80e9b864465f25cc77807de459907cbecec756"
  },
  "originalChecksums" : {
    "sha256" : "34819659c8e124ed029db6a40c80e9b864465f25cc77807de459907cbecec756"
  },
  "uri" : "http://192.168.10.76:8082/artifactory/demo/anaconda-ks.cfg"
  }
```

查看仓库文件信息

![](images/img_26.png)



---

<a id="173489744"></a>

## Jmeter自动化测试 - Jmeter介绍

Apache JMeter 是一款开源的负载测试和性能测试工具，广泛应用于对各种服务的性能评估，尤其是对Web应用和API的测试。

# 主要功能
1. **性能测试**：评估服务器、数据库、Web应用等在不同负载条件下的性能表现。
2. **压力测试**：模拟大量并发用户访问，测试系统的稳定性和最大承载能力。
3. **功能测试**：验证系统的功能是否按照预期工作。
4. **分布式测试**：支持分布式测试，可以通过多台机器模拟大规模并发用户。
5. **脚本录制**：内置录制工具，可以通过代理方式记录用户操作并生成测试脚本。

# 支持的协议
JMeter支持多种协议，包括但不限于：

+ HTTP、HTTPS
+ SOAP / REST Web服务
+ FTP
+ JDBC (数据库连接)
+ LDAP
+ JMS (Java消息服务)
+ SMTP、POP3、IMAP (邮件协议)

# Jmeter原理
Jmeter不仅可以作为性能测试工具，还可以作为接口测试工具。作为不同类型的工具，Jmeter的原理也有所不同，具体如下：



## 作为性能测试工具


Jmeter通过线程组驱动多个线程的方式运行，来模拟真实用户对Web服务器的访问压力。实现过程如下图所示

![](images/img_27.png)

Jmeter作为Web服务器和浏览器之间的代理网关，能够录制浏览器的请求、响应Web服务器和生成测试脚本。在测试脚本的基础上，Jmeter通过线程组模拟真实用户的访问。

## 作为接口测试工
Jmeter向服务器提交请求，从服务器取回请求返回的响应结果，实现过程如下图所示：

![](images/img_28.png)

作为发起请求的客户端，Jmeter是组装请求报文结构的容器，例如：请求行、请求头、请求数据等，并可将响应结果进行可视化展示。

对于接口的复杂逻辑，Jmeter有丰富的元件进行支持，如前/后置处理、响应断言、也可以自行开发插件。



---

<a id="173491430"></a>

## Jmeter自动化测试 - Jmeter部署(源码+docker)

# 源码部署jmeter
## 安装jdk
```bash
[root@jmeter ~]# dnf install java-17-openjdk -y 
[root@jmeter ~]# java -version
openjdk version "17.0.11" 2024-04-16 LTS
OpenJDK Runtime Environment (Red_Hat-17.0.11.0.9-3) (build 17.0.11+9-LTS)
OpenJDK 64-Bit Server VM (Red_Hat-17.0.11.0.9-3) (build 17.0.11+9-LTS, mixed mode, sharing)
```

## 安装<font style="color:rgb(77, 77, 77);">Jmeter</font>
下载地址：[https://jmeter.apache.org/download_jmeter.cgi](https://jmeter.apache.org/download_jmeter.cgi)

### 安装软件包
```bash
[root@jmeter ~]# wget https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.6.3.tgz
[root@jmeter ~]# tar -zxf apache-jmeter-5.6.3.tgz 
[root@jmeter ~]# mv apache-jmeter-5.6.3 /opt/jmeter
[root@jmeter ~]# cd /opt/jmeter/
[root@jmeter jmeter]# ls
bin  docs  extras  lib  LICENSE  licenses  NOTICE  printable_docs  README.md
```

### 配置环境变量
```bash
[root@jmeter jmeter]# vim /etc/profile
export JMETER_HOME=/opt/jmeter
export CLASSPATH=$JMETER_HOME/lib/ext/ApacheJMeter_core.jar:$JMETER_HOME/lib/jorphan.jar:$CLASSPATH
export PATH=$JMETER_HOME/bin:$PATH
[root@jmeter bin]# source /etc/profile
```

### 验证
```bash
[root@jmeter bin]# jmeter -v
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
    _    ____   _    ____ _   _ _____       _ __  __ _____ _____ _____ ____
   / \  |  _ \ / \  / ___| | | | ____|     | |  \/  | ____|_   _| ____|  _ \
  / _ \ | |_) / _ \| |   | |_| |  _|    _  | | |\/| |  _|   | | |  _| | |_) |
 / ___ \|  __/ ___ \ |___|  _  | |___  | |_| | |  | | |___  | | | |___|  _ <
/_/   \_\_| /_/   \_\____|_| |_|_____|  \___/|_|  |_|_____| |_| |_____|_| \_\ 5.6.3

Copyright (c) 1999-2024 The Apache Software Foundation
```

# docker部署jmeter
由于官方并未提供jmeter镜像，且第三方镜像版本较老，因此推荐构建自定义镜像完成部署。

## 构建镜像
```bash
[root@jmeter ~]# cat Dockerfile
# FROM openjdk:17-jdk-alpine
FROM harbor.local.com/library/openjdk:17-jdk-alpine
ENV JMETER_HOME /opt/jmeter
ENV PATH $JMETER_HOME/bin:$PATH
ENV CLASSPATH $JMETER_HOME/lib/ext/ApacheJMeter_core.jar:$JMETER_HOME/lib/jorphan.jar:$CLASSPATH
COPY apache-jmeter-5.6.3.tgz /tmp/
RUN tar -zxf /tmp/apache-jmeter-5.6.3.tgz -C /tmp \
  && mv /tmp/apache-jmeter-5.6.3 /opt/jmeter \
  && rm -rf /tmp/apache-jmeter-5.6.3.tgz
CMD ["jmeter","-v"]
[root@jmeter ~]# docker build -t harbor.local.com/cicd/jmeter:5.6.3 .
```

## 验证
```bash
[root@jmeter ~]# docker run harbor.local.com/cicd/jmeter:5.6.3
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
Jun 13, 2024 5:04:59 AM java.util.prefs.FileSystemPreferences$1 run
INFO: Created user preferences directory.
    _    ____   _    ____ _   _ _____       _ __  __ _____ _____ _____ ____
   / \  |  _ \ / \  / ___| | | | ____|     | |  \/  | ____|_   _| ____|  _ \
  / _ \ | |_) / _ \| |   | |_| |  _|    _  | | |\/| |  _|   | | |  _| | |_) |
 / ___ \|  __/ ___ \ |___|  _  | |___  | |_| | |  | | |___  | | | |___|  _ <
/_/   \_\_| /_/   \_\____|_| |_|_____|  \___/|_|  |_|_____| |_| |_____|_| \_\ 5.6.3

Copyright (c) 1999-2024 The Apache Software Foundation
```



---

<a id="173494371"></a>

## Jmeter自动化测试 - Jmeter使用

# 创建自动化测试脚本
推荐使用apifox工具创建自动化测试脚本，并导入jmeter进行测试，具体可参考文档：

[https://apifox.com/help/automated-testing/test-scenarios/creating-test-case](https://apifox.com/help/automated-testing/test-scenarios/creating-test-case)

# 本地执行自动化测试
将apifox创建的自动化测试脚本导出为demo.jmx文件，执行以下命令：

-n：非GUI模式运行jmeter

-t：自动化测试脚本路径

-l：指定测试结果保存文件为jtl文件格式

-e：测试完成后，生成测试报告

-o：指定测试报告存放的路径

-Jjemter.save.saveservice.output_format=csv：测试结果格式化为csv

```bash
[root@jmeter ~]# jmeter -n -t /root/demo.jmx -l report.jt1 -e -o report -Jjemter.save.saveservice.output_format=csv
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
Creating summariser <summary>
Created the tree successfully using /root/demo.jmx
Starting standalone test @ 2024 Jun 13 10:49:14 CST (1718246954236)
Waiting for possible Shutdown/StopTestNow/HeapDump/ThreadDump message on port 4445
summary =      1 in 00:00:00 =    2.0/s Avg:   355 Min:   355 Max:   355 Err:     0 (0.00%)
Tidying up ...    @ 2024 Jun 13 10:49:14 CST (1718246954825)
... end of run
```

# 远程执行自动化测试
## 服务端启动
添加服务脚本

```bash
[root@jmeter ~]# vim /etc/systemd/system/syst	.service
[Unit]
Description=Apache JMeter Server
After=network.target

[Service]
Type=simple
ExecStart=/opt/jmeter/bin/jmeter-server -Dserver.rmi.ssl.disable=true
Restart=always

[Install]
WantedBy=multi-user.target
```

启动服务

```bash
[root@jmeter ~]# systemctl daemon-reload
[root@jmeter ~]# systemctl start jmeter-server
[root@jmeter ~]# systemctl status jmeter-server
```

## 客户端调用
使用docker客户端调用测试

```bash
[root@jmeter ~]# mkdir -p /opt/docker/jmeter
# 复制自动化测试脚本
[root@jmeter ~]# cd /opt/docker/jmeter/
[root@jmeter jmeter]# cp /root/demo.jmx .
# 启动容器
[root@jmeter jmeter]# docker run -it -v /opt/docker/jmeter:/data harbor.local.com/cicd/jmeter:5.6.3 sh
/ # cd /data/
/data # ls
demo.jmx
/data # jmeter -n -t /data/demo.jmx -R 192.168.10.77:1099 -l report.jt1 -e -o /data/report -Jjemter.save.saveservice.output_format=csv -Dserver.rmi.ssl.disable=true
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
Creating summariser <summary>
Created the tree successfully using /data/demo.jmx
Configuring remote engine: 192.168.10.77:1099
Starting distributed test with remote engines: [192.168.10.77:1099] @ 2024 Jun 13 05:19:47 GMT (1718255987943)
Remote engines have been started:[192.168.10.77:1099]
Waiting for possible Shutdown/StopTestNow/HeapDump/ThreadDump message on port 4445
summary =      1 in 00:00:00 =    7.2/s Avg:    84 Min:    84 Max:    84 Err:     0 (0.00%)
Tidying up remote @ 2024 Jun 13 05:19:48 GMT (1718255988283)
... end of run
```

# 查看测试报告
```bash
[root@jmeter ~]# ls
anaconda-ks.cfg  apache-jmeter-5.6.3.tgz  demo.jmx  jmeter.log  report  report.jt1
[root@jmeter ~]# cd report/
[root@jmeter report]# ls
content  index.html  sbadmin2-1.0.7  statistics.json
```

打开index.html文件，内容如下：

![](images/img_29.png)



---

<a id="15130009"></a>

## Jenkins安装部署 - jenkins部署(rpm)

# 安装JDK
每个版本的jenkins依赖的jdk版本不一致，可以参考页面[https://pkg.jenkins.io/redhat-stable/](https://pkg.jenkins.io/redhat-stable/)，根据要安装的jenkins版本，安装合适的jdk。例如本次安装的jenkins版本为2.361.1，依赖的jdk版本为java11或者java17

## yum方式安装jdk(推荐)
```bash
# 安装
[root@jenkins ~]# yum install java-11-openjdk
# 验证
[root@jenkins jenkins]# java -version
openjdk version "11.0.19" 2023-04-18 LTS
OpenJDK Runtime Environment (Red_Hat-11.0.19.0.7-2) (build 11.0.19+7-LTS)
OpenJDK 64-Bit Server VM (Red_Hat-11.0.19.0.7-2) (build 11.0.19+7-LTS, mixed mode, sharing)
```

## 二进制安装jdk
下载地址：[https://www.openlogic.com/openjdk-downloads](https://www.openlogic.com/openjdk-downloads)

```bash
[root@jenkins ~]# wget https://builds.openlogic.com/downloadJDK/openlogic-openjdk/17.0.7+7/openlogic-openjdk-17.0.7+7-linux-x64.tar.gz
[root@jenkins ~]# mkdir /usr/local/jdk
[root@jenkins ~]# tar -zxf openlogic-openjdk-17.0.7+7-linux-x64.tar.gz -C /usr/local/jdk
[root@jenkins ~]# cd /usr/local/jdk/openlogic-openjdk-17.0.7+7-linux-x64/
[root@jenkins openlogic-openjdk-17.0.7+7-linux-x64]# ls
bin  conf  demo  include  jmods  legal  lib  man  release
# 添加环境变量
[root@jenkins ~]# vim /etc/profile
export JAVA_HOME=/usr/local/jdk/openlogic-openjdk-17.0.7+7-linux-x64
export CLASSPATH=.:${JAVA_HOME}/jre/lib/rt.jar:${JAVA_HOME}/lib/dt.jar:${JAVA_HOME}/lib/tools.jar
export PATH=$PATH:${JAVA_HOME}/bin
[root@jenkins ~]# source /etc/profile
[root@jenkins openlogic-openjdk-17.0.7+7-linux-x64]# java -version
openjdk version "17.0.7" 2023-04-18
OpenJDK Runtime Environment OpenLogic-OpenJDK (build 17.0.7+7-adhoc.root.jdk17u)
OpenJDK 64-Bit Server VM OpenLogic-OpenJDK (build 17.0.7+7-adhoc.root.jdk17u, mixed mode, sharing)
# 创建软连接
[root@jenkins ~]# ln -s /usr/local/jdk/openlogic-openjdk-17.0.7+7-linux-x64/bin/java /usr/bin/java
```

# 安装jenkins
## 在线安装
+ 添加Jenkins库到yum库，Jenkins将从这里下载安装。

```bash
wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
yum install jenkins
```

## 离线安装
+ 如果因为网络问题导致不能安装官网离线包，可以下载阿里巴巴的jenkins离线包[https://mirrors.aliyun.com/jenkins/](https://mirrors.aliyun.com/jenkins/)

```bash
wget https://mirrors.aliyun.com/jenkins/redhat-stable/jenkins-2.440.2-1.1.noarch.rpm
rpm -ivh jenkins-2.440.2-1.1.noarch.rpm
```

## 修改配置
+ 配置jenkis的端口 (此端口不冲突可以不修改)

`vi /etc/sysconfig/jenkins` 

+ 找到修改端口号：

`JENKINS_PORT="8080"`

# 启动jenkins
## 启动服务
`systemctl start jenkins`

`systemctl enable jenkins`  

+ 安装成功后Jenkins将作为一个守护进程随系统启动
+ 系统会创建一个“jenkins”用户来允许这个服务，如果改变服务所有者，同时需要修改/var/log/jenkins, /var/lib/jenkins, 和/var/cache/jenkins的所有者
+ 启动的时候将从/etc/sysconfig/jenkins获取配置参数
+ 默认情况下，Jenkins运行在8080端口，在浏览器中直接访问该端进行服务配置
+ Jenkins的RPM仓库配置被加到/etc/yum.repos.d/jenkins.repo

## 访问jenkins 
+ 在浏览器中访问 http://主机ip:8080/

# 常见问题
1. 使用二进制安装jdk17后，启动jenkins报错日志如下：

```bash
2023-07-02 09:06:36.665+0000 [id=1]     SEVERE  hudson.util.BootFailure#publish: Failed to initialize Jenkins
java.lang.UnsatisfiedLinkError: /usr/local/jdk/openlogic-openjdk-17.0.7+7-linux-x64/lib/libfontmanager.so: libharfbuzz.so.0: cannot open shared object file: No such file or directory
```

问题原因：系统缺少libharfbuzz.so模块，解决办法：

```bash
dnf -y install harfbuzz
```

或者根据系统版本离线下载，下载地址：[https://pkgs.org/download/libharfbuzz.so.0()(64bit)](https://pkgs.org/download/libharfbuzz.so.0()(64bit))

2. jenkins提示离线

![](images/img_30.png)

访问http://ip:8080/pluginManager/advanced，改为国内源，地址为[https://mirrors.huaweicloud.com/jenkins/updates/update-center.json](https://mirrors.huaweicloud.com/jenkins/updates/update-center.json)

之后重启jenkins即可。



---

<a id="131404558"></a>

## Jenkins安装部署 - jenkins部署(docker)

# 拉取Jenkins镜像
```bash
docker pull jenkins/jenkins:2.401.2-lts
```

# 运行容器
```bash
docker run --name jenkins -p 8080:8080 -d --restart=always -v $PWD/data:/var/jenkins_home jenkins/jenkins:2.401.2-lts
```

 

# 访问jenkins 
+ 在浏览器中访问 http://主机ip:8080/



---

<a id="131416735"></a>

## Jenkins安装部署 - jenkins部署(k8s)

# 创建资源
## rbac
```yaml
[root@tiaoban cicd]# cat > jenkins-rbac.yaml << EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  name: jenkins
  namespace: cicd
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: jenkins
rules:
  # 详细写对什么资源有什么操作可以用kubectl explain ClusterRole.rules，也可以授权访问所有k8s资源增删改查
  - apiGroups: [""]
    resources: ["*"]
    verbs: ["*"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: jenkins
  namespace: cicd
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: jenkins
subjects:
  - kind: ServiceAccount
    name: jenkins
    namespace: cicd
EOF
```

## pvc
```yaml
[root@tiaoban cicd]# cat > jenkins-pvc.yaml << EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: jenkins-pvc
  namespace: cicd
spec:
  storageClassName: nfs-client
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
EOF
```

## deployment
```yaml
[root@tiaoban cicd]# cat > jenkins-deployment.yaml << EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: jenkins
  namespace: cicd
spec:
  selector:
    matchLabels:
      app: jenkins
  replicas: 1
  template:
    metadata:
      labels:
        app: jenkins
    spec:
      serviceAccountName: jenkins
      containers:
        - name: jenkins
          image: harbor.local.com/cicd/jenkins:2.455
          ports:
            - containerPort: 8080
              name: web
            - containerPort: 50000
              name: slave
          readinessProbe:
            tcpSocket:
              port: web
          livenessProbe:
            httpGet:
              path: /login
              port: web
            timeoutSeconds: 5
          startupProbe:
            httpGet:
              path: /login
              port: web
            failureThreshold: 20
            periodSeconds: 60
          resources:
            requests:
              memory: "512Mi"
              cpu: "500m"
            limits:
              memory: "8Gi"
              cpu: "4"
          volumeMounts:
            - name: data
              mountPath: /var/jenkins_home
      securityContext:
        runAsUser: 1000
        runAsGroup: 1000
        fsGroup: 1000
      volumes:
        - name: data
          persistentVolumeClaim:
            claimName: jenkins-pvc
EOF
```

## svc
```yaml
[root@tiaoban cicd]# cat > jenkins-svc.yaml << EOF
apiVersion: v1
kind: Service
metadata:
  name: jenkins
  namespace: cicd
spec:
  selector:
    app: jenkins
  ports:
    - port: 8080
      targetPort: web
      name: web
    - port: 50000
      targetPort: slave
      name: slave
EOF
```

## ingress
```yaml
[root@tiaoban cicd]# cat > jenkins-ingress.yaml << EOF
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: jenkins
  namespace: cicd
spec:
  entryPoints:
    - web
  routes:
    - match: Host(`jenkins.local.com`)
      kind: Rule
      services:
        - name: jenkins
          port: 8080
EOF
```

# 访问验证
## 查看资源状态
```bash
[root@tiaoban jenkins]# kubectl get all -n cicd
NAME                           READY   STATUS    RESTARTS   AGE
pod/jenkins-59dfbb6854-b4p8d   1/1     Running   0          86s

NAME                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)              AGE
service/jenkins       ClusterIP   10.102.200.224   <none>        8080/TCP,50000/TCP   8s

NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/jenkins   1/1     1            1           87s

NAME                                 DESIRED   CURRENT   READY   AGE
replicaset.apps/jenkins-59dfbb6854   1         1         1       87s
```

## 访问验证
修改hosts记录，新增`192.168.10.10 jenkins.local.com`，访问即可。

![](images/img_31.png)

查看初始密码

```bash
[root@tiaoban jenkins]# kubectl exec -it -n cicd jenkins-59dfbb6854-b4p8d -- bash
jenkins@jenkins-59dfbb6854-b4p8d:/$ cat /var/jenkins_home/secrets/initialAdminPassword
b3bad5eaf1ad4ebda9723f0003dcdf2a
```



---

<a id="131416679"></a>

## Jenkins基础配置 - jenkins基本设置

#  初始化设置
## 获取管理员密码
```bash
[root@tiaoban cicd]# cat /var/jenkins_home/secrets/initialAdminPassword
0ce189b4fad94ad487ec3263a061a3be
```

## 安装推荐的插件
![](images/img_32.png)

## 创建管理员用户
也可以继续使用admin账号，在系统页面修改密码。

![](images/img_33.png)

## 配置jenkins地址
如果是docker或者rpm包方式部署，填写jenkins域名即可，如果是k8s部署，可以填写svc形式。即http://jenkins.cicd.svc:8080/

![](images/img_34.png)

# 使用配置
## 修改admin用户密码和时区
依次点击用户名——>Configure找到密码和时区设置

![](images/img_35.png)

## 修改插件安装源
修改为国内插件源地址，提高插件下载速度

[https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json](https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json)

![](images/img_36.png)

## 插件卸载
如果遇到插件异常导致jenkins系统无法使用，可以尝试卸载异常插件

```bash
# 停止jenkins服务
systemctl stop jenkins
# 删除插件目录下异常插件.jpi文件
rm -rf /var/jenkins_home/plugins/role-strategy.jpi
# 重启jenkins
systemctl start jenkins
```



---

<a id="131549677"></a>

## Jenkins基础配置 - jenkins用户权限

# 安装启用
## 安装插件
我们可以利用Role-based Authorization Strategy插件来管理Jenkins用户权限

![](images/img_37.png)

## 开启权限全局安全配置
依次点击jenkins——>系统管理——>全局安全配置，将授权策略改为Role-Based Strategy，也就是基于角色的权限。

![](images/img_38.png)

# 创建测试任务
分别创建vue_prod、Vue_test、java-test三个项目用于后续测试。

![](images/img_39.png)

# 权限配置
## 创建角色
依次点击jenkins——>系统管理——>Manage and Assign Roles

![](images/img_40.png)

## 配置角色权限
**Global roles**

创建全局角色，例如管理员，作业创建者，匿名角色等，从而可以在全局基础上设置总体，代理，作业，运行，查看和SCM权限。

我们这里添加一个只读权限角色名为guest。

![](images/img_41.png)

**Item roles**

创建项目角色，仅允许基于项目设置Job和Run权限。

<font style="color:rgb(0, 0, 0);background-color:rgb(243, 244, 245);">在这里我们有两个项目vue_develop与java_develop，我们分别用不同的项目权限对项目进行管理。</font>

在添加Item roles的时候有如下规则：

+ 如果将字段设置为java-.*，则该角色将匹配名称以开头的所有作业java-.
+ 模式区分大小写。要执行不区分大小写的匹配，请使用(?i)表示法： (?i)vue_.*这样不区分大小写的。
+ 可以使用以下表达式匹配文件夹 ^foo/bar.*

在这里我们分别创建java_develop和vue_develop角色，并授予不同的权限。

![](images/img_42.png)

创建完item roles后，我们可以点击蓝色pattern表达式查看是否匹配到任务。

![](images/img_43.png)

![](images/img_44.png)

# 用户配置
## 创建用户
<font style="color:rgb(77, 77, 77);">创建完角色后，接下来创建三个用户分别是zhangsan、lisi、wangwu，分别对应上面添加的三个角色。</font>

<font style="color:rgb(77, 77, 77);">依次点击jenkins——>系统管理——>管理用户——>Create User</font>

![](images/img_45.png)

创建完的用户列表如下图所示

![](images/img_46.png)

## 用户授权
有了用户和角色后，接下来的操作就是将用户与角色进行绑定。

依次点击jekins——>系统管理——>Manage and Assign Roles——>Assign Roles，

首先需要将所有用户授予guest权限，否则看不到不具备读权限，无法显示。然后将李四与java_develop角色绑定，王五与vue_develop角色绑定，张三不绑定item权限。

![](images/img_47.png)

# 登录验证
## 张三
因为张三只具备guest角色权限，因此虽然可以登录jenkins，但是看不到任何任务信息。

![](images/img_48.png)

## 李四
李四绑定了java_develop角色，因此只能看到java相关的任务信息。

![](images/img_49.png)

## 王五
王五绑定了vue_develop角色，因此只能看到vue相关的任务信息。

![](images/img_50.png)







---

<a id="131888848"></a>

## Jenkins基础配置 - jenkins凭据管理

jenkins在持续部署过程中，经常需要密文存储各种凭据信息，例如harbor账号密码、数据库账号密码、git账号密码等信息，以便jenkins能与这些第三方应用进行集成交互。

# 安装插件
在jenkins的插件管理中安装Credentials Binding插件

![](images/img_51.png)

安装完成后，在jenkins菜单中可以看到凭证功能菜单

![](images/img_52.png)

# 凭据使用
## 创建凭据
依次点击jenkins——>系统管理——>Credentials——>全局凭据——> Add Credentials

![](images/img_53.png)

## 用户密码
用于使用用户名和密码验证，详细使用可参考jenkins通过http/https方式拉取gitlab代码配置，创建凭据内容如下：

![](images/img_54.png)

## SSH密钥
用于ssh密钥验证，详细使用可参考jenkins通过ssh认证拉取gitlab代码配置，创建凭据内容如下：

![](images/img_55.png)

## <font style="color:rgb(48, 49, 51);">Certificate</font>
用于存储<font style="color:rgb(48, 49, 51);">PKCS#12格式的pfx证书文件，详细使用可参考jenkins连接远程k8s集群配置，创建凭据内容如下：</font>

![](images/img_56.png)

其他凭据使用后续补充



---

<a id="166306888"></a>

## Jenkins基础配置 - slave集群配置

# <font style="color:rgba(51, 51, 51, 1);">Jenkins的Master/Slave机制</font>
Jenkins采用Master/Slave架构。Master/Slave相当于Server和agent的概念，Master提供web接口让用户来管理Job和Slave，Job可以运行在Master本机或者被分配到Slave上运行。一个Master可以关联多个Slave用来为不同的Job或相同的Job的不同配置来服务。

Jenkins的Master/Slave机制除了可以并发的执行构建任务，加速构建以外。还可以用于分布式自动化测试，当自动化测试代码非常多或者是需要在多个浏览器上并行的时候，可以把测试代码划分到不同节点上运行，从而加速自动化测试的执行。

# 集群角色功能
**Master：**Jenkins服务器。主要是处理调度构建作业，把构建分发到Slave节点实际执行，监视Slave节点的状态。当然，也并不是说Master节点不能跑任务。构建结果和构建产物最后还是传回到Master节点，比如说在jenkins工作目录下面的workspace内的内容，在Master节点照样是有一份的。

**Slave：**执行机(奴隶机)。执行Master分配的任务，并返回任务的进度和结果。

![](images/img_57.png)

Jenkins Master/Slave的搭建需要至少两台机器，一台Master节点，一台Slave节点（实际生产中会有多个Slave节点）。

# 搭建步骤
前提：Master和Slave都已经安装JDK

+ Master节点上安装和配置Jenkins
+ Master节点上新增Slave节点配置，生成Master-Slave通讯文件SlaveAgent
+ Slave节点上运行SlaveAgent，通过SlaveAgent实现和Master节点的通讯
+ Master节点上管理Jenkins项目，指定Slave调度策略，实现Slave节点的任务分配和结果搜集来源。

# <font style="color:rgba(51, 51, 51, 1);">为Jenkins配置Master节点</font>
Master不需要主动去建立，安装Jenkins，在登录到主界面时，这台电脑就已经默认为master。

选择“Manage Jenkins”->“Manage Nodes and Clouds”，可以看到Master节点相关信息：

![](images/img_58.png)

# <font style="color:rgba(51, 51, 51, 1);">为Jenkins添加Slave Node</font>
## 开启tcp代理端口
jenkins web代理是指slave通过jenkins服务端提供的一个tcp端口，与jenkins服务端建立连接，docker版的jenkins默认开启web tcp代理，端口为50000，而自己手动制作的jenkins容器或者在物理机环境部署的jenkins，都需要手动开启web代理端口，如果不开启，slave无法通过web代理的方式与jenkins建立连接。

jenkins web代理的tcp端口不是通过命令启动的而是通过在全局安全设置中配置的，配置成功后会在系统上运行一个指定的端口

![](images/img_59.png)

## 添加节点信息
在Jenkins界面选择“Manage Jenkins”->“Manage Nodes and Clouds”->“New Node

![](images/img_60.png)

配置Agent信息

![](images/img_61.png)

Name：Slave机器的名字

Description：描述 ，不重要 随意填

Number of excutors：允许在这个节点上并发执行任务的数量，即同时可以下发多少个Job到Slave上执行，一般设置为 cpu 支持的线程数。[注：Master Node也可以通过此参数配置Master是否也执行构建任务、还是仅作为Jenkins调度节点]

Remote root directory：用来放工程的文件夹，jenkins master上设置的下载的代码会放到这个工作目录下。

Lables：标签，用于实现后续Job调度策略，根据Jobs配置的Label选择Salve Node

Usage：支持两种模式“Use this Node as much as possible”、“Only build Jobs with Label expressiong matching this Node”。选择“Only build Jobs with Label     expressiong matching this Node”，

添加完毕后，在Jenkins主界面，可以看到新添加的Slave Node，但是红叉表示此时的Slave并未与Master建立起联系。

![](images/img_62.png)

## slave节点配置
安装jdk

```bash
[root@springboot1 ~]# dnf -y install java-17-openjdk
[root@springboot1 ~]# java -version
openjdk version "17.0.10" 2024-01-16 LTS
OpenJDK Runtime Environment (Red_Hat-17.0.10.0.7-1) (build 17.0.10+7-LTS)
OpenJDK 64-Bit Server VM (Red_Hat-17.0.10.0.7-1) (build 17.0.10+7-LTS, mixed mode, sharing)
```

安装agent

点击节点信息，根据控制台提示执行安装agent命令

```bash
[root@springboot1 ~]# curl -sO http://192.168.10.73:8080/jnlpJars/agent.jar
[root@springboot1 ~]# java -jar agent.jar -url http://192.168.10.73:8080/ -secret f47e23c0ee95ce8abe58520d3bfe2e048ea36d170841cae8086f77131752f1f9 -name node1 -workDir "/opt/jenkins"
```

## 查看agent状态
![](images/img_63.png)

#   
<font style="color:rgba(51, 51, 51, 1);">指定Node调度策略                                                    </font>
创建Job的页面，“General”下勾选“Restric where this project can be run”，填写Label Expression。

![](images/img_64.png)



---

<a id="132343694"></a>

## Jenkins流水线 - Pipeline简介

# 概念
Pipeline简单来说，就是一套运行在 Jenkins 上的工作流框架，将原来独立运行于单个或者多个节点的任务连接起来，实现单个任务难以完成的复杂流程编排和可视化的工作。

# 使用Pipeline有以下好处
代码：Pipeline以代码的形式实现，通常被检入源代码控制，使团队能够编辑，审查和迭代其传送流程。 

持久：无论是计划内的还是计划外的服务器重启，Pipeline都是可恢复的。 

可停止：Pipeline可接收交互式输入，以确定是否继续执行Pipeline。 

多功能：Pipeline支持现实世界中复杂的持续交付要求。它支持fork/join、循环执行，并行执行任务的功能。 

可扩展：Pipeline插件支持其DSL的自定义扩展 ，以及与其他插件集成的多个选项。

# 如何创建 Jenkins Pipeline
Pipeline 脚本是由 Groovy 语言实现的，但是我们没必要单独去学习 Groovy

Pipeline 支持两种语法：Declarative(声明式)和 Scripted Pipeline(脚本式)语法。声明式pipeline是官方主推的方式

Pipeline 也有两种创建方法：可以直接在 Jenkins 的 Web UI 界面中输入脚本；也可以通过创建一个 Jenkinsfile 脚本文件放入项目源码库中（一般我们都推荐在 Jenkins 中直接从源代码控制(SCM)中直接载入 Jenkinsfile Pipeline 这种方法）。

# 获取示例
实际工作中没必要学习每个pipeline写法，可以在jenkins中配置相关参数，即可生成pipeline。

![](images/img_65.png)



---

<a id="132344420"></a>

## Jenkins流水线 - Pipeline语法入门

# 创建流水线任务
![](images/img_66.png)

# 配置声明式pipeline
## 使用hello world模板
创建完任务后，在流水线配置中，选择hello world模板，生成的内容如下：

```groovy
pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
    }
}

```

stages：代表整个流水线的所有执行阶段。通常stages只有1个，里面包含多个stage

stage：代表流水线中的某个阶段，可能出现n个。一般分为拉取代码，编译构建，部署等阶段。

steps：代表一个阶段内需要执行的逻辑。steps里面是shell脚本，git拉取代码，ssh远程发布等任意内容。

## 自定义pipeline
根据hello world模板，编写一个简单的pipeline。

```bash
pipeline {
    agent any

    stages {
        stage('拉取代码') {
            steps {
                echo '拉取代码'
            }
        }
        stage('编译构建') {
            steps {
                echo '编译构建'
            }
        }
        stage('项目部署') {
            steps {
                echo '项目部署'
            }
        }
    }
}
```

## 运行任务测试
点击立即构建，可以在状态菜单中看到每个阶段信息。

![](images/img_67.png)

# 配置脚本式pipeline
## 自定义pipeline
```bash
node {
    stage('拉取代码'){
        echo '拉取代码'
    }
    stage('编译构建'){
        echo '编译构建'
    }
    stage('项目部署'){
        echo '项目部署'
    }
}
```

Node：节点，一个 Node 就是一个 Jenkins 节点，Master 或者 Agent，是执行 Step 的具体运行环境，后续Jenkins的Master-Slave架构的时候用到。

Stage：阶段，一个 Pipeline 可以划分为若干个 Stage，每个 Stage 代表一组操作，比如：Build、Test、Deploy，Stage 是一个逻辑分组的概念。

Step：步骤，Step 是最基本的操作单元，可以是打印一句话，也可以是构建一个 Docker 镜像，由各类 Jenkins 插件提供，比如命令：sh ‘make’，就相当于我们平时 shell 终端中执行 make 命令一样。

## 运行任务测试
运行结果与声明式Pipeline完全一致。

![](images/img_68.png)



---

<a id="166568005"></a>

## Jenkins流水线 - 流水线语法详解

# 一、什么是流水线
jenkins 有 2 种流水线分为声明式流水线与脚本化流水线，脚本化流水线是 jenkins 旧版本使用的流水线脚本，新版本 Jenkins 推荐使用声明式流水线。文档只介绍声明流水线。

## 1.1 声明式流水线
在声明式流水线语法中，流水线过程定义在 Pipeline{}中，Pipeline 块定义了整个流水线中完成的所有工作，比如

参数说明：

+ agent any：在任何可用的代理上执行流水线或它的任何阶段，也就是执行流水线过程的位置，也可以指定到具体的节点
+ stage：定义流水线的执行过程（相当于一个阶段），比如下文所示的 Build、Test、Deploy， 但是这个名字是根据实际情况进行定义的，并非固定的名字
+ steps：执行某阶段具体的步骤。

```plain
//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
    stages {
      stage('Build') {
        steps {
          echo 'Build'
        }
      }
      stage('Test') {
        steps {
          echo 'Test'
        }
      }
      stage('Deploy') {
        steps {
          echo 'Deploy'
      }
    }
  }
}
```

## 1.2 脚本化流水线
在脚本化流水线语法中，会有一个或多个 Node（节点）块在整个流水线中执行核心工作

参数说明:

+ node：在任何可用的代理上执行流水线或它的任何阶段，也可以指定到具体的节点
+ stage：和声明式的含义一致，定义流水线的阶段。Stage 块在脚本化流水线语法中是可选的，然而在脚本化流水线中实现 stage 块，可以清楚地在 Jenkins UI 界面中显示每个 stage 的任务子集。

```plain
//Jenkinsfile (Scripted Pipeline)
node {
  stage('Build') {
    echo 'Build'
  }
  stage('Test') {
    echo 'Test'
  }
  stage('Deploy') {
    echo 'Deploy'
  }
}
```

# 二、声明式流水线
声明式流水线必须包含在一个 Pipeline 块中，比如是一个 Pipeline 块的格式

```plain
pipeline {
  /* insert Declarative Pipeline here */
}
```

在声明式流水线中有效的基本语句和表达式遵循与 Groovy 的语法同样的规则，但有以下例外

+ 流水线顶层必须是一个 block，即 `pipeline{}`
+ 分隔符可以不需要分号，但是每条语句都必须在自己的行上
+ 块只能由 Sections、Directives、Steps 或 assignment statements 组成
+ 属性引用语句被当做是无参数的方法调用，比如 input 会被当做 input()。

## 2.1 Sections
声明式流水线中的 Sections 不是一个关键字或指令，而是包含一个或多个 Agent、Stages、 post、Directives 和 Steps 的代码区域块。

### 1.Agent
Agent 表示整个流水线或特定阶段中的步骤和命令执行的位置，该部分必须在 pipeline 块的顶层被定义，也可以在 stage 中再次定义，但是 stage 级别是可选的。

#### any
在任何可用的代理上执行流水线，配置语法

```plain
pipeline {
  agent any
}
```

#### none
表示该 Pipeline 脚本没有全局的 agent 配置。当顶层的 agent 配置为 none 时， 每个 stage 部分都需要包含它自己的 agent。配置语法

```plain
pipeline {
  agent none
  stages {
    stage('Stage For Build'){
      agent any
    }
  }
}
```

#### label
以节点标签形式选择某个具体的节点执行 Pipeline 命令，例如：agent { label 'my-defined-label' }。节点需要提前配置标签。

```plain
pipeline {
  agent none
    stages {
      stage('Stage For Build'){
        agent { label 'role-master' }
        steps {
          echo "role-master"
        }
      }
    }
}
```

#### node
和 label 配置类似，只不过是可以添加一些额外的配置，比如 customWorkspace(设置默认工作目录)

```plain
pipeline {
  agent none
    stages {
      stage('Stage For Build'){
        agent {
          node {
            label 'role-master'
            customWorkspace "/tmp/zhangzhuo/data"
          }
        }
        steps {
          sh "echo role-master > 1.txt"
        }
      }
    }
}
```

#### dockerfile
使用从源码中包含的 Dockerfile 所构建的容器执行流水线或 stage。此时对应的 agent 写法如下

```plain
agent {
   dockerfile {
     filename 'Dockerfile.build'  //dockerfile文件名称
     dir 'build'                  //执行构建镜像的工作目录
     label 'role-master'          //执行的node节点，标签选择
     additionalBuildArgs '--build-arg version=1.0.2' //构建参数
   }
}
```

#### docker
相当于 dockerfile，可以直接使用 docker 字段指定外部镜像即可，可以省去构建的时间。比如使用 maven 镜像进行打包，同时可以指定 args

```plain
agent{
  docker{
    image '192.168.10.15/kubernetes/alpine:latest'   //镜像地址
    label 'role-master' //执行的节点，标签选择
    args '-v /tmp:/tmp'      //启动镜像的参数
  }
}
```

#### kubernetes
需要部署 kubernetes 相关的插件，官方文档：

> https://github.com/jenkinsci/kubernetes-plugin/
>

Jenkins 也支持使用 Kubernetes 创建 Slave，也就是常说的动态 Slave。配置示例如下

+ cloud: Configure Clouds 的名称，指定到其中一个 k8s
+ slaveConnectTimeout: 连接超时时间
+ yaml: pod 定义文件，jnlp 容器的配置必须有配置无需改变，其余 containerd 根据自己情况指定
+ workspaceVolume：持久化 jenkins 的工作目录。
    - persistentVolumeClaimWorkspaceVolume：挂载已有 pvc。

```plain
workspaceVolume persistentVolumeClaimWorkspaceVolume(claimName: "jenkins-agent", mountPath: "/", readOnly: "false")
```

+ nfsWorkspaceVolume：挂载 nfs 服务器目录

```plain
workspaceVolume nfsWorkspaceVolume(serverAddress: "192.168.10.254", serverPath: "/nfs", readOnly: "false")
```

+ dynamicPVC：动态申请 pvc，任务执行结束后删除

```plain
workspaceVolume dynamicPVC(storageClassName: "nfs-client", requestsSize: "1Gi", accessModes: "ReadWriteMany")
```

+ emptyDirWorkspaceVolume：临时目录，任务执行结束后会随着 pod 删除被删除，主要功能多个任务 container 共享 jenkins 工作目录。

```plain
workspaceVolume emptyDirWorkspaceVolume()
```

+ hostPathWorkspaceVolume：挂载 node 节点本机目录，注意挂载本机目录注意权限问题，可以先创建设置 777 权限，否则默认 kubelet 创建的目录权限为 755 默认其他用户没有写权限，执行流水线会报错。

```plain
workspaceVolume hostPathWorkspaceVolume(hostPath: "/opt/workspace", readOnly: false)
```

示例

```plain
agent {
  kubernetes {
      cloud 'kubernetes'
      slaveConnectTimeout 1200
      workspaceVolume emptyDirWorkspaceVolume()
      yaml '''
kind: Pod
metadata:
  name: jenkins-agent
spec:
  containers:
  - args: [\'$(JENKINS_SECRET)\', \'$(JENKINS_NAME)\']
    image: '192.168.10.15/kubernetes/jnlp:alpine'
    name: jnlp
    imagePullPolicy: IfNotPresent
  - command:
      - "cat"
    image: "192.168.10.15/kubernetes/alpine:latest"
    imagePullPolicy: "IfNotPresent"
    name: "date"
    tty: true
  restartPolicy: Never
'''
  }
}
```

### 2.agent 的配置示例
#### kubernetes 示例
```plain
pipeline {
  agent {
    kubernetes {
      cloud 'kubernetes'
      slaveConnectTimeout 1200
      workspaceVolume emptyDirWorkspaceVolume()
      yaml '''
kind: Pod
metadata:
  name: jenkins-agent
spec:
  containers:
  - args: [\'$(JENKINS_SECRET)\', \'$(JENKINS_NAME)\']
    image: '192.168.10.15/kubernetes/jnlp:alpine'
    name: jnlp
    imagePullPolicy: IfNotPresent
  - command:
      - "cat"
    image: "192.168.10.15/kubernetes/alpine:latest"
    imagePullPolicy: "IfNotPresent"
    name: "date"
    tty: true
  - command:
      - "cat"
    image: "192.168.10.15/kubernetes/kubectl:apline"
    imagePullPolicy: "IfNotPresent"
    name: "kubectl"
    tty: true
  restartPolicy: Never
'''
    }
  }
  environment {
    MY_KUBECONFIG = credentials('kubernetes-cluster')
  }
  stages {
    stage('Data') {
      steps {
        container(name: 'date') {
          sh """
            date
          """
        }
      }
    }
    stage('echo') {
      steps {
        container(name: 'date') {
          sh """
            echo 'k8s is pod'
          """
        }
      }
    }
    stage('kubectl') {
      steps {
        container(name: 'kubectl') {
          sh """
            kubectl get pod -A  --kubeconfig $MY_KUBECONFIG
          """
        }
      }
    }
  }
}
```

#### docker 的示例
```plain
pipeline {
  agent none
  stages {
    stage('Example Build') {
      agent { docker 'maven:3-alpine' }
      steps {
        echo 'Hello, Maven'
        sh 'mvn --version'
      }
    }
    stage('Example Test') {
      agent { docker 'openjdk:8-jre' }
      steps {
        echo 'Hello, JDK'
        sh 'java -version'
      }
    }
  }
}
```

### 3.Post
1. Post 一般用于流水线结束后的进一步处理，比如错误通知等。Post 可以针对流水线不同的结果做出不同的处理，就像开发程序的错误处理，比如 Python 语言的 try catch。
2. Post 可以定义在 Pipeline 或 stage 中，目前支持以下条件
3. always：无论 Pipeline 或 stage 的完成状态如何，都允许运行该 post 中定义的指令；
4. changed：只有当前 Pipeline 或 stage 的完成状态与它之前的运行不同时，才允许在该 post 部分运行该步骤；
5. fixed：当本次 Pipeline 或 stage 成功，且上一次构建是失败或不稳定时，允许运行该 post 中定义的指令；
6. regression：当本次 Pipeline 或 stage 的状态为失败、不稳定或终止，且上一次构建的 状态为成功时，允许运行该 post 中定义的指令；
7. failure：只有当前 Pipeline 或 stage 的完成状态为失败（failure），才允许在 post 部分运行该步骤，通常这时在 Web 界面中显示为红色
8. success：当前状态为成功（success），执行 post 步骤，通常在 Web 界面中显示为蓝色 或绿色
9. unstable：当前状态为不稳定（unstable），执行 post 步骤，通常由于测试失败或代码 违规等造成，在 Web 界面中显示为黄色
10. aborted：当前状态为终止（aborted），执行该 post 步骤，通常由于流水线被手动终止触发，这时在 Web 界面中显示为灰色；
11. unsuccessful：当前状态不是 success 时，执行该 post 步骤；
12. cleanup：无论 pipeline 或 stage 的完成状态如何，都允许运行该 post 中定义的指令。和 always 的区别在于，cleanup 会在其它执行之后执行。

#### 示例
一般情况下 post 部分放在流水线的底部，比如本实例，无论 stage 的完成状态如何，都会输出一条 I will always say Hello again!信息

```plain
//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  stages {
    stage('Example1') {
      steps {
        echo 'Hello World1'
      }
    }
    stage('Example2') {
      steps {
        echo 'Hello World2'
      }
    }
  }
  post {
    always {
      echo 'I will always say Hello again!'
    }
  }
}
```

也可以将 post 写在 stage，下面示例表示 Example1 执行失败执行 post。

```plain
//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  stages {
    stage('Example1') {
      steps {
        sh 'ip a'
      }
      post {
        failure {
          echo 'I will always say Hello again!'
        }
      }
    }
  }
}
```

### 4.steps
Steps 部分在给定的 stage 指令中执行的一个或多个步骤，比如在 steps 定义执行一条 shell 命令

```plain
//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  stages {
    stage('Example') {
      steps {
        echo 'Hello World'
      }
    }
  }
}
```

或者是使用 sh 字段执行多条指令

```plain
//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  stages {
    stage('Example') {
      steps {
        sh """
           echo 'Hello World1'
           echo 'Hello World2'
        """
      }
    }
  }
}
```

## 2.2 Directives
Directives 可用于一些执行 stage 时的条件判断或预处理一些数据，和 Sections 一致，Directives 不是一个关键字或指令，而是包含了 environment、options、parameters、triggers、stage、tools、 input、when 等配置。

### 1.Environment
Environment 主要用于在流水线中配置的一些环境变量，根据配置的位置决定环境变量的作用域。可以定义在 pipeline 中作为全局变量，也可以配置在 stage 中作为该 stage 的环境变量。该指令支持一个特殊的方法 credentials()，该方法可用于在 Jenkins 环境中通过标识符访问预定义的凭证。对于类型为 Secret Text 的凭证，credentials()可以将该 Secret 中的文本内容赋值给环境变量。对于类型为标准的账号密码型的凭证，指定的环境变量为 username 和 password，并且也会定义两个额外的环境变量，分别为MYVARNAME_USR和MYVARNAME_PSW。

#### 基本变量使用
```plain
pipeline {
    agent any
    environment {
        // 全局变量
        GLOBAL = 'cuiliang'
        IMAGE_NAME = ''
    } 
    stages {
        stage('Variables') {
            environment {
                // 在该阶段内定义变量
                GREETING = 'Hello'
                NAME = 'Jenkins'
            }
            steps {
                // 使用全局变量并重新赋值
                echo "${GREETING}, ${NAME}!"
                script {
                    IMAGE_NAME = 'new_value'
                    echo "IMAGE_NAME: ${IMAGE_NAME}"
                }
            }
        }

        stage('Build') {
            steps {
                // 在该阶段内重新定义变量
                script {
                    def NAME = 'Pipeline'
                    echo "${GLOBAL}, ${NAME}!"
                    echo "${IMAGE_NAME}"
                }
            }
        }

    }
}
```

#### 使用变量引用 secret 的凭证
```plain
//这里使用k8s的kubeconfig文件示例
pipeline {
  agent any
  environment {
    KUBECONFIG = credentials('kubernetes-cluster')
  }
  stages {
    stage('env') {
      steps {
        sh "env"  //默认情况下输出的变量内容会被加密
      }
    }
  }
}
```

#### 使用变量引用类型为标准的账号密码型的凭证
这里使用 HARBOR 变量进行演示，默认情况下账号密码型的凭证会自动创建 3 个变量

+ HARBOR_USR:会把凭证中 username 值赋值给这个变量
+ HARBOR_PSW:会把凭证中 password 值赋值给这个变量
+ HARBOR:默认情况下赋值的值为`usernamme:password`

```plain
//这里使用k8s的kubeconfig文件示例
pipeline {
  agent any
  environment {
    HARBOR = credentials('harbor-account')
  }
  stages {
    stage('env') {
      steps {
        sh "env"
      }
    }
  }
}
```

### 2.Options
Jenkins 流水线支持很多内置指令，比如 retry 可以对失败的步骤进行重复执行 n 次，可以根据不同的指令实现不同的效果。比较常用的指令如下:

+ buildDiscarder ：保留多少个流水线的构建记录
+ disableConcurrentBuilds：禁止流水线并行执行，防止并行流水线同时访问共享资源导致流水线失败。
+ disableResume ：如果控制器重启，禁止流水线自动恢复。
+ newContainerPerStage：agent 为 docker 或 dockerfile 时，每个阶段将在同一个节点的新容器中运行，而不是所有的阶段都在同一个容器中运行。
+ quietPeriod：流水线静默期，也就是触发流水线后等待一会在执行。
+ retry：流水线失败后重试次数。
+ timeout：设置流水线的超时时间，超过流水线时间，job 会自动终止。如果不加 unit 参数默认为 1 分。
+ timestamps：为控制台输出时间戳。

#### 定义在 pipeline 中
```plain
pipeline {
  agent any
  options {
    timeout(time: 1, unit: 'HOURS')  //超时时间1小时，如果不加unit参数默认为1分
    timestamps()                     //所有输出每行都会打印时间戳
    buildDiscarder(logRotator(numToKeepStr: '3')) //保留三个历史构建版本
    quietPeriod(10)  //注意手动触发的构建不生效
    retry(3)    //流水线失败后重试次数
  }
  stages {
    stage('env1') {
      steps {
        sh "env"
        sleep 2
      }
    }
    stage('env2') {
      steps {
        sh "env"
      }
    }
  }
}
```

#### 定义在 stage 中
Option 除了写在 Pipeline 顶层，还可以写在 stage 中，但是写在 stage 中的 option 仅支持 retry、 timeout、timestamps，或者是和 stage 相关的声明式选项，比如 skipDefaultCheckout。处于 stage 级别的 options 写法如下

```plain
pipeline {
  agent any
  stages {
    stage('env1') {
      options {   //定义在这里这对这个stage生效
        timeout(time: 2, unit: 'SECONDS') //超时时间2秒
        timestamps()                     //所有输出每行都会打印时间戳
        retry(3)    //流水线失败后重试次数
      }
      steps {
        sh "env && sleep 2"
      }
    }
    stage('env2') {
      steps {
        sh "env"
      }
    }
  }
}
```

### 3.Parameters
Parameters 提供了一个用户在触发流水线时应该提供的参数列表，这些用户指定参数的值可以通过 params 对象提供给流水线的 step（步骤）。只能定义在 pipeline 顶层。

目前支持的参数类型如下

+ string：字符串类型的参数。
+ text：文本型参数，一般用于定义多行文本内容的变量。
+ booleanParam：布尔型参数。
+ choice：选择型参数，一般用于给定几个可选的值，然后选择其中一个进行赋值。
+ password：密码型变量，一般用于定义敏感型变量，在 Jenkins 控制台会输出为*。

插件 Parameters

+ imageTag：镜像 tag，需要安装 Image Tag Parameter 插件后使用
+ gitParameter：获取 git 仓库分支，需要 Git Parameter 插件后使用

示例

```plain
pipeline {
  agent any
  parameters {
    string(name: 'DEPLOY_ENV', defaultValue:  'staging', description: '1')   //执行构建时需要手动配置字符串类型参数，之后赋值给变量
    text(name:  'DEPLOY_TEXT', defaultValue: 'One\nTwo\nThree\n', description: '2')  //执行构建时需要提供文本参数，之后赋值给变量
    booleanParam(name: 'DEBUG_BUILD',  defaultValue: true, description: '3')   //布尔型参数
    choice(name: 'CHOICES', choices: ['one', 'two', 'three'], description: '4')  //选择形式列表参数
    password(name: 'PASSWORD', defaultValue: 'SECRET', description: 'A  secret password')  //密码类型参数，会进行加密
    imageTag(name: 'DOCKER_IMAGE', description: '', image: 'kubernetes/kubectl', filter: '.*', defaultTag: '', registry: 'https://192.168.10.15', credentialId: 'harbor-account', tagOrder: 'NATURAL')   //获取镜像名称与tag
    gitParameter(branch: '', branchFilter: 'origin/(.*)', defaultValue: '', description: 'Branch for build and deploy', name: 'BRANCH', quickFilterEnabled: false, selectedValue: 'NONE', sortMode: 'NONE',  tagFilter: '*', type: 'PT_BRANCH')
  }  //获取git仓库分支列表，必须有git引用
  stages {
    stage('env1') {
      steps {
        sh "env"
      }
    }
    stage('git') {
      steps {
        git branch: "$BRANCH", credentialsId: 'gitlab-key', url: 'git@192.168.10.14:root/env.git'   //使用gitParameter，必须有这个
      }
    }
  }
}
```

### 4.Triggers
在 Pipeline 中可以用 triggers 实现自动触发流水线执行任务，可以通过 Webhook、Cron、 pollSCM 和 upstream 等方式触发流水线。

#### Cron
定时构建假如某个流水线构建的时间比较长，或者某个流水线需要定期在某个时间段执行构建，可以 使用 cron 配置触发器，比如周一到周五每隔四个小时执行一次

注意：H 的意思不是 HOURS 的意思，而是 Hash 的缩写。主要为了解决多个流水线在同一时间同时运行带来的系统负载压力。

```plain
pipeline {
  agent any
  triggers {
    cron('H */4 * * 1-5')   //周一到周五每隔四个小时执行一次
    cron('H/12 * * * *')   //每隔12分钟执行一次
    cron('H * * * *')   //每隔1小时执行一次
  }
  stages {
    stage('Example') {
      steps {
        echo 'Hello World'
      }
    }
  }
}
```

#### Upstream
Upstream 可以根据上游 job 的执行结果决定是否触发该流水线。比如当 job1 或 job2 执行成功时触发该流水线

目前支持的状态有 SUCCESS、UNSTABLE、FAILURE、NOT_BUILT、ABORTED 等。

```plain
pipeline {
  agent any
  triggers {
    upstream(upstreamProjects: 'env', threshold: hudson.model.Result.SUCCESS)  //当env构建成功时构建这个流水线
  }
  stages {
    stage('Example') {
      steps {
        echo 'Hello World'
      }
    }
  }
}
```

### 5.Input
Input 字段可以实现在流水线中进行交互式操作，比如选择要部署的环境、是否继续执行某个阶段等。

配置 Input 支持以下选项

+ message：必选，需要用户进行 input 的提示信息，比如：“是否发布到生产环境？”；
+ id：可选，input 的标识符，默认为 stage 的名称；
+ ok：可选，确认按钮的显示信息，比如：“确定”、“允许”；
+ submitter：可选，允许提交 input 操作的用户或组的名称，如果为空，任何登录用户均可提交 input；
+ parameters：提供一个参数列表供 input 使用。

假如需要配置一个提示消息为“还继续么”、确认按钮为“继续”、提供一个 PERSON 的变量的参数，并且只能由登录用户为 alice 和 bob 提交的 input 流水线

```plain
pipeline {
  agent any
  stages {
    stage('Example') {
      input {
        message "还继续么?"
        ok "继续"
        submitter "alice,bob"
        parameters {
          string(name: 'PERSON', defaultValue: 'Mr Jenkins', description: 'Who should I say hello to?')
        }
      }
      steps {
        echo "Hello, ${PERSON}, nice to meet you."
      }
    }
  }
}
```

### 6.when
When 指令允许流水线根据给定的条件决定是否应该执行该 stage，when 指令必须包含至少 一个条件。如果 when 包含多个条件，所有的子条件必须都返回 True，stage 才能执行。

When 也可以结合 not、allOf、anyOf 语法达到更灵活的条件匹配。

目前比较常用的内置条件如下

+ branch：当正在构建的分支与给定的分支匹配时，执行这个 stage。注意，branch 只适用于多分支流水线
+ changelog：匹配提交的 changeLog 决定是否构建，例如:`when { changelog '.*^\\[DEPENDENCY\\] .+$' }`
+ environment：当指定的环境变量和给定的变量匹配时，执行这个 stage，例如：when { environment name: 'DEPLOY_TO', value: 'production' }
+ equals：当期望值和实际值相同时，执行这个 stage，例如：when { equals expected: 2, actual: currentBuild.number }；
+ expression：当指定的 Groovy 表达式评估为 True，执行这个 stage，例如：when { expression { return params.DEBUG_BUILD } }；
+ tag：如果 TAG_NAME 的值和给定的条件匹配，执行这个 stage，例如：when { tag "release-" }；
+ not：当嵌套条件出现错误时，执行这个 stage，必须包含一个条件，例如：when { not { branch 'master' } }；
+ allOf：当所有的嵌套条件都正确时，执行这个 stage，必须包含至少一个条件，例如：when { allOf { branch 'master'; environment name: 'DEPLOY_TO', value: 'production' } }；
+ anyOf：当至少有一个嵌套条件为 True 时，执行这个 stage，例如：when { anyOf { branch 'master'; branch 'staging' } }。

示例：当分支为 main 时执行 Example Deploy 步骤

```plain
pipeline {
  agent any
  stages {
    stage('Example Build') {
      steps {
        echo 'Hello World'
      }
    }
    stage('Example Deploy') {
      when {
        branch 'main' //多分支流水线，分支为才会执行。
      }
      steps {
        echo 'Deploying'
      }
    }
  }
}
```

也可以同时配置多个条件，比如分支是 production，而且 DEPLOY_TO 变量的值为 main 时，才执行 Example Deploy

```plain
pipeline {
  agent any
  environment {
    DEPLOY_TO = "main"
  }
  stages {
    stage('Example Deploy') {
      when {
        branch 'main'
        environment name: 'DEPLOY_TO', value: 'main'
      }
      steps {
        echo 'Deploying'
      }
    }
  }
}
```

也可以使用 anyOf 进行匹配其中一个条件即可，比如分支为 main 或 DEPLOY_TO 为 main 或 master 时执行 Deploy

```plain
pipeline {
  agent any
  stages {
    stage('Example Deploy') {
      when {
        anyOf {
          branch 'main'
          environment name: 'DEPLOY_TO', value: 'main'
          environment name: 'DEPLOY_TO', value: 'master'
        }
      }
      steps {
        echo 'Deploying'
      }
    }
  }
}
```

也可以使用 expression 进行正则匹配，比如当 BRANCH_NAME 为 main 或 master，并且 DEPLOY_TO 为 master 或 main 时才会执行 Example Deploy

```plain
pipeline {
  agent any
  stages {
    stage('Example Deploy') {
      when {
        expression { BRANCH_NAME ==~ /(main|master)/ }
        anyOf {
          environment name: 'DEPLOY_TO', value: 'main'
          environment name: 'DEPLOY_TO', value: 'master'
        }
      }
      steps {
        echo 'Deploying'
      }
    }
  }
}
```

默认情况下，如果定义了某个 stage 的 agent，在进入该 stage 的 agent 后，该 stage 的 when 条件才会被评估，但是可以通过一些选项更改此选项。比如在进入 stage 的 agent 前评估 when， 可以使用 beforeAgent，当 when 为 true 时才进行该 stage

目前支持的前置条件如下

+ beforeAgent：如果 beforeAgent 为 true，则会先评估 when 条件。在 when 条件为 true 时，才会进入该 stage
+ beforeInput：如果 beforeInput 为 true，则会先评估 when 条件。在 when 条件为 true 时，才会进入到 input 阶段；
+ beforeOptions：如果 beforeInput 为 true，则会先评估 when 条件。在 when 条件为 true 时，才会进入到 options 阶段；

beforeOptions 优先级大于 beforeInput 大于 beforeAgent

示例

```plain
pipeline {
  agent none
  stages {
    stage('Example Build') {
      steps {
        echo 'Hello World'
      }
    }
    stage('Example Deploy') {
      when {
        beforeAgent true
        branch 'main'
      }
      steps {
        echo 'Deploying'
      }
    }
  }
}
```

## 2.3 Parallel
在声明式流水线中可以使用 Parallel 字段，即可很方便的实现并发构建，比如对分支 A、B、 C 进行并行处理

```plain
pipeline {
  agent any
  stages {
    stage('Non-Parallel Stage') {
      steps {
        echo 'This stage will be executed first.'
      }
    }
    stage('Parallel Stage') {
      failFast true         //表示其中只要有一个分支构建执行失败，就直接推出不等待其他分支构建
      parallel {
        stage('Branch A') {
          steps {
            echo "On Branch A"
          }
        }
        stage('Branch B') {
          steps {
            echo "On Branch B"
          }
        }
        stage('Branch C') {
          stages {
            stage('Nested 1') {
              steps {
                echo "In stage Nested 1 within Branch C"
              }
            }
            stage('Nested 2') {
              steps {
               echo "In stage Nested 2 within Branch C"
              }
            }
          }
        }
      }
    }
  }
}
```

# 三、Jenkinsfile 的使用
上面讲过流水线支持两种语法，即声明式和脚本式，这两种语法都支持构建持续交付流水线。并且都可以用来在 Web UI 或 Jenkinsfile 中定义流水线，不过通常将 Jenkinsfile 放置于代码仓库中（当然也可以放在单独的代码仓库中进行管理）。

创建一个 Jenkinsfile 并将其放置于代码仓库中，有以下好处

+ 方便对流水线上的代码进行复查/迭代
+ 对管道进行审计跟踪
+ 流水线真正的源代码能够被项目的多个成员查看和编辑

## 3.1 环境变量
### 1.静态变量
Jenkins 有许多内置变量可以直接在 Jenkinsfile 中使用，可以通过 `JENKINS_URL/pipeline/syntax/globals#env` 获取完整列表。目前比较常用的环境变量如下

+ BUILD_ID：当前构建的 ID，与 Jenkins 版本 1.597+中的 BUILD_NUMBER 完全相同
+ BUILD_NUMBER：当前构建的 ID，和 BUILD_ID 一致
+ BUILD_TAG：用来标识构建的版本号，格式为：`jenkins-${JOB_NAME}-${BUILD_NUMBER}`， 可以对产物进行命名，比如生产的 jar 包名字、镜像的 TAG 等；
+ BUILD_URL：本次构建的完整 URL，比如：

> http://buildserver/jenkins/job/MyJobName/17/%EF%BC%9B
>

+ JOB_NAME：本次构建的项目名称
+ NODE_NAME：当前构建节点的名称；
+ JENKINS_URL：Jenkins 完整的 URL，需要在 SystemConfiguration 设置；
+ WORKSPACE：执行构建的工作目录。

示例如果一个流水线名称为`print_env`，第 2 次构建，各个变量的值。

```plain
BUILD_ID：2
BUILD_NUMBER：2
BUILD_TAG：jenkins-print_env-2
BUILD_URL：http://192.168.10.16:8080/job/print_env/2/
JOB_NAME：print_env
NODE_NAME：built-in
JENKINS_URL：http://192.168.10.16:8080/
WORKSPACE：/bitnami/jenkins/home/workspace/print_env
```

上述变量会保存在一个 Map 中，可以使用 env.BUILD_ID 或 env.JENKINS_URL 引用某个内置变量

```plain
pipeline {
  agent any
  stages {
    stage('print env') {
      parallel {
        stage('BUILD_ID') {
          steps {
            echo "$env.BUILD_ID"
          }
        }
        stage('BUILD_NUMBER') {
          steps {
            echo "$env.BUILD_NUMBER"
          }
        }
        stage('BUILD_TAG') {
          steps {
            echo "$env.BUILD_TAG"
          }
        }
      }
    }
  }
}
```

### 2.动态变量
动态变量是根据某个指令的结果进行动态赋值，变量的值根据指令的执行结果而不同。如下所示

+ returnStdout：将命令的执行结果赋值给变量，比如下述的命令返回的是 clang，此时 CC 的值为“clang”。
+ returnStatus：将命令的执行状态赋值给变量，比如下述命令的执行状态为 1，此时 EXIT_STATUS 的值为 1。

```plain
//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  environment {
    // 使用 returnStdout
    CC = """${sh(
         returnStdout: true,
         script: 'echo -n "clang"'   //如果使用shell命令的echo赋值变量最好加-n取消换行
         )}"""
    // 使用 returnStatus
    EXIT_STATUS = """${sh(
         returnStatus: true,
         script: 'exit 1'
         )}"""
  }
  stages {
    stage('Example') {
      environment {
        DEBUG_FLAGS = '-g'
      }
      steps {
        sh 'printenv'
      }
    }
  }
}
```

## 3.2 凭证管理
Jenkins 的声明式流水线语法有一个 credentials()函数，它支持 secret text（加密文本）、username 和 password（用户名和密码）以及 secret file（加密文件）等��接下来看一下一些常用的凭证处理方法。

### 1.加密文本
本实例演示将两个 Secret 文本凭证分配给单独的环境变量来访问 Amazon Web 服务，需要 提前创建这两个文件的 credentials（实践的章节会有演示），Jenkinsfile 文件的内容如下

```plain
//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  environment {
    AWS_ACCESS_KEY_ID = credentials('txt1')
    AWS_SECRET_ACCESS_KEY = credentials('txt2')
  }
  stages {
    stage('Example stage 1') {
      steps {
        echo "$AWS_ACCESS_KEY_ID"
      }
    }
    stage('Example stage 2') {
      steps {
        echo "$AWS_SECRET_ACCESS_KEY"
      }
    }
  }
}
```

### 2.用户名密码
本示例用来演示 credentials 账号密码的使用，比如使用一个公用账户访问 Bitbucket、GitLab、 Harbor 等。假设已经配置完成了用户名密码形式的 credentials，凭证 ID 为 harbor-account

```plain
//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent any
  environment {
    BITBUCKET_COMMON_CREDS = credentials('harbor-account')
  }
  stages {
    stage('printenv') {
      steps {
        sh "env"
      }
    }
}
```

上述的配置会自动生成 3 个环境变量

+ BITBUCKET_COMMON_CREDS：包含一个以冒号分隔的用户名和密码，格式为 username:password
+ BITBUCKET_COMMON_CREDS_USR：仅包含用户名的附加变量
+ BITBUCKET_COMMON_CREDS_PSW：仅包含密码的附加变量。

### 3.加密文件
需要加密保存的文件，也可以使用 credential，比如链接到 Kubernetes 集群的 kubeconfig 文件等。

假如已经配置好了一个 kubeconfig 文件，此时可以在 Pipeline 中引用该文件

```plain
//Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    kubernetes {
      cloud 'kubernetes'
      slaveConnectTimeout 1200
      workspaceVolume emptyDirWorkspaceVolume()
      yaml '''
kind: Pod
metadata:
  name: jenkins-agent
spec:
  containers:
  - args: [\'$(JENKINS_SECRET)\', \'$(JENKINS_NAME)\']
    image: '192.168.10.15/kubernetes/jnlp:alpine'
    name: jnlp
    imagePullPolicy: IfNotPresent
  - command:
      - "cat"
    image: "192.168.10.15/kubernetes/kubectl:apline"
    imagePullPolicy: "IfNotPresent"
    name: "kubectl"
    tty: true
  restartPolicy: Never
'''
    }
  }
  environment {
    MY_KUBECONFIG = credentials('kubernetes-cluster')
  }
  stages {
    stage('kubectl') {
      steps {
        container(name: 'kubectl') {
          sh """
            kubectl get pod -A  --kubeconfig $MY_KUBECONFIG
          """
        }
      }
    }
  }
}
```



---

<a id="132346649"></a>

## Jenkins流水线 - Pipeline from SCM

前面的示例中都是直接在jenkins中编写Pipeline代码，后续随着项目的增多，不便维护。在实际生产环境中，通常会把Pipeline脚本放在项目代码中一起进行版本控制

# 项目更改
## 新增jenkinsfile文件
在项目的根目录，建立Jenkinsfile文件，内容如下

![](images/img_69.png)

```bash
pipeline {
    agent any

    stages {
        stage('拉取代码') {
            steps {
                echo '拉取代码'
            }
        }
        stage('编译构建') {
            steps {
                echo '编译构建'
            }
        }
        stage('项目部署') {
            steps {
                echo '项目部署'
            }
        }
    }
}
```

# jenkins配置
## 修改流水线任务配置
修改流水线定义，改为pipeline script from SCM，现在仓库地址并选择认证方式。

![](images/img_70.png)

指定脚本路径为默认项目根目录下的Jenkinsfile

![](images/img_71.png)

## 构建测试
保存任务后，点击立即构建，此时构建状态试图如下所示，第一步变成了Checkout SCM

![](images/img_72.png)



---

<a id="133017128"></a>

## Jenkins流水线 - jenkins构建触发器

# 触发器简介
之前的案例中我们都是在web页面点击立即构建，手动触发Build，通常在实际生产环境中，我们会使用触发器自动构建，Jenkins内置4种构建触发器：

+ 触发远程构建
+ 其他工程构建后触发（Build after other projects are build）
+ 定时构建（Build periodically）
+ 轮询SCM（Poll SCM）

# 触发远程构建
## 配置构建触发器
修改构建任务配置，在构建触发器选项中勾选触发远程构建，并指定token。

![](images/img_73.png)

## 构建测试
请求url地址http://jenkins服务器ip:jenkins服务端口/job/任务名称/build?token=设置的令牌，此处请求的地址为[http://192.168.8.135:8080/job/pipeline_demo/build?token=123456](http://192.168.8.135:8080/job/pipeline_demo/build?token=123456)

查看构建信息，输出从远程构建内容。

![](images/img_74.png)

# 其他工程构建后触发
## 创建前置构建任务
此处以之前配置的自由风格构建任务gitee-demo为例

![](images/img_75.png)

## 修改后置构建任务
修改pipeline_demo任务的构建触发器配置，勾选build after other projects are built，填写前置构建任务名称。

![](images/img_76.png)

## 构建测试
进入gitee-demo前置任务，点击立即构建。

![](images/img_77.png)

点击查看后置任务pipeline_demo任务构建信息，显示由上游任务触发构建。

![](images/img_78.png)

# 定时构建
## 配置构建触发器
修改构建任务构建触发器配置，改为Build periodically，填写crontab表达式，此处以每分钟构建一次为例

![](images/img_79.png)

## 构建测试
等待一分钟后，查看构建任务信息，触发了一次自动构建，查看构建信息，输出<font style="color:rgb(20, 20, 31);">Started by timer</font>

![](images/img_80.png)

# 轮询SCM构建
轮询SCM，是指定时扫描本地代码仓库的代码是否有变更，如果代码有变更就触发项目构建。需要注意的是，Jenkins会定时扫描本地整个项目的代码，增大系统的开销，不建议高频使用。

## 配置构建触发器
依旧配置每分钟查询一次SCM信息，判断是否需要触发构建。

![](images/img_81.png)

## 构建测试
修改git仓库代码并提交

![](images/img_82.png)

查看jenkins构建任务信息，触发SCM构建

![](images/img_83.png)



---

<a id="133020477"></a>

## Jenkins流水线 - jenkins参数化构建

项目构建的过程中，我们通常需要根据用户的输入的不同参数，触发不同的构建步骤，从而影响整个构建结果。这时我们可以使用参数化构建。

接下来以gitee项目不同的分支来部署不同的项目为例演示。

# 项目创建测试分支并推送至仓库
## main生产分支内容
## ![](images/img_84.png)
## test测试分支内容
![](images/img_85.png)

# 修改jenkins配置
## 添加字符串类型参数
![](images/img_86.png)

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

![](images/img_87.png)

## 结果验证
访问springboot页面如下所示

![](images/img_88.png)



---

<a id="133029974"></a>

## Jenkins流水线 - jenkins邮件通知配置

# 安装与配置插件
## 安装插件
在jenkins的插件管理中安装Email Extension插件

![](images/img_89.png)

## 配置邮件相关参数
依次点击manage jenkins——>system，找到jenkins Location项，填写系统管理员邮件地址。

![](images/img_90.png)

配置邮件服务器相关参数，然后点击通过发送测试邮件测试配置，填写收件人邮箱号。

![](images/img_91.png)

配置Extended E-mail Notification配置，内容如下

![](images/img_92.png)

登录收件人邮件，看到有测试邮件。

![](images/img_93.png)

# 自由风格任务配置
## 修改任务配置构建后操作内容
![](images/img_94.png)

![](images/img_95.png)

## 构建测试
点击立即构建，查看收件人邮箱

![](images/img_96.png)

# 流水线任务配置
## 配置邮件内容
在项目根目录编写email.html，并推送至项目仓库。邮件模板如下所示：

```html
<!DOCTYPE html>    
<html>    
<head>    
<meta charset="UTF-8">    
<title>${ENV, var="JOB_NAME"}-第${BUILD_NUMBER}次构建日志</title>    
</head>    
    
<body leftmargin="8" marginwidth="0" topmargin="8" marginheight="4"    
    offset="0">    
    <table width="95%" cellpadding="0" cellspacing="0"  style="font-size: 11pt; font-family: Tahoma, Arial, Helvetica, sans-serif">    
        <tr>    
            本邮件由系统自动发出，无需回复！<br/>            
            各位同事，大家好，以下为${PROJECT_NAME }项目构建信息</br>
            <td><font color="#CC0000">构建结果 - ${BUILD_STATUS}</font></td>   
        </tr>    
        <tr>    
            <td><br />    
            <b><font color="#0B610B">构建信息</font></b>    
            <hr size="2" width="100%" align="center" /></td>    
        </tr>    
        <tr>    
            <td>    
                <ul>    
                    <li>项目名称 ： ${PROJECT_NAME}</li>    
                    <li>构建编号 ： 第${BUILD_NUMBER}次构建</li>    
                    <li>触发原因： ${CAUSE}</li>    
                    <li>构建状态： ${BUILD_STATUS}</li>    
                    <li>构建日志： <a href="${BUILD_URL}console">${BUILD_URL}console</a></li>    
                    <li>构建Url ： <a href="${BUILD_URL}">${BUILD_URL}</a></li>    
                    <li>工作目录 ： <a href="${PROJECT_URL}ws">${PROJECT_URL}ws</a></li>    
                    <li>项目Url ： <a href="${PROJECT_URL}">${PROJECT_URL}</a></li>    
                </ul>    


<h4><font color="#0B610B">失败用例</font></h4>
<hr size="2" width="100%" />
$FAILED_TESTS<br/>


<h4><font color="#0B610B">最近提交(#$SVN_REVISION)</font></h4>
<hr size="2" width="100%" />
<ul>
${CHANGES_SINCE_LAST_SUCCESS, reverse=true, format="%c", changesFormat="<li>%d [%a] %m</li>"}
</ul>
详细提交: <a href="${PROJECT_URL}changes">${PROJECT_URL}changes</a><br/>


            </td>    
        </tr>    
    </table>    
</body>    
</html>  
```

## 修改pipeline添加邮件发送
修改流水线内容，新增邮件发送

![](images/img_97.png)

```html
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
                sh 'sleep 10'
            }
        }
    }
    post {
        always {
            emailext(
                subject: '构建通知：${PROJECT_NAME} - Build # ${BUILD_NUMBER} - ${BUILD_STATUS}!',
                body: '${FILE,path="email.html"}',
                to: 'cuiliang0302@qq.com'
            )
        }
    }
}
```

## 构建测试
点击立即构建，查看收件人邮箱

![](images/img_98.png)



---

<a id="166554656"></a>

## Jenkins流水线 - jenkins根据tag构建

# 发布与回滚思路
正常功能发布时，是基于master分支发布的，所以我在成功发布后，会将当时的master分支自动打上tag，当需要回滚时，则基于tag分支进行发布即可。

![](images/img_99.jpeg)

# 安装配置Git Parameter
## 安装插件
要想出现tag模式的参数，需要[安装git](https://so.csdn.net/so/search?q=%E5%AE%89%E8%A3%85git&spm=1001.2101.3001.7020) Parameter 插件，在Jenkins的Manage Jenkins→Plugins→Available Plugins 中安装![](images/img_100.png)

## 验证
安装完成后在项目的配置页的This project is parameterized 中可以看到选项

![](images/img_101.png)

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

![](images/img_102.png)

# 使用tag变量发布
## 发布最新版本
生成pipeline，指定分支为${tag}

![](images/img_103.png)

发布验证

![](images/img_104.png)

## 手动发布指定版本
点击立即构建，在版本标签列表中可以查看到所有tag

![](images/img_105.png)



---

<a id="127410630"></a>

## Jenkins工具链集成 - jenkins与gitlab连接

# gitlab配置
## 创建用户并登录
注册一个普通用户cuiliang并登录

![](images/img_106.png)

## 导入项目
此处以Vue项目为例，项目地址：[https://gitee.com/cuiliang0302/vue3_vite_element-plus.git](https://gitee.com/cuiliang0302/vue3_vite_element-plus.git)

![](images/img_107.png)

# jenkins配置
## 安装gitlab插件
依次点击jenkins——>Manage Jenkins——>插件管理——>Plugins，在Jenkins的插件管理中安装GitLab插件

![](images/img_108.png)

# 连接配置
## 验证方式简介
为了让我们本地可以通过Git连接到远程仓库（Github/Gitee/Gitlab ），远程仓库给我们提供了三种验证方式进行连接。

1. SSH验证

这是最原始的方式，如果使用git bash只要按照官方文档一步一步配置就好了。 需要在客户端生成公钥，然后复制到远程仓库地址的公钥位置。

注意点：SSH有可能需要配置代理，否则无法解析服务器域名。错误如下：

```bash
ssh: Could not resolve hostname github.com: no address associated with name
```

解决办法：给SSH以及git 客户端配置代理。

2. HTTPS验证

这也是比较方便的方式，但是每一次都需要输入用户名和密码。

注意点：本机的SSL证书不是正规机构颁发的，验证失败。错误如下：

```bash
fatal: unable to access ‘https://github.com/owner/repo.git/’: SSL certificate problem: unable to get local issuer certificate
```

解决办法：将Git的SSL验证关闭，命令如下。

```bash
git config --global http.sslVerify false
```

3. Access Token验证

拉取gitlab私有代码库代码一定要注意安全性，如果是在个人电脑上，使用个人的账号密码方式或者公钥方式都是可以的。但是如果是在公共系统例如CI（自动集成）场景下或者使用公共账号场景下再使用账号密码方式和公钥方式就不能保证安全性了。这时候使用access token方式可以解决对应的安全问题。

使用方法：

+ 从Settings页面生成唯一的Token
+ 手动拼接出远程仓库的地址，比如：https://$GH_TOKEN@github.com/owner/repo.git
+ 从以上地址克隆或使用git remote add 的方式关联本地仓库，之后都不需要输入用户名和密码信息。

## SSH验证
1. 在jenkins容器中生成密钥

```bash
[root@tiaoban ~]# kubectl exec -it -n cicd jenkins-5558bcd59f-s6b2s -- bash
jenkins@jenkins-5558bcd59f-pwfhq:/$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/jenkins_home/.ssh/id_rsa): 
Created directory '/var/jenkins_home/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /var/jenkins_home/.ssh/id_rsa
Your public key has been saved in /var/jenkins_home/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:NLMfZkXBLxey0WhOIg46hZLqBQmRWWrvWebAxuKY/CI jenkins@jenkins-5558bcd59f-pwfhq
The key's randomart image is:
+---[RSA 3072]----+
|+=o. .     .o+   |
|o+o . o . ..B o  |
|.o.. o o+. =.= . |
|o +.o  ..+ .+ o  |
|...* +  S +  o   |
|+o+ *    + .     |
|oo o .    .      |
|E..              |
|. ..             |
+----[SHA256]-----+
jenkins@jenkins-5558bcd59f-pwfhq:/$ 
jenkins@jenkins-5558bcd59f-pwfhq:/$ cat ~/.ssh/id_rsa.pub 
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC+SCLNn6RcOJs9anR2VB8xEOXbxW3HfqMfdWQc7m3LHMEy7bNjUrCc0iKURyYa41szVx39NRQXYT/Eh1mSXH1UV9royAQIM8Tw74/JfZWpvU0kIc4QGphsmHxZHn2TixvwwUF99VOsOnF+bBU9CPKxx2r1txQvHkUgdkJ3KC3uLZ6TA1yt5qN6SaEC/c+TgDjdD36/iIjmZDhdtFfyqLGx4avEhZKv6I3orCDLpN4Ug4rI/kDKX/kSv4vkfUmF6vFH/O0mwm31+o+9SvLwXB2vJyvFQ0pBSXBhE7RP3bDAy8Ler4mFwHNexji2LVckSaNFLEExS/SSB9WuqRmpHwnd0P15qHT5Tl12t2mEEC6u5zaz1HlhAFoXSzNtDabsFlvAbwIV43N/hPkJ8vWyAXIxeHgYAVNR0XWsFirWVIszjuqX22BKpC5mEIdQWkqwFc0CAu4Fv8fHok2hPtxvvCKF4TCwA9FUg62q9eUEs2fV903mIKPyKacl2kO9C9mQE68= jenkins@jenkins-5558bcd59f-pwfhq
```

2. 在gitlab中添加ssh密钥信息

依次点击用户——>设置——>ssh密钥，填写密钥信息。

![](images/img_109.png)

3. 获取jenkins容器用户名和私钥

```bash
jenkins@jenkins-5558bcd59f-s6b2s:/$ whoami
jenkins
jenkins@jenkins-5558bcd59f-s6b2s:/$ cat ~/.ssh/id_rsa
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
NhAAAAAwEAAQAAAYEArlxdtVZQsFRgTFHn//hXboH8xkKh919SX+rY3EStxyr9ojF2EwqT
v0LUvroGSGCQvzfREb7+5/LB3Gt2Rqeqp/JF+VFHvXWsK2PEGlQGwpSLcJ83PiaP+Y2tWh
t67vdMTxfnNZaafhq8SWyfgF79SaOC2Zv2oLjIQFWCpDte6zqnQLul1rWdFJ87Ay/quaew
Lu+qLkod50Tw6vlojO/YY7gbsGyaIcxWgCksvSm4f5JIcBcjuCtA3z0u+yUBNG9fzpeR+E
TyYm/3q91B/n0YfJGvyrbGo5OVp86Krdd2By8hlTa1siZ+dADYNDme3PI41HuqXYQeASr6
0KOHBQzkruOGht/T475Bd8SLbhhjea2EIArG6QAQrWURzIkPioP3o0dF05b4DMyXcXeocJ
NBC2iNHr6t62zYZGa6i5Z4Wuuh4kVl9gXW72XbYDGIVYuKvYEKVfvPC7/fsAOfACFLptTt
0QiUCzaCY3XMV+kdBBFRsspy2wSIDSW2DM96VD7LAAAFmFkabLBZGmywAAAAB3NzaC1yc2
EAAAGBAK5cXbVWULBUYExR5//4V26B/MZCofdfUl/q2NxErccq/aIxdhMKk79C1L66Bkhg
kL830RG+/ufywdxrdkanqqfyRflRR711rCtjxBpUBsKUi3CfNz4mj/mNrVobeu73TE8X5z
WWmn4avElsn4Be/Umjgtmb9qC4yEBVgqQ7Xus6p0C7pda1nRSfOwMv6rmnsC7vqi5KHedE
8Or5aIzv2GO4G7BsmiHMVoApLL0puH+SSHAXI7grQN89LvslATRvX86XkfhE8mJv96vdQf
59GHyRr8q2xqOTlafOiq3XdgcvIZU2tbImfnQA2DQ5ntzyONR7ql2EHgEq+tCjhwUM5K7j
hobf0+O+QXfEi24YY3mthCAKxukAEK1lEcyJD4qD96NHRdOW+AzMl3F3qHCTQQtojR6+re
ts2GRmuouWeFrroeJFZfYF1u9l22AxiFWLir2BClX7zwu/37ADnwAhS6bU7dEIlAs2gmN1
zFfpHQQRUbLKctsEiA0ltgzPelQ+ywAAAAMBAAEAAAGAcTb0edyUBAqlhKjiVaixTMYGlc
2KUY+Jc1KQgWXu2JYnnnszSeXiTZxde4JatgBNvHvHuxgjeAR+sFrur64K94YuvVZzmKeh
pYLgQKAyy4GckQIw4qAzeDzwRMP3LNdSq0DAFmG16w/9Fkf7wWTsXjZXrmjA2VdiX7OmYn
FSjrbFBxlQ83t1hYBm1wj0BpzFn5RrEid6B0MSk+BibLEH9qgDAqlh43RE7m7N5/4BGISp
mG7N+LXNJ6cYrGY4xA1UO4y29sdoPDzUVglSNDR/V5gzuuwNSJu7fNK2U5oP9GFB/VSNLz
qtd/j2DHrq9eG5HP3MCqlKHpt6MvMLe/6XXHzsIfQua2JW7sZo1bM2GZXwIkeH6spX3jS/
4pLvdiy/iihIGKUWF83tTzLPvPPi2ysnK9tn2mg3VPQaLTgEy1KwtoMeGtSNedJOVo4OwS
cZA17j3QhO028lml+QhSGYO38oUFZR1aRR/yibcfysp1gOZY2zP8z685pqu6lTiURBAAAA
wQCxdS1hvSAluRMt+wh9ldTcayL6QzHitfRXnBHvJpqWQ0B8YUR4WCPeEy6TdRb3nzYYmM
hrPjdTT73pu8Nz1wtDi66XQZODJa86+c1a4qFJ4ez4P4SWty6da3IEWfLLTAgK33pD1bxh
A+aGkKTm+X3vrPAl4HfwcnsuXQB5j92mUl5IJB0KU4UYlqTctEQgGUr3dj0Mx/S1BNqmoF
lSrdFZ7Pi3Ohj9sMje85kT/wFYuh6tKyqY5SfCUMba2MqOk6wAAADBAN9NRNl3iVMmHV0A
3j12rBY6n1R7fLSgK+/uRAfTZNHkHu4TTJGk4usmSdvOYA1USXtRfFzpHKec2Bn4/EjCWq
xFMIYuFx/cTTWcZJmptt7NlYNUReorrT5fhymnTBjWbqbIdq7umlJbS2jkIHXGp/8l1dcU
J4JhVlB2fUqURU4Vxew+1XBodLIe0vMkCcYeJF6KgkY1AYgBY7j7jen1wWcYRs+6kqjihZ
U6CG3ukN0ihbyJ+LyPiHjXI5nZkG8hkQAAAMEAx+R8PWKJwI7mT4AqKSfmB0SNLSn5TfWp
jjV3TZeRP2R0kO+7KTGtIhZ5YJtT4seI6uNavuqBq1ZsdCWl/kXf6RwEHwlZuOSfj2F2G0
NZWjQn+nRXCejKU3oqOtBs6rpvVEGT9A3iwhtPrzQdFC0tkuJQuiIGvgl223PiVXxJJPlm
nrZMAFW7krE8hLRtZUsAA4vTiZK66kFDaySjBx4dzNAoMXniXc2ebngNiGZ7CvRkn5YgWl
mMouSqmKr15iybAAAAIGplbmtpbnNAamVua2lucy01NTU4YmNkNTlmLXM2YjJzAQI=
-----END OPENSSH PRIVATE KEY-----
```

4. jenkins创建密钥凭据，类型选择ssh username with private key

![](images/img_110.png)

5. 获取仓库git连接地址

![](images/img_111.png)

6. 创建自由风格的软件项目

![](images/img_112.png)

7. 在源码管理中添加仓库地址，需要注意的是默认地址为git@gitlab-559d798d49-hpcjt:cuiliang/vue3_vite_element-plus.git，修改为git@gitlab-svc.cicd.svc:cuiliang/vue3_vite_element-plus.git，并在jenkins容器中执行命令，添加远程仓库地址。

```bash
jenkins@jenkins-5558bcd59f-vsv2x:/$ git ls-remote -h -- git@gitlab-svc.cicd.svc:cuiliang/vue3_vite_element-plus.git HEAD
The authenticity of host 'gitlab-svc.cicd.svc (10.103.77.84)' can't be established.
ECDSA key fingerprint is SHA256:CdqN3MItwSLeUWQ5H2vl4wm1ZhHqQK11lPoHA3Uuu9M.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'gitlab-svc.cicd.svc' (ECDSA) to the list of known hosts.
```

![](images/img_113.png)

8. 点击立即构建，可以拉取代码并获取git commit信息。

![](images/img_114.png)

## HTTP/HTTPS验证
1. 添加jenkins凭据

在jenkins中添加凭据，账号为gitlab账户和密码。

jenkins——>系统管理——>Credentials——>添加类型为username with password的全局凭据

![](images/img_115.png)

2. 获取项目克隆地址

访问gitlab项目页，获取项目http克隆地址。[http://gitlab-559d798d49-hpcjt/cuiliang/vue3_vite_element-plus.git](http://gitlab-559d798d49-hpcjt/cuiliang/vue3_vite_element-plus.git)

![](images/img_116.png)

3. 创建自由风格任务测试

新建一个自由风格软件项目测试

![](images/img_117.png)

在源码管理中填写http仓库地址，并选择账号密码凭据，需要注意的是仓库地址默认使用gitlab的pod名称，需要改为svc名称方式。即[http://gitlab-svc.cicd.svc/cuiliang/vue3_vite_element-plus.git](http://gitlab-svc.cicd.svc/cuiliang/vue3_vite_element-plus.git)

![](images/img_118.png)

点击立即构建，查看控制台日志，已经可以正常拉取项目代码，获取到git commit信息。

![](images/img_119.png)

## Access Token验证
1. 登录gitlab，依次点击项目——>设置——>访问令牌。角色设置为guest，授予api权限即可。

![](images/img_120.png)

2. 创建凭据，依次点击jenkins——>系统管理——>Credentials——> Add Credentials，类型选择gitlab api token

![](images/img_121.png)

3. 配置gitlab信息

jenkins——>系统管理——>系统配置，找到gitlab配置区域，

gitlab url填写http://gitlab-svc.cicd.svc，然后点击 Test Connection，显示 Success，表示成功。

![](images/img_122.png)

# webhook配置
通常在企业实际开发过程中，当代码提交到master分支或者创建tag时，gitlab请求jenkins的webhook地址，完成持续构建和持续部署流程。

## 创建jenkins流水线项目
新建一个类型为流水线的任务

![](images/img_123.png)

找到构建触发器选择，勾选Build when a change is pushed to GitLab. GitLab webhook URL: http://jenkins-svc.cicd.svc:8080/project/gitlab-webhook

![](images/img_124.png)

## 编辑pipeline并测试
编写pipeline script，我们可以点击下方的流水线语法，生成checkout代码

![](images/img_125.png)

将生成的pipeline粘贴到流水线配置中

```bash
pipeline {
    agent any  	
    stages {
        stage('checkout code') {
            steps {
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'gitlab-cuiliang-password', url: 'http://gitlab-svc.cicd.svc/cuiliang/vue3_vite_element-plus.git']])
            }
        }
        stage('build') {
            steps {
                echo '编译打包完成'
            }
        }
    }
}
```

![](images/img_126.png)

接下来点击立即构建，测试是否可以正常拉取代码

![](images/img_127.png)

## 开启webhook配置
配置gitlab策略，使用root用户登录——>管理员——>网络——>出站请求——>允许来自webhook和集成对本地网络的请求。

![](images/img_128.png)

获取jenkins webhook令牌

修改流水线任务，点击Build when a change is pushed to GitLab的高级选项，生成令牌。

![](images/img_129.png)

切换回cuiliang用户——>vue项目——>设置——>webhooks——>填写jenkins生成的webhook地址和令牌。触发来源选择所有分支。

[http://jenkins-svc.cicd.svc:8080/project/gitlab-webhook](http://jenkins-svc.cicd.svc:8080/project/gitlab-webhook)

![](images/img_130.png)

推送测试事件

依次点击测试，选择推送时间，gitlab页面提示200状态码。

![](images/img_131.png)

如果状态码为403，检查jenkins系统配置，取消勾选Enable authentication for '/project' end-point

![](images/img_132.png)

查看jenkins构建历史，发现触发了一次自动构建

![](images/img_133.png)

## 项目添加Jenkinsfile
> 通常在企业开发中，jenkinsfile文件存放在项目指定路径下，与仓库代码一同维护，根据环境灵活配置，而非jenkins中的固定配置。
>

修改流水线配置，选择pipeline文件来自仓库

![](images/img_134.png)

编辑gitlab项目，添加Jenkinsfile文件，文件内容为

```bash
pipeline {
    agent any  	
    stages {
        stage('checkout code') {
            steps {
                checkout scmGit(branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'gitlab-cuiliang-password', url: 'http://gitlab-svc.cicd.svc/cuiliang/vue3_vite_element-plus.git']])
            }
        }
        stage('build') {
            steps {
                echo '编译打包完成'
            }
        }
    }
}
```

![](images/img_135.png)

提交代码到仓库后，查看jenkins构建历史，发现已经自动触发了一次构建

![](images/img_136.png)



---

<a id="131898197"></a>

## Jenkins工具链集成 - jenkins与Maven集成

# 安装配置Maven
此处以rpm包部署jenkins为例，以下操作在jenkins所在服务器执行。

maven下载地址：[https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)

## 安装Maven
```bash
[root@jenkins ~]# wget https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz
[root@jenkins ~]# mkdir /usr/local/maven
[root@jenkins ~]# tar -zxf apache-maven-3.9.6-bin.tar.gz -C /usr/local/maven/
[root@jenkins ~]# cd /usr/local/maven/apache-maven-3.9.6/
[root@jenkins apache-maven-3.9.3]# ls
bin  boot  conf  lib  LICENSE  NOTICE  README.txt
```

## 设置maven的阿里云镜像
```bash
[root@jenkins apache-maven-3.9.6]# vim conf/settings.xml
# 在159行的标签为</mirrors>前添加如下阿里云镜像
<mirror>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    <mirrorOf>central</mirrorOf>
</mirror>
```

## 配置环境变量
```bash
[root@jenkins apache-maven-3.9.6]# vim /etc/profile
# 文件末尾添加如下内容
export MAVEN_HOME=/usr/local/maven/apache-maven-3.9.6
export PATH=${MAVEN_HOME}/bin:${PATH}
[root@jenkins apache-maven-3.9.6]# source /etc/profile
[root@jenkins apache-maven-3.9.6]# mvn -v
Apache Maven 3.9.6 (21122926829f1ead511c958d89bd2f672198ae9f)
Maven home: /usr/local/maven/apache-maven-3.9.3
Java version: 11.0.19, vendor: Red Hat, Inc., runtime: /usr/lib/jvm/java-11-openjdk-11.0.19.0.7-4.el8.x86_64
Default locale: zh_CN, platform encoding: UTF-8
OS name: "linux", version: "4.18.0-477.13.1.el8_8.x86_64", arch: "amd64", family: "unix"
```

# jenkins配置Maven
## 全局工具配置关联jdk和maven
jenkis——>manage jenkins——>tools

如遇yum安装jdk无法识别，可尝试下载二进制openjdk安装

![](images/img_137.png)

![](images/img_138.png)

## 添加jenkins全局变量
jenkis——>manage jenkins——>System

新增JAVA_HOME、M2_HOME、PATH+EXTRA

![](images/img_139.png)

# 拉取java项目
## 创建项目
此处以springboot项目为例，项目地址[https://gitee.com/cuiliang0302/sprint_boot_demo](https://gitee.com/cuiliang0302/sprint_boot_demo)

![](images/img_140.png)

## 创建凭据
1. 依次点击jenkins——>系统管理——>Credentials——> Add Credentials，类型选择username with password

![](images/img_141.png)

# 创建任务
## 创建流水线任务
新建一个类型为自由风格的任务

![](images/img_142.png)

## 配置git仓库信息
gitee的主分支名称为main，记得更改。

![](images/img_143.png)

## 构建测试
点击立即构建，查看构建信息

![](images/img_144.png)

# 打包测试
## 修改任务
修改gitlab与gitee连接中配置的任务，新增构建步骤。配置如下

![](images/img_145.png)

## 构建测试
可以看到控制台成功打印了打包信息

![](images/img_146.png)

# 读取pom.xml参数
<font style="color:rgb(37, 53, 53);">在执行 Java 项目的流水线时，我们经常要动态获取项目中的属性，很多属性都配置在项目的 pom.xml 中，使用Pipeline Utility Steps 插件提供能够读取 pom.xml 的方法，pipeline如下</font>

```groovy
stage('读取pom.xml参数阶段'){
    // 读取 Pom.xml 参数
    pom = readMavenPom file: './pom.xml'
    // 输出读取的参数
    print "${pom.artifactId}"
    print = "${pom.version}"
}
```



---

<a id="127230452"></a>

## Jenkins工具链集成 - jenkins与k8s连接

# 安装kubernetes插件
在Jenkins的插件管理中安装Kubernetes插件

jenkins——>系统管理——>插件管理——>avaliable plugins

![](images/img_147.png)

# 本集群连接
## 创建sa账号
如果jenkins在k8s集群中部署，直接创建sa账号，并进行rbac授权即可,yaml文件参考前面文章。

## 创建cloud资源
然后在jenkins——>系统管理——>Clouds——>New cloud——>输入cloud name并勾选类型为kubernetes

![](images/img_148.png)

点击kubernetes cloud details填写cloud详细信息

+ Kubernetes地址：在集群内部暴露的k8s service名称https://kubernetes.default.svc
+ Kubernetes命名空间：jenkins sa所属的名称空间cicd
+ Jenkins地址：jenkins svc的名称:8080端口http://jenkins.cicd.svc:8080

配置完成后点击连接测试，显示k8s集群版本，证明配置无误。

![](images/img_149.png)

# 跨集群连接
在某些情况下，jenkins部署在k8s集群外，通过二进制或者docker方式部署，如果想要连接k8s集群实现资源自动创建。或者当前jenkins部署在k8s集群A中，需要通过jenkins实现集群B资源的自动创建发布，使用此方式连接。

## 配置思路
jenkins要想连接并操作k8s集群，需要配置授权，请求k8s集群的kube apiserver的请求，可以和kubectl一样利用config文件用作请求的鉴权，默认在~/.kube/config下，也可以单独严格指定权限细节，生成一个jenkins专用的config文件。

在jenkins中能够识别的证书文件为PKCS#12 certificate，因此需要先将kubeconfig文件中的证书转换生成PKCS#12格式的pfx证书文件

## 生成证书
我们可以使用yq命令行工具解析yaml，并提取相关的内容，然后通过base 64解码，最后生成文件

安装yq工具，仓库地址：[https://github.com/mikefarah/yq](https://github.com/mikefarah/yq)

```bash
[root@k8s-master ~]# wget https://github.com/mikefarah/yq/releases/download/v4.34.1/yq_linux_amd64.tar.gz
[root@k8s-master ~]# tar -zxvf yq_linux_amd64.tar.gz 
[root@k8s-master ~]# mv yq_linux_amd64 /usr/bin/yq
[root@k8s-master ~]# yq --version
yq (https://github.com/mikefarah/yq/) version v4.34.1
[root@k8s-master ~]# mkdir -p /opt/jenkins-crt/
```

+ certificate-authority-data——>base 64解码——>ca.crt
+ client-certificate-data——>base 64解码——>client.crt
+ client-key-data——>base 64解码——>client.key

```bash
[root@k8s-master ~]# yq e '.clusters[0].cluster.certificate-authority-data' /root/.kube/config | base64 -d > /opt/jenkins-crt/ca.crt
[root@k8s-master ~]# yq e '.users[0].user.client-certificate-data' /root/.kube/config | base64 -d > /opt/jenkins-crt/client.crt
[root@k8s-master ~]# yq e '.users[0].user.client-key-data' /root/.kube/config | base64 -d > /opt/jenkins-crt/client.key
[root@k8s-master ~]# cd /opt/jenkins-crt/
[root@k8s-master jenkins-crt]# ls -la
总用量 12
drwxr-xr-x  2 root root   56 6月  10 20:54 .
drwxr-xr-x. 6 root root   65 6月  10 20:37 ..
-rw-r--r--  1 root root 1099 6月  10 20:53 ca.crt
-rw-r--r--  1 root root 1147 6月  10 20:53 client.crt
-rw-r--r--  1 root root 1675 6月  10 20:54 client.key
```

## 转换证书
通过openssl进行证书格式的转换，生成Client P12认证文件cert.pfx，输入两次密码并牢记密码。

```bash
[root@k8s-master jenkins-crt]# openssl pkcs12 -export -out cert.pfx -inkey client.key -in client.crt -certfile ca.crt
Enter Export Password:
Verifying - Enter Export Password:
[root@k8s-master jenkins-crt]# ls -la
总用量 16
drwxr-xr-x  2 root root   72 6月  10 20:55 .
drwxr-xr-x. 6 root root   65 6月  10 20:37 ..
-rw-r--r--  1 root root 1099 6月  10 20:53 ca.crt
-rw-------  1 root root 3221 6月  10 20:55 cert.pfx
-rw-r--r--  1 root root 1147 6月  10 20:53 client.crt
-rw-r--r--  1 root root 1675 6月  10 20:54 client.key
```

## 导入证书
打开jenkins的web界面，系统管理——>Credentials——>添加全局凭据

凭据的类型选择Certificate，证书上传刚才生成的cert.pfx证书文件，输入通过openssl生成证书文件时输入的密码

![](images/img_150.png)

## 配置远程k8s集群地址
jenkins——>系统管理——>Clouds——>New cloud——>输入cloud name并勾选类型为kubernetes

填写cloud详细信息

+ Kubernetes地址：/root/.kube/config文件中cluster部分中server的内容
+ Kubernetes命名空间：/root/.kube/config文件中cluster部分中name的内容
+ Jenkins地址：jenkins服务的地址
+ kubernetes服务证书key：ca.crt内容
+ 凭据：选择刚刚创建的Certificate凭据

![](images/img_151.png)

配置完成后点击连接测试，显示k8s集群版本，证明配置无误。

# 动态slave介绍
## 为什么需要动态slave
目前大多公司都采用 Jenkins 集群来搭建符合需求的 CI/CD 流程，然而传统的 Jenkins Slave 一主多从方式会存在一些痛点，比如：

+ 主 Master 发生单点故障时，整个流程都不可用了
+ 每个 Slave 的配置环境不一样，来完成不同语言的编译打包等操作，但是这些差异化的配置导致管理起来非常不方便，维护起来也是比较费劲
+ 资源分配不均衡，有的 Slave 要运行的 job 出现排队等待，而有的 Slave 处于空闲状态
+ 资源有浪费，每台 Slave 可能是物理机或者虚拟机，当 Slave 处于空闲状态时，也不会完全释放掉资源。

正因为上面的这些种种痛点，我们渴望一种更高效更可靠的方式来完成这个 CI/CD 流程，而 Docker虚拟化[容器](https://cloud.tencent.com/product/tke?from_column=20065&from=20065)技术能很好的解决这个痛点，又特别是在 Kubernetes 集群环境下面能够更好来解决上面的问题，下图是基于 Kubernetes 搭建 Jenkins 集群的简单示意图：

![](images/img_152.png)

从图上可以看到 Jenkins Master 和 Jenkins Slave 以 Pod 形式运行在 Kubernetes 集群的 Node 上，Master 运行在其中一个节点，并且将其配置数据存储到一个 Volume 上去，Slave 运行在各个节点上，并且它不是一直处于运行状态，它会按照需求动态的创建并自动删除。 

这种方式的工作流程大致为：当 Jenkins Master 接受到 Build 请求时，会根据配置的 Label 动态创建一个运行在 Pod 中的 Jenkins Slave 并注册到 Master 上，当运行完 Job 后，这个 Slave 会被注销并且这个 Pod 也会自动删除，恢复到最初状态。

## Jenkins Slave好处
+ 服务高可用，当 Jenkins Master 出现故障时，Kubernetes 会自动创建一个新的 Jenkins Master 容器，并且将 Volume 分配给新创建的容器，保证数据不丢失，从而达到集群服务高可用(这是k8s带来的资源控制器带来的优势)
+ 动态伸缩，合理使用资源，每次运行 Job 时，会自动创建一个 Jenkins Slave，Job 完成后，Slave 自动注销并删除容器，资源自动释放，而且 Kubernetes 会根据每个资源的使用情况，动态分配 Slave 到空闲的节点上创建，降低出现因某节点资源利用率高，还排队等待在该节点的情况。
+ 扩展性好，当 Kubernetes 集群的资源严重不足而导致 Job 排队等待时，可以很容易的添加一个 Kubernetes Node 到集群中，从而实现扩展。

# <font style="color:rgb(51, 51, 51);">动态slave配置</font>
## 制作slave镜像
slave镜像应该包含以下功能：

+ 运行jenkins-agent服务
+ 使用kubectl命令操作k8s集群
+ 使用nerdctl工具管理container镜像
+ 使用buildctl构建container镜像。

获取文件

```bash
# 获取kubectl
[root@tiaoban jenkins]# cp /usr/bin/kubectl .
# 获取nerdctl
[root@tiaoban jenkins]# cp /usr/bin/nerdctl .
# 获取buildctl
[root@tiaoban jenkins]# cp /usr/local/bin/buildctl .
[root@tiaoban jenkins]# ls
buildctl kubectl nerdctl
```

构建镜像

在构建镜像过程中基于inbound-agent镜像，因为其中已经包含了jenkins-agent服务相关组件，再添加kubectl工具用于操作k8s，nerdctl和buildctl工具用于构建和管理container镜像。

```yaml
[root@tiaoban jenkins]# cat Dockerfile 
FROM jenkins/inbound-agent:latest-jdk17
USER root
COPY kubectl /usr/bin/kubectl
COPY nerdctl /usr/bin/nerdctl
COPY buildctl /usr/bin/buildctl
[root@tiaoban jenkins]# docker build -t jenkins-agent:v1 . 
```

## 创建kube-config资源
为了能让<font style="color:rgb(51, 51, 51);">slave容器中能够使用 kubectl 工具来访问我们的 Kubernetes 集群，需要将其添加为secret资源，并挂载到pod中。</font>

```bash
[root@tiaoban jenkins]# kubectl create secret generic -n cicd kube-config --from-file=/root/.kube/config
```

## 节点开启buildkit服务(可选)
container容器运行时仅能运行容器，如果需要在CICD阶段构建镜像，则需要在执行构建镜像的节点手动安装buildkit服务并启用，具体步骤可参考文档：[https://www.cuiliangblog.cn/detail/section/167380911](https://www.cuiliangblog.cn/detail/section/167380911)。

也可以在slave pod中新增一个container，运行buildkit服务。

## <font style="color:rgb(0, 0, 0);">配置Pod Template(可选)</font>
配置 Pod Template，就是配置 Jenkins Slave 运行的 Pod 模板，命名空间我们同样是用cicd，Labels设置为jenkins-slave，对于后面执行 Job 的时候需要用到该值，容器名称填写jnlp，这样可以替换默认的agent容器。镜像使用的是刚刚我们制作的slave镜像，加入了 kubectl 等一些实用的工具。

运行命令和命令参数为空。

![](images/img_153.png)

另外需要注意我们这里需要在下面挂载三个目录

`/run/containerd/containerd.sock`：该文件是用于 Pod 中的容器能够共享[宿主机](https://cloud.tencent.com/product/cdh?from_column=20065&from=20065)的Container，用于管理container镜像。

`/root/.kube`：将之前创建的kube-config资源挂载到容器的/root/.kube目录下，这样能够在 Pod 的容器中能够使用 kubectl 工具来访问我们的 Kubernetes 集群，方便我们后面在 Slave Pod 部署 Kubernetes 应用

`/run/buildkit`：该文件是用于 Pod 中的容器能够共享buildkit进程，用于构建container镜像。

![](images/img_154.png)

同时指定Service Accoun为之前创建的jenkins

![](images/img_155.png)

除了在页面配置pod Template外，我们也可以通过pipeline配置。

# <font style="color:rgb(0, 0, 0);">测试</font>
Kubernetes 插件的配置工作完成了，接下来我们就来添加一个 Job 任务，看是否能够在 Slave Pod 中执行，任务执行完成后看 Pod 是否会被销毁。

## 自由流水线测试
创建自由流水线任务，勾选限制项目的运行节点，标签表达式填写我们配置的 Slave Pod 中的 Label，这两个地方必须保持一致。

![](images/img_156.png)

然后往下拉，在 Build 区域选择Execute shell

![](images/img_157.png)

然后输入我们测试命令

```bash
echo "测试获取Kubernetes信息"
kubectl get node
echo "测试获取container信息"
nerdctl ns ls
echo "测试buildkitd构建镜像"
echo "FROM busybox" > Dockerfile
echo 'CMD ["echo","hello","container"]' >> Dockerfile
nerdctl build -t buildkitd-test:v1 .
nerdctl images | grep buildkitd-test
```

现在我们直接在页面点击做成的 Build now 触发构建即可，然后观察 Kubernetes 集群中 Pod 的变化 

```bash
[root@tiaoban jenkins]# kubectl get pod -n cicd
NAME                       READY   STATUS    RESTARTS   AGE
buildkit-4bhpm             1/1     Running   0          25m
buildkit-4ddks             1/1     Running   0          25m
buildkit-6mlqc             1/1     Running   0          25m
buildkit-6vlw6             1/1     Running   0          25m
buildkit-msmx5             1/1     Running   0          25m
buildkit-v4dnd             1/1     Running   0          25m
jenkins-59dfbb6854-dx42n   1/1     Running   0          148m
jenkins-agent-3p4j2        1/1     Running   0          6s
```

我们可以看到在我们点击立刻构建的时候可以看到一个新的 Pod：jenkins-agent-3p4j2被创建了，这就是我们的 Jenkins Slave。任务执行完成后我们<font style="color:rgb(51, 51, 51);">可以查看到对应的控制台信息： </font>

![](images/img_158.png)

到这里证明我们的任务已经构建完成，然后这个时候我们再去集群查看我们的 Pod 列表，发现cicd这个 namespace 下面已经没有之前的 Slave 这个 Pod 了。

```javascript
[root@tiaoban jenkins]# kubectl get pod -n cicd
NAME                       READY   STATUS    RESTARTS   AGE
buildkit-4bhpm             1/1     Running   0          26m
buildkit-4ddks             1/1     Running   0          26m
buildkit-6mlqc             1/1     Running   0          26m
buildkit-6vlw6             1/1     Running   0          26m
buildkit-msmx5             1/1     Running   0          26m
buildkit-v4dnd             1/1     Running   0          26m
jenkins-59dfbb6854-dx42n   1/1     Running   0          149m
```

到这里我们就完成了使用 Kubernetes 动态生成 Jenkins Slave 的方法

## pipeline-使用pod Template
在流水线中指定pipeline脚本

![](images/img_159.png)

pipeline脚本如下：

```groovy
podTemplate(label: 'jenkins-slave', inheritFrom: 'jenkins-agent', cloud: 'k8s-local'){
    node('jenkins-slave') {
        stage('测试获取Kubernetes信息') {
            sh 'kubectl get node'
        }
        stage('测试获取container信息') {
            sh 'nerdctl ns ls'
        }
        stage('测试buildkitd构建镜像'){
            sh '''echo "FROM busybox" > Dockerfile
            echo \'CMD ["echo","hello","container"]\' >> Dockerfile
            nerdctl build -t buildkitd-test:v2 .
            nerdctl images | grep buildkitd-test'''
        }
    }
}
```

点击立即构建，查看控制台输出。

![](images/img_160.png)

## pipeline-自定义pod Template
```groovy
//创建一个Pod的模板，label为jenkins-agent
podTemplate(label: 'jenkins-agent', cloud: 'k8s-local', containers: [
    containerTemplate(
        name: 'jnlp',
        image: "harbor.local.com/cicd/jenkins-agent:v3",
        workingDir: '/home/jenkins/agent'
    ),
    containerTemplate(
        name: 'buildkitd',
        image: "harbor.local.com/cicd/buildkit:v0.13.2",
        privileged: true
    )],
    volumes:[
        hostPathVolume(mountPath: '/run/containerd/containerd.sock', hostPath:'/run/containerd/containerd.sock'),
        secretVolume(mountPath: '/root/.kube/', secretName: 'kube-config', defaultMode: '420'),
        hostPathVolume(mountPath: '/run/buildkit',hostPath: '/run/buildkit')
    ]
   )
// 使用上文创建的pod模板
{
    node('jenkins-agent'){
        stage('测试获取Kubernetes信息') {
            sh 'kubectl get node'
        }
        stage('测试获取container信息') {
            sh 'nerdctl ns ls'
        }
        stage('测试buildkitd构建镜像'){
            sh '''echo "FROM busybox" > Dockerfile
              echo 'CMD ["echo","hello","container"]' >> Dockerfile
              nerdctl build -t buildkitd-test:v2 .
              nerdctl images | grep buildkitd-test'''
        }
    }
}
```

运行结果与上文一致。



---

<a id="165534414"></a>

## Jenkins工具链集成 - jenkins与SonarQube连接

# <font style="color:rgb(77, 77, 77);">jenkins安装插件</font>
## **<font style="color:rgb(77, 77, 77);">下载SonarQube插件</font>**
<font style="color:rgb(77, 77, 77);">进入Jenkins的系统管理->插件管理->可选插件，搜索框输入sonarqube，安装重启。</font>

![](images/img_161.png)

## 启用SonarQube
<font style="color:rgb(77, 77, 77);">Jenkins的系统管理->系统配置，添加SonarQube服务。</font>

![](images/img_162.png)

# SonarQube配置
## 禁用审查结果上传到SCM功能
![](images/img_163.png)

## 生成token
![](images/img_164.png)

# jenkins配置
## 添加令牌
<font style="color:rgb(77, 77, 77);">Jenkins的系统管理->系统配置->添加token</font>

![](images/img_165.png)

<font style="color:rgb(77, 77, 77);">类型切换成Secret text，粘贴token，点击添加。</font>

![](images/img_166.png)

<font style="color:rgb(77, 77, 77);">选上刚刚添加的令牌凭证，点击应用保存。</font>

![](images/img_167.png)

<font style="color:rgb(77, 77, 77);"></font>

## <font style="color:rgb(77, 77, 77);">SonarQube Scanner 安装</font>
<font style="color:rgb(77, 77, 77);">进入Jenkins的系统管理->全局工具配置，下滑找到图片里的地方，点击新增SonarQube Scanner，我们选择自动安装并选择最新的版本。</font>

![](images/img_168.png)

# <font style="color:rgb(77, 77, 77);">非流水线项目添加代码审查</font>
## 添加构建步骤
编辑之前的自由风格构建的demo项目，在构建阶段新增步骤。

![](images/img_169.png)

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

![](images/img_170.png)

查看SonarQube扫描结果

![](images/img_171.png)

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
![](images/img_172.png)

 		

 	 



---

<a id="166296541"></a>

## Jenkins工具链集成 - jenkins远程服务器执行shell

# jenkins免密登录配置
## 安装插件
![](images/img_173.png)

## 配置SSH免密登录
在jenkins主机执行操作。

```bash
[root@jenkins ~]# ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:oAXhPPHpYXbfmefBgxkGe9MNKbr1aL9tiuCRoXcUJjk root@jenkins
The key's randomart image is:
+---[RSA 3072]----+
|    +.    .   .. |
|   o + .   +...o |
|    + O . E.B.. .|
|     B + ..B.X   |
|    . . S ooBo=  |
|         ..+oo.o |
|        . =....  |
|         o + ....|
|          . . o+.|
+----[SHA256]-----+
[root@jenkins ~]# ssh-copy-id 192.168.10.74
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/root/.ssh/id_rsa.pub"
The authenticity of host '192.168.10.74 (192.168.10.74)' can't be established.
ECDSA key fingerprint is SHA256:FfIN6cvtN9Wqorkx/0enHpwVBAMSDYDMeFt5nO6KHQU.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
root@192.168.10.74's password: 

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh '192.168.10.74'"
and check to make sure that only the key(s) you wanted were added.

[root@jenkins ~]# ssh 192.168.10.74
Activate the web console with: systemctl enable --now cockpit.socket

Last login: Fri Apr 19 10:28:53 2024 from 192.168.10.100
[root@springboot1 ~]# 
```

## 插件配置
在Jenkins中【系统管理】—【系统配置】，找到“Publish over SSH”来配置该插件信息。

![](images/img_174.png)

key通过查看jenkins服务器`cat .ssh/id_rsa`获取。

或者填写path to key路径/root/.ssh/id_ras。

# <font style="color:rgb(51, 51, 51);">验证测试</font>
## 创建自由风格项目
![](images/img_175.png)

## 创建测试脚本
在jenkins服务器ssh-test目录下

```bash
[root@jenkins ssh-test]# pwd
/var/lib/jenkins/workspace/ssh-test
[root@jenkins ssh-test]# cat test.sh 
#!/bin/bash
date >> /tmp/date.txt
```

## 添加构建步骤
![](images/img_176.png)

Name：“系统管理>系统配置”设置的SSH Sverver的名字Name。

Source files：允许为空，复制到远程主机上的文件，**/*意思是当前工作目录下所有问题

Remove prefix：允许为空，文件复制时要过滤的目录。

Remote directory：允许为空，文件得到到远程机上的目录，如果填写目录名则是相对于“SSH Server”中的“Remote directory”的，如果不存在将会自动创建。

Exec command：在这里填写在远程主机上执行的命令。

## 构建查看结果
![](images/img_177.png)

由控制台打印内容可知，已经成功传输一个文件。

登录服务器查看执行结果。

```bash
[root@springboot2 jenkins]# cd /opt/jenkins/
[root@springboot2 jenkins]# ll
总用量 4
-rw-r--r-- 1 root root 34 4月  23 23:09 test.sh
[root@springboot2 jenkins]# cat test.sh 
#!/bin/bash
date >> /tmp/date.txt
[root@springboot2 jenkins]# cat /tmp/date.txt 
2024年 04月 23日 星期二 23:09:28 CST
```



---

<a id="166573065"></a>

## Jenkins工具链集成 - Jenkins与Harbor连接

# Jenkins服务器安装docker
具体安装步骤参考文档：[https://www.cuiliangblog.cn/detail/section/26447182](https://www.cuiliangblog.cn/detail/section/26447182)

添加harbor私有仓库

```bash
[root@jenkins ~]# cat /etc/docker/daemon.json 
{
    "insecure-registries": [
        "https://harbor.local.com"
    ]
}
```

修改docker sock权限，允许jenkins调用

```bash
[root@jenkins ~]# chmod 666 /var/run/docker.sock
```

或者将jenkins用户添加到默认docker用户组下, 从而保证jenkins可以直接访问/var/run/docker.sock

```bash
[root@jenkins ~]# usermod -a -G docker jenkins
```

# 配置Jenkins
## 安装插件
**安装Docker Pipeline插件**

![](images/img_178.png)

## 为Harbor添加凭证
![](images/img_179.png)

## 安装Version Number插件
因为要自动给镜像打上tag，所以这里涉及到tag的取名规则，我用了一个Version Number 的插件，它能够获取到当天的年，月，日数据，我可以利用它来为tag进行取名。

![](images/img_180.png)

# 修改pipeline
## 修改pipeline脚本
完整脚本如下：

```groovy
pipeline {
    agent any
    environment {  
        VERSION = VersionNumber versionPrefix:'prod.', versionNumberString: '${BUILD_DATE_FORMATTED, "yyyyMMdd"}.${BUILDS_TODAY}'
    } 
    stages {
        stage('构建镜像') {
            environment {
                // harbor信息
                HARBOR_CRED = "harbor-cuiliang"
                HARBOR_URL = "harbor.local.com"
                HARBOR_PROJECT = "spring_boot_demo"
                // image信息
                IMAGE_APP = "demo"
                IMAGE_TAG = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                IMAGE_NAME = "${HARBOR_URL}/${HARBOR_PROJECT}/${IMAGE_APP}:${IMAGE_TAG}"
            }
            steps {
                echo '开始构建镜像'
                script {
                    docker.build "${IMAGE_NAME}"
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

## 完成构建
![](images/img_181.png)

## 验证Harbor仓库镜像
![](images/img_182.png)



---

<a id="174295850"></a>

## Jenkins CICD项目实战 - CI/CD项目介绍

# CI/CD是什么
## CI（持续集成）
持续集成是一种软件开发实践，通过自动化工具对代码进行编译、测试和打包，减少人工干预，提高构建效率。它的核心理念是将代码频繁地集成到共享存储库中，并通过自动化构建和测试流程来验证代码的正确性。这样做可以为开发人员提供即时的反馈，帮助他们快速定位并修复问题，从而加速软件开发周期并提高软件质量。

## CD（持续交付）
持续交付是一种软件开发实践，通过自动化工具建立一套自动化的流水线，将应用程序部署到不同的环境中，例如开发环境、测试环境和生产环境等。这种流水线能够自动化地执行构建、测试、部署和发布等步骤，使得软件可以在不同环境中快速、可靠地交付给最终用户。持续交付的目标是确保软件可以随时随地以可靠的方式交付给用户，从而缩短交付周期、降低发布风险。

## CI/CD的关系
CI和CD是相互关联的两个概念，持续集成是持续交付的基础，只有实现了持续集成，才能够实现持续交付。持续集成提高了代码的质量和可维护性，为持续交付提供了更好的基础；而持续交付则能够更快地将代码交付给用户，从而促进持续集成的实施。这两者相辅相成，共同推动着软件开发过程的持续改进和交付效率的提升。

# CI/CD项目简介
## 项目说明
利用 Jenkins、SonarQube、Harbor、Container、Kubernetes技术，搭建一个完整的 CI/CD 管道，模拟实际生产环境项目开发部署流程，实现持续集成、持续交付和持续部署。通过自动化构建、测试、代码质量检查和容器化部署，将开发人员从繁琐的手动操作中解放出来，提高团队的开发效率、软件质量和安全性，实现持续更新迭代和持续部署交付。

## 项目地址
gitee：[https://gitee.com/cuiliang0302/spring_boot_demo](https://gitee.com/cuiliang0302/spring_boot_demo)  
github：[https://github.com/cuiliang0302/spring-boot-demo](https://github.com/cuiliang0302/spring-boot-demo)

# CICD流程(jenkins+docker)
## 流程图


![](images/img_183.png)

## 流程说明
1. 开发人员将代码提交到Gitlab代码仓库时，gitlab请求jenkins的webhook地址，触发持续构建和持续部署流程。
2. Jenkins从Gitlab中拉取项目源码，编译并打成jar包，然后调用SonarQube完成代码扫描。
3. 扫描完成调用docker打包成容器镜像，并推送至Harbor镜像仓库。
4. Jenkins发送SSH远程命令，让生产部署服务器到Harbor私有仓库拉取镜像到本地，然后创建容器。
5. Jenkins完成CICD流程后，将结果邮件通知给开发和运维人员。
6. 用户访问项目服务器。

# CICD流程(jenkins+k8s)
## 流程图
![](images/img_184.png)

## 流程说明
开发测试阶段

1. 开发人员需求确定后，从master分支拉取最新代码，在dev分支完成开发后，将dev分支合并到test分支并推送至gitlab仓库。
2. Gitlab监听到test分支代码更新，请求jenkins的webhook地址，触发持续构建和持续部署流程，准备将代码部署至测试环境。
3. Jenkins从Gitlab中拉取项目源码，编译并打成jar包，然后调用SonarQube完成代码扫描。
4. 扫描完成调用docker或者container打包成容器镜像，并推送至Harbor镜像仓库。
5. jenkins修改yaml文件，将资源部署至测试环境。
6. Jenkins完成测试环境CICD流程后，将结果邮件通知给开发运维和测试人员。
7. 测试人员访问测试环境，功能验证无误后反馈给开发主管，至此开发测试阶段完成。

生产发布阶段

1. 开发主管将test分支代码合并至master分支，并推送至gitlab仓库。
2. gitlab监听到master分支代码更改，请求jenkins的webhook地址，开始触发生产环境cicd流程，使用k8s滚动更新项目版本。
3. jenkins完成cicd流程后自动发送邮件通知，用户访问新版本服务。

## 


---

<a id="169621642"></a>

## Jenkins CICD项目实战 - Jenkins+docker项目实战

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
![](images/img_185.png)

## 创建用户
创建一个普通用户cuiliang。  
![](images/img_186.png)

## 配置项目用户权限
在spring_boot_demo项目中添加普通用户cuiliang，并设置角色为开发者。  
![](images/img_187.png)  
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

![](images/img_188.png)

## 创建项目
导入外部项目，地址为[https://gitee.com/cuiliang0302/spring_boot_demo.git](https://gitee.com/cuiliang0302/spring_boot_demo.git)，并指定devops，项目类型为私有。

![](images/img_189.png)

## 创建用户
创建一个普通用户cuiliang  
![](images/img_190.png)

## 用户添加到组中
将cuiliang添加到群组devops中，cuiliang角色为Developer

![](images/img_191.png)

## 开启分支推送权限
![](images/img_192.png)

# jenkins流水线配置
## 拉取gitlab仓库代码
具体步骤可参考文档：[https://www.cuiliangblog.cn/detail/section/127410630](https://www.cuiliangblog.cn/detail/section/127410630)，此处以账号密码验证为例，并启用webhook配置。  
jenkins流水线配置如下  
![](images/img_193.png)  
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
![](images/img_194.png)

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
![](images/img_195.png)

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
![](images/img_196.png)  
代码审查结果如下  
![](images/img_197.png)

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
![](images/img_198.png)  
查看harbor镜像仓库，已上传镜像  
![](images/img_199.png)

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
![](images/img_200.png)  
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
![](images/img_201.png)  
邮件通知内容如下  
![](images/img_202.png)  
至此，整个CICD流程完成。



---

<a id="166584265"></a>

## Jenkins CICD项目实战 - Jenkins+k8s项目实战

# Jenkins动态slave介绍
## 为什么需要动态slave
1. **配置管理困难：**不同项目可能使用不同的编程语言、框架或库，这导致了每个Slave的配置环境各不相同。因此，需要动态Slave能够根据不同的项目需求，灵活配置不同的运行环境，从而简化配置管理和维护工作。
2. **资源分配不均衡：**在使用静态Slave时，可能会出现某些Slave处于空闲状态，而其他Slave却处于繁忙状态，导致资源分配不均衡。动态Slave可以根据当前任务的需求自动调配资源，使得任务能够在空闲的Slave上尽快执行，从而提高资源利用率和任务执行效率。
3. **资源浪费：**静态Slave在没有任务执行时仍然占用着资源，这导致了资源的浪费。而动态Slave能够根据实际需要自动扩容或缩减，当没有任务执行时会释放资源，从而避免了资源的浪费。

## 动态slave工作流程
正因为上面的这些种种痛点，我们渴望一种更高效更可靠的方式来完成这个 CI/CD 流程，而 Docker虚拟化容器技术能很好的解决这个痛点，又特别是在 Kubernetes 集群环境下面能够更好来解决上面的问题，下图是基于 Kubernetes 搭建 Jenkins 集群的简单示意图：

![](images/img_152.png)

从图上可以看到 Jenkins Master 和 Jenkins Slave 以 Pod 形式运行在 Kubernetes 集群的 Node 上，Master 运行在其中一个节点，并且将其配置数据存储到一个 Volume 上去，Slave 运行在各个节点上，并且它不是一直处于运行状态，它会按照需求动态的创建并自动删除。 

这种方式的工作流程大致为：当 Jenkins Master 接受到 Build 请求时，会根据配置的 Label 动态创建一个运行在 Pod 中的 Jenkins Slave 并注册到 Master 上，当运行完 Job 后，这个 Slave 会被注销并且这个 Pod 也会自动删除，恢复到最初状态。

# 服务部署
本项目所有服务均运行在k8s集群上，使用nfs共享存储，具体部署配置过程可参考下文，此处不再赘述。

## k8s部署
参考文档：[https://www.cuiliangblog.cn/detail/section/15287639](https://www.cuiliangblog.cn/detail/section/15287639)

## nfs共享存储部署
参考文档：[https://www.cuiliangblog.cn/detail/section/116191364](https://www.cuiliangblog.cn/detail/section/116191364)

## container部署
参考文档：[https://www.cuiliangblog.cn/detail/section/99861101](https://www.cuiliangblog.cn/detail/section/99861101)

## harbor部署
参考文档：[https://www.cuiliangblog.cn/detail/section/15189547](https://www.cuiliangblog.cn/detail/section/15189547)

## gitlab部署
参考文档：[https://www.cuiliangblog.cn/detail/section/131418586](https://www.cuiliangblog.cn/detail/section/131418586)

## jenkins部署
参考文档：[https://www.cuiliangblog.cn/detail/section/131416735](https://www.cuiliangblog.cn/detail/section/131416735)

## SonarQube部署
参考文档：[https://www.cuiliangblog.cn/detail/section/165547985](https://www.cuiliangblog.cn/detail/section/165547985)

# 项目与权限配置
## Harbor配置
**创建项目**

Harbor的项目分为公开和私有的:  
公开项目:所有用户都可以访问，通常存放公共的镜像，默认有一个library公开项目。  
私有项目:只有授权用户才可以访问，通常存放项目本身的镜像。 我们可以为微服务项目创建一个新的项目  
![](images/img_185.png)

**创建用户**

创建一个普通用户cuiliang。  
![](images/img_186.png)

**配置项目用户权限**

在spring_boot_demo项目中添加普通用户cuiliang，并设置角色为开发者。  
![](images/img_187.png)  
权限说明

| 角色 | 权限 |
| --- | --- |
| 访客 | 对项目有只读权限 |
| 开发人员 | 对项目有读写权限 |
| 维护人员 | 对项目有读写权限、创建webhook权限 |
| 项目管理员 | 出上述外，还有用户管理等权限 |


**上传下载镜像测试**

可参考文章[https://www.cuiliangblog.cn/detail/section/15189547](https://www.cuiliangblog.cn/detail/section/15189547)，此处不再赘述。

## gitlab项目权限配置
具体gitlab权限配置参考文档：[https://www.cuiliangblog.cn/detail/section/131513569](https://www.cuiliangblog.cn/detail/section/131513569)  
创建开发组develop，用户cuiliang，项目springboot demo

**创建组**

管理员用户登录，创建群组，组名称为develop，组权限为私有  
![](images/img_203.png)

**创建项目**

创建sprint boot demo项目，并指定develop，项目类型为私有  
![](images/img_204.png)

**创建用户**

创建一个普通用户cuiliang  
![](images/img_190.png)

**用户添加到组中**

将cuiliang添加到群组develop中，cuiliang角色为Developer  
![](images/img_205.png)

**配置分支权限**

![](images/img_192.png)

**用户权限验证**

使用任意一台机器模拟开发人员拉取代码，完成开发后推送至代码仓库。  
拉取仓库代码

```bash
[root@tiaoban opt]# git clone https://gitee.com/cuiliang0302/sprint_boot_demo.git
正克隆到 'sprint_boot_demo'...
remote: Enumerating objects: 69, done.
remote: Counting objects: 100% (69/69), done.
remote: Compressing objects: 100% (54/54), done.
remote: Total 69 (delta 15), reused 0 (delta 0), pack-reused 0
接收对象中: 100% (69/69), 73.15 KiB | 1.49 MiB/s, 完成.
处理 delta 中: 100% (15/15), 完成.
[root@tiaoban opt]# cd sprint_boot_demo/
[root@tiaoban sprint_boot_demo]# ls
email.html  Jenkinsfile  LICENSE  mvnw  mvnw.cmd  pom.xml  readme.md  sonar-project.properties  src  test
```

推送至gitlab仓库

```bash
# 修改远程仓库地址
[root@tiaoban sprint_boot_demo]# git remote set-url origin http://gitlab.local.com/develop/sprint_boot_demo.git
[root@tiaoban sprint_boot_demo]# git remote -v
origin  http://gitlab.local.com/develop/sprint_boot_demo.git (fetch)
origin  http://gitlab.local.com/develop/sprint_boot_demo.git (push)
# 推送代码至gitlab
[root@tiaoban sprint_boot_demo]# git push --set-upstream origin --all
Username for 'http://gitlab.local.com': cuiliang
Password for 'http://cuiliang@gitlab.local.com': 
枚举对象中: 55, 完成.
对象计数中: 100% (55/55), 完成.
使用 4 个线程进行压缩
压缩对象中: 100% (34/34), 完成.
写入对象中: 100% (55/55), 71.51 KiB | 71.51 MiB/s, 完成.
总共 55（差异 10），复用 52（差异 9），包复用 0
To http://gitlab.local.com/develop/sprint-boot-demo.git
 * [new branch]      main -> main
分支 'main' 设置为跟踪 'origin/main'。
```

查看验证

![](images/img_206.png)

# jenkins配置
## 插件安装与配置
GitLab插件安装与配置：[https://www.cuiliangblog.cn/detail/section/127410630](https://www.cuiliangblog.cn/detail/section/127410630)

SonarQube Scanner插件安装与配置：[https://www.cuiliangblog.cn/detail/section/165534414](https://www.cuiliangblog.cn/detail/section/165534414)

Kubernetes插件安装与配置：[https://www.cuiliangblog.cn/detail/section/127230452](https://www.cuiliangblog.cn/detail/section/127230452)

Email Extension邮件推送插件安装与配置：[https://www.cuiliangblog.cn/detail/section/133029974](https://www.cuiliangblog.cn/detail/section/133029974)

<font style="color:rgb(0, 12, 26);">Version Number</font>版本号插件安装与配置：[https://plugins.jenkins.io/versionnumber/](https://plugins.jenkins.io/versionnumber/)

<font style="color:rgb(0, 12, 26);">Content Replace</font>文件内容替换插件安装与配置：[https://plugins.jenkins.io/content-replace/](https://plugins.jenkins.io/content-replace/)

## jenkins slave镜像制作
安装完Kubernetes插件后，默认的slave镜像仅包含一些基础功能和软件包，如果需要构建镜像，执行kubectl命令，则需要引入其他container或者自定义slave镜像。

关于镜像构建问题，如果k8s容器运行时为docker，可以直接使用docker in docker方案，启动一个docker:dind容器，通过Docker pipeline插件执行镜像构建与推送操作，具体内容可参考[https://www.cuiliangblog.cn/detail/section/166573065](https://www.cuiliangblog.cn/detail/section/166573065)。

如果k8s容器运行时为container，则使用nerdctl+buildkitd方案，启动一个buildkit容器，通过nerdctl命令执行镜像构建与推送操作，具体内容可参考

 [https://www.cuiliangblog.cn/detail/section/167380911](https://www.cuiliangblog.cn/detail/section/167380911)。

本次实验以container环境为例，通过nerdctl+buildkitd方案演示如何构建并推送镜像。

**构建jenkins-slave镜像**

```bash
[root@tiaoban jenkins]# cat Dockerfile 
FROM jenkins/inbound-agent:latest-jdk17
USER root
COPY kubectl /usr/bin/kubectl
COPY nerdctl /usr/bin/nerdctl
COPY buildctl /usr/bin/buildctl
[root@tiaoban jenkins]# 
[root@tiaoban jenkins]# docker build -t harbor.local.com/cicd/jenkins-slave:v1.0 .
```

**测试jenkins-slave镜像构建容器与操作k8s**

以下操作在k8s集群master机器，容器运行时为container节点执行测试

```bash
# 启动buildkit镜像构建服务
# 挂载/run/containerd/containerd.sock方便container调用buildkitd
# 挂载/var/lib/buildkit，以便于将构建过程中下载的镜像持久化存储，方便下次构建时使用缓存
# 挂载/run/buildkit/目录方便nerctl调用buildkitd
[root@master3 ~]# nerdctl run --name buildkit -d --privileged=true \
-v /run/buildkit/:/run/buildkit/ \
-v /var/lib/buildkit:/var/lib/buildkit \
-v /run/containerd/containerd.sock:/run/containerd/containerd.sock \
moby/buildkit:v0.13.2
[root@master3 ~]# nerdctl ps
CONTAINER ID    IMAGE                    COMMAND        CREATED          STATUS    PORTS    NAMES
a8de5299dd84    moby/buildkit:v0.13.2    "buildkitd"    4 seconds ago    Up                 buildkit
# 启动jenkins-slave容器
# 挂载/run/containerd/containerd.sock方便netdctl操作container
# 挂载/run/buildkit/目录方便nerctl调用buildkitd构建镜像
# 挂载/root/.kube/目录方便kubectl工具操作k8s
[root@master3 ~]# nerdctl run --name jenkins-slave -it --privileged=true \
-v /run/buildkit/:/run/buildkit/ \
-v /root/.kube/:/root/.kube/ \
-v /run/containerd/containerd.sock:/run/containerd/containerd.sock \
harbor.local.com/cicd/jenkins-slave:v1.0 bash
# 测试container管理
root@28dcd3a667c9:/home/jenkins# nerdctl ps
CONTAINER ID    IMAGE                                       COMMAND                   CREATED           STATUS    PORTS    NAMES
28dcd3a667c9    harbor.local.com/cicd/jenkins-slave:v1.0    "/usr/local/bin/jenk…"    11 seconds ago    Up                 jenkins-slave
a8de5299dd84    harbor.local.com/cicd/buildkit:v0.13.2      "buildkitd"               11 minutes ago    Up                 buildkit
# 测试k8s管理
root@28dcd3a667c9:/home/jenkins# kubectl get node
NAME      STATUS   ROLES           AGE    VERSION
master1   Ready    control-plane   241d   v1.27.6
master2   Ready    control-plane   241d   v1.27.6
master3   Ready    control-plane   241d   v1.27.6
work1     Ready    <none>          241d   v1.27.6
work2     Ready    <none>          241d   v1.27.6
work3     Ready    <none>          241d   v1.27.6
# 测试镜像构建
root@28dcd3a667c9:/home/jenkins# echo 'FROM busybox' >> Dockerfile
root@28dcd3a667c9:/home/jenkins# echo 'CMD ["echo","hello","container"]' >> Dockerfile
root@28dcd3a667c9:/home/jenkins# cat Dockerfile 
FROM busybox
CMD ["echo","hello","container"]
root@28dcd3a667c9:/home/jenkins# nerdctl build -t test:v1 .
root@28dcd3a667c9:/home/jenkins# nerdctl images
REPOSITORY                             TAG        IMAGE ID        CREATED           PLATFORM       SIZE         BLOB SIZE
test                                   v1         4943762c7956    7 seconds ago     linux/amd64    4.1 MiB      2.1 MiB
harbor.local.com/cicd/buildkit         v0.13.2    c3cb08891c15    15 minutes ago    linux/amd64    190.3 MiB    87.2 MiB
harbor.local.com/cicd/jenkins-slave    v1.0       1d5c5b1572bc    6 minutes ago     linux/amd64    384.7 MiB    169.8 MiB
```

## job任务创建与配置
配置webhook构建触发器，当分支代码提交时触发构建，具体配置如下：

![](images/img_207.png)

流水线选择SCM从代码仓库中获取jenkinsfile，脚本路径填写Jenkinsfile-k8s.groov

![](images/img_208.png)

# 效果演示
## 开发测试阶段
模拟开发人员完成功能开发后提交代码至test分支

```bash
[root@tiaoban sprint_boot_demo]# git checkout -b test  origin/test
分支 'test' 设置为跟踪 'origin/test'。
切换到一个新分支 'test'
[root@tiaoban sprint_boot_demo]# git branch -a
  master
* test
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/origin/test
# 修改SpringBoot首页内容为Version:v2
[root@tiaoban sprint_boot_demo]# cat src/main/java/com/example/springbootdemo/HelloWorldController.java
package com.example.springbootdemo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloWorldController {
    @RequestMapping("/")
    @ResponseBody
    public String hello() {
        return "<h1>Hello SpringBoot</h1><p>Version:v2 Env:test</p>";
    }
    @RequestMapping("/health")
    @ResponseBody
    public String healthy() {
        return "ok";
    }
}
[root@tiaoban sprint_boot_demo]# git add .
[root@tiaoban sprint_boot_demo]# git commit -m "test环境更新版本至v2"
[test 68fb576] test环境更新版本至v2
 1 file changed, 1 insertion(+), 1 deletion(-)
[root@tiaoban sprint_boot_demo]# git push 
枚举对象中: 17, 完成.
对象计数中: 100% (17/17), 完成.
使用 4 个线程进行压缩
压缩对象中: 100% (6/6), 完成.
写入对象中: 100% (9/9), 707 字节 | 707.00 KiB/s, 完成.
总共 9（差异 2），复用 0（差异 0），包复用 0
remote: 
remote: To create a merge request for test, visit:
remote:   http://gitlab.local.com/develop/sprint_boot_demo/-/merge_requests/new?merge_request%5Bsource_branch%5D=test
remote: 
To http://gitlab.local.com/develop/sprint_boot_demo.git
   86a166a..68fb576  test -> test
```

此时查看cicd名称空间下的pod信息，发现已经创建一个名为springbootdemo-275-rf832-h6jkq-630x8的pod，包含3个container，分别是jnlp、maven、buildkitd。

```bash
[root@tiaoban ~]# kubectl get pod -n cicd
NAME                                   READY   STATUS    RESTARTS        AGE
gitlab-5997c5cdcd-2rvgz                1/1     Running   14 (100m ago)   15d
jenkins-6df7d6479b-v25rt               1/1     Running   9 (100m ago)    5d13h
sonarqube-postgresql-0                 1/1     Running   14 (100m ago)   15d
sonarqube-sonarqube-0                  1/1     Running   14 (100m ago)   15d
springbootdemo-275-rf832-h6jkq-630x8   3/3     Running   0               65s
```

查看jenkins任务信息，已顺利完成了集成部署工作。

![](images/img_209.png)

并且收到了jenkins自动发出的邮件，内容如下：

![](images/img_210.png)

查看SonarQube代码扫描信息，未发现异常代码。

![](images/img_211.png)

查看k8s，已成功创建相关资源。

```bash
[root@tiaoban sprint_boot_demo]# kubectl get all -n test
NAME                        READY   STATUS    RESTARTS   AGE
pod/demo-5d44f794d9-s7jw2   1/1     Running   0          7m38s

NAME           TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
service/demo   ClusterIP   10.111.167.204   <none>        8888/TCP   4d3h

NAME                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/demo   1/1     1            1           4d3h

NAME                              DESIRED   CURRENT   READY   AGE
replicaset.apps/demo-5d44f794d9   1         1         1       7m38s
```

此时模拟测试人员，访问测试环境域名

![](images/img_212.png)

至此，开发测试阶段演示完成。

## 生产发布阶段
接下来演示master分支代码提交后，触发生产环境版本发布流程。

```bash
[root@tiaoban sprint_boot_demo]# git branch -a
  master
* test
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/origin/test
[root@tiaoban sprint_boot_demo]# git checkout master
切换到分支 'master'
您的分支与上游分支 'origin/master' 一致。
[root@tiaoban sprint_boot_demo]# vim src/main/java/com/example/springbootdemo/HelloWorldController.java
[root@tiaoban sprint_boot_demo]# cat src/main/java/com/example/springbootdemo/HelloWorldController.java
package com.example.springbootdemo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloWorldController {
    @RequestMapping("/")
    @ResponseBody
    public String hello() {
        return "<h1>Hello SpringBoot</h1><p>Version:v2 Env:prod</p>";
    }
    @RequestMapping("/health")
    @ResponseBody
    public String healthy() {
        return "ok";
    }
}
[root@tiaoban sprint_boot_demo]# git add .
[root@tiaoban sprint_boot_demo]# git commit -m "生产环境更新版本至v2"
[master 889fc5c] 生产环境更新版本至v2
 1 file changed, 1 insertion(+), 1 deletion(-)
[root@tiaoban sprint_boot_demo]# git push
枚举对象中: 17, 完成.
对象计数中: 100% (17/17), 完成.
使用 4 个线程进行压缩
压缩对象中: 100% (6/6), 完成.
写入对象中: 100% (9/9), 719 字节 | 719.00 KiB/s, 完成.
总共 9（差异 2），复用 0（差异 0），包复用 0
To http://gitlab.local.com/develop/sprint_boot_demo.git
   600a1b6..889fc5c  master -> master
```

待收到邮件通知后，查看k8s资源，已经在prod名称空间下创建相关资源

```bash
[root@tiaoban sprint_boot_demo]# kubectl get all -n prod
NAME                        READY   STATUS    RESTARTS   AGE
pod/demo-7c57975bd8-7nmnx   1/1     Running   0          41s

NAME           TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE
service/demo   ClusterIP   10.97.0.219   <none>        8888/TCP   41s

NAME                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/demo   1/1     1            1           41s

NAME                              DESIRED   CURRENT   READY   AGE
replicaset.apps/demo-7c57975bd8   1         1         1       41s
```

此时访问生产环境域名，服务可以正常访问。

![](images/img_213.png)

此时查看Harbor仓库镜像信息，其中p开头的为生产环境镜像，t开头的为测试环境镜像。

![](images/img_214.png)

## jenkinsfile
完整的jenkinsfile如下所示，由于每个项目使用的开发语言和版本各不相同，因此建议将jenkinsfile存储在代码仓库随项目一同管理，使用yaml格式可以最大程度的定制slave容器。

```bash
pipeline {
    agent {
        kubernetes {
            // 定义要在 Kubernetes 中运行的 Pod 模板
            yaml '''
apiVersion: v1
kind: Pod
metadata:
  labels:
    app: jenkins-slave
spec:
  containers:
  - name: jnlp
    image: harbor.local.com/cicd/jenkins-slave:v1.0
    resources:
      limits:
        memory: "512Mi"
        cpu: "500m"
    securityContext:
      privileged: true
    volumeMounts:
    - name: buildkit
      mountPath: "/run/buildkit/"
    - name: containerd
      mountPath: "/run/containerd/containerd.sock"
    - name: kube-config
      mountPath: "/root/.kube/"
      readOnly: true
  - name: maven
    image: harbor.local.com/cicd/maven:3.9.3
    resources:
      limits:
        memory: "512Mi"
        cpu: "500m"
    command:
      - 'sleep'
    args:
      - '9999'
    volumeMounts:
      - name: maven-data
        mountPath: "/root/.m2"
  - name: buildkitd
    image: harbor.local.com/cicd/buildkit:v0.13.2
    resources:
      limits:
        memory: "256Mi"
        cpu: "500m"
    securityContext:
      privileged: true
    volumeMounts:
    - name: buildkit
      mountPath: "/run/buildkit/"
    - name: buildkit-data
      mountPath: "/var/lib/buildkit/"
    - name: containerd
      mountPath: "/run/containerd/containerd.sock"
  volumes:
  - name: maven-data
    persistentVolumeClaim:
      claimName: jenkins-maven
  - name: buildkit
    hostPath:
      path: /run/buildkit/
  - name: buildkit-data
    hostPath:
      path: /var/lib/buildkit/
  - name: containerd
    hostPath:
      path: /run/containerd/containerd.sock
  - name: kube-config
    secret:
      secretName: kube-config
            '''
      retries 2
        }
    }
    environment {
        // 全局变量
        HARBOR_CRED = "harbor-cuiliang-password"
        IMAGE_NAME = ""
        IMAGE_APP = "demo"
        branchName = ""
    }
    stages {
        stage('拉取代码') {
            environment {
                // gitlab仓库信息
                GITLAB_CRED = "gitlab-cuiliang-password"
                GITLAB_URL = "http://gitlab.cicd.svc/develop/sprint_boot_demo.git"
            }
            steps {
                echo '开始拉取代码'
                checkout scmGit(branches: [[name: '*/*']], extensions: [], userRemoteConfigs: [[credentialsId: "${GITLAB_CRED}", url: "${GITLAB_URL}"]])
                // 获取当前拉取的分支名称
                script {
                    def branch = env.GIT_BRANCH ?: 'master'
                    branchName = branch.split('/')[-1]
                }
                echo '拉取代码完成'
            }
        }
        stage('编译打包') {
            steps {
                container('maven') {
                    // 指定使用maven container进行打包
                    echo '开始编译打包'
                    sh 'mvn clean package'
                    echo '编译打包完成'
                }
            }
        }
        stage('代码审查') {
            environment {
                // SonarQube信息
                SONARQUBE_SCANNER = "SonarQubeScanner"
                SONARQUBE_SERVER = "SonarQubeServer"
            }
            steps {
                echo '开始代码审查'
                script {
                    def scannerHome = tool "${SONARQUBE_SCANNER}"
                    withSonarQubeEnv("${SONARQUBE_SERVER}") {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
                echo '代码审查完成'
            }
        }
        stage('构建镜像') {
            environment {
                // harbor仓库信息
                HARBOR_URL = "harbor.local.com"
                HARBOR_PROJECT = "spring_boot_demo"
                // 镜像标签
                IMAGE_TAG = ''
                // 镜像名称
                IMAGE_NAME = ''
            }
            steps {
                echo '开始构建镜像'
                script {
                    if (branchName == 'master') {
                        IMAGE_TAG = VersionNumber versionPrefix: 'p', versionNumberString: '${BUILD_DATE_FORMATTED, "yyMMdd"}.${BUILDS_TODAY}'
                    } else if (branchName == 'test') {
                        IMAGE_TAG = VersionNumber versionPrefix: 't', versionNumberString: '${BUILD_DATE_FORMATTED, "yyMMdd"}.${BUILDS_TODAY}'
                    } else {
                        error("Unsupported branch: ${params.BRANCH}")
                    }
                    IMAGE_NAME = "${HARBOR_URL}/${HARBOR_PROJECT}/${IMAGE_APP}:${IMAGE_TAG}"
                    sh "nerdctl build --insecure-registry -t ${IMAGE_NAME} . "
                }
                echo '构建镜像完成'
                echo '开始推送镜像'
                // 获取harbor账号密码
                withCredentials([usernamePassword(credentialsId: "${HARBOR_CRED}", passwordVariable: 'HARBOR_PASSWORD', usernameVariable: 'HARBOR_USERNAME')]) {
                    // 登录Harbor仓库
                    sh """nerdctl login --insecure-registry ${HARBOR_URL} -u ${HARBOR_USERNAME} -p ${HARBOR_PASSWORD}
          nerdctl push --insecure-registry ${IMAGE_NAME}"""
                }
                echo '推送镜像完成'
                echo '开始删除镜像'
                script {
                    sh "nerdctl rmi -f ${IMAGE_NAME}"
                }
                echo '删除镜像完成'
            }
        }
        stage('项目部署') {
            environment {
                // 资源清单名称
                YAML_NAME = "k8s.yaml"
            }
            steps {
                echo '开始修改资源清单'
                script {
                    if (branchName == 'master' ) {
                        NAME_SPACE = 'prod'
                        DOMAIN_NAME = 'demo.local.com'
                    } else if (branchName == 'test') {
                        NAME_SPACE = 'test'
                        DOMAIN_NAME = 'demo.test.com'
                    } else {
                        error("Unsupported branch: ${params.BRANCH}")
                    }
                }
                // 使用Content Replace插件进行k8s资源清单内容替换
                contentReplace(configs: [fileContentReplaceConfig(configs: [fileContentReplaceItemConfig(replace: "${IMAGE_NAME}", search: 'IMAGE_NAME'),
                                                                            fileContentReplaceItemConfig(replace: "${NAME_SPACE}", search: 'NAME_SPACE'),
                                                                            fileContentReplaceItemConfig(replace: "${DOMAIN_NAME}", search: 'DOMAIN_NAME')],
                        fileEncoding: 'UTF-8',
                        filePath: "${YAML_NAME}",
                        lineSeparator: 'Unix')])
                echo '修改资源清单完成'
                sh "cat ${YAML_NAME}"
                echo '开始部署资源清单'
                sh "kubectl apply -f ${YAML_NAME}"
                echo '部署资源清单完成'
            }
        }
    }
    post {
        always {
            echo '开始发送邮件通知'
            emailext(subject: '构建通知：${PROJECT_NAME} - Build # ${BUILD_NUMBER} - ${BUILD_STATUS}!',
                    body: '${FILE,path="email.html"}',
                    to: 'cuiliang0302@qq.com')
            echo '邮件通知发送完成'
        }
    }
}
```







---

<a id="92727905"></a>

## Gitlab安装部署 - gitlab部署(rpm)

# 参考文档
安装文档：[https://docs.gitlab.com/omnibus/installation/](https://docs.gitlab.com/omnibus/installation/)

rpm软件包地址：[https://packages.gitlab.com/gitlab/gitlab-ce](https://packages.gitlab.com/gitlab/gitlab-ce)

国内下载地址：[https://mirror.tuna.tsinghua.edu.cn/help/gitlab-ce/](https://mirror.tuna.tsinghua.edu.cn/help/gitlab-ce/)

# rpm包安装
## 一键在线安装
参考文档：[https://packages.gitlab.com/gitlab/gitlab-ce/install#bash-rpm](https://packages.gitlab.com/gitlab/gitlab-ce/install#bash-rpm)

## 离线安装
```bash
[root@tiaoban ~]# wget --content-disposition https://packages.gitlab.com/gitlab/gitlab-ce/packages/el/8/gitlab-ce-16.10.2-ce.0.el8.x86_64.rpm/download.rpm
[root@tiaoban ~]# ls
gitlab-ce-16.10.2-ce.0.el8.x86_64.rpm
[root@gitlab ~]# dnf -y install gitlab-ce-16.10.2-ce.0.el8.x86_64.rpm
[root@tiaoban ~]# vim /etc/gitlab/gitlab.rb # 编辑站点地址
32 external_url 'http://192.168.10.100'
[root@tiaoban ~]# gitlab-ctl reconfigure # 初始化配置
```

服务管理命令

```bash
[root@tiaoban gitlab]# gitlab-ctl start
[root@tiaoban gitlab]# gitlab-ctl status
[root@tiaoban gitlab]# gitlab-ctl stop
```

登录web页面

![](images/img_215.png)

获取默认密码

```bash
[root@tiaoban gitlab]# cat /etc/gitlab/initial_root_password
# WARNING: This value is valid only in the following conditions
#          1. If provided manually (either via `GITLAB_ROOT_PASSWORD` environment variable or via `gitlab_rails['initial_root_password']` setting in `gitlab.rb`, it was provided before database was seeded for the first time (usually, the first reconfigure run).
#          2. Password hasn't been changed manually, either via UI or via command line.
#
#          If the password shown here doesn't work, you must reset the admin password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: XsxXm07NOya6YBDnUHAFszBTKRvcF77buwIOegX5T+I=

# NOTE: This file will be automatically deleted in the first reconfigure run after 24 hours.
```

# 


---

<a id="126398301"></a>

## Gitlab安装部署 - gitlab部署(docker)

## 安装gitlab
```bash
[root@tiaoban gitlab]# mkdir config logs data
[root@tiaoban gitlab]# ls
config  data  logs
[root@tiaoban gitlab]# pwd
/opt/gitlab
[root@tiaoban gitlab]# docker run --name gitlab --detach \
  --hostname gitlab.test.com \
  --publish 443:443 --publish 80:80 --publish 8022:22 \
  --restart always \
  --volume $PWD/config:/etc/gitlab \
  --volume $PWD/logs:/var/log/gitlab \
  --volume $PWD/data:/var/opt/gitlab \
  --shm-size 256m \
  gitlab/gitlab-ce:17.0.0-ce.0
```

## 修改配置文件
```bash
[root@tiaoban gitlab]# vim config/gitlab.rb
external_url 'http://gitlab.test.com'
gitlab_rails['gitlab_ssh_host'] = '192.168.10.100'
gitlab_rails['time_zone'] = 'Asia/Shanghai'
gitlab_rails['gitlab_shell_ssh_port'] = 8022
# 解决头像显示异常问题
gitlab_rails['gravatar_plain_url'] = 'http://gravatar.loli.net/avatar/%{hash}?s=%{size}&d=identicon'
gitlab_rails['gravatar_ssl_url'] = 'https://gravatar.loli.net/avatar/%{hash}?s=%{size}&d=identicon'
# 关闭 promethues和alertmanager
prometheus['enable'] = false
alertmanager['enable'] = false
# 默认gitlab配置资源占用较高，可以根据情况减少资源占用
# 关闭邮件服务
gitlab_rails['gitlab_email_enabled'] = false
gitlab_rails['smtp_enable'] = false
# 减少 postgresql 数据库缓存
postgresql['shared_buffers'] = "128MB"
# 减少 postgresql 数据库并发数量
postgresql['max_connections'] = 200
# nginx减少进程数
nginx['worker_processes'] = 2
[root@tiaoban gitlab]# docker exec -it gitlab bash
root@gitlab:/# gitlab-ctl reconfigure
gitlab Reconfigured!
root@gitlab:/# gitlab-ctl restart
```

## 服务控制
```bash
[root@tiaoban gitlab]# docker restart gitlab
[root@tiaoban gitlab]# docker start gitlab
[root@tiaoban gitlab]# docker stop gitlab
[root@tiaoban gitlab]# docker rm gitlab
```

## 客户端添加hosts记录
修改hosts文件，添加如下记录`gitlab.test.com 192.168.10.100`，然后浏览器访问即可。





---

<a id="131418586"></a>

## Gitlab安装部署 - gitlab部署(k8s)

# 创建资源
## pvc
```yaml
[root@tiaoban gitlab]# cat > gitlab-pvc.yaml << EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: gitlab-data-pvc
  namespace: gitlab
spec:
  storageClassName: nfs-client
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 50Gi
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: gitlab-config-pvc
  namespace: gitlab
spec:
  storageClassName: nfs-client
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
EOF
```

## deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gitlab
  namespace: gitlab
spec:
  selector:
    matchLabels:
      app: gitlab
  replicas: 1
  template:
    metadata:
      labels:
        app: gitlab
    spec:
      containers:
        - name: gitlab
          image: gitlab/gitlab-ce:18.4.3-ce.0
          env:
            - name: GITLAB_SKIP_UNMIGRATED_DATA_CHECK  # 跳过 GitLab 启动时的数据迁移检查
              value: "true"
            - name: EXTERNAL_URL # 指定gitlab域名
              value: "http://gitlab.cuiliangblog.cn/"
            - name: GITLAB_OMNIBUS_CONFIG
              value: |
                prometheus['enable'] = false
                alertmanager['enable'] = false
                gitlab_rails['time_zone'] = 'Asia/Shanghai'
                gitlab_rails['gitlab_email_enabled'] = false
                gitlab_rails['smtp_enable'] = false
                gitlab_rails['gravatar_plain_url'] = 'http://gravatar.loli.net/avatar/%{hash}?s=%{size}&d=identicon'
                gitlab_rails['gravatar_ssl_url'] = 'https://gravatar.loli.net/avatar/%{hash}?s=%{size}&d=identicon'
                nginx['worker_processes'] = 2
                postgresql['max_connections'] = 100
                postgresql['shared_buffers'] = "128MB"
          ports:
            - containerPort: 80
              name: http
            - containerPort: 443
              name: https
            - containerPort: 22
              name: ssh
          readinessProbe:
            exec:
              command: ["sh", "-c", "curl -s http://127.0.0.1/-/health"]
          livenessProbe:
            exec:
              command: ["sh", "-c", "curl -s http://127.0.0.1/-/health"]
            timeoutSeconds: 5
            failureThreshold: 3
            periodSeconds: 60
          startupProbe:
            exec:
              command: ["sh", "-c", "curl -s http://127.0.0.1/-/health"]
            failureThreshold: 20
            periodSeconds: 120
          resources:
            requests:
              memory: "4Gi"
              cpu: "2"
            limits:
              memory: "8Gi"
              cpu: "4"
          volumeMounts:
            - name: data
              mountPath: /var/opt/gitlab
            - name: config
              mountPath: /etc/gitlab
            - name: log
              mountPath: /var/log/gitlab
            - mountPath: /dev/shm
              name: cache-volume
      volumes:
        - name: data
          persistentVolumeClaim:
            claimName: gitlab-data-pvc
        - name: config
          persistentVolumeClaim:
            claimName: gitlab-config-pvc
        - name: log
          emptyDir: {}
        - name: cache-volume
          emptyDir:
            medium: Memory
            sizeLimit: 256Mi
```

## svc
```yaml
[root@tiaoban gitlab]# cat > gitlab-svc.yaml << EOF
apiVersion: v1
kind: Service
metadata:
  name: gitlab-svc
  namespace: gitlab
spec:
  selector:
    app: gitlab
  ports:
    - port: 80
      targetPort: 80
      name: http
    - port: 443
      targetPort: 443
      name: https
    - port: 22
      targetPort: 22
      name: ssh
EOF
```

## ingress
```yaml
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: gitlab-tls
  namespace: gitlab
spec:
  entryPoints:
    - websecure 
  tls:
    secretName: ingress-tls
  routes:
    - match: Host(`gitlab.cuiliangblog.cn`)
      kind: Rule
      services:
        - name: gitlab-svc
          port: 80
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: gitlab
  namespace: gitlab
spec:
  entryPoints:
    - web
  routes:
    - match: Host(`gitlab.cuiliangblog.cn`)
      kind: Rule
      services:
        - name: gitlab-svc
          port: 80
```

# 访问验证
## 查看资源信息
```bash
[root@tiaoban gitlab]# kubectl get all -n gitlab
NAME                              READY   STATUS    RESTARTS    AGE
pod/gitlab-68b7b46dc7-m687z       1/1     Running   0           11m

NAME                     TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                 AGE
service/gitlab-svc       ClusterIP   10.108.64.185    <none>        80/TCP,443/TCP,22/TCP   11m
```

## 访问验证
客户端新增hots记录`192.168.10.10 gitlab.cuiliangblog.cn`

![](images/img_216.png)

## 添加集群 hosts 记录
为了方便后续 gitlab runner、Jenkins、argocd 服务通过域名访问 gitlab 服务，可以将 hosts 记录添加到 coredns 中，具体可参考文档：[https://www.cuiliangblog.cn/detail/section/140980525](https://www.cuiliangblog.cn/detail/section/140980525)



---

<a id="127165260"></a>

## Gitlab基本配置与使用 - gitlab设置

# 常用设置
## 获取root用户密码
```bash
[root@tiaoban gitlab]# kubectl exec -it -n gitlab gitlab-645b7cccf-xwg7s -- bash
root@gitlab-645b7cccf-xwg7s:/# cat /etc/gitlab/initial_root_password | grep Password
Password: BwoXKC3qGABwhtLOFERuMzA4ZK+baSr9NRKhDIwI3Xo=
```

## 修改root密码
使用临时密码登录后依次点击Admin Area——>Overview——>Users——>Edit，然后修改密码即可。

![](images/img_217.png)

![](images/img_218.png)

## 更换为中文
点击左上角头像——>Perferences——>Localization——>将language改为中文，然后刷新页面即可。

![](images/img_219.png)

## 头像不显示问题
<font style="color:rgb(77, 77, 77);">本地安装完GitLab服务后，会发现用户的头像部分显示不了。原因是因为GitLab默认使用了Gravatar的头像，而Gravatar目前是被墙的。所以访问不了，解决问题的办法就是更换其URL为国内的某个镜像URL。</font>

```bash
[root@tiaoban gitlab]# kubectl exec -it -n gitlab gitlab-645b7cccf-xwg7s -- bash
root@gitlab-645b7cccf-xwg7s:/# vi /etc/gitlab/gitlab.rb
# 注释原本的plain_url和ssl_url改为国内地址
gitlab_rails['gravatar_plain_url'] = 'http://gravatar.loli.net/avatar/%{hash}?s=%{size}&d=identicon'
gitlab_rails['gravatar_ssl_url'] = 'https://gravatar.loli.net/avatar/%{hash}?s=%{size}&d=identicon'
# 重载配置
root@gitlab-645b7cccf-xwg7s:/# gitlab-ctl reconfigure
# 重启gitlab
root@gitlab-645b7cccf-xwg7s:/# gitlab-ctl restart
```

## git地址不正确问题
如果 git clone 仓库时，复制的命令不是 gitlab 仓库地址，可修改配置文件：

```bash
[root@tiaoban gitlab]# kubectl exec -it -n gitlab gitlab-645b7cccf-xwg7s -- bash
root@gitlab-645b7cccf-xwg7s:#  vi /etc/gitlab/gitlab.rb
external_url 'http://gitlab.cuiliangblog.cn'
# 重载配置
root@gitlab-645b7cccf-xwg7s:/# gitlab-ctl reconfigure
# 重启gitlab
root@gitlab-645b7cccf-xwg7s:/# gitlab-ctl restart
```

## 配置项文档
gitlab配置参考文档：[https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/files/gitlab-config-template/gitlab.rb.template?_gl=1%2attjwk6%2a_ga%2aMjExNTA5MzkyNS4xNjgyMDg0ODYx%2a_ga_ENFH3X7M5Y%2aMTY4NTc3ODQ1My4xOC4xLjE2ODU3NzkxNDMuMC4wLjA.](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/files/gitlab-config-template/gitlab.rb.template?_gl=1%2attjwk6%2a_ga%2aMjExNTA5MzkyNS4xNjgyMDg0ODYx%2a_ga_ENFH3X7M5Y%2aMTY4NTc3ODQ1My4xOC4xLjE2ODU3NzkxNDMuMC4wLjA.)

# gitlab常用命令
```bash
# 获取详细日志信息
gitlab-ctl tail 
# 检查组件状态
gitlab-ctl status
# 修改默认的配置文件；
vim /etc/gitlab/gitlab.rb  
# 重载配置
gitlab-ctl reconfigure
# 启动所有 gitlab 组件；
gitlab-ctl start    
# 停止所有 gitlab 组件；
gitlab-ctl stop      
# 重启所有 gitlab 组件；
gitlab-ctl restart        
# 检查gitlab；
gitlab-rake gitlab:check SANITIZE=true --trace   
```



---

<a id="131513569"></a>

## Gitlab基本配置与使用 - gitlab权限

# 组、用户、项目关系
## 创建组
使用管理员 root 创建组，一个组里面可以有多个项目分支，可以将开发添加到组里面进行设置权限，不同的组就是不同的开发项目或者服务模块，不同的组添加不同的开发即可实现对开发设置权限的管理 ，组类型有private、internal和public

+ <font style="color:rgb(51, 51, 51);">Private：只有组成员才能看到</font>
+ <font style="color:rgb(51, 51, 51);">Internal：只要登录的用户就能看到</font>
+ <font style="color:rgb(51, 51, 51);">Public：所有人都能看到</font>

## 在组中创建项目
以刚才创建的新用户身份登录到Gitlab，然后在用户组中创建新的项目，<font style="color:rgb(77, 77, 77);">GitLab的可见性权限有三种：Private、Internal、Public</font>

+ public：公共项目，无需任何身份验证即可克隆公共项目。任何登录的用户都将对该项目具有来宾权限。<font style="color:rgb(77, 77, 77);">公共项目登录和未登录GitLab的人都可以看到该项目并可以进行克隆下载，相当于公开。</font>
+ internal：内部项目，任何登录的用户都可以克隆内部项目。<font style="color:rgb(77, 77, 77);">任何登录的用户都将对该项目具有来宾权限。</font>内部项目只有登录GitLab的用户才会看到该项目和进行克隆，未登录的用户是看不到该项目的
+ private：私有项目，只有创建者和项目组员才可以访问私有项目在创建之后，刚开始是只有创建者可以访问看到，其他用户是访问不了（就是看不到这个项目）。只有创建者或者有权限的组员添加了用户为该项目的组员，用户才会看到该项目并访问。

## 创建用户
创建用户的时候，可以选择Regular或Admin类型，创建完用户之后需要修改密码。

+ Regular：普通用户，只能访问属于他的组和项目
+ Admin：可以访问所有组和项目 

## 将用户添加到组中
选择某个用户组，进行Members管理组成员。  
Gitlab用户在组里面有5种不同权限： 

+ Guest：可以创建issue、发表评论，不能读写版本库
+ Reporter：可以克隆代码，不能提交，赋予QA、PM这个权限
+ Developer：可以克隆代码、开发、提交、push，赋予普通开发人员这个权限
+ Maintainer：可以创建项目、添加tag、保护分支、添加项目成员、编辑项目，赋予核心开发人员这个权限
+ Owner：可以设置项目访问权限 - Visibility Level、删除项目、迁移项目、管理组成员，赋予管理人员这个权限

# 操作实践
![](images/img_220.png)

## 开发组1与项目1创建
> 创建开发组1，组权限为私有。并创建项目1，项目权限为私有。然后创建普通用户张三并赋予Developer权限
>

管理员用户登录，创建开发组1，组名称为development_team1，组权限为私有

![](images/img_221.png)

创建一个项目，并指定开发组1，项目类型为私有

![](images/img_222.png)

创建一个普通用户张三

![](images/img_223.png)

将张三添加到群组development_team1中，张三角色为Developer

![](images/img_224.png)

## 开发组2与项目2创建
> 创建开发组2，组权限为内部。并创建项目2，项目权限为内部。然后创建普通用户李四并赋予owner权限
>

管理员用户登录，创建开发组2，组名称为development_team2，组权限为内部

![](images/img_225.png)

创建项目project2，项目类型为内部，所属于开发组2。

![](images/img_226.png)

创建用户李四，角色为普通用户

![](images/img_227.png)

将李四添加到组中，角色为owner。

![](images/img_228.png)

## 开发组3与项目3创建
> 创建开发组3，组权限为公开。并创建项目3，项目权限为公开。然后创建管理员用户王五并赋予reporter权限
>

管理员用户登录，创建开发组3，组名称为development_team3，组权限为公共

![](images/img_229.png)

创建项目project3，项目权限为公共

![](images/img_230.png)

创建管理员用户王五

![](images/img_231.png)

将王五添加到组中，角色为reporter

![](images/img_232.png)

# 权限验证
## 张三登录验证
浏览项目权限发现， 可以查看所属项目、公开项目、内部项目

![](images/img_233.png)

## 李四登录验证
浏览项目权限发现， 可以查看所属项目、公开项目

![](images/img_234.png)

## 王五登录验证
浏览项目权限发现， 可以查看全部项目

![](images/img_235.png)

## 未登录用户
浏览项目权限发现， 可以查看公开项目

![](images/img_236.png)



---

<a id="178422252"></a>

## Gitlab基本配置与使用 - gitlab监控

参考文档：[https://docs.gitlab.com/ee/administration/monitoring/prometheus/gitlab_metrics.html](https://docs.gitlab.com/ee/administration/monitoring/prometheus/gitlab_metrics.html)

# gitlab配置
## 启用metrics监控
```bash
[root@tiaoban ~]# kubectl exec -it -n cicd gitlab-b5cb5f947-2swpw -- bash
root@gitlab-b5cb5f947-2swpw:/# vi /etc/gitlab/gitlab.rb
gitlab_exporter['enable'] = true                              
# gitlab_exporter['log_directory'] = "/var/log/gitlab/gitlab-exporter"
# gitlab_exporter['log_group'] = nil                                                           
# gitlab_exporter['home'] = "/var/opt/gitlab/gitlab-exporter"

##! Advanced settings. Should be changed only if absolutely needed.                                      
# gitlab_exporter['server_name'] = 'webrick'                                                                  
gitlab_exporter['listen_address'] = '0.0.0.0'    
gitlab_exporter['listen_port'] = '9168'
# 重载配置
root@gitlab-b5cb5f947-2swpw:/# gitlab-ctl reconfigure
# 重启gitlab
root@gitlab-b5cb5f947-2swpw:/# gitlab-ctl restart
```

修改service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: gitlab
  namespace: cicd
  labels:
    app: gitlab
spec:
  selector:
    app: gitlab
  ports:
    - port: 80
      targetPort: 80
      name: http
    - port: 443
      targetPort: 443
      name: https
    - port: 22
      targetPort: 22
      name: ssh
    - port: 9168
      targetPort: 9168 
      name: gitlab-exporter
```

## 访问metrics验证
```bash
[root@rockylinux /]# curl gitlab.cicd.svc:9168/metrics
ruby_gc_stat_count 13
ruby_gc_stat_time 108
ruby_gc_stat_heap_allocated_pages 246
ruby_gc_stat_heap_sorted_length 317
ruby_gc_stat_heap_allocatable_pages 71
ruby_gc_stat_heap_available_slots 100516
ruby_gc_stat_heap_live_slots 80800
ruby_gc_stat_heap_free_slots 19716
ruby_gc_stat_heap_final_slots 0
ruby_gc_stat_heap_marked_slots 79756
```

# Prometheus配置
## 创建<font style="color:rgb(48, 49, 51);">ServiceMonitor</font>资源
```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: gitlab-exporter # ServiceMonitor名称
  namespace: monitoring # ServiceMonitor所在名称空间
spec:
  jobLabel: gitlab # job名称
  endpoints: # prometheus所采集Metrics地址配置，endpoints为一个数组，可以创建多个，但是每个endpoints包含三个字段interval、path、port
  - port: gitlab-exporter # prometheus采集数据的端口，这里为port的name，主要是通过spec.selector中选择对应的svc，在选中的svc中匹配该端口
    interval: 30s # prometheus采集数据的周期，单位为秒
    scheme: http # 协议
    path: /metrics # prometheus采集数据的路径
  selector: # svc标签选择器
    matchLabels:
      app: gitlab
  namespaceSelector: # namespace选择
    matchNames:
    - cicd
```

## 验证targets
![](images/img_237.png)





---

<a id="169961433"></a>

## Gitlab CI/CD介绍 - Gitlab CI/CD简介

# Gitlab CI/CD优势
+ 开源： CI/CD是开源GitLab社区版和专有GitLab企业版的一部分。
+ 易于学习： 具有详细的入门文档。
+ 无缝集成： GitLab CI / CD是GitLab的一部分，支持从计划到部署,具有出色的用户体验。
+ 可扩展： 测试可以在单独的计算机上分布式运行，可以根据需要添加任意数量的计算机。
+ 更快的结果： 每个构建可以拆分为多个作业，这些作业可以在多台计算机上并行运行。
+ 针对交付进行了优化： 多个阶段，手动部署， 环境 和 变量。

# Gitlab CI/CD特点
+ 多平台： Unix，Windows，macOS和任何其他支持Go的平台上执行构建。
+ 多语言： 构建脚本是命令行驱动的，并且可以与Java，PHP，Ruby，C和任何其他语言一起使用。
+ 稳定构建： 构建在与GitLab不同的机器上运行。
+ 并行构建： GitLab CI / CD在多台机器上拆分构建，以实现快速执行。
+ 实时日志记录： 合并请求中的链接将您带到动态更新的当前构建日志。
+ 灵活的管道： 您可以在每个阶段定义多个并行作业，并且可以 触发其他构建。
+ 版本管道： 一个 .gitlab-ci.yml文件 包含您的测试，整个过程的步骤，使每个人都能贡献更改，并确保每个分支获得所需的管道。
+ 自动缩放： 您可以 自动缩放构建机器，以确保立即处理您的构建并将成本降至最低。
+ 构建工件： 您可以将二进制文件和其他构建工件上载到 GitLab并浏览和下载它们。
+ Docker支持： 可以使用自定义Docker映像， 作为测试的一部分启动 服务， 构建新的Docker映像，甚至可以在Kubernetes上运行。
+ 容器注册表： 内置的容器注册表， 用于存储，共享和使用容器映像。
+ 受保护的变量： 在部署期间使用受每个环境保护的变量安全地存储和使用机密。
+ 环境： 定义多个环境。

![](images/img_238.png)  


# Gitlab CI/CD架构
## Gitlab CI / CD
GitLab的一部分，GitLab是一个Web应用程序，具有将其状态存储在数据库中的API。 除了GitLab的所有功能之外，它还管理项目/构建并提供一个不错的用户界面。

## Gitlab Runner
是一个处理构建的应用程序。 它可以单独部署，并通过API与GitLab CI / CD一起使用。

![](images/img_239.png)

## .gitlab-ci.yml
定义流水线作业运行，位于应用项目根目录下 。

![](images/img_240.png)

为了运行测试，至少需要一个 GitLab 实例、一个 GitLab Runner、一个gitlab-ci文件

---

# Gitlab CI/CD工作原理
+ 将代码托管到Git存储库。
+ 在项目根目录创建ci文件 .gitlab-ci.yml ，在文件中指定构建，测试和部署脚本。
+ GitLab将检测到它并使用名为GitLab Runner的工具运行脚本。
+ 脚本被分组为作业，它们共同组成了一个管道。

![](images/img_241.png)

管道状态也会由GitLab显示：

![](images/img_242.png)

最后，如果出现任何问题，可以轻松地 回滚所有更改：

![](images/img_243.png)



---

<a id="122643037"></a>

## Gitlab CI/CD介绍 - Gitlab与Jenkins对比

# gitlab CI简介
gitlab ci是在gitlab8.0之后自带的一个持续集成系统，中心思想是当每一次push到gitlab的时候，都会触发一次脚本执行，然后脚本的内容包括了测试、编译、部署等一系列自定义的内容。

gitlab ci的脚本执行，需要自定义安装对应的gitlab runner来执行，代码push之后，webhook检测到代码变化，就会触发gitlab ci，分配到各个runner来运行相应的脚本script。这些脚本有些是测试项目用的，有些是部署用的。

# <font style="color:rgb(38, 38, 38);">Gitlab ci与Jenkins对比</font>
## 分支可配置性
+ 使用gitlab ci，新创建的分支无需任何进一步的配置即可立即使用CI管道中的已定义作业。
+ Jenkins基于gitlab的多分支流水线插件可以实现。相对配置来说，gitlab ci更加方便。

## 拉取请求支持
如果很好的集成了存储库管理器的CI/CD平台，可以看到请求的当前构建状态。使用这个功能，可以避免将代码合并到不起作用或者无法正确构建的主分支中。

+ Jenkins没有与源代码管理系统进一步集成，需要管理员自行写代码或者插件实现。
+ gitlab与其CI平台紧密集成，可以方便查看每个打开和关闭拉动请求的运行和完成管道。

## 权限管理
从存储管理器继承的权限管理对于不想为每个服务分别设置每个用户的权限的大型开发人员或组织团体很有用。大多数情况下，两种情况下的权限都是相同的，因此默认情况下他们配置在一个位置。

+ 由于gitlab与CI深度整合，权限可以统一管理。
+ 由于Jenkins没有内置的存储库管理器，因此它无法直接在存储库管理器和CI/CD平台之间合并权限。

## 存储库交互
+ gitlab ci是git存储库管理器gitlab的固定组件，因此在ci/cd流程和存储库直接提供了良好的交互。
+ Jenkins与存储库管理器都是松散耦合的，因此在选择版本控制系统时它非常灵活。此外，就像其前身一样，Jenkins强调了对插件的支持，以进一步扩展或改善软件的现有功能。

## 插件管理
+ 扩展Jenkins的本机功能是通过插件完成的，插件的维护，保护和成本很高。
+ gitlab是开放式的，任何人都可以直接向代码库贡献更改，一旦合并，它将自动测试并维护每个更改

# Jenkins vs GitLab CI/CD 优缺点
## Jenkins 的优点
+ 大量插件库
+ 自托管，例如对工作空间的完全控制
+ 容易调试运行，由于对工作空间的绝对控制
+ 容易搭建节点
+ 容易部署代码
+ 非常好的凭证管理
+ 非常灵活多样的功能
+ 支持不同的语言
+ 非常直观

## <font style="color:rgb(0, 179, 138);"> </font>Jenkins 的缺点
+ 插件集成复杂
+ 对于比较小的项目开销比较大，因为你需要自己搭建
+ 缺少对整个 pipeline 跟踪的分析

##  GitLab CI/CD 的优点
+ 更好的 Docker 集成
+ 运行程序扩展或收缩比较简单
+ 阶段内的作业并行执行
+ 有向无环图 pipeline 的机会
+ 由于并发运行程序而非常易于扩展收缩
+ 合并请求集成
+ 容易添加作业
+ 容易处理冲突问题
+ 良好的安全和隐私政策

##  GitLab CI/CD 的缺点
+ 需要为每个作业定义构建并上传 / 下载
+ 在实际合并发生之前测试合并状态是不可能的
+ 还不支持细分阶段

# 对比总结
## gitlab ci
+ 轻量级，不需要复杂的安装手段
+ 配置简单，与gitlab可直接适配
+ 实时构建日志十分清晰，UI交互体验很好
+ 使用yaml进行配置，任何人都可以很方便的使用
+ 没有统一的管理界面，无法统一管理所有的项目
+ 配置依赖于代码仓库，耦合度没有Jenkins低

## Jenkins
+ 编译服务和代码仓库分离，耦合度低
+ 插件丰富，支持语言众多
+ 有统一的web管理页面
+ 插件以及自身安装较为复杂
+ 体量较大，不适合小型团队开发。

# 适用场景
+ gitlab ci有助于devops人员，例如敏捷开发中，开发人员与运维是同一个人，最便捷的开发方式
+ Jenkins适合在多角色团队中，职责分明，配置与代码分离，插件丰富。



---

<a id="123124571"></a>

## Gitlab Runner - runner介绍

# runner简介
+ gitlab runner是一个开源项目，用于运行作业并将结果发送回gitlab，类似与Jenkins的agent，执行CI持续集成、构建的脚本任务。
+ 与gitlab ci结合使用，gitlab ci是gitlab随附的用于协调作业的开源持续集成服务
+ gitlab runner是用go编写的，可以在Linux Windows和MacOS系统上运行
+ gitlab runner版本应与gitlab版本同步
+ 可以根据需要配置任意数量的runner

# runner特点
运行作业控制：同时执行多个作业。

作业运行环境：

+ 本地、docker容器、使用docker容器通过SSH执行作业。
+ 使用docker容器在不同的云和虚拟化管理程序上自动缩放。
+ 连接到远程SSH服务器

支持bash、Windows batsh和powershell

允许自定义作业运行环境

自动更新加载配置，无需重启

# runner类型
shared：共享类型，运行整个平台项目的作业(gitlab)

group：项目组类型，运行特定group下的所有项目的作业(group)

specific：项目类型，运行指定的项目作业(project)

# runner状态
locked：锁定状态，无法运行项目作业。

paused：暂停状态，暂时不会接受新的作业。

# 工作流程
![](images/img_244.png)





---

<a id="123128550"></a>

## Gitlab Runner - runner安装

> 安装的gitlab runner版本与gitlab版本保持一致。
>

# 参考文档
[https://docs.gitlab.com/runner/install/index.html](https://docs.gitlab.com/runner/install/index.html)

# 查看gitlab版本
```bash
[root@gitlab ~]# gitlab-rake gitlab:env:info

System information
System:
Current User:   git
Using RVM:      no
Ruby Version:   3.1.4p223
Gem Version:    3.5.6
Bundler Version:2.5.6
Rake Version:   13.0.6
Redis Version:  7.0.15
Sidekiq Version:7.1.6
Go Version:     unknown

GitLab information
Version:        16.10.2
Revision:       7d1b278e7ce
Directory:      /opt/gitlab/embedded/service/gitlab-rails
DB Adapter:     PostgreSQL
DB Version:     14.11
URL:            http://192.168.10.72
HTTP Clone URL: http://192.168.10.72/some-group/some-project.git
SSH Clone URL:  git@192.168.10.72:some-group/some-project.git
Using LDAP:     no
Using Omniauth: yes
Omniauth Providers: 

GitLab Shell
Version:        14.34.0
Repository storages:
- default:      unix:/var/opt/gitlab/gitaly/gitaly.socket
GitLab Shell path:              /opt/gitlab/embedded/service/gitlab-shell

Gitaly
- default Address:      unix:/var/opt/gitlab/gitaly/gitaly.socket
- default Version:      16.10.2
- default Git Version:  2.43.0
```

通过打印信息可知当前gitlab版本为16.10.2，因此runner版本也要安装16.10版

# yum安装
[https://docs.gitlab.com/runner/install/linux-repository.html](https://docs.gitlab.com/runner/install/linux-repository.html)

```bash
# 添加官方仓库
[root@tiaoban ~]# curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh" | sudo bash
# 安装最新版本runner
[root@tiaoban ~]# dnf install -y gitlab-runner
# 更新runner
[root@tiaoban ~]# dnf update -y gitlab-runner
# 安装指定版本的runner
[root@tiaoban ~]# dnf list gitlab-runner --showduplicates | grep 16.10
[root@tiaoban ~]# dnf install -y gitlab-runner-16.10.0
```

# rpm包安装
查找合适版本的软件包并下载

[https://mirrors.tuna.tsinghua.edu.cn/gitlab-runner/yum/el7-x86_64/](https://mirrors.tuna.tsinghua.edu.cn/gitlab-runner/yum/el7-x86_64/)

```bash
[root@tiaoban gitlab-runner]# wget https://mirrors.tuna.tsinghua.edu.cn/gitlab-runner/yum/el7-x86_64/gitlab-runner-16.10.0-1.x86_64.rpm
[root@tiaoban gitlab-runner]# rpm -ivh gitlab-runner-16.10.0-1.x86_64.rpm
```

# docker安装
```bash
[root@client2 docker]# mkdir gitlab-runner
[root@client2 docker]# ls
gitlab-runner
[root@client2 docker]# docker run --name gitlab-runner -itd -v /opt/docker/gitlab-runner:/etc/gitlab-runner --restart always gitlab/gitlab-runner:v16.10.0
```



---

<a id="123863613"></a>

## Gitlab Runner - runner注册

# gitlab runner类型
+ shared：运行整个平台项目的作业（gitlab）
+ group：运行特定group下的所有项目的作业（group）
+ specific：运行指定的项目作业（project）

# 创建不同类型的runner
## shared类型
依次点击主页——>管理中心——>CI/CD——>Runner——>新建实例runner

![](images/img_245.png)

## group类型
依次点击主页——>群组——>指定组——>设置——>构建——>runner——>新建群组runner

![](images/img_246.png)

## specific类型
依次点击主页——>项目——>指定项目——>设置——>CI/CD——>Runner——>新建项目runner

![](images/img_247.png)

## 生成注册命令
![](images/img_248.png)

# 注册runner(shell类型)
## 注册runner（Linux）
```bash
[root@client1 ~]# gitlab-runner register --url http://192.168.10.72  --token glrt-sx_xdrgZF7sHn1-5u5rz
Runtime platform                                    arch=amd64 os=linux pid=2620 revision=81ab07f6 version=16.10.0
Running in system-mode.                            
                                                   
Enter the GitLab instance URL (for example, https://gitlab.com/):
# 输入gitlab地址，回车即可
[http://192.168.10.72]: 
Verifying runner... is valid                        runner=sx_xdrgZF
Enter a name for the runner. This is stored only in the local config.toml file:
# 输入runner名称，回车即可
[client1]:                
Enter an executor: docker, docker-windows, instance, virtualbox, docker+machine, kubernetes, docker-autoscaler, custom, shell, ssh, parallels:
# 输入执行器类型，此处选择shell
[build test for client1]: shell   
Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!
 
Configuration (with the authentication token) was saved in "/etc/gitlab-runner/config.toml" 
```

## 注册runner（docker非交互式）
```bash
# 启动runner
[root@client2 docker]# mkdir gitlab-runner
[root@client2 docker]# ls
gitlab-runner
[root@client2 docker]# docker run --name gitlab-runner -itd -v $PWD/gitlab-runner:/etc/gitlab-runner --restart always gitlab/gitlab-runner:v16.10.0 
# 注册runner
[root@client2 gitlab-runner]# docker exec -it gitlab-runner bash
root@b156016d750b:/# gitlab-runner register \
--non-interactive \
--executor "shell" \
--url "http://192.168.10.72" \
--token "glrt-sewzG59GqdxshPisQkFo" 
Runtime platform                                    arch=amd64 os=linux pid=24 revision=81ab07f6 version=16.10.0
Running in system-mode.                            
                                                   
There might be a problem with your config based on jsonschema annotations in common/config.go (experimental feature):
jsonschema: '/runners/0/Monitoring' does not validate with https://gitlab.com/gitlab-org/gitlab-runner/common/config#/$ref/properties/runners/items/$ref/properties/Monitoring/$ref/type: expected object, but got null
 
WARNING: A runner with this system ID and token has already been registered. 
Verifying runner... is valid                        runner=GAMvA99y_
Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!
 
Configuration (with the authentication token) was saved in "/etc/gitlab-runner/config.toml" 
```

# 注册runner(docker类型)
## 注册runner（Linux）
```bash
[root@client2 ~]# gitlab-runner register \
--non-interactive \
--executor "docker" \
--url "http://192.168.10.72" \
--token "glrt-JHbwfcKH4PZye2z6d6NT" \
--docker-image alpine:latest \
--docker-privileged
Runtime platform                                    arch=amd64 os=linux pid=2568 revision=81ab07f6 version=16.10.0
Running in system-mode.                            
                                                   
Verifying runner... is valid                        runner=JHbwfcKH4
Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!
 
Configuration (with the authentication token) was saved in "/etc/gitlab-runner/config.toml" 
```

## 注册runner（docker）
```bash
[root@client2 docker]# mkdir gitlab-runner
[root@client2 docker]# ls
gitlab-runner
[root@client2 docker]# docker run --name gitlab-runner -itd \
 -v $PWD/gitlab-runner:/etc/gitlab-runner \
 -v /var/run/docker.sock:/var/run/docker.sock \
 -v /etc/hosts:/etc/hosts \
 --restart always gitlab/gitlab-runner:v16.10.0
 [root@client2 gitlab-runner]# docker exec -it gitlab-runner bash
root@b156016d750b:/# gitlab-runner register \
--non-interactive \
--executor "docker" \
--url "http://192.168.10.72" \
--token "glrt-sewzG59GqdxshPisQkFo"
```

## 配置runner
修改最大并行作业数、镜像拉取策略、挂载路径。

```bash
[root@client2 ~]# vim /etc/gitlab-runner/config.toml
concurrent = 10 # 并行执行作业数
check_interval = 0 
connection_max_age = "15m0s"
shutdown_timeout = 0 

[session_server]
  session_timeout = 1800

[[runners]]
  name = "client2"
  url = "http://192.168.10.72"
  id = 9 
  token = "glrt-JHbwfcKH4PZye2z6d6NT"
  token_obtained_at = 2024-05-30T03:30:27Z
  token_expires_at = 0001-01-01T00:00:00Z
  executor = "docker"
  [runners.cache]
    MaxUploadedArchiveSize = 0 
  [runners.docker]
    pull_policy = "if-not-present" # 配置镜像拉取策略
    tls_verify = false
    image = "alpine:latest" # 配置默认镜像
    privileged = true
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
    volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock", "/etc/hosts:/etc/hosts"] # 配置挂载路径
    shm_size = 0 
    network_mtu = 0
```

# 修改runner为特权用户
参考文档：[https://docs.gitlab.com/runner/commands/index.html#gitlab-runner-run](https://docs.gitlab.com/runner/commands/index.html#gitlab-runner-run)

以rpm方式安装的runner为例

```bash
[root@client1 ~]# vim /etc/systemd/system/gitlab-runner.service
ExecStart=/usr/bin/gitlab-runner "run" "--working-directory" "/home/gitlab-runner" "--config" "/etc/gitlab-runner/config.toml" "--service" "gitlab-runner" "--user" "root"
[root@client1 ~]# systemctl daemon-reload 
[root@client1 ~]# systemctl restart gitlab-runner.service
```

# 查看runner状态
![](images/img_249.png)

## 
## 




---

<a id="170338439"></a>

## Gitlab Runner - runner命令

GitLab Runner包含一组命令，可用于注册，管理和运行构建。

## 启动命令
```bash
gitlab-runner --debug <command>   #调试模式排查错误特别有用。
gitlab-runner <command> --help    #获取帮助信息
gitlab-runner run       #普通用户模式  配置文件位置 ~/.gitlab-runner/config.toml
sudo gitlab-runner run  # 超级用户模式  配置文件位置/etc/gitlab-runner/config.toml
```

## 注册命令
```bash
gitlab-runner register  #默认交互模式下使用，非交互模式添加 --non-interactive
gitlab-runner list      #此命令列出了保存在配置文件中的所有运行程序
gitlab-runner verify    #此命令检查注册的runner是否可以连接，但不验证GitLab服务是否正在使用runner。 --delete 删除
gitlab-runner unregister   #该命令使用GitLab取消已注册的runner。


#使用令牌注销
gitlab-runner unregister --url http://gitlab.example.com/ --token t0k3n

#使用名称注销（同名删除第一个）
gitlab-runner unregister --name test-runner

#注销所有
gitlab-runner unregister --all-runners
```

## 服务管理
```bash
gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner

# --user指定将用于执行构建的用户
#`--working-directory  指定将使用**Shell** executor 运行构建时所有数据将存储在其中的根目录

gitlab-runner uninstall #该命令停止运行并从服务中卸载GitLab Runner。

gitlab-runner start     #该命令启动GitLab Runner服务。

gitlab-runner stop      #该命令停止GitLab Runner服务。

gitlab-runner restart   #该命令将停止，然后启动GitLab Runner服务。

gitlab-runner status #此命令显示GitLab Runner服务的状态。当服务正在运行时，退出代码为零；而当服务未运行时，退出代码为非零。
```

  




---

<a id="123863610"></a>

## Gitlab Runner - runner执行器

# 执行器介绍
CI/CD的流水线真正的执行环境是GitLab Runner提供的执行器，为了满足各种各样的需求，GitLab CI/CD支持的执行器有很多种，最常用的是Docker， shell，Kubernets三种。每一种执行器都与自己的特性，了解各个执行器的特性，并选择合适的执行器才能让我们流水线更加可靠，稳健。

# <font style="color:rgb(79, 79, 79);">执行器类型</font>
GitLab Runner支持的执行器有以下几种：

+ SSH
+ Shell
+ Parallels
+ VirtualBox
+ Docker
+ Docker Machine (auto-scaling)
+ Kubernetes
+ Custom

GitLab Runner 支持的执行器有GitLab Runner的安装方式有关也和宿主机环境有关。

# 执行器功能对比
具体可参考文档：[https://docs.gitlab.com/runner/executors/#selecting-the-executor](https://docs.gitlab.com/runner/executors/#selecting-the-executor)

![](images/img_250.png)



---

<a id="172302364"></a>

## Gitlab Runner - runner部署与注册(yaml)

文件中的配置项及其功能可以查看官方文档： https://docs.gitlab.com/runner/executors/kubernetes.html#default-annotations-for-job-pods

# 概述
gitlab-runner 是 gitlab 提供的一种执行 CICD pipline 的组件。它有多种执行器，每一个执行器都提供一种实现 pipline 的方式，例如：shell 执行器是使用 shell 指令实现，docker 执行器是使用 docker api 实现。而Kubernetes执行器则是使用 k8s api 来实现 CICD pipline。

## 执行过程
runner 的 k8s 执行器是这样执行 pipline 的：

+ 首先，runner 会通过 RBAC 认证获取到调用 k8s 集群 API 的权限。
+ runner 会监听 gitlab，当有合适的 `job` 时，runner 会自动抓取任务执行。请注意，一个流水线中可以有很多个 `stage`，这些 `stage` 是串行执行的，而一个 `stage` 中又可以有多个并行的 `job`，runner 抓取的任务是以 `job` 为单位，而不是 `stage`，更不是 `pipline`。
+ 随后，runner 会调用 k8s API，创建一个用于执行该 job 的 pod。通常来说，runner 创建的所有 pod 有一个通用模板，我们需要在 runner 的 `config.toml` 配置文件中配置这个模板。但 pod 中具体使用什么镜像、在 pod 中执行什么命令，这些都是在后续的 `.gitlab-ci.yml` 文件中配置，并且随着 job 的不同而不同。
+ 在完成了 job 内的工作后，runner 会将这个临时 pod 删除。

![](images/img_251.png)

## 注意事项
每个 stage 都会选择一个 runner 来执行，这意味着可以根据 stage 的不同，选择具有特定功能的 runner

在 kubernetes executor 模式中，每一个 stage，runner 都会使用 k8s api 在指定的命名空间中创建一个专用于 pipline 的临时 Pod，在这个 Pod 中执行完当前 stage 的所有 script，随后自动销毁

CI 过程中，可以简单的认为，runner 将当前 git 代码仓库整个拷贝到了容器当中，而工作目录则是项目的根目录，因此，如果有什么文件需要进行拷贝、修改、删除，请尤其注意这一点。

## runner配置
runner配置信息可以通过参数指定，也可以以环境变量方式设置。详细内容可以通过 gitlab-runner register -h 获取到相关参数和变量名称。

在使用官方提供的runner镜像注册runner，默认的runner配置文件在/home/gitlab-runner/.gitlab-runner/config.toml

参考文档：http://s0docs0gitlab0com.icopy.site/runner/executors/kubernetes.html#using-volumes

# 配置对象存储仓库
在 kubernetes executor 模式中，每个stage执行完成都会销毁临时的pod，如果想要在多个stage中传递制品文件，则需要调用制品库或者使用缓存目录，而为了提高任务的执行效率，GitLab Runner 提供了分布式缓存（distributed caching）功能，使得多个 Runner 实例可以共享缓存，从而减少重复的工作，比如重新下载依赖项或重新编译代码。目前支持s3 和 gc3 两种对象存储协议。

具体可参考文档：[https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnerscache-section](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runnerscache-section)

## <font style="color:rgb(48, 49, 51);">创建bucket</font>
<font style="color:rgb(48, 49, 51);">创建一个名为gitlab-runner-cache的bucket，并设置容量上限为1TB</font>

![](images/img_252.png)

## <font style="color:rgb(48, 49, 51);">创建Access Key并配置权限</font>
<font style="color:rgb(48, 49, 51);">创建access key并牢记，后续使用。</font>

<font style="color:rgb(48, 49, 51);">并配置权限，使该key仅允许操作gitlab-runner-cache这个bucket</font>

![](images/img_253.png)

HroS2nV03s82oIpvPTfr

Q7FGVQp9D4ZrnU0cLD9QJkK1u7S19xRhylmUidHW

# 部署gitlab runner
## 获取注册runner命令
![](images/img_254.png)

## 创建secrete
将主节点 kubeconfig 内容添加到 secret 中。这个文件的内容是 kubectl 工具访问 k8s 集群的准入 Token，只有在指定了该 Token 后，才能使用 kubectl 指令来对集群内的各种资源进行增删改查。如果在CICD过程需要使用kubectl工具对 k8s 集群进行操作，就需要在每一个runner中挂载Token以供 gitrunner的k8s执行器使用。

```bash
kubectl create secret generic -n cicd kube-config --from-file=/root/.kube/config
kubectl create secret generic -n cicd kube-ca --from-file=/etc/kubernetes/pki/ca.crt
```

## 创建configmap
接下来配置 runner 的 `config.toml` 文件

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: gitlab-runner-config
  namespace: cicd
data:
  # 以下配置用于后续注册 runner 时使用
  group_runner_executor: "kubernetes"
  group_runner_url: "http://gitlab.cicd.svc"
  group_runner_token: "glrt-xyGqTwozGnYR5JeAB6o5"
  # 以下是 gitlab-runner 的配置文件模板，gitlab-runner 会实时读取 config.toml 配置文件并热加载，因此，在 gitlab-runner 部署后，可以直接通过修改 config.toml 文件来更新配置
  config-template.toml: |-
    [[runners]]
      # 缓存项目的依赖包，从而大大减少项目构建的时间
      [runners.cache]
        # Type 可以选择 s3 和 gc3 两种对象存储协议
        Type = "s3"
        # Shared 字段控制不同 runner 之间的缓存是否共享，默认是 false
        Shared = false
        [runners.cache.s3]
          ServerAddress = "minio-service.minio.svc:9000"
          # 相当于用户名
          AccessKey = "ZoxfsxcLVFHEM1UQpfAo"
          # 相当于密码
          SecretKey = "es3tVIBkohhKxJgwPjuBlKIF6PkUB6HhCIChkFhb"
          # 桶名
          BucketName = "gitlab-runner-cache"
          Insecure = true
      # 配置 kubernetes 执行器。
      [runners.kubernetes]
        # 默认镜像
        image = "alpine:latest"
        # 容器镜像拉取规则
        pull_policy = "if-not-present"
        # 名称空间，注意与之前创建的kube-config资源位于同一ns
        namespace = "cicd"
        # 启用特权模式
        privileged = true 
        cpu_limit = "1"
        memory_limit = "1Gi"
        service_cpu_limit = "1"
        service_memory_limit = "1Gi"
        dns_policy = "cluster-first"
        automount_service_account_token = true
      # 用于配置该 Executor 生成的 Pod 中的 /etc/hosts 文件
      [[runners.kubernetes.host_aliases]]
        ip = "192.168.10.150"
        hostnames = ["gitlab.local.com"]
      [runners.kubernetes.volumes]
          # 共用宿主机的containerd
         [[runners.kubernetes.volumes.host_path]]
           name = "sock"
           mount_path = "/var/run/containerd/containerd.sock"
           read_only = true
           host_path = "/var/run/containerd/containerd.sock"
          # 将 kubeconfig 内容挂载在runner容器中
         [[runners.kubernetes.volumes.secret]]
           name = "kube-config"
           mount_path = "/root/.kube/"
           read_only = true
```

## 创建gitlab-runner注册脚本
将 runner 部署到 k8s 上之后还需要将 runner 注册到 gitlab 上才能使用，为此，我们需要写一个脚本，让 runner 部署完成后自行执行，从而完成注册。我们通过 configmap 来将这个脚本挂载到 runner 所在的 Pod 中，这样，只要在之后创建容器时使用启动脚本就能自动执行。

需要注意的是通过模板注册仅支持指定 [[runners]] 部分，不支持全局选项。如下需要修改全局选项，可以在注册完成后替换/etc/gitlab-runner/config.toml文件内容。

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: gitlab-runner-register
  namespace: cicd
data:
  register.sh: |
    # !/bin/bash
    gitlab-runner register --non-interactive --url $GROUP_RUNNER_URL --token $GROUP_RUNNER_TOKEN --executor $GROUP_RUNNER_EXECUTOR --template-config /tmp/config-template.toml
    # 使用配置模板注册不支持全局选项，接下来修改全局参数
    sed -i "s/concurrent = 1/concurrent = 10/g" /etc/gitlab-runner/config.toml
    # 重启gitlab-runner
    gitlab-runner restart
```

## 创建rbac
创建角色，runner 生成的 pod 会使用下述角色信息通过 k8s 的 RBAC，从而能够创建 k8s 的相应资源

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: gitlab-runner-admin
  namespace: cicd
---
kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  namespace: cicd
  name: gitlab-admin
rules:
  - apiGroups: [""]
    resources: ["*"] 
    verbs: ["*"]
---
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: gitlab-admin
  namespace: cicd
subjects:
  - kind: ServiceAccount
    name: gitlab-runner-admin
    namespace: cicd
roleRef:
  kind: Role
  name: gitlab-admin
  apiGroup: rbac.authorization.k8s.io
```

## 创建Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gitlab-runner
  namespace: cicd
spec:
  replicas: 1
  selector:
    matchLabels:
      app: gitlab-runner
  template:
    metadata:
      labels:
        app: gitlab-runner
    spec:
      serviceAccountName: gitlab-runner-admin
      containers:
        - image: harbor.local.com/cicd/gitlab-runner:v17.2.0
          name: gitlab-runner
          env:
            # 将我们之前在 configmap 中设置的项通过环境变量的方式注入到容器中
            - name: GROUP_RUNNER_TOKEN
              valueFrom:
                configMapKeyRef:
                  name: gitlab-runner-config
                  key: group_runner_token
            - name: GROUP_RUNNER_URL
              valueFrom:
                configMapKeyRef:
                  name: gitlab-runner-config
                  key: group_runner_url
            - name: GROUP_RUNNER_EXECUTOR
              valueFrom:
                configMapKeyRef:
                  name: gitlab-runner-config
                  key: group_runner_executor
          lifecycle:
            # runner容器启动后,立即发送postStart事件
            postStart:
              exec:
                # command: ["/bin/sh", "-c", "cat /tmp/register.sh"]
                command: ["/bin/sh", "-c", "sh /tmp/register.sh"]
          resources:
            requests:
              memory: "1Gi"
              cpu: "1"
            limits:
              memory: "2Gi"
              cpu: "2"
          volumeMounts:
          - name: template
            mountPath: /tmp/config-template.toml
            subPath: config-template.toml
          - name: script
            mountPath: /tmp/register.sh
            subPath: register.sh
      volumes:
        - name: template
          configMap:
            name: gitlab-runner-config
            items:
            - key: config-template.toml
              path: config-template.toml
        - name: script
          configMap:
            name: gitlab-runner-register
            items:
            - key: register.sh
              path: register.sh
              mode: 0755
      hostAliases:
      - ip: "192.168.10.150"
        hostnames:
        - "gitlab.local.com"
```

# 测试验证
## 查看runner状态
查看runner状态，已经成功注册并运行中。

![](images/img_255.png)

## 创建测试流水线
```yaml
default:
  cache: 
    paths: # 定义全局缓存路径
     - target/

stages:
  - build
  - deploy

build:
  stage: build
  image: harbor.local.com/cicd/maven:v3.9.3 # 构建阶段使用指定的maven镜像
  tags: # 在标签为k8s的runner中运行
    - k8s
  script:
    - mvn clean package # 编译打包
    - ls target

deploy:
  stage: deploy
  tags: # 在标签为k8s的runner中运行
    - k8s
  script:
    - ls target
```

## 查看流水线缓存日志
![](images/img_256.png)

## 查看bucket信息
![](images/img_257.png)

# 常见问题
[https://segmentfault.com/a/1190000044686362](https://segmentfault.com/a/1190000044686362)



---

<a id="174152592"></a>

## Gitlab Runner - kubernetes类型runner优化

# 构建缓存问题
使用 maven 编译 Java 工程，我们期望保留本地 repository 缓存，避免每次构建都重新下载所有依赖包，毕竟这很耗时。为此，需要创建PVC来持久化构建缓存，加速构建速度。为了节省存储空间决定不在每个项目中存储构建缓存，而是配置全局缓存。

## 创建使用pvc
准备10G空间的nfs存储，用于存储自定义缓存内容。

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: gitlab-runner-cache
  namespace: cicd
spec:
  storageClassName: nfs-client
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 10Gi
```

修改deployment，使用刚刚创建的pvc资源。

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gitlab-runner
  namespace: cicd
spec:
  replicas: 1
  selector:
    matchLabels:
      name: gitlab-runner
  template:
    metadata:
      labels:
        name: gitlab-runner
    spec:
      serviceAccountName: gitlab-runner-admin
      containers:
        - image: harbor.local.com/cicd/gitlab-runner:v17.0.0
          name: gitlab-runner
          env:
            # 将我们之前在 configmap 中设置的项通过环境变量的方式注入到容器中
            - name: GROUP_RUNNER_TOKEN
              valueFrom:
                configMapKeyRef:
                  name: gitlab-runner-config
                  key: group_runner_token
            - name: GROUP_RUNNER_URL
              valueFrom:
                configMapKeyRef:
                  name: gitlab-runner-config
                  key: group_runner_url
            - name: GROUP_RUNNER_EXECUTOR
              valueFrom:
                configMapKeyRef:
                  name: gitlab-runner-config
                  key: group_runner_executor
          lifecycle:
            # runner容器启动后,立即发送postStart事件
            postStart:
              exec:
                # command: ["/bin/sh", "-c", "cat /tmp/register.sh"]
                command: ["/bin/sh", "-c", "sh /tmp/register.sh"]
          resources:
            requests:
              memory: "1Gi"
              cpu: "1"
            limits:
              memory: "2Gi"
              cpu: "2"
          volumeMounts:
          - name: template
            mountPath: /tmp/config-template.toml
            subPath: config-template.toml
          - name: script
            mountPath: /tmp/register.sh
            subPath: register.sh
          - name: cache
            mountPath: /home/gitlab-runner/cache
      volumes:
        - name: template
          configMap:
            name: gitlab-runner-config
            items:
            - key: config-template.toml
              path: config-template.toml
        - name: script
          configMap:
            name: gitlab-runner-register
            items:
            - key: register.sh
              path: register.sh
              mode: 0755
        - name: cache
          persistentVolumeClaim:
            claimName: gitlab-runner-cache
      hostAliases:
      - ip: "192.168.10.150"
        hostnames:
        - "gitlab.local.com"
```

修改config，设置runner挂载pvc

```bash
apiVersion: v1
kind: ConfigMap
metadata:
  name: gitlab-runner-config
  namespace: cicd
data:
  # 以下配置用于后续注册 runner 时使用
  group_runner_executor: "kubernetes"
  group_runner_url: "http://gitlab.cicd.svc"
  group_runner_token: "glrt-bxuthgpZjirXbLaVaouE"
  # 以下是 gitlab-runner 的配置文件模板，gitlab-runner 会实时读取 config.toml 配置文件并热加载，因此，在 gitlab-runner 部署后，可以直接通过修改 config.toml 文件来更新配置
  config-template.toml: |-
    [[runners]]
      # 缓存项目的依赖包，从而大大减少项目构建的时间
      [runners.cache]
        # Type 可以选择 s3 和 gc3 两种对象存储协议
        Type = "s3"
        # Shared 字段控制不同 runner 之间的缓存是否共享，默认是 false
        Shared = false
        [runners.cache.s3]
          ServerAddress = "minio-service.minio.svc:9000"
          AccessKey = "syGCsrY5RWDNPb4VSdRs"
          SecretKey = "uSpAF1rWEQIF8laZpaZGMA9kBTlI5FYWF0qPKr5X"
          # 桶名
          BucketName = "gitlab-runner-cache"
          Insecure = true
      # 配置 kubernetes 执行器。
      [runners.kubernetes]
        # 默认镜像
        image = "alpine:latest"
        # 容器镜像拉取规则
        pull_policy = "if-not-present"
        # 名称空间，注意与之前创建的kube-config资源位于同一ns
        namespace = "cicd"
        # 启用特权模式
        privileged = true 
        cpu_limit = "1"
        memory_limit = "1Gi"
        service_cpu_limit = "1"
        service_memory_limit = "1Gi"
        dns_policy = "cluster-first"
        automount_service_account_token = true
      # 用于配置该 Executor 生成的 Pod 中的 /etc/hosts 文件
      [[runners.kubernetes.host_aliases]]
        ip = "192.168.10.150"
        hostnames = ["gitlab.local.com"]
      [runners.kubernetes.volumes]
          # 共用宿主机的containerd
         [[runners.kubernetes.volumes.host_path]]
           name = "sock"
           mount_path = "/var/run/containerd/containerd.sock"
           read_only = true
           host_path = "/var/run/containerd/containerd.sock"
          # 将 kubeconfig 内容挂载在runner容器中
         [[runners.kubernetes.volumes.secret]]
           name = "kube-config"
           mount_path = "/root/.kube/"
           read_only = true
          # 挂载持久化构建缓存目录
         [[runners.kubernetes.volumes.pvc]]
            name = "gitlab-runner-cache"
            mount_path = "/home/gitlab-runner/cache"
```

## 查看验证
```bash
[root@tiaoban gitlab-runner]# kubectl get pvc -n cicd | grep runner
gitlab-runner-cache           Bound    pvc-a47a7a1e-e25a-49a4-bc04-d8551d3eb164   10Gi       RWX            nfs-client     37s
[root@tiaoban gitlab-runner]# kubectl exec -it -n cicd gitlab-runner-5574954f67-sbjsd -- bash
root@gitlab-runner-5574954f67-sbjsd:/# df -h | grep cache
192.168.10.100:/data/nfs-k8s/cicd-gitlab-runner-cache-pvc-a47a7a1e-e25a-49a4-bc04-d8551d3eb164  147G   52G   96G  36% /home/gitlab-runner/cache
```

## 指定缓存目录
后续使用构建工具打包时添加指定缓存目录。例如：maven

```plain
mvn clean package -DskipTests -Dmaven.repo.local=/home/gitlab-runner/cache/maven
```

# 解决构建制品问题
在kubernetes中对cache支持一般，以Maven项目为例，虽然我们配置了target目录全局缓存，但是在下个阶段再次查看target/目录时会发现为空，有两个方案可以解决这个问题。

## 使用artifacts进行代替
我们可以使用artifacts功能收集target制品，但缺点每次job执行时artifacts收集制品会占用存储空间。

## repo目录持久化
分析job阶段创建的pod我们可知，kubernetes执行器创建的构建pod会默认挂载一个名为repo的空目录。此目录用于存储每次下载的代码，因为是空目录的原因导致后续测试pod无法获取需要重新下载代码。

![](images/img_258.png)

![](images/img_259.png)

为了解决这个问题，我们可以直接将持久化的pvc挂载到空目录中的某个目录中。并配置runner自定义构建目录。

### 创建使用pvc
创建一个名为gitlab-runner-dir的pvc资源

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: gitlab-runner-cache
  namespace: cicd
spec:
  storageClassName: nfs-client
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 10Gi
---
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: gitlab-runner-dir
  namespace: cicd
spec:
  storageClassName: nfs-client
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 10Gi
```

runner挂载pvc，并添加环境变量指定使用自定义build目录

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gitlab-runner
  namespace: cicd
spec:
  replicas: 1
  selector:
    matchLabels:
      name: gitlab-runner
  template:
    metadata:
      labels:
        name: gitlab-runner
    spec:
      serviceAccountName: gitlab-runner-admin
      containers:
        - image: harbor.local.com/cicd/gitlab-runner:v17.0.0
          name: gitlab-runner
          env:
            # 将我们之前在 configmap 中设置的项通过环境变量的方式注入到容器中
            - name: GROUP_RUNNER_TOKEN
              valueFrom:
                configMapKeyRef:
                  name: gitlab-runner-config
                  key: group_runner_token
            - name: GROUP_RUNNER_URL
              valueFrom:
                configMapKeyRef:
                  name: gitlab-runner-config
                  key: group_runner_url
            - name: GROUP_RUNNER_EXECUTOR
              valueFrom:
                configMapKeyRef:
                  name: gitlab-runner-config
                  key: group_runner_executor
            - name: CUSTOM_BUILD_DIR_ENABLED # 开启自定义构建目录
              value: "true"
            - name: RUNNER_BUILDS_DIR # 指定自定义构建目录地址
              value: "/home/gitlab-runner/build-dir/"
          lifecycle:
            # runner容器启动后,立即发送postStart事件
            postStart:
              exec:
                # command: ["/bin/sh", "-c", "cat /tmp/register.sh"]
                command: ["/bin/sh", "-c", "sh /tmp/register.sh"]
          resources:
            requests:
              memory: "1Gi"
              cpu: "1"
            limits:
              memory: "2Gi"
              cpu: "2"
          volumeMounts:
          - name: template
            mountPath: /tmp/config-template.toml
            subPath: config-template.toml
          - name: script
            mountPath: /tmp/register.sh
            subPath: register.sh
          - name: cache
            mountPath: /home/gitlab-runner/cache
          - name: dir
            mountPath: /home/gitlab-runner/build-dir
      volumes:
        - name: template
          configMap:
            name: gitlab-runner-config
            items:
            - key: config-template.toml
              path: config-template.toml
        - name: script
          configMap:
            name: gitlab-runner-register
            items:
            - key: register.sh
              path: register.sh
              mode: 0755
        - name: cache
          persistentVolumeClaim:
            claimName: gitlab-runner-cache
        - name: dir
          persistentVolumeClaim:
            claimName: gitlab-runner-dir
      hostAliases:
      - ip: "192.168.10.150"
        hostnames:
        - "gitlab.local.com"
```

修改config，设置runner挂载pvc

```bash
apiVersion: v1
kind: ConfigMap
metadata:
  name: gitlab-runner-config
  namespace: cicd
data:
  # 以下配置用于后续注册 runner 时使用
  group_runner_executor: "kubernetes"
  group_runner_url: "http://gitlab.cicd.svc"
  group_runner_token: "glrt-bxuthgpZjirXbLaVaouE"
  # 以下是 gitlab-runner 的配置文件模板，gitlab-runner 会实时读取 config.toml 配置文件并热加载，因此，在 gitlab-runner 部署后，可以直接通过修改 config.toml 文件来更新配置
  config-template.toml: |-
    [[runners]]
      # 缓存项目的依赖包，从而大大减少项目构建的时间
      [runners.cache]
        # Type 可以选择 s3 和 gc3 两种对象存储协议
        Type = "s3"
        # Shared 字段控制不同 runner 之间的缓存是否共享，默认是 false
        Shared = false
        [runners.cache.s3]
          ServerAddress = "minio-service.minio.svc:9000"
          AccessKey = "syGCsrY5RWDNPb4VSdRs"
          SecretKey = "uSpAF1rWEQIF8laZpaZGMA9kBTlI5FYWF0qPKr5X"
          # 桶名
          BucketName = "gitlab-runner-cache"
          Insecure = true
      # 配置 kubernetes 执行器。
      [runners.kubernetes]
        # 默认镜像
        image = "alpine:latest"
        # 容器镜像拉取规则
        pull_policy = "if-not-present"
        # 名称空间，注意与之前创建的kube-config资源位于同一ns
        namespace = "cicd"
        # 启用特权模式
        privileged = true 
        cpu_limit = "1"
        memory_limit = "1Gi"
        service_cpu_limit = "1"
        service_memory_limit = "1Gi"
        dns_policy = "cluster-first"
      # 用于配置该 Executor 生成的 Pod 中的 /etc/hosts 文件
      [[runners.kubernetes.host_aliases]]
        ip = "192.168.10.150"
        hostnames = ["gitlab.local.com"]
      [runners.kubernetes.volumes]
          # 共用宿主机的containerd
         [[runners.kubernetes.volumes.host_path]]
           name = "sock"
           mount_path = "/var/run/containerd/containerd.sock"
           read_only = true
           host_path = "/var/run/containerd/containerd.sock"
          # 将 kubeconfig 内容挂载在runner容器中
         [[runners.kubernetes.volumes.secret]]
           name = "kube-config"
           mount_path = "/root/.kube/"
           read_only = true
          # 挂载持久化构建缓存目录
         [[runners.kubernetes.volumes.pvc]]
            name = "gitlab-runner-cache"
            mount_path = "/home/gitlab-runner/cache"
         [[runners.kubernetes.volumes.pvc]]
            name = "gitlab-runner-dir"
            mount_path = "/home/gitlab-runner/build-dir"
```

### 查看验证
查看pvc信息

```bash
[root@tiaoban ~]# kubectl get pvc -n cicd 
NAME                          STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
gitlab-runner-cache           Bound    pvc-5cebfe33-f629-4318-b0af-1c18ad4213df   10Gi       RWX            nfs-client     9m41s
gitlab-runner-dir             Bound    pvc-3b40eda5-c1da-462e-895a-b01bc3fa2fe1   10Gi       RWX            nfs-client     9m41s
```

查看job日志

![](images/img_260.png)

## 配置每次job不拉取代码
默认每次每个job运行的时候都会获取远程最新的代码，会把构建目录删除掉，此时就需要配置git checkout策略。通常情况下不需要每个作业都下载代码。只要第一个作业下载好最新的代码，然后运行流水线即可。

在ci文件中定义<font style="color:rgb(232, 62, 140);">GIT_CHECKOUT</font>变量，默认值为true，即每次都需要代码下载。我们将全局配置为false然后在build作业中配置为true。也就实现了只在build作业下载最新代码了。

```plain
GIT_CHECKOUT: "false"
```

参考链接：http://s0docs0gitlab0com.icopy.site/ee/ci/yaml/README.html#git-checkout



---

<a id="179207220"></a>

## Gitlab Runner - runner部署与注册(helm)

参考文档：[https://docs.gitlab.com/charts/charts/gitlab/gitlab-runner/](https://docs.gitlab.com/charts/charts/gitlab/gitlab-runner/)

# 部署runner
## 配置chart
```bash
[root@tiaoban ~]# helm repo add gitlab https://charts.gitlab.io
"gitlab" has been added to your repositories
[root@tiaoban ~]# helm search repo -l gitlab/gitlab-runner
NAME                    CHART VERSION   APP VERSION     DESCRIPTION  
gitlab/gitlab-runner    0.67.0          17.2.0          GitLab Runner
gitlab/gitlab-runner    0.66.0          17.1.0          GitLab Runner
gitlab/gitlab-runner    0.65.1          17.0.1          GitLab Runner
gitlab/gitlab-runner    0.65.0          17.0.0          GitLab Runner
[root@tiaoban cicd]# helm pull gitlab/gitlab-runner --untar --version=0.67.0
[root@tiaoban cicd]# cd gitlab-runner/
[root@tiaoban gitlab-runner]# ls
CHANGELOG.md  Chart.yaml  CONTRIBUTING.md  DEVELOPMENT.md  LICENSE  Makefile  NOTICE  README.md  templates  values.yaml
```

## 更新value.yaml
```yaml
image:
  registry: harbor.local.com
  image: cicd/gitlab-runner
  tag: alpine-v17.2.0
## Gitlab服务器地址
gitlabUrl: http://gitlab.cicd.svc/
## 注册token
runnerRegistrationToken: "glrt-sk2sVHh8bVu9U6wQgeZo"
# 创建rbac
rbac:
  create: true
  rules: 
    - apiGroups: ['']
      resources: ['*']
      verbs: ['*']
    - apiGroups: ['networking.k8s.io']
      resources: ['ingresses']
      verbs: ['*']
    - apiGroups: ['apps']
      resources: ['deployments']
      verbs: ['*']
  clusterWideAccess: true # 集群级别权限
serviceAccount:
  create: true
  name: gitlab-runner # 指定sa
# 添加hosts解析
hostAliases: 
  - ip: "192.168.10.150"
    hostnames:
    - "gitlab.local.com"
runners:
  config: |
    [[runners]]
      [runners.kubernetes]
        namespace = "{{.Release.Namespace}}"
        image = "alpine"
        service_account = "gitlab-runner" # 指定sa
      # 用于配置该 Executor 生成的 Pod 中的 /etc/hosts 文件
      [[runners.kubernetes.host_aliases]]
        ip = "192.168.10.150"
        hostnames = ["gitlab.local.com"]
```

## 创建helm资源
```bash
[root@tiaoban gitlab-runner]# helm install gitlab-runner -n cicd . -f values.yaml
NAME: gitlab-runner
LAST DEPLOYED: Tue Jul 23 23:27:39 2024
NAMESPACE: cicd
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
Your GitLab Runner should now be registered against the GitLab instance reachable at: "http://gitlab.cicd.svc/"

Runner namespace "cicd" was found in runners.config template.
```

# runner优化
## 使用分布式缓存
修改value.yaml

```bash
runners:
  # runner configuration, where the multi line string is evaluated as a
  # template so you can specify helm values inside of it.
  #
  # tpl: https://helm.sh/docs/howto/charts_tips_and_tricks/#using-the-tpl-function
  # runner configuration: https://docs.gitlab.com/runner/configuration/advanced-configuration.html
  config: |
    [[runners]]
      # 缓存项目的依赖包，从而大大减少项目构建的时间
      [runners.cache]
        # Type 可以选择 s3 和 gc3 两种对象存储协议
        Type = "s3"
        # Shared 字段控制不同 runner 之间的缓存是否共享，默认是 false
        Shared = false
        [runners.cache.s3]
          ServerAddress = "minio-service.minio.svc:9000"
          AccessKey = "syGCsrY5RWDNPb4VSdRs"
          SecretKey = "uSpAF1rWEQIF8laZpaZGMA9kBTlI5FYWF0qPKr5X"
          # 桶名
          BucketName = "gitlab-runner-cache"
          Insecure = true
```

## 缓存目录持久化




---

<a id="178535441"></a>

## Gitlab Runner - runner监控

参考文档：[https://docs.gitlab.com/runner/monitoring/](https://docs.gitlab.com/runner/monitoring/)

# Runner配置
## 启用metrics指标
Runner默认是没有开启内置的HTTP服务，可以通过两种方式配置指标HTTP服务器：

+ 在`config.toml`文件中配置全局选项 `listen_address`。
+ 在Runner启动的时候添加`--listen-address`命令选项。

修改gitlab-runner-cmd.yaml

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: gitlab-runner-register
  namespace: cicd
data:
  register.sh: |
    # !/bin/bash
    gitlab-runner register --non-interactive --url $GROUP_RUNNER_URL --token $GROUP_RUNNER_TOKEN --executor $GROUP_RUNNER_EXECUTOR --template-config /tmp/config-template.toml
    # 使用配置模板注册不支持全局选项，接下来修改全局参数
    sed -i "s/concurrent = 1/concurrent = 10/g" /etc/gitlab-runner/config.toml
    sed -i '1i\listen_address = ":9252"' /etc/gitlab-runner/config.toml
    # 重启gitlab-runner
    gitlab-runner restart
```

创建service.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: gitlab-runner
  namespace: cicd
  labels:
    app: gitlab-runner
spec:
  selector:
    app: gitlab-runner
  ports:
    - port: 9252
      targetPort: 9252 
      name: gitlab-runner-exporter
```

查看验证

```bash
[root@tiaoban gitlab-runner]# kubectl exec -it -n cicd gitlab-runner-ff485f488-lk8dq -- bash
root@gitlab-runner-ff485f488-lk8dq:~# cat /etc/gitlab-runner/config.toml
listen_address = ":9252"
```

然后修改deployment和svc暴露metrics端口。

## 访问metrics验证
```bash
[root@rockylinux /]# curl gitlab-runner.cicd.svc:9252/metrics
curl gitlab-runner.cicd.svc:9252/metrics
# HELP gitlab_runner_api_request_duration_seconds Latency histogram of API requests made by GitLab Runner
# TYPE gitlab_runner_api_request_duration_seconds histogram
gitlab_runner_api_request_duration_seconds_bucket{endpoint="request_job",runner="wvWFjWEsk",system_id="r_vP1BQ57i49VP",le="0.1"} 76
gitlab_runner_api_request_duration_seconds_bucket{endpoint="request_job",runner="wvWFjWEsk",system_id="r_vP1BQ57i49VP",le="0.25"} 77
gitlab_runner_api_request_duration_seconds_bucket{endpoint="request_job",runner="wvWFjWEsk",system_id="r_vP1BQ57i49VP",le="0.5"} 77
gitlab_runner_api_request_duration_seconds_bucket{endpoint="request_job",runner="wvWFjWEsk",system_id="r_vP1BQ57i49VP",le="1"} 77
```

# Prometheus配置
## 创建<font style="color:rgb(48, 49, 51);">ServiceMonitor</font>资源
```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: gitlab-runner-exporter # ServiceMonitor名称
  namespace: monitoring # ServiceMonitor所在名称空间
spec:
  jobLabel: gitlab-runner # job名称
  endpoints: # prometheus所采集Metrics地址配置，endpoints为一个数组，可以创建多个，但是每个endpoints包含三个字段interval、path、port
  - port: gitlab-runner-exporter # prometheus采集数据的端口，这里为port的name，主要是通过spec.selector中选择对应的svc，在选中的svc中匹配该端口
    interval: 30s # prometheus采集数据的周期，单位为秒
    scheme: http # 协议
    path: /metrics # prometheus采集数据的路径
  selector: # svc标签选择器
    matchLabels:
      app: gitlab-runner
  namespaceSelector: # namespace选择
    matchNames:
    - cicd
```

## 验证targets
![](images/img_261.png)





---

<a id="170338864"></a>

## Gitlab流水线 - 运行流水线任务

# 添加流水线文件
在gitlab仓库中项目根目录添加一个.gitlab-ci.yml文件，文件内容如下

```yaml
stages:
  - build
  - deploy

build:
  stage: build
  script:
    - echo "start build"

deploy:
  stage: deploy
  script:
    - echo "start deploy"
```

这个流水线共包含两个job，分别是build 和 deploy。

buildjob包含一个stage build，运行构建命令。

deployjob包含一个stage deploy，运行部署命令。

![](images/img_262.png)

# 测试流水线
提交文件后，会自动触发cicd流程，查看流水线信息，已成功完成操作。

![](images/img_263.png)

# 流水线语法检查工具
![](images/img_264.png)

# 指定其他流水线
默认情况下使用项目根目录下的.gitlab-ci.yml文件，当然我们也可以本仓库其他路径下的文件或者远程仓库文件路径。

![](images/img_265.png)



---

<a id="170373752"></a>

## Gitlab流水线 - pipeline-基础语法

# 关键字
## <font style="color:rgb(79, 79, 79);">default全局配置</font>
在GitLab CI/CD的流水线中存在几个全局关键词，设置后，这些配置对于整条流水线生效，如stages，include，workflow，default，variables。本篇文章就来详细讲解一下default的用法，了解之后会让你编写.gitlab-ci.yml更加优雅，美观，复用性更强。

在default中你可以将一些关键词配置成全局配置。配置后这些配置项将对每个作业生效，作为初始值，开发者也可以在作业中重新定义覆盖他们。说到这里 default的作用就比较明显的，就是提取一些公共配置，配置成全局生效。

default下可以配置的关键词如下

```yaml
default:
  image: 定义所有 jobs 的默认 Docker 镜像。
  services: 定义所有 jobs 的默认服务。
  before_script: 定义在所有 jobs 之前运行的脚本。
  after_script: 定义在所有 jobs 之后运行的脚本。
  tags: 定义所有 jobs 的默认标签。
  cache: 定义所有 jobs 的默认缓存策略。
  artifacts: 定义所有 jobs 的默认构件策略。
  retry: 定义所有 jobs 的默认重试策略。
  timeout: 定义所有 jobs 的默认超时时间。
  interruptible: 定义所有 jobs 是否可以被中断。
```

## job作业
在每个项目中，我们使用名为<font style="color:rgb(232, 62, 140);">.gitlab-ci.yml</font>的YAML文件配置GitLab CI / CD 管道。

这里在pipeline中定义了两个作业，每个作业运行不同的命令。命令可以是shell或脚本。

```yaml
job1:
  script: "execute-script-for-job1"

job2:
  script: "execute-script-for-job2"
```

+ 可以定义一个或多个作业(job)。
+ 每个作业必须具有唯一的名称（不能使用关键字）。
+ 每个作业是独立执行的。
+ 每个作业至少要包含一个script。

## script脚本
```yaml
job:
  script:
    - uname -a
    - bundle exec rspec
```

注意：有时， script命令将需要用单引号或双引号引起来. 例如，包含冒号命令（ : ）需要加引号，以便被包裹的YAML解析器知道来解释整个事情作为一个字符串，而不是一个"键：值"对. 使用特殊字符时要小心： : ， { ， } ， [ ， ] ， , ， & ， * ， # ， ? ， | ， - ， < ， > ， = ! ， % ， @ .

## before_script前置脚本
用于定义一个命令，该命令在每个作业之前运行。必须是一个数组。指定的script与主脚本中指定的任何脚本串联在一起，并在单个shell中一起执行。

## after_script后置脚本
用于定义将在每个作业（包括失败的作业）之后运行的命令。这必须是一个数组。指定的脚本在新的shell中执行，与任何before_script或script脚本分开。

可以在全局定义，也可以在job中定义。在job中定义会覆盖全局。

```yaml
default:
  before_script:
    - echo "before-script!!"
  after_script:
    - echo "after-script"

variables:
  DOMAIN: example.com

stages:
  - build
  - deploy

build:
  before_script:
    - echo "before-script in job"
  stage: build
  script:
    - echo "mvn clean "
    - echo "mvn install"
  after_script:
    - echo "after script in job"

deploy:
  stage: deploy
  script:
    - echo "hello deploy"
```

after_script失败不会影响作业失败。

before_script失败导致整个作业失败，其他作业将不再执行。作业失败不会影响after_script运行。

## stages阶段
用于定义作业可以使用的阶段，并且是全局定义的。同一阶段的作业并行运行，不同阶段按顺序执行。

```yaml
stages：
  - build
  - test
  - deploy
```

这里定义了三个阶段，首先build阶段并行运行，然后test阶段并行运行，最后deploy阶段并行运行。deploy阶段运行成功后将提交状态标记为passed状态。如果任何一个阶段运行失败，最后提交状态为failed。

### 未定义stages
全局定义的stages是来自于每个job。如果job没有定义stage则默认是test阶段。如果全局未定义stages,则按顺序运行 build,test,deploy。

如果作业中定义了其他阶段，例如"codescan"则会出现错误。原因是因为除了build test deploy阶段外的其他阶段作为.pre运行（也就是作为第一个阶段运行，需要将此作业的stage指定为.pre）。

```yaml
codescan:
  stage: .pre
  script:
    - echo "codescan"
```

### 定义stages控制stage运行顺序
一个标准的yaml文件中是需要定义stages，可以帮助我们对每个stage进行排序。

```yaml
stages:
  - build
  - test
  - codescan
  - deploy
```

![](images/img_266.png)

### .pre & .post
.pre始终是整个管道的第一个运行阶段，.post始终是整个管道的最后一个运行阶段。 用户定义的阶段都在两者之间运行。.pre和.post的顺序无法更改。如果管道仅包含.pre或.post阶段的作业，则不会创建管道。

![](images/img_267.png)

## stage步骤
是按JOB定义的，并且依赖于全局定义的[stages](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/yaml/README.html#stages) 。 它允许将作业分为不同的阶段，并且同一stage作业可以并行执行。

```yaml
unittest:
  stage: test
  script:
    - echo "run test"
    
interfacetest:
  stage: test
  script:
    - echo "run test"
```

![](images/img_268.png)

可能遇到的问题： 阶段并没有并行运行。

在这里我把这两个阶段在同一个runner运行了，所以需要修改runner每次运行的作业数量。默认是1，改为10.

![](images/img_269.png)

vim /etc/gitlab-runner/config.toml 更改后自动加载无需重启。

```plain
concurrent = 10
```

## variables变量
定义变量，pipeline变量、job变量、Runner变量。job变量优先级最大。

gitlab也内置了一些变量，可通过如下命令查看：

```bash
job_name:
  script:
    - export
```

## inherit继承属性
使用或禁用全局定义的环境变量（variables）或默认值(default)。

使用true、false决定是否使用，默认为true

```yaml
inherit:
  default: false
  variables: false
```

继承其中的一部分变量或默认值使用list

```yaml
inherit: # 定义允许default和variables中使用到的变量
  default:
    - parameter1
    - parameter2
  variables:
    - VARIABLE1
    - VARIABLE2
```

## tags标签
用于从允许运行该项目的所有Runner列表中选择特定的Runner,在Runner注册期间，您可以指定Runner的标签。

tags可让您使用指定了标签的runner来运行作业,此runner具有ruby和postgres标签。

```yaml
job:
  tags:
    - ruby
    - postgres
```

指定作业分别在Linux和docker平台上运行。

```yaml
linux job:
  stage:
    - build
  tags:
    - linux
  script:
    - echo Hello, %USERNAME%!

docker job:
  stage:
    - build
  tags:
    - docker
  script:
    - echo "Hello, $USER!"
```

![](images/img_270.png)

## allow_failure允许失败
allow_failure允许作业失败，默认值为false 。启用后，如果作业失败，该作业将在用户界面中显示橙色警告. 但是，管道的逻辑流程将认为作业成功/通过，并且不会被阻塞。 假设所有其他作业均成功，则该作业的阶段及其管道将显示相同的橙色警告。但是，关联的提交将被标记为"通过”，而不会发出警告。

```yaml
job1:
  stage: test
  script:
    - execute_script_that_will_fail
  allow_failure: true
```

![](images/img_271.png)

## when条件
on_success前面阶段中的所有作业都成功（或由于标记为allow_failure而被视为成功）时才执行作业。 这是默认值。

on_failure当前面阶段出现失败则执行。

always -执行作业，而不管先前阶段的作业状态如何，放到最后执行。总是执行。

### manual 手动
manual -手动执行作业,不会自动执行，需要由用户显式启动. 手动操作的示例用法是部署到生产环境. 可以从管道，作业，环境和部署视图开始手动操作。

此时在deploy阶段添加manual，则流水线运行到deploy阶段为锁定状态，需要手动点击按钮才能运行deploy阶段。

![](images/img_272.png)

### delayed 延迟
delayed 延迟一定时间后执行作业（在GitLab 11.14中已添加）。

有效值'5',10 seconds,30 minutes, 1 day, 1 week 。

![](images/img_273.png)

## retry重试
配置在失败的情况下重试作业的次数。

当作业失败并配置了retry ，将再次处理该作业，直到达到retry关键字指定的次数。如果retry设置为2，并且作业在第二次运行成功（第一次重试），则不会再次重试. retry值必须是一个正整数，等于或大于0，但小于或等于2（最多两次重试，总共运行3次）.

```yaml
unittest:
  stage: test
  retry: 2
  script:
    - ech "run test"
```

![](images/img_274.png)

默认情况下，将在所有失败情况下重试作业。为了更好地控制retry哪些失败，可以是具有以下键的哈希值：

+ max ：最大重试次数.
+ when ：重试失败的案例.

根据错误原因设置重试的次数。

```plain
always ：在发生任何故障时重试（默认）.
unknown_failure ：当失败原因未知时。
script_failure ：脚本失败时重试。
api_failure ：API失败重试。
stuck_or_timeout_failure ：作业卡住或超时时。
runner_system_failure ：运行系统发生故障。
missing_dependency_failure: 如果依赖丢失。
runner_unsupported ：Runner不受支持。
stale_schedule ：无法执行延迟的作业。
job_execution_timeout ：脚本超出了为作业设置的最大执行时间。
archived_failure ：作业已存档且无法运行。
unmet_prerequisites ：作业未能完成先决条件任务。
scheduler_failure ：调度程序未能将作业分配给运行scheduler_failure。
data_integrity_failure ：检测到结构完整性问题。
```

### 实验
<font style="color:rgb(99, 99, 99);">定义当出现脚本错误重试两次，也就是会运行三次。</font>

```yaml
unittest:
  stage: test
  tags:
    - build
  only:
    - master
  script:
    - ech "run test"
  retry:
    max: 2
    when:
      - script_failure
```

<font style="color:rgb(99, 99, 99);">效果</font>

![](images/img_275.png)

## timeout超时
特定作业配置超时，作业级别的超时可以超过[项目级别的超时，](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/pipelines/settings.html#timeout)但不能超过Runner特定的超时。

```yaml
build:
  script: build.sh
  timeout: 3 hours 30 minutes

test:
  script: rspec
  timeout: 3h 30m
```

### 项目设置流水线超时时间
超时定义了作业可以运行的最长时间（以分钟为单位）。 这可以在项目的**“设置">” CI / CD">"常规管道"设置下进行配置** 。 默认值为60分钟。

![](images/img_276.png)

### runner超时时间
此类超时（如果小于[项目定义的超时](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/pipelines/settings.html#timeout) ）将具有优先权。此功能可用于通过设置大超时（例如一个星期）来防止Shared Runner被项目占用。未配置时，Runner将不会覆盖项目超时。

![](images/img_277.png)

### 此功能如何工作
示例1-运行程序超时大于项目超时

runner超时设置为24小时，项目的CI / CD超时设置为2小时。该工作将在2小时后超时。

示例2-未配置运行程序超时

runner不设置超时时间，项目的CI / CD超时设置为2小时。该工作将在2小时后超时。

示例3-运行程序超时小于项目超时

runner超时设置为30分钟，项目的CI / CD超时设置为2小时。工作在30分钟后将超时

## parallel并行数
配置要并行运行的作业实例数,此值必须大于或等于2并且小于或等于50。

这将创建N个并行运行的同一作业实例. 它们从job_name 1/N到job_name N/N依次命名。

```yaml
codescan:
  stage: codescan
  tags:
    - build
  only:
    - master
  script:
    - echo "codescan"
    - sleep 5;
  parallel: 5
```

![](images/img_278.png)

## interruptible 允许中断
用于标记某个 job 是否可以被中断的关键字。这个功能特别有用，当你希望在推送新的代码时，中断当前正在运行的旧的 pipeline，从而避免浪费资源。设置 interruptible: true 允许 GitLab 在新 pipeline 触发时中断旧的 pipeline 中正在运行的 job。

# 综合案例
## 案例1
job+script+before_script+after_script+stages+.pre+.post+stage+variables

```yaml
before_script: # 每个job执行前先执行全局定义的before_script，如果失败会导致job不再执行
  - echo "before-script!!"

variables: # 定义变量
  DOMAIN: example.com
  
stages: # 定义作业的阶段，所有作业按stages指定的顺序执行
  - build
  - test
  - codescan
  - deploy

begin: # 定义名为begin的job
  stage: .pre # .pre表示整个管道第一个运行阶段
  script: # 每个job必须至少含一个script
    - echo "begin cicd"

build: # 定义job
  before_script: # 可以指定job单独执行before_script，会覆盖全局定义的before_script
    - echo "before-script in job"
  stage: build # 与stages中定义的build匹配
  script:
    - echo "mvn clean "
    - echo "mvn install"
    - echo "$DOMAIN" # 使用变量
  after_script: # 可以指定job单独执行after_script，会覆盖全局定义的after_script
    - echo "after script in buildjob"

unittest1: # 定义job
  stage: test # unittest1和unittest2都是test阶段，则会并行执行这两个job
  script:
    - echo "run test1"


unittest2: # 定义job
  stage: test
  script:
    - echo "run test2"

deploy: # 定义job
  stage: deploy
  script:
    - echo "hello deploy"
    - sleep 2;
  
codescan: # 定义job
  stage: codescan
  script:
    - echo "codescan"
    - sleep 5;

end: # 定义job
  stage: .post # .post表示整个管道最后一个运行阶段
  script:
    - echo "end cicd"

after_script: # 每个job执行完成后执行全局定义的after_script，作业失败不会影响其他job执行
  - echo "after-script"
  - ech
```

实验效果

![](images/img_279.png)

可能遇到的问题： pipeline卡主,为降低复杂性目前没有学习tags，所以流水线是在共享的runner中运行的。���要设置共享的runner运行没有tag的作业。

![](images/img_280.png)

## 案例2
tags+allow_failure+when

```yaml
stages: # 定义作业的阶段，所有作业按stages指定的顺序执行
  - build
  - test
  - codescan
  - deploy

build: # 定义job
  stage: build # 与stages中定义的build匹配
  script:
    - echo "mvn clean "

unittest1: # 定义job
  stage: test # unittest1和unittest2都是test阶段，则会并行执行这两个job
  tags: # 指定在含有tags为linux的runner上执行该job
    - linux
  script:
    - echo1 "run test1 for linux"
  allow_failure: true # 允许job执行失败，如果job失败，会有警告，不影响其他作业执行。


unittest2: # 定义job
  stage: test
  tags: # 指定在含有tags为docker的runner上执行该job
    - docker
  script:
    - echo "run test2 for docker"

deploy: # 定义job
  stage: deploy
  script:
    - echo "hello deploy"
    - sleep 2;
  when: manual # 手动执行该job，需要手动点击按钮才能运行deploy阶段
  
codescan: # 定义job
  stage: codescan
  script:
    - echo "codescan"
    - sleep 5;
  when: delayed # 延迟执行该job
  start_in: '10' # 有效值'5',10 seconds,30 minutes, 1 day, 1 week
```

执行结果

![](images/img_281.png)

## 案例3
retry+timeout+parallel

```yaml
stages: # 定义作业的阶段，所有作业按stages指定的顺序执行
  - build
  - codescan
  - deploy

build: # 定义job
  stage: build # 与stages中定义的build匹配
  script:
    - echo "mvn clean "

deploy: # 定义job
  stage: deploy
  script:
    - echo2 "hello deploy"
    - sleep 2;
  retry: # 失败重试
    max: 2 # 最多重试2次
    when:
      - script_failure # 当脚本执行失败时执行
  timeout: 1m # 定义作业超时时间1分钟
  
codescan: # 定义job
  stage: codescan
  script:
    - echo "codescan"
    - sleep 5;
  parallel: 5 # 配置要并行运行的作业实例数为5
```

执行结果

![](images/img_282.png)

deploy阶段失败1次，重试2次，共3次记录。

![](images/img_283.png)

## 案例4
default+variables+inherit

```yaml
variables: # 定义全局变量
  DOMAIN: example.com
  HOST: test

default: # 定义了一个默认的参数
  tags: # 如果 job 里没有 tages，就使用这个 tags
    - build
  after_script: # 如果 job 里没有 before_script，就使用这个 tags
    - echo "default after_script"
  before_script: # 如果 job 里没有 before_script，就使用这个 tags
    - echo "default before_script"

stages:
  - build
  - test

build:
  stage: build
  before_script:
    - echo "job before_script"
  script:
    - echo "job script"
  
test:
  stage: test
  tags:
    - build
  script:
    - echo "after_script for test ${DOMAIN}, ${HOST}"
  inherit:
    default: false # 不使用定义的 default，全部
    variables:
      - DOMAIN # 只使用指定变量
```

build阶段日志如下，观察可知使用了default参数：

![](images/img_284.png)

test阶段日志如下，观察可知未使用default参数，HOST变量也未生效：

![](images/img_285.png)



---

<a id="170615327"></a>

## Gitlab流水线 - pipeline-条件分支

# rules
rules允许按顺序评估单个规则对象的列表，直到一个匹配并为作业动态提供属性. 请注意， rules不能only/except与only/except组合使用。

可用的规则条款包括：

+ [if](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/yaml/README.html#rulesif) （类似于[only:variables](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/yaml/README.html#onlyvariablesexceptvariables) ）
+ [changes](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/yaml/README.html#ruleschanges) （ [only:changes](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/yaml/README.html#onlychangesexceptchanges)相同）
+ [exists](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/yaml/README.html#rulesexists)

## rules:if
如果DOMAIN的值匹配，则需要手动运行。不匹配on_success。 条件判断从上到下，匹配即停止。多条件匹配可以使用&& ||

```yaml
variables:
  DOMAIN: example.com

codescan:
  stage: codescan
  tags:
    - build
  script:
    - echo "codescan"
    - sleep 5;
  #parallel: 5
  rules:
    - if: '$DOMAIN == "example.com"'
      when: manual
    - when: on_success
```

### rules:changes
接受文件路径数组。 如果提交中Jenkinsfile文件发生的变化则为true。

```yaml
codescan:
  stage: codescan
  tags:
    - build
  script:
    - echo "codescan"
    - sleep 5;
  #parallel: 5
  rules:
    - changes:
      - Jenkinsfile
      when: manual
    - if: '$DOMAIN == "example.com"'
      when: on_success
    - when: on_success
```

## rules:exists
接受文件路径数组。当仓库中存在指定的文件时操作。

```yaml
codescan:
  stage: codescan
  tags:
    - build
  script:
    - echo "codescan"
    - sleep 5;
  #parallel: 5
  rules:
    - exists:
      - Jenkinsfile
      when: manual 
    - changes:
      - Jenkinsfile
      when: on_success
    - if: '$DOMAIN == "example.com"'
      when: on_success
    - when: on_success
```

## rules:allow_failure
使用[allow_failure: true](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/yaml/README.html#allow_failure) rules:在不停止管道本身的情况下允许作业失败或手动作业等待操作.

```yaml
job:
  script: "echo Hello, Rules!"
  rules:
    - if: '$CI_MERGE_REQUEST_TARGET_BRANCH_NAME == "master"'
      when: manual
      allow_failure: true
```

在此示例中，如果第一个规则匹配，则作业将具有以下when: manual和allow_failure: true。

# workflow:rules
顶级workflow:关键字适用于整个管道，并将确定是否创建管道。[when](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/yaml/README.html#when) ：可以设置为always或never . 如果未提供，则默认值always。

```yaml
variables:
  DOMAIN: example.com

workflow:
  rules:
    - if: '$DOMAIN == "example.com"'
    - when: always
```

# only/except
使用only / except 关键字来控制何时创建作业

+ only定义哪些分支和标签的git项目会被job执行
+ except定义哪些分支和标签的git项目不会被job执行

## 示例
只有在feature-开头的分支提交代码才会执行job1；只有在master分支提交代码，才会执行job2。

```yaml
job1:
 stage: restore
 script:
  - echo 'job1 script'
 only: 
  - /^feature-.*$/
job2:
 stage: compile
 script:
  - echo 'job2 script'
 only: 
  - master
```

# 综合案例
```yaml
variables: # 定义变量
  DOMAIN: example.com

stages: # 定义作业的阶段，所有作业按stages指定的顺序执行
  - build
  - deploy

workflow:
  rules: # 如果DOMAIN值为example.com，则创建该管道
    - if: '$DOMAIN == "example.com"'
    - when: always

build: # 定义job
  stage: build # 与stages中定义的build匹配
  script:
    - echo "mvn clean"
  rules: # if条件匹配
    - if: '$DOMAIN == "example.com"' # 如果DOMAIN值为example.com，则手动执行该job
      when: manual
    - if: '$DOMAIN == "example.cn"' # 如果DOMAIN值为example.cn，则延迟5秒执行该job
      when: delayed
      start_in: '10'
    - when: on_success # 如果上述条件都不满足，则认为该任务执行成功

deploy: # 定义job
  stage: deploy
  script:
    - echo "hello deploy"
    - sleep 2;
  rules: 
    - exists: # 文件存在匹配
      - Dockerfile
      when: on_success # 如果文件存在，则成功
    - changes: # 文件变化匹配
      - Dockerfile # Dockerfile文件内容发生变化
      when: manual
      allow_failure: true # 允许失败，不影响job
    - when: on_failure # 如果上述条件不满足，则该任务执行失败
```

执行结果

![](images/img_286.png)



---

<a id="170564184"></a>

## Gitlab流水线 - pipeline-缓存

# cache 缓存
用来指定需要在job之间缓存的文件或目录。只能使用该项目工作空间内的路径。不要使用缓存在阶段之间传递工件，因为缓存旨在存储编译项目所需的运行时依赖项。

如果在job范围之外定义了cache ，则意味着它是全局设置，所有job都将使用该定义。如果未全局定义或未按job定义则禁用该功能。

![](images/img_287.png)

## cache:path目录
使用paths指令选择要缓存的文件或目录，路径是相对于项目目录，不能直接链接到项目目录之外。

$CI_PROJECT_DIR 项目目录

在job build中定义缓存，将会缓存target目录下的所有.jar文件。

```yaml
build:
  script: test
  cache:
    paths:
      - target/*.jar
```

当在全局定义了cache:paths会被job中覆盖。以下实例将缓存binaries目录。

```yaml
default:
  cache:
    paths:
      - my/files

build:
  script: echo "hello"
  cache:
    key: build
    paths:
      - target/
```

由于缓存是在job之间共享的，如果不同的job使用不同的路径就出现了缓存覆盖的问题。如何让不同的job缓存不同的cache呢？设置不同的cache:key。

## cache:key 缓存标记
为缓存做个标记，可以配置job、分支为key来实现分支、作业特定的缓存。为不同 job 定义了不同的 cache:key 时， 会为每个 job 分配一个独立的 cache。cache:key变量可以使用任何预定义变量，默认default ，从GitLab 9.0开始，默认情况下所有内容都在管道和作业之间共享。

按照分支设置缓存

```yaml
cache:
  key: ${CI_COMMIT_REF_SLUG}
```

files： 文件发生变化自动重新生成缓存(files最多指定两个文件)，提交的时候检查指定的文件。

根据指定的文件生成密钥计算SHA校验和，如果文件未改变值为default。

```yaml
cache:
  key:
    files:
      - Gemfile.lock
      - package.json
  paths:
    - vendor/ruby
    - node_modules
```

prefix: 允许给定prefix的值与指定文件生成的秘钥组合。

在这里定义了全局的cache，如果文件发生变化则值为 rspec-xxx111111111222222 ，未发生变化为rspec-default。

```yaml
cache:
  key:
    files:
      - Gemfile.lock
    prefix: ${CI_JOB_NAME}
  paths:
    - vendor/ruby

rspec:
  script:
    - bundle exec rspec
```

例如，添加$CI_JOB_NAME prefix将使密钥看起来像： rspec-feef9576d21ee9b6a32e30c5c79d0a0ceb68d1e5 ，并且作业缓存在不同分支之间共享，如果分支更改了Gemfile.lock ，则该分支将为cache:key:files具有新的SHA校验和. 将生成一个新的缓存密钥，并为该密钥创建一个新的缓存. 如果Gemfile.lock未发生变化 ，则将前缀添加default ，因此示例中的键为rspec-default 。

## cache:policy 策略
默认：在执行开始时下载文件，并在结束时重新上传文件。称为pull-push缓存策略.

policy: pull 跳过上传步骤，只拉取缓存

policy: push 跳过下载步骤，不写入缓存

```yaml
stages:
  - setup
  - test

prepare:
  stage: setup
  cache:
    key: gems
    paths:
      - vendor/bundle
  script:
    - bundle install --deployment

rspec:
  stage: test
  cache:
    key: gems
    paths:
      - vendor/bundle
    policy: pull
  script:
    - bundle exec rspec ...
```

# 实验案例
## 全局缓存
```yaml
default:
  cache: 
    paths: # 定义全局缓存路径
     - target/

stages: # 定义作业的阶段，所有作业按stages指定的顺序执行
  - build
  - test
  - deploy

build: # 定义job
  stage: build # 与stages中定义的build匹配
  tags: # 指定build的runner执行
    - build
  script: # 编译打包并查看目录
    - mvn clean package
    - ls target

unittest: # 定义job
  stage: test
  tags: # 指定build的runner执行
    - build
  script: # target目录新增文件并查看
    - echo 'test' >> target/a.txt
    - ls target

deploy: # 定义job
  stage: deploy
  tags: # 指定build的runner执行
    - build
  script: # 查看target目录
    - ls target
```

### Pipeline日志分析
build作业运行时会对项目代码打包，然后生成target目录。作业结束创建缓存。

![](images/img_288.png)

开始第二个作业test，此时会把当前目录中的target目录删除掉（因为做了git 对比）。然后获取到第一个作业生成的缓存target目录。

![](images/img_289.png)

开始第三个作业，同样先删除了target目录，然后获取了第二个作业的缓存。最后生成了当前的缓存。

![](images/img_290.png)

当我们再次重新运行流水线时，查看build日志发现，使用的是上一次流水线的缓存。

![](images/img_291.png)

结论： 全局缓存生效于未在作业中定义缓存的所有作业，这种情况如果每个作业都对缓存目录做了更改，会出现缓存被覆盖的场景。

## 配置运行时不下载缓存
例如build阶段我们需要生成新的target目录内容，可以优化设置job运行时只拉取缓存。

```yaml
default:
  cache: 
    paths: # 定义全局缓存路径
     - target/

stages: # 定义作业的阶段，所有作业按stages指定的顺序执行
  - build
  - test
  - deploy

build: # 定义job
  stage: build # 与stages中定义的build匹配
  tags: # 指定build的runner执行
    - build
  script: # 编译打包并查看目录
    - mvn clean package
    - ls target
  cache:
    policy: pull  #只拉取缓存

unittest: # 定义job
  stage: test
  tags: # 指定build的runner执行
    - build
  script: # target目录新增文件并查看
    - echo 'test' >> target/a.txt
    - ls target

deploy: # 定义job
  stage: deploy
  tags: # 指定build的runner执行
    - build
  script: # 查看target目录
    - ls target
```

查看build阶段日志，不再使用上一次流水线的缓存

![](images/img_292.png)

## 


---

<a id="170850834"></a>

## Gitlab流水线 - pipeline-制品库

# artifacts
用于指定在作业成功或者失败时应附加到作业的文件或目录的列表。作业完成后，工件将被发送到GitLab，并可在GitLab UI中下载。

## paths
路径是相对于项目目录的，不能直接链接到项目目录之外。

将制品设置为target目录

```yaml
artifacts:
  paths:
    - target/
```

![](images/img_293.png)

禁用工件传递

```yaml
job:
  stage: build
  script: make build
  dependencies: []
```

您可能只想为标记的发行版创建构件，以避免用临时构建构件填充构建服务器存储。仅为标签创建工件（ default-job不会创建工件）：

```yaml
default-job:
  script:
    - mvn test -U
  except:
    - tags

release-job:
  script:
    - mvn package -U
  artifacts:
    paths:
      - target/*.war
  only:
    - tags
```

## name
通过name指令定义所创建的工件存档的名称。可以为每个档案使用唯一的名称。 artifacts:name变量可以使用任何[预定义变量](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/variables/README.html)。默认名称是artifacts，下载artifacts改为artifacts.zip。

使用当前作业的名称创建档案

```yaml
job:
  artifacts:
    name: "$CI_JOB_NAME"
    paths:
      - binaries/
```

使用内部分支或标记的名称（仅包括binaries目录）创建档案，

```yaml
job:
  artifacts:
    name: "$CI_COMMIT_REF_NAME"
    paths:
      - binaries/
```

使用当前作业的名称和当前分支或标记（仅包括二进制文件目录）创建档案

```yaml
job:
  artifacts:
    name: "$CI_JOB_NAME-$CI_COMMIT_REF_NAME"
    paths:
      - binaries/
```

要创建一个具有当前[阶段](http://s0docs0gitlab0com.icopy.site/12.9/ee/ci/yaml/README.html#stages)名称和分支名称的档案

```yaml
job:
  artifacts:
    name: "$CI_JOB_STAGE-$CI_COMMIT_REF_NAME"
    paths:
      - binaries/
```

---

## when
用于在作业失败时或尽管失败而上传工件。on_success仅在作业成功时上载工件。这是默认值。on_failure仅在作业失败时上载工件。always 上载工件，无论作业状态如何。

要仅在作业失败时上传工件：

```yaml
job:
  artifacts:
    when: on_failure
```

## expire_in
制品的有效期，从上传和存储到GitLab的时间开始算起。如果未定义过期时间，则默认为30天。

expire_in的值以秒为单位的经过时间，除非提供了单位。可解析值的示例：

```yaml
‘42’
‘3 mins 4 sec’
‘2 hrs 20 min’
‘2h20min’
‘6 mos 1 day’
‘47 yrs 6 mos and 4d’
‘3 weeks and 2 days’
```

一周后过期

```yaml
job:
  artifacts:
    expire_in: 1 week
```

# dependencies
定义要获取制品的作业列表，只能从当前阶段之前执行的阶段定义作业。定义一个空数组将跳过下载该作业的任何工件不会考虑先前作业的状态，因此，如果它失败或是未运行的手动作业，则不会发生错误。

![](images/img_294.png)

如果设置为依赖项的作业的工件已过期或删除，那么依赖项作业将失败。

# 综合实例
```yaml
stages: # 定义作业的阶段，所有作业按stages指定的顺序执行
  - build

build: # 定义job
  stage: build # 与stages中定义的build匹配
  tags: # 指定build的runner执行
    - build
  script: # 编译打包并查看目录
    - mvn clean package
  artifacts: # 制品库配置
    paths: # 制品库路径
      - target/*.jar
    name: "$CI_JOB_NAME-$CI_COMMIT_REF_NAME" # 制品库名称
    when: on_success # 作业成功时上传
```

查看build阶段日志，打包完成后上传制品  
![](images/img_295.png)

查看test阶段日志，下载了build阶段的制品并使用。

![](images/img_296.png)

查看制品库信息

![](images/img_297.png)



---

<a id="170853497"></a>

## Gitlab流水线 - pipeline-阶段并行

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

![](images/img_298.png)

# 


# 




---

<a id="170855849"></a>

## Gitlab流水线 - pipeline-引入配置

# include引入
可以允许引入外部YAML文件，文件具有扩展名.yml或.yaml 。使用合并功能可以自定义和覆盖包含本地定义的CI / CD配置。相同的job会合并，参数值以源文件为准。

## local
引入同一存储库中的文件，使用相对于根目录的完整路径进行引用，与配置文件在同一分支上使用。

在仓库新增一个ci/localci.yml: 定义一个作业用于发布。

![](images/img_299.png)

yml文件内容如下：

```yaml
stages:
  - deploy
  
deployjob:
  stage: deploy
  script:
    - echo 'deploy'
```

.gitlab-ci.yml 引入本地的CI文件’ci/localci.yml’。

```yaml
include: # 引入仓库ci目录下的localci文件
  local: 'ci/localci.yml' 
  
stages:
  - build
  - deploy
  
buildjob:
  stage: build
  script: 
    - echo 'deploy'
```

流水线执行效果如下：

![](images/img_300.png)

## file
另一个项目创建.gitlab-ci.yml文件。

![](images/img_301.png)

文件内容如下：

```yaml
stages:
  - deploy

deployjob:
  stage: deploy
  script:
    - echo "deploy"
```

引入另一个项目的流水线

```yaml
include: # 引入另一个项目master分支下的流水线文件
  - project: develop/vue3_vite_element-plus
    ref: master
    file: '.gitlab-ci.yml' 
  
stages:
  - build
  - deploy
  
buildjob:
  stage: build
  script: 
    - echo 'deploy'
```

流水线执行效果如下：

![](images/img_302.png)

## template
只能使用官方提供的模板 [https://gitlab.com/gitlab-org/gitlab/tree/master/lib/gitlab/ci/templates](https://gitlab.com/gitlab-org/gitlab/tree/master/lib/gitlab/ci/templates)

```plain
include:
  - template: Auto-DevOps.gitlab-ci.yml
```

## remote
用于通过HTTP / HTTPS包含来自其他位置的文件，并使用完整URL进行引用. 远程文件必须可以通过简单的GET请求公开访问，因为不支持远程URL中的身份验证架构。

```plain
include:
  - remote: 'https://gitlab.com/awesome-project/raw/master/.gitlab-ci-template.yml'
```

# extends继承作业
继承模板作业，相同的配置将会覆盖，不同的配置将会继承。

```yaml
stages:
  - test

template-test: # 定义test模板
  stage: test
  script: 
  - echo "mvn test"

testjob:
  extends: template-test # 继承test模板
  script: # 覆盖script
  - echo "mvn clean test"
```

执行效果

![](images/img_303.png)

继承后的流水线内容如下：

```yaml
stages:
  - test

testjob:
  stage: test
  script:
  - echo "mvn clean test"
```

# include与extends组合使用
引入其他文件并覆盖相关值。

新建localci.yml文件，内容如下

```yaml
deployjob:
  stage: deploy
  script:
    - echo 'deploy'

template-build:
  stage: build
  script: 
    - echo "build"
```

```yaml
include: # 引入localci.yml文件
  local: 'ci/localci.yml'

stages: # 定义步骤
  - build 
  - deploy

testjob:
  extends: template-build # 继承template-build并覆盖值
  script: echo "mvn clean test"
```



---

<a id="170855955"></a>

## Gitlab流水线 - pipeline-管道触发

# trigger 管道触发
当GitLab从trigger定义创建的作业启动时，将创建一个下游管道。允许创建多项目管道和子管道。将trigger与when:manual一起使用会导致错误。

多项目管道： 跨多个项目设置流水线，以便一个项目中的管道可以触发另一个项目中的管道，通常在微服务中使用。

父子管道: 在同一项目中管道可以触发一组同时运行的子管道,子管道仍然按照阶段顺序执行其每个作业，但是可以自由地继续执行各个阶段，而不必等待父管道中无关的作业完成。

# 多项目管道
使用案例：一但上游管道develop/sprint_boot_demo执行完成后，触发develop/vue3_vite_element-plus项目master流水线。

需要注意的是，创建上游管道的用户需要具有对下游项目的访问权限。如果发现下游项目用户没有访问权限以在其中创建管道，则staging作业将被标记为失败。

上游管道develop/sprint_boot_demo项目pipeline内容如下：

```yaml
variables:
  DOMAIN: example.com

stages:
  - build
  - deploy
 
build:
  stage: build
  script:
    - echo "mvn clean "
    - echo "mvn install"

deploy:
  stage: deploy
  script:
    - echo "hello deploy"

staging:
  stage: deploy
  trigger: 
    project: develop/vue3_vite_element-plus # 下游项目的完整路径
    branch: master # 由指定的项目分支的名称
    strategy: depend # 将自身状态从触发的管道合并到源作业。
```

下游管道develop/vue3_vite_element-plus项目pipeline内容如下：

```yaml
stages:
  - deploy
  
deployjob:
  stage: deploy
  script:
    - echo 'deploy'
    - echo "Hello, $DOMAIN"
```

使用variables关键字将变量传递到下游管道。 全局变量也会传递给下游项目。上游管道优先于下游管道。如果在上游和下游项目中定义了两个具有相同名称的变量，则在上游项目中定义的变量将优先。

默认情况下，一旦创建下游管道，trigger作业就会以success状态完成。

在上游项目中查看管道信息

![](images/img_304.png)

查看下游项目打印变量信息

![](images/img_305.png)

# 父子管道
创建子管道ci/part1.yml，内容如下：

```yaml
stages:
  - deploy

child-deploy:
  stage: deploy
  script: 
    - echo "Hello, $DOMAIN"
    - sleep 10
```

在父管道触发子管道

```yaml
variables:
  DOMAIN: example.com
  
stages:
  - build
  - deploy
 
build:
  stage: build
  script:
    - echo "mvn clean "
    
staging2:
  stage: deploy
  trigger: 
    include: 'ci/part1.yml' # 引入同一项目下的子管道
    strategy: depend # 将自身状态从触发的管道合并到源作业。
```

此时流水线任务如下图所示：

![](images/img_306.png)



---

<a id="171542631"></a>

## Gitlab流水线 - pipeline-容器

# image
默认在注册runner的时候需要填写一个基础的镜像，请记住一点只要使用执行器为docker类型的runner所有的操作运行都会在容器中运行。 如果全局指定了images则所有作业使用此image创建容器并在其中运行。 全局未指定image，再次查看job中是否有指定，如果有此job按照指定镜像创建容器并运行，没有则使用注册runner时指定的默认镜像。

修改pipeline内容如下：

```yaml
stages:
  - build
  - deploy

build:
  stage: build
  image: harbor.local.com/cicd/maven:3.9.3 # 构建阶段使用指定的maven镜像
  tags:
    - docker
  script:
    - mvn clean package
    - ls target

deploy: 
  stage: deploy # 部署阶段使用注册时默认指定的alpine:latest镜像
  tags:
    - docker
  script:
    - echo "deploy success"
```

此时观察build阶段日志，发现使用了maven镜像执行操作

![](images/img_307.png)

观察deploy阶段日志，则使用默认的alpine镜像执行操作

![](images/img_308.png)

# services
job运行期间运行的另一个Docker容器，并link到image关键字定义的Docker容器。这样，您就可以在构建期间访问服务容器.

服务容器可以运行任何应用程序，但是最常见的用例是运行数据库容器，例如mysql 。与每次安装项目时都安装mysql相比，使用现有容器并将其作为附加容器运行更容易，更快捷。

```yaml
stages:
  - build

services: # 运行一个redis容器
  - name: harbor.local.com/library/redis:7
    alias: redis # 指定容器别名

build:
  stage: build
  image: harbor.local.com/library/rockylinux:8
  tags:
    - docker
  script:
    - dnf -y install redis
    - redis-cli -h redis PING # 使用别名连接容器
```

观察执行日志，内容如下，成功访问到了redis服务。

![](images/img_309.png)



---

<a id="171809764"></a>

## Gitlab流水线 - pipeline-环境

# environment
用于定义和管理你的应用程序部署的目标环境。通过指定 environment，你可以处理不同的部署阶段（如开发、测试、生产等）并管理这些环境中的应用状态。environment 的主要用途包括：

+ **环境名称**：指定应用程序部署的环境名称，比如 development、staging 或 production。
+ **部署路径**：定义应用程序在目标环境中的部署路径，可以通过 URL 访问。
+ **环境保护**：设置受保护的环境，只有特定用户或角色才能部署到这些环境中，增加了部署的安全性。
+ **环境变量**：管理和使用特定环境的变量，在不同环境中可以设置不同的变量值。
+ **审计和跟踪**：通过 GitLab 界面可以查看每个环境的部署历史、当前状态和变更记录，便于审计和跟踪部署情况。
+ **动态环境**：支持动态生成环境，例如为每个合并请求创建一个临时的预览环境。

## 查看环境信息
![](images/img_310.png)

## pipeline定义环境
```yaml
stages:
  - build
  - deploy

build:
  stage: build
  tags:
    - docker
  script:
    - echo "build success"

deploy to production:
  stage: deploy
  script: git push production HEAD:master
  environment:
    name: production
    url: https://www.baidu.com
```

## 访问验证
![](images/img_311.png)



---

<a id="170373357"></a>

## Gitlab流水线 - 流水线语法总结

# 语法列表
| <font style="color:rgb(99, 99, 99);">Keyword</font> | <font style="color:rgb(99, 99, 99);">Description</font> |
| :--- | :--- |
| script | <font style="color:rgb(99, 99, 99);">运行的Shell命令或脚本。</font><font style="color:rgb(99, 99, 99);">✅</font> |
| image | <font style="color:rgb(99, 99, 99);">使用docker映像.</font> |
| services | <font style="color:rgb(99, 99, 99);">使用docker服务映像.</font> |
| before_script | <font style="color:rgb(99, 99, 99);">在作业运行前运行脚本。 </font><font style="color:rgb(99, 99, 99);">✅</font> |
| after_script | <font style="color:rgb(99, 99, 99);">在作业运行后运行脚本。</font><font style="color:rgb(99, 99, 99);">✅</font> |
| stages | <font style="color:rgb(99, 99, 99);">定义管道中的阶段，运行顺序。 </font><font style="color:rgb(99, 99, 99);">✅</font> |
| stage | <font style="color:rgb(99, 99, 99);">为工作定义一个阶段，可选，未指定默认为test阶段。 </font><font style="color:rgb(99, 99, 99);">✅</font> |
| only | <font style="color:rgb(99, 99, 99);">限制创建作业的时间. </font><font style="color:rgb(99, 99, 99);">✅</font> |
| except | <font style="color:rgb(99, 99, 99);">限制未创建作业的时间. </font><font style="color:rgb(99, 99, 99);">✅</font> |
| rules | <font style="color:rgb(99, 99, 99);">条件列表，用于评估和确定作业的选定属性，以及是否创建该作业. </font><font style="color:rgb(99, 99, 99);">✅</font> |
| allow_failure | <font style="color:rgb(99, 99, 99);">允许作业失败. 失败的工作不会影响提交状态.</font><font style="color:rgb(99, 99, 99);">✅</font> |
| when | <font style="color:rgb(99, 99, 99);">什么时候开始工作.</font><font style="color:rgb(99, 99, 99);">✅</font> |
| environment | <font style="color:rgb(99, 99, 99);">作业部署到的环境的名称.</font> |
| cache | <font style="color:rgb(99, 99, 99);">在后续运行之间应缓存的文件列表. </font><font style="color:rgb(99, 99, 99);">✅</font> |
| artifacts | <font style="color:rgb(99, 99, 99);">成功时附加到作业的文件和目录列表.</font> |
| dependencies | <font style="color:rgb(99, 99, 99);">通过提供要从中获取工件的作业列表，限制将哪些工件传递给特定作业.</font> |
| coverage | <font style="color:rgb(99, 99, 99);">给定作业的代码覆盖率设置.</font> |
| retry | <font style="color:rgb(99, 99, 99);">发生故障时可以自动重试作业的时间和次数。 </font><font style="color:rgb(99, 99, 99);">✅</font> |
| timeout | <font style="color:rgb(99, 99, 99);">定义自定义作业级别的超时，该超时优先于项目范围的设置。 </font><font style="color:rgb(99, 99, 99);">✅</font> |
| parallel | <font style="color:rgb(99, 99, 99);">多少个作业实例应并行运行.</font><font style="color:rgb(99, 99, 99);">✅</font> |
| trigger | <font style="color:rgb(99, 99, 99);">定义下游管道触发器.</font> |
| include | <font style="color:rgb(99, 99, 99);">允许此作业包括外部YAML文件.</font> |
| extends | <font style="color:rgb(99, 99, 99);">该作业将要继承的配置条目.</font> |
| pages | <font style="color:rgb(99, 99, 99);">上载作业结果以用于GitLab页面.</font> |
| variables | <font style="color:rgb(99, 99, 99);">在作业级别上定义作业变量. </font><font style="color:rgb(99, 99, 99);">✅</font> |
| interruptible | <font style="color:rgb(99, 99, 99);">定义在通过新的运行使其冗余时是否可以取消作业.</font> |
| resource_group | <font style="color:rgb(99, 99, 99);">限制作业并发.</font> |


# 语法结构
![画板](images/img_312.jpeg)



---

<a id="171824103"></a>

## Gitlab工具链集成 - Gitlab与编译环境集成

# gitlab与maven集成
此处以rpm包部署maven为例，以下操作在gitlab-runner所在服务器执行。

maven下载地址：[https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)

## 安装Maven
```bash
[root@client1 ~]# wget https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz
[root@client1 ~]# mkdir /usr/local/maven
[root@client1 ~]# tar -zxf apache-maven-3.9.6-bin.tar.gz -C /usr/local/maven/
[root@client1 ~]# cd /usr/local/maven/apache-maven-3.9.6/
[root@jenkins apache-maven-3.9.3]# ls
bin  boot  conf  lib  LICENSE  NOTICE  README.txt
```

## 设置maven的阿里云镜像
```bash
[root@client1 apache-maven-3.9.6]# vim conf/settings.xml
# 在159行的标签为</mirrors>前添加如下阿里云镜像
<mirror>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    <mirrorOf>central</mirrorOf>
</mirror>
```

## 配置环境变量
```bash
[root@client1 apache-maven-3.9.6]# vim /etc/profile
# 文件末尾添加如下内容
export MAVEN_HOME=/usr/local/maven/apache-maven-3.9.6
export PATH=${MAVEN_HOME}/bin:${PATH}
[root@jenkins apache-maven-3.9.6]# source /etc/profile
[root@client1 ~]# mvn -v
Apache Maven 3.9.6 (bc0240f3c744dd6b6ec2920b3cd08dcc295161ae)
Maven home: /usr/local/maven/apache-maven-3.9.6
Java version: 17.0.7, vendor: OpenLogic, runtime: /usr/local/jdk/openlogic-openjdk-17.0.7+7-linux-x64
Default locale: zh_CN, platform encoding: UTF-8
OS name: "linux", version: "4.18.0-513.24.1.el8_9.x86_64", arch: "amd64", family: "unix"
```

## 修改runner标签
修改runner标签，新增java标签，用于构建时指定runner执行构建任务。

![](images/img_313.png)

## 创建流水线作业
在java项目根目录添加一个.gitlab-ci.yml文件，文件内容如下

```yaml
stages:
  - build
  - test

build:
  stage: build
  tags:
    - java
  script:
    - mvn clean package # 编译打包
    - ls target

test:
  stage: test
  tags:
    - java
  script:
    - mvn test # 进行单元测试
    - ls target
  artifacts: # 收集单元测试报告
    reports:
      junit: 'target/surefire-reports/TEST-*.xml'
```

查看build阶段日志，已成功完成mvn打包。

![](images/img_314.png)

查看test阶段日志，已成功完成单元测试。

![](images/img_315.png)

查看测试结果

![](images/img_316.png)

# gitlab与npm集成
## 安装nodejs
下载地址[https://nodejs.org/en/download/prebuilt-binaries](https://nodejs.org/en/download/prebuilt-binaries)

```bash
[root@client1 ~]# wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-x64.tar.xz
[root@client1 ~]# tar -xf node-v18.20.3-linux-x64.tar.xz
[root@client1 ~]# mv node-v18.20.3-linux-x64 /usr/local/node
```

## 配置环境变量
```bash
[root@client1 ~]# vim /etc/profile
# 文件末尾添加如下内容
export PATH=$PATH:/usr/local/node/bin
[root@client1 ~]# source /etc/profile
[root@client1 ~]# node -v
v18.20.3
[root@client1 ~]# npm -v
10.7.0
```

## 配置镜像源
方法1：

```bash
npm config set registry https://mirrors.cloud.tencent.com/npm/
```

<font style="color:rgb(48, 49, 51);">方法2：使用nrm – NPM registry 管理工具</font>

```bash
[root@client1 ~]# npm install -g nrm

added 17 packages in 6s

4 packages are looking for funding
  run `npm fund` for details
npm notice
npm notice New minor version of npm available! 10.7.0 -> 10.8.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.8.1
npm notice To update run: npm install -g npm@10.8.1
npm notice
[root@client1 ~]# nrm ls
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
[root@client1 ~]# nrm use taobao
 SUCCESS  The registry has been changed to 'taobao'.
[root@client1 ~]# nrm ls
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
* taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
  
```

## 修改runner标签
操作同上，新增nodejs标签。

## 创建流水线作业
在nodejs项目根目录添加一个.gitlab-ci.yml文件，文件内容如下

```yaml
stages:
  - build

build:
  stage: build
  tags:
    - nodejs
  script:
    - npm install # 安装依赖
    - npm run build # 打包
```

观察build阶段日志，已成功完成打包





---

<a id="171824336"></a>

## Gitlab工具链集成 - Gitlab与SonarQube集成

# SonarQube相关配置
## 禁用审查结果上传到SCM功能
![](images/img_163.png)

## SonarQube生成token
![](images/img_317.png)

# runner配置
## 安装sonar-scanner
参考文档；[https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/scanners/sonarscanner/](https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/scanners/sonarscanner/)

```bash
[root@client1 ~]# wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip
[root@client1 ~]# unzip mkdir /usr/local/sonar-scanner
[root@client1 ~]# mv sonar-scanner-5.0.1.3006-linux /usr/local/sonar-scanner
[root@client1 ~]# vim /etc/profile
# 文件末尾添加如下内容
export PATH=$PATH:/usr/local/sonar-scanner/bin
[root@client1 ~]# source /etc/profile
[root@client1 ~]# sonar-scanner -v
INFO: Scanner configuration file: /usr/local/sonar-scanner/conf/sonar-scanner.properties
INFO: Project root configuration file: NONE
INFO: SonarScanner 5.0.1.3006
INFO: Java 17.0.7 Eclipse Adoptium (64-bit)
INFO: Linux 4.18.0-513.24.1.el8_9.x86_64 amd64
```

# gitlab配置
## 新增SonarQube扫描配置文件
在项目根目录下新建sonar-project.properties文件，内容如下：

```yaml
# 项目名称id，全局唯一
sonar.projectKey=sprint_boot_demo
# 项目名称
sonar.projectName=sprint_boot_demo
sonar.projectVersion=1.0
# 扫描路径
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

## 新增token变量
![](images/img_318.png)

## 创建流水线文件
```bash
default:
  cache: 
    paths: # 定义全局缓存路径
     - target/

stages:
  - build
  - test
  - code_scan

build:
  stage: build
  tags:
    - java
  script:
    - mvn clean package # 编译打包
    - ls target

code_scan: 
  stage: code_scan
  tags:
    - java
  script:
  - echo "CI_PROJECT_NAME:$CI_PROJECT_NAME SonarQubeToekn:$SonarQubeToekn CI_PROJECT_DIR:$CI_PROJECT_DIR CI_COMMIT_REF_NAME:$CI_COMMIT_REF_NAME"
  - "sonar-scanner -Dsonar.projectKey=$CI_PROJECT_NAME -Dproject.settings=$CI_PROJECT_DIR/sonar-project.properties \
    -Dsonar.branch.name=$CI_COMMIT_REF_NAME -Dsonar.host.url=http://192.168.10.71:9000 -Dsonar.login=$SonarQubeToekn"
  artifacts:
    paths:
      - "target/*.jar" # 制品目录
```

## 查看SonarQube扫描结果
![](images/img_319.png)



---

<a id="171824788"></a>

## Gitlab工具链集成 - Gitlab与Artifactory集成

# Artifactory配置
## 创建仓库
![](images/img_320.png)

## 获取命令
获取上传命令

![](images/img_321.png)

获取下载命令

![](images/img_322.png)

# gitlab配置
## 创建Artifactory密钥变量
![](images/img_323.png)

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
![](images/img_324.png)

## 查看下载信息
![](images/img_325.png)



---

<a id="171825091"></a>

## Gitlab工具链集成 - Gitlab与Harbor集成

# Harbor配置
## 创建项目
Harbor的项目分为公开和私有的:  
公开项目:所有用户都可以访问，通常存放公共的镜像，默认有一个library公开项目。  
私有项目:只有授权用户才可以访问，通常存放项目本身的镜像。 我们可以为devops项目创建一个新的项目

![](images/img_326.png)

## 创建用户
创建一个普通用户cuiliang。

![](images/img_327.png)

## 配置项目用户权限
在devops项目中添加普通用户cuiliang，并设置角色为开发者。

![](images/img_328.png)  
权限说明

| 角色 | 权限 |
| --- | --- |
| 访客 | 对项目有只读权限 |
| 开发人员 | 对项目有读写权限 |
| 维护人员 | 对项目有读写权限、创建webhook权限 |
| 项目管理员 | 除上述外，还有用户管理等权限 |


## 上传下载镜像测试
可参考文章[https://www.cuiliangblog.cn/detail/section/15189547](https://www.cuiliangblog.cn/detail/section/15189547)，此处不再赘述。

# runner配置
如果runner类型为docker，则需要将宿主机的/var/run/docker.sock文件挂载至docker容器中，便于调用宿主机的docker进程构建镜像。

```bash
[root@client2 ~]# vim /etc/gitlab-runner/config.toml
volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock"]
```

# gitlab配置
## 新增Dockerfile
在项目根目录创建**<font style="color:rgb(51, 50, 56);background-color:rgb(251, 250, 253);">Dockerfile</font>**文件，内容如下

```dockerfile
FROM openjdk:17-jdk-alpine
EXPOSE 8888
RUN apk --no-cache add curl
ARG JAR_FILE=target/SpringBootDemo-0.0.1-SNAPSHOT.jar
HEALTHCHECK --interval=5s --timeout=3s \
  CMD curl -fs http://127.0.0.1:8888/health || exit 1
ADD ${JAR_FILE} app.jar
CMD ["java","-jar","/app.jar"]
```

## 创建Harbor密码变量
![](images/img_329.png)

## 编辑流水线
```yaml
default:
  cache: 
    paths: # 定义全局缓存路径
     - target/

variables: # 定义镜像名称
  IMAGE_NAME: harbor.local.com/devops/$CI_PROJECT_NAME:$CI_COMMIT_BRANCH-$CI_COMMIT_SHORT_SHA-$CI_PIPELINE_ID

stages:
  - build
  - deploy

mvn:
  stage: build
  image: harbor.local.com/cicd/maven:3.9.3 # 构建阶段使用指定的maven镜像
  tags: # 在docker机器打包
    - docker
  script:
    - mvn clean package # 编译打包
    - ls target

docker: 
  stage: build
  image: harbor.local.com/cicd/docker:dind # 在构建镜像阶段使用docker:dind镜像操作
  tags: # 在docker机器构建镜像
    - docker
  script:
    - "docker build -t $IMAGE_NAME . " # 构建镜像
    - "docker login harbor.local.com -u cuiliang -p $HARBOR_PASSWORD" # 登录harbor
    - "docker push $IMAGE_NAME" # 上传镜像
    - "docker rmi -f $IMAGE_NAME " # 删除镜像

deploy:
  stage: deploy
  tags: # 在linux机器拉取镜像测试
    - linux
  script:
    - "docker login harbor.local.com -u cuiliang -p $HARBOR_PASSWORD" # 登录harbor
    - "docker pull $IMAGE_NAME" # 下载镜像
    - "docker run --name $CI_PROJECT_NAME -d -p 8888:8888 $IMAGE_NAME" # 运行容器
  cache:
    policy: push  #跳过上传缓存步骤
```

## 查看验证
查看harbor镜像仓库信息，已成功上传至harbor仓库

![](images/img_330.png)

查看linux机器，容器已正常运行

```yaml
[root@client1 ~]# docker ps
CONTAINER ID   IMAGE                                                          COMMAND                CREATED          STATUS                    PORTS                                       NAMES
2337d670e00d   harbor.local.com/devops/sprint_boot_demo:master-98edd3d7-108   "java -jar /app.jar"   21 seconds ago   Up 19 seconds (healthy)   0.0.0.0:8888->8888/tcp, :::8888->8888/tcp   sprint_boot_demo
```

如果在部署阶段提示权限异常，可以将gitlab-runner用户添加到docker组

```bash
usermod -aG docker gitlab-runner
```



---

<a id="171825012"></a>

## Gitlab工具链集成 - Gitlab与k8s集成(runner方式)

# 准备工作
## 部署Kubernetes类型的runner
具体内容参考文档：[https://www.cuiliangblog.cn/detail/section/172302364](https://www.cuiliangblog.cn/detail/section/172302364)

## 构建自定义镜像
在使用kubectl命令操作k8s集群时，由于dockerhub的kubectl基础镜像由于遵循最简化的原则，往往不符合我们的要求，因此我们需要构建自定义镜像。

如果k8s容器运行时为docker，在构建镜像时，可以直接使用docker in docker方案，具体内容可参考[https://www.cuiliangblog.cn/detail/section/171825091](https://www.cuiliangblog.cn/detail/section/171825091)。  
如果k8s容器运行时为container，则使用nerdctl+buildkitd方案，启动一个buildkit容器，通过nerdctl命令执行镜像构建与推送操作，具体内容可参考  
[https://www.cuiliangblog.cn/detail/section/167380911](https://www.cuiliangblog.cn/detail/section/167380911)。  
本次实验以container环境为例，通过nerdctl+buildkitd方案演示如何构建并推送镜像。

```bash
[root@tiaoban gitlab-runner]# cat Dockerfile 
FROM alpine:latest
USER root
COPY kubectl /usr/bin/kubectl
COPY nerdctl /usr/bin/nerdctl
COPY buildctl /usr/bin/buildctl
[root@tiaoban gitlab-runner]# docker build -t harbor.local.com/cicd/gitlab-runner-agent:v1.0 .
```

然后修改gitlab-runer默认镜像

```bash
apiVersion: v1
kind: ConfigMap
metadata:
  name: gitlab-runner-config
  namespace: cicd
data:
  # 以下配置用于后续注册 runner 时使用
  group_runner_executor: "kubernetes"
  group_runner_url: "http://gitlab.cicd.svc"
  group_runner_token: "glrt-Wnio9pMBqnjNH3dZYXc6"
  # 以下是 gitlab-runner 的配置文件模板，gitlab-runner 会实时读取 config.toml 配置文件并热加载，因此，在 gitlab-runner 部署后，可以直接通过修改 config.toml 文件来更新配置
  config-template.toml: |-
    # 配置最大并发数，默认为1
    concurrent = 10
    [[runners]]
      # 缓存项目的依赖包，从而大大减少项目构建的时间
      [runners.cache]
        # Type 可以选择 s3 和 gc3 两种对象存储协议
        Type = "s3"
        # Shared 字段控制不同 runner 之间的缓存是否共享，默认是 false
        Shared = false
        [runners.cache.s3]
          ServerAddress = "minio-service.minio.svc:9000"
          # 相当于用户名
          AccessKey = "HroS2nV03s82oIpvPTfr"
          # 相当于密码
          SecretKey = "Q7FGVQp9D4ZrnU0cLD9QJkK1u7S19xRhylmUidHW"
          # 桶名
          BucketName = "gitlab-runner-cache"
          Insecure = true
      # 配置 kubernetes 执行器。
      [runners.kubernetes]
        # 默认镜像
        image = "harbor.local.com/cicd/gitlab-runner-agent:v1.0"
        # 容器镜像拉取规则
        pull_policy = "if-not-present"
        # 名称空间，注意与之前创建的kube-config资源位于同一ns
        namespace = "cicd"
        # 启用特权模式
        privileged = true 
        cpu_limit = "1"
        memory_limit = "1Gi"
        service_cpu_limit = "1"
        service_memory_limit = "1Gi"
        dns_policy = "cluster-first"
      # 用于配置该 Executor 生成的 Pod 中的 /etc/hosts 文件
      [[runners.kubernetes.host_aliases]]
        ip = "192.168.10.151"
        hostnames = ["gitlab.local.com"]
      [runners.kubernetes.volumes]
          # 共用宿主机的containerd
         [[runners.kubernetes.volumes.host_path]]
           name = "sock"
           mount_path = "/var/run/containerd/containerd.sock"
           read_only = true
           host_path = "/var/run/containerd/containerd.sock"
          # 将 kubeconfig 内容挂载在runner容器中
         [[runners.kubernetes.volumes.secret]]
           name = "kube-config"
           mount_path = "/root/.kube/"
           read_only = true
```

## 部署buildkitd服务
通过deployment方式部署buildkitd服务，并开启1234端口，nerdctl工具通过tcp端口调用buildkitd服务完成镜像构建。

```yaml
[root@tiaoban buildkitd]# cat buildkitd-configmap.yaml 
apiVersion: v1
kind: ConfigMap
metadata:
  name: buildkitd-config
  namespace: cicd
data:
  buildkitd.toml: |-
    debug = true
    [registry."docker.io"] # 镜像加速
      mirrors = ["934du3yi.mirror.aliyuncs.com"]
    [registry."harbor.local.com"] # 私有镜像仓库
      http = false
[root@tiaoban buildkitd]# cat buildkitd-deployment.yaml 
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: buildkitd
  name: buildkitd
  namespace: cicd
spec:
  replicas: 1
  selector:
    matchLabels:
      app: buildkitd
  template:
    metadata:
      labels:
        app: buildkitd
    spec:
      containers:
        - name: buildkitd
          # image: moby/buildkit:master-rootless
          image: harbor.local.com/cicd/buildkit:master-rootless
          args:
            - --addr
            - tcp://0.0.0.0:1234
            - --addr
            - unix:///run/user/1000/buildkit/buildkitd.sock
            - --config
            - /etc/buildkitd/buildkitd.toml
          resources:
            requests:
              memory: "1Gi"
              cpu: "1"
            limits:
              memory: "4Gi"
              cpu: "4"
          readinessProbe:
            exec:
              command:
                - buildctl
                - debug
                - workers
          livenessProbe:
            exec:
              command:
                - buildctl
                - debug
                - workers
          securityContext:
            privileged: true
          ports:
            - containerPort: 1234
          volumeMounts:
            - mountPath: /etc/buildkitd
              name: config
      volumes:
        - name: config
          configMap:
            name: buildkitd-config
[root@tiaoban buildkitd]# cat buildkitd-svc.yaml 
apiVersion: v1
kind: Service
metadata:
  labels:
    app: buildkitd
  name: buildkitd
  namespace: cicd
spec:
  ports:
    - port: 1234
      protocol: TCP
  selector:
    app: buildkitd
```

# 使用k8s runner
## 配置 gitlab 环境变量
在 Group——>Your Group——>Settings——>CI/CD——>Variables 中填入相关环境变量

这些环境变量可以在该群组下的所有项目的 `.gitlab-ci.yml` 文件中使用。

![](images/img_331.png)

## 配置Pipeline 文件
下例为springboot项目部署的 .gitlab-ci.yml 演示，对该文件有以下几点需要说明：

+ 每个 stage 都会选择一个 runner 来执行，这意味着可以根据 stage 的不同，选择具有特定功能的 runner
+ 在 kubernetes executor 模式中，每一个 stage，runner 都会使用 k8s api 在指定的命名空间中创建一个专用于 pipline 的临时 Pod，在这个 Pod 中执行完当前 stage 的所有 script，随后自动销毁
+ CI 过程中，可以简单的认为，runner 将当前 git 代码仓库整个拷贝到了容器当中，而工作目录则是项目的根目录，因此，如果有什么文件需要进行拷贝、修改、删除，请尤其注意这一点。

```yaml
default:
  cache: 
    paths: # 定义全局缓存路径
     - target/

variables: # 定义镜像名称
  IMAGE_NAME: harbor.local.com/devops/$CI_PROJECT_NAME:$CI_COMMIT_BRANCH-$CI_COMMIT_SHORT_SHA-$CI_PIPELINE_ID

stages:
  - build
  - deploy

mvn:
  stage: build
  image: harbor.local.com/cicd/maven:3.9.3 # 构建阶段使用指定的maven镜像
  tags: # 在标签为k8s的runner中运行
    - k8s
  script:
    - mvn clean package # 编译打包

images: 
  stage: build
  tags: # 在标签为k8s的runner中运行
    - k8s
  script:
    - "nerdctl build --buildkit-host tcp://buildkitd.cicd.svc:1234 -t $IMAGE_NAME ." # 构建镜像
    - nerdctl images
    - "nerdctl login --insecure-registry harbor.local.com -u admin -p $HARBOR_PASSWORD" # 登录harbor
    - "nerdctl push $IMAGE_NAME --insecure-registry" # 上传镜像
    - "nerdctl rmi -f $IMAGE_NAME " # 删除镜像

deploy:
  stage: deploy
  tags: # 在标签为k8s的runner中运行
    - k8s
  script:
    - kubectl get node # 查看k8s节点信息
```

当做好这一切的工作之后，就可以在 gitlab 上运行流水线了，如下图所示：

## 验证
查看流水线状态

![](images/img_332.png)

查看deploy日志

![](images/img_333.png)



---

<a id="172997707"></a>

## Gitlab工具链集成 - Gitlab与k8s集成(agent方式)

# agent方案介绍
## 为什么不推荐证书方式连接
1. 依赖于对 Kubernetes API 的直接访问。容易因暴露kubernetes api而导致高风险，尤其是saas而不是自建的用户。
2. 集成中最有价值的功能需要提升权限，通常需要您授予 GitLab 集群管理员权限。同时，不需要这些权限的功能不能通过更有限的访问来限制。这意味着您必须授予对一个相当简单的功能的完全访问权限，这可能会成为一种隐患。
3. 基于pull的部署开始普及，gitlab需要增强这方面的能力

## gitlab agent优势
+ 安全——可以使用常规 Kubernetes RBAC 规则配置代理，从而保持对集群的安全访问
+ 可靠性——通过代码配置您的集群
+ 可扩展性——扩展到多个环境仅需配置多个config.yaml
+ 速度——支持基于pull，支持现代 GitOps 方法
+ 功能性——可以将容器网络安全策略警报和容器扫描结果集成显示到 GitLab
+ 延续性——同样支持基于push，使现有的 GitLab CI/CD 工作流保持正常运行

## 与runner区别
+ Kubernetes Agent 主要用于集群管理和 GitOps 工作流，适合需要集中管理和安全连接的 Kubernetes 集群。
+ Kubernetes Runner 主要用于执行 CI/CD 作业，适合需要在 Kubernetes 集群中运行大量 CI/CD 作业的开发团队

# 安装部署agent
参考文档：[https://docs.gitlab.com/ee/user/clusters/agent/](https://docs.gitlab.com/ee/user/clusters/agent/)

## 创建agent配置文件
在GitLab 仓库中，创建一个名为 .gitlab/agents/devops/config.yaml 的文件，文件内容如下：

![](images/img_334.png)

```yaml
gitops:
  manifest_projects:
  - id: "devops/k8s-agent"
    paths:
    - glob: '/**/*.{yaml,yml,json}'
```

## 创建资源清单
![](images/img_335.png)

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp1
  namespace: dev
spec:
  selector:
    matchLabels:
      app: myapp1
  template:
    metadata:
      labels:
        app: myapp1
    spec:
      containers:
      - name: myapp1
        image: ikubernetes/myapp:v1
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: myapp1
  namespace: dev
spec:
  type: ClusterIP
  selector:
    app: myapp1
  ports:
  - port: 80
    targetPort: 80
```

## 生成agent token
在项目——>运维——>Kubernetes集群，注册agent，生成token。

![](images/img_336.png)

## 安装agent
```bash
[root@tiaoban ~]# helm repo add gitlab https://charts.gitlab.io
[root@tiaoban ~]# helm repo update
[root@tiaoban ~]# helm upgrade --install devops gitlab/gitlab-agent \
    --namespace gitlab-agent-devops \
    --create-namespace \
    --set image.tag=v17.0.1 \
    --set replicas=1 \
    --set config.token=glagent-uMALA8woD31LynFAtMYU31XhXnL4drQwZzzECC2Jy3PC2Rqk2g \
    --set config.kasAddress=ws://gitlab.local.com/-/kubernetes-agent/
Release "devops" does not exist. Installing it now.
NAME: devops
LAST DEPLOYED: Mon Jun 10 11:27:04 2024
NAMESPACE: gitlab-agent-devops
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
Thank you for installing gitlab-agent.

Your release is named devops.

## Changelog

### 1.17.0

- The default replica count has been increased from `1` to `2` to allow a zero-downtime upgrade experience.
  You may use `--set replicas=1` to restore the old default behavior.
```

## 查看agent状态
查看pod状态

```bash
[root@tiaoban ~]# kubectl get pod -n gitlab-agent-devops 
NAME                                     READY   STATUS    RESTARTS   AGE
devops-gitlab-agent-v2-84d4648d8-9wcfl   1/1     Running   0          49s
```

查看集群连接状态

![](images/img_337.png)

## 查看自动部署的资源信息
```yaml
[root@tiaoban ~]# kubectl get all -n dev
NAME                         READY   STATUS    RESTARTS   AGE
pod/myapp1-f486545bd-zxng2   1/1     Running   0          63s

NAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
service/myapp1   ClusterIP   10.97.134.217   <none>        80/TCP    63s

NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/myapp1   1/1     1            1           63s

NAME                               DESIRED   CURRENT   READY   AGE
replicaset.apps/myapp1-f486545bd   1         1         1       63s
```

## 


---

<a id="173583055"></a>

## Gitlab工具链集成 - Gitlab与Jmeter集成

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

![](images/img_338.png)

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
![](images/img_339.png)

添加hosts文件后访问测试

![](images/img_340.png)



---

<a id="173068275"></a>

## Gitlab工具链集成 - Gitlab与Email集成

# 配置邮件通知
## 修改Gitlab配置
编辑/etc/gitlab/gitlab.rb文件开启gitlab email。这里以QQ邮箱为例，参考文档：[https://docs.gitlab.com/omnibus/settings/smtp.html](https://docs.gitlab.com/omnibus/settings/smtp.html)

```bash
[root@tiaoban ~]# kubectl exec -it -n cicd gitlab-b5cb5f947-q8xkv -- bash
root@gitlab-b5cb5f947-q8xkv:/# vi /etc/gitlab/gitlab.rb
gitlab_rails['smtp_enable'] = true        
gitlab_rails['smtp_address'] = "smtp.qq.com"                             
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "cuiliangblog@qq.com"
gitlab_rails['smtp_password'] = "XXXXXX"
gitlab_rails['smtp_domain'] = "smtp.qq.com"          
gitlab_rails['smtp_authentication'] = "login"                                                          
gitlab_rails['smtp_enable_starttls_auto'] = false
gitlab_rails['smtp_tls'] = true                                              
gitlab_rails['smtp_pool'] = false
                                                                                  
gitlab_rails['gitlab_email_enabled'] = true                                                                                   
gitlab_rails['gitlab_email_from'] = 'cuiliangblog@qq.com'                          
gitlab_rails['gitlab_email_display_name'] = 'Gitlab' 
```

## 重载配置
```bash
root@gitlab-b5cb5f947-q8xkv:/# gitlab-ctl reconfigure
root@gitlab-b5cb5f947-q8xkv:/# gitlab-ctl restart
```

# 使用邮件通知
## 登录控制台发送测试邮件
```bash
root@gitlab-b5cb5f947-q8xkv:/# gitlab-rails console
--------------------------------------------------------------------------------
 Ruby:         ruby 3.1.5p253 (2024-04-023 revision 1945f8dc0e) [x86_64-linux]
 GitLab:       17.0.1 (bd824d1abb2) FOSS
 GitLab Shell: 14.35.0
 PostgreSQL:   14.11
------------------------------------------------------------[ booted in 42.55s ]
Loading production environment (Rails 7.0.8.1)
irb(main):001:0> Notify.test_email('cuiliang0302@qq.com', 'test email', 'gitlab email test').deliver_now
Delivered mail 66666810ce6ca_169a2ee062342@gitlab-b5cb5f947-q8xkv.mail (1193.6ms)
=> #<Mail::Message:1514680, Multipart: false, Headers: <Date: Mon, 10 Jun 2024 02:42:24 +0000>, <From: Gitlab <cuiliangblog@qq.com>>, <Reply-To: Gitlab <noreply@gitlab.local.com>>, <To: cuiliang0302@qq.com>, <Message-ID: <66666810ce6ca_169a2ee062342@gitlab-b5cb5f947-q8xkv.mail>>, <Subject: test email>, <Mime-Version: 1.0>, <Content-Type: text/html; charset=UTF-8>, <Content-Transfer-Encoding: 7bit>, <Auto-Submitted: auto-generated>, <X-Auto-Response-Suppress: All>>
```

![](images/img_341.png)

## 流水线配置邮件通知
进入项目——>配置——>集成——>流水线状态电子邮件

![](images/img_342.png)

配置邮件通知人、通知条件

![](images/img_343.png)

运行流水线测试，查看邮件内容。

![](images/img_344.png)





---

<a id="177847499"></a>

## ArgoCD与GitOps入门 - GitOps

# 从敏捷开发到CI/CD
## 什么是敏捷开发
敏捷开发（Agile Development） 是一种软件开发方法论，核心思想是：

快速迭代、小步快跑、持续反馈、快速响应变化。

### 核心理念
迭代式开发：把项目拆分成多个短周期（通常 1～2 周）的迭代，每次迭代都产出一个可运行的版本。

持续交付价值：每次迭代都要能交付能用的功能，尽早让用户看到结果。

快速响应变化：如果用户需求变了，团队能快速调整方向。

团队协作：强调跨职能团队的紧密协作（开发、测试、运维、产品、设计）。

### 举例说明
传统开发像是盖房子：

先打地基 → 起框架 → 装修 → 交付，一次性交房。

敏捷开发像是造车：

先造一个能滑动的滑板 → 再加个把手变成滑板车 → 再加引擎变摩托 → 最后变汽车。

每次都能“跑起来”，并且随时根据反馈调整方向。

## 传统开发对比敏捷开发
| 项目 | 传统开发 | 敏捷开发 |
| --- | --- | --- |
| 发布周期 | 几个月甚至半年 | 每天 / 每周 |
| 集成频率 | 阶段性 | 持续集成（多次/天） |
| 部署方式 | 手工部署 | 自动化流水线 |
| 风险 | 一次上线风险大 | 小步迭代风险可控 |
| 用户反馈 | 上线后才知道 | 每个版本都能收集反馈 |
| 工具 | SVN、FTP | Git、Jenkins/GitLab CI、ArgoCD、Harbor、K8s |


## 为什么需要 CI/CD
CI/CD 是敏捷开发落地的“自动化基础设施”，它的全称是：

CI（持续集成，Continuous Integration）

CD（持续交付/部署，Continuous Delivery / Continuous Deployment）

### CI：持续集成
开发者频繁地（每天多次）把代码合并到主分支，并通过自动化流程进行构建、测试和质量检查。

目的

尽早发现集成问题

保证代码主分支始终可构建、可运行

减少 “集成地狱”（最后才合并代码时各种冲突）

举例

每次提交代码后，CI 流水线自动执行：

编译代码

运行单元测试

扫描代码质量（如 SonarQube）

构建镜像（Docker）

推送到镜像仓库（Harbor）

### CD：持续交付 / 部署
在 CI 的基础上，自动化地：

把通过测试的构建包自动部署到测试环境、预发布环境，甚至生产环境。

持续交付（Continuous Delivery）

自动化部署到测试/预发布环境，但上线前需要人工确认。

持续部署（Continuous Deployment）

连生产环境都自动化发布，无需人工干预。

举例

CI 构建完镜像后 → CD 自动部署到 Kubernetes → ArgoCD 监控 Git 仓库变更 → 自动更新生产服务。

## CICD 优点
### 快速交付
CI/CD 自动化流程可以使软件交付过程更快、更频繁，减少了手动操作和人工干预的时间。这样可以更快地将新功能、修复和改进的代码交付给用户，满足市场需求并保持竞争优势。

### 提高质量
持续集成通过频繁地集成和构建代码，并进行自动化测试和静态代码分析，有助于发现和解决问题。通过尽早发现和修复缺陷，可以提高软件的质量和稳定性。

### 自动化部署
持续交付将部署过程自动化，从而减少了手动部署的错误和风险。通过自动化部署流程，可以确保软件在不同环境中的一致性，并减少了部署时间和工作量。

### 可靠性和可重复性
CI/CD 强调自动化和标准化的流程，使软件交付过程变得可靠和可重复。每次构建、测试和部署都是基于相同的流程和环境，减少了人为因素的影响，提高了软件交付的一致性和可靠性。

### 团队协作与反馈
CI/CD 促进了团队成员之间的协作和沟通。通过频繁地集成和交付，团队成员可以及时了解彼此的工作进展和变更，减少代码冲突和集成问题，并能够更好地合作解决出现的问题。

### 可追溯性和回滚能力
由于 CI/CD 自动化流程的记录和版本控制，可以轻松追踪每个构建和部署的结果。这样，在出现问题时可以快速定位和回滚到之前的可用版本，减少了故障修复时间和影响范围。总而言之，CI/CD 提供了一种高效、可靠和可持续的软件交付方法。它可以加速软件开发和交付的速度，提高软件质量和可靠性，并促进团队之间的协作和反馈。通过使用 CI/CD，组织可以更好地适应市场需求，降低软件交付的风险，并实现持续创新和改进。

# 从CI/CD到DevOps
## DevOps 是理念和文化
DevOps（Development + Operations） 是一种理念、文化和一整套实践方法，

目标是让 “开发（Dev）” 和 “运维（Ops）” 紧密合作，从而实现：

更快地交付软件（高频发布）

更稳定地运行系统（高可用）

更及时地获取反馈（持续改进）

核心目标：持续交付价值，让软件开发 → 部署 → 运维成为一个流畅的闭环。

![](images/img_345.png)

## CI/CD 是工具与流程
CI/CD（持续集成 / 持续交付 / 持续部署） 是 DevOps 理念的技术支撑与自动化实践。它可使得：

代码提交 → 自动构建 → 自动测试 → 自动部署

全程无人干预，标准化、自动化、可回溯。

## 两者对比
| 对比角度 | DevOps | CI/CD |
| --- | --- | --- |
| 本质 | 一种文化、理念、方法论 | 一组自动化技术实践 |
| 目标 | 打通开发与运维，提升交付速度与质量 | 实现自动构建、测试、部署 |
| 作用范围 | 覆盖整个软件生命周期（开发、测试、运维、监控） | 主要聚焦在代码到部署这段流程 |
| 是否需要工具 | 需要（CI/CD、监控、日志、IaC、协作等） | 本身就是工具链 |
| 举例 | GitOps、容器化、监控告警、自动化测试 | Jenkins、GitLab CI、GitHub Actions、ArgoCD |


# 从DevOps到GitOps
## DevOps 的挑战
| 挑战 | 问题描述 |
| --- | --- |
| 环境漂移（Drift） | 实际部署环境与配置仓库不一致（改完配置忘了同步） |
| 部署不可追溯 | 部署是通过脚本触发的，版本、变更记录分散 |
| 人为操作风险 | CI/CD 流水线脚本复杂，运维脚本容易出错 |
| 环境一致性难 | 不同集群、不同环境（dev/test/prod）同步困难 |
| 回滚不方便 | 想回到上一个状态，需要手动操作 |


## GitOps 前提
### 不可变基础设施
不可变基础设施（Immutable Infrastructure）：不可变基础设施是由Chad Fowler于 2013 年提出的一个构想：在这种模式中任何基础设施的实例一旦创建之后便成为一种只读状态，不可对其进行任何更改。如果需要修改或升级某些实例，唯一的方式就是创建一批新的实例以替换。 传统可变基础设施是将应用打包好部署在不同的机器上，需要确保环境的统一，并通过修改、补丁的方式持续更新应用，随着时间的推移很难再确保所有的机器处于相同的状态；而不可变基础架构，是将整个机器环境打包成一个单一的不可变单元，这个单元包含了整个环境和应用本身，以解决传统可变基础架构的问题。

### 基础架构即代码
基础架构即代码（IaC）：使用代码（而非手动流程）来定义基础设施，研发人员可以像对待应用软件一样对待基础设施，例如：

+ 可以创建包含基础架构规范的声明式配置文件，从而便于编辑和分发配置。
+ 可以确保每次配置的环境都完全相同。
+ 可以进行版本控制，所有的变更都会被记录下来，方便溯源。
+ 可以将基础设施划分为若干个模块化组件，并通过自动化以不同的方式进行组合。

通过使用容器技术可以实现基础设施的不变性，而Kubernetes的声明性容器编排可以实现基础架构即代码。GitOps基于不可变基础设施和IaC，结合Git进行应用系统整个配置文件集版本控制。

目前主流的 IaC 工具是<font style="color:rgb(25, 27, 31);">混合云编排工具Terraform。</font>

## 什么是GitOps
GitOps = IaC + Git + CI/CD，即基于 IaC 的版本化 CI/CD。它的核心是使用 Git 仓库来管理基础设施和应用的配置，并且以 Git 仓库作为基础设施和应用的单一事实来源，你从其他地方修改配置（比如手动改线上配置）一概不予通过。

在 GitOps 实践中，我们需要将软件设施定义在 Git 仓库中进行管理。其中的软件设施，包括 IaaS、Kubernetes 这样的基础设施，也包括应用本身。每个人都可以通过提交 Pull Request 来修改软件设施，然后通过自动化的程序执行这种修改。借助于 GitOps，如果集群的实际状态与 Git 仓库中定义的期望状态不匹配，Kubernetes reconcilers 会根据期望状态来调整当前的状态，最终使实际状态符合期望状态。

这种方式使得每个人都可以专注于开发新的功能，而不用陷入繁琐的安装、变更、迁移等运维工作。同时，整个过程具有完整的操作记录和权限审批管理。

![](images/img_346.png)

## GitOps对比DevOps
| 对比项 | 传统 CI/CD | GitOps |
| --- | --- | --- |
| 配置来源 | 流水线脚本（Jenkins/GitLab CI） | Git 仓库（声明式 YAML） |
| 部署触发 | CI/CD 工具主动推送（Push） | GitOps 控制器自动拉取（Pull） |
| 部署方式 | 命令式（执行脚本） | 声明式（对比状态） |
| 状态一致性 | 容易漂移 | 自动回收、自动对齐 |
| 回滚 | 需要手动操作流水线 | 直接回滚 Git 版本 |
| 审计记录 | 部分在 CI/CD 系统 | 所有变更在 Git 中 |
| 常见工具 | Jenkins、GitLab CI | ArgoCD、FluxCD |
| 核心理念 | 自动化构建与部署 | 以 Git 为唯一真相源的自动化运维 |


## GitOps 的设计哲学
想要使用 GitOps 来管理你的基础设施和应用，需要践行以下几个原则：

### 声明式
必须通过声明式来描述系统的期望状态。例如 Kubernetes，众多现代云原生工具都是声明式的，Kubernetes 只是其中的一种。

### 版本控制/不可变
因为所有的状态声明都存储在 Git 仓库中，并且把 Git 仓库作为单一事实来源，那么所有的操作都是从 Git 仓库里驱动的，而且保留了完整的版本历史，方便回滚。有了 Git 优秀的安全保障，也可以使用 SSH 密钥来签署 commits，对代码的作者和出处实施强有力的安全保障。

### 自动应用变更
Git 仓库中声明的期望状态发生了任何变更，都可以立即应用到系统中，而且不需要安装配置额外工具（比如 kubectl），也不需要配置 Kubernetes 的认证授权。

### 持续的 Reconciliation
Reconciliation 其实最早是 Kubernetes 里的一个概念，表示的是确保系统的实际状态与期望状态一致的过程。具体的实现方式是在目标环境中安装一个 agent，一旦实际状态与期望状态不匹配，agent 就会进行自动修复。这里的修复比 Kubernetes 的故障自愈更高级，即使是手动修改了集群的编排清单，集群也会被恢复到 Git 仓库中的清单所描述的状态。

## GitOps 的工作流
1. 团队中的任何一个成员都可以 Fork 仓库对配置进行更改，然后提交 Pull Request。
2. 接下来会运行 CI 流水线，一般会做这么几件事情：验证配置文件、执行自动化测试、检测代码的复杂性、构建 OCI 镜像、将镜像推送到镜像仓库等等。
3. CI 流水线运行完成后，团队中拥有合并代码权限的人将会将这个 Pull Request 合并到主分支中 。一般拥有这个权限的都是研发人员、安全专家或者高级运维工程师。
4. 运行 CD 流水线，将变更应用到目标系统中（比如 Kubernetes 集群或者 AWS） 。

整个过程完全自动化且透明，通过多人协作和自动化测试来保证了基础设施声明配置的健壮性。而传统的模式是其中一个工程师在自己的电脑上操作这一切，其他人不知道发生了什么，也无法对其操作进行 Review。

## GitOps的工作模式
### Push 模式
目前大多数 CI/CD 工具都使用基于 Push 的部署模式，例如 Jenkins、CircleCI 等。这种模式一般都会在 CI 流水线运行完成后执行一个命令（比如 kubectl）将应用部署到目标环境中。

这种 CD 模式的缺陷很明显：

+ 需要安装配置额外工具（比如 kubectl）；
+ 需要 Kubernetes 对其进行授权；
+ 需要云平台授权；
+ 无法感知部署状态。也就无法感知期望状态与实际状态的偏差，需要借助额外的方案来保障一致性。

Kubernetes 集群或者云平台对 CI 系统的授权凭证在集群或云平台的信任域之外，不受集群或云平台的安全策略保护，因此 CI 系统很容易被当成非法攻击的载体。

### Pull 模式
Pull 模式会在目标环境中安装一个 Agent，例如在 Kubernetes 集群中就靠 Operator 来充当这个 Agent。Operator 会周期性地监控目标环境的实际状态，并与 Git 仓库中的期望状态进行比较，如果实际状态不符合期望状态，Operator 就会更新基础设施的实际状态以匹配期望状态。  
只有 Git 的变更可以作为期望状态的唯一来源，除此之外，任何人都不可以对集群进行任何更改，即使你修改了，也会被 Operator 还原为期望状态，这也就是传说中的不可变基础设施。

## GitOps 的优势
一般 GitOps 首选的都是基于 Pull 的部署模式，因为这种模式有很多不可替代的优势。

### 更强大的安全保障
使用 GitOps 不需要任何 Kubernetes 或者云平台的凭证来执行部署，Kubernetes 集群内的 Argo CD 或者 Flux CD 只需要访问 Git 仓库，并通过 Pull 模式来更新即可。

另一方面，Git 由用于跟踪和管理代码变更的强大密码学支持，拥有对变更进行签名以证明作者身份和来源的能力，这是保障集群安全的关键。

### Git 作为事实的唯一真实来源
因为所有的应用包括基础设施的声明式配置都保存在 Git 中，并把 Git 作为应用系统的唯一事实来源，因此可以利用 Git 的强大功能操作所有东西，例如版本控制、历史记录、审计和回滚等等，无需使用 kubectl 这样的工具来操作。

### 提高生产力
Git 也是开发人员非常熟悉的工具，通过 Git 不断迭代，可以提高生产率，加快开发和部署速度，更快地推出新产品，同时提高系统的稳定性和可靠性。

### 更容易合规的审计
使用 GitOps 的基础设施可以像任何软件项目一样使用 Git 来管理，所以同样可以对其进行质量审计。当有人需要对基础设施进行更改时，会创建一个 Pull Request，等相关人员对其进行 Code Review 之后，更改才可以应用到系统中。



---

<a id="174701863"></a>

## ArgoCD与GitOps入门 - ArgoCD简介

# ArgoCD简介
Argo CD 是一个为 Kubernetes 而生的，遵循声明式 GitOps 理念的持续部署工具。Argo CD 可在 Git 存储库更改时自动同步和部署应用程序。

Argo CD 遵循 GitOps 模式，使用 Git 仓库作为定义所需应用程序状态的真实来源，Argo CD 支持多种 Kubernetes 清单：

+ kustomize
+ helm charts
+ ksonnet applications
+ jsonnet files
+ Plain directory of YAML/json manifests
+ Any custom config management tool configured as a config management plugin

Argo CD 可在指定的目标环境中自动部署所需的应用程序状态，应用程序部署可以在 Git 提交时跟踪对分支、标签的更新，或固定到清单的指定版本。

# 架构
![](images/img_347.png)

Argo CD 是通过一个 Kubernetes 控制器来实现的，它持续 watch 正在运行的应用程序并将当前的实时状态与所需的目标状态（ Git 存储库中指定的）进行比较。已经部署的应用程序的实际状态与目标状态有差异，则被认为是 `OutOfSync` 状态，Argo CD 会报告显示这些差异，同时提供工具来自动或手动将状态同步到期望的目标状态。在 Git 仓库中对期望目标状态所做的任何修改都可以自动应用反馈到指定的目标环境中去。

# 架构组件
## API 服务
API 服务是一个 gRPC/REST 服务，它暴露了 Web UI、CLI 和 CI/CD 系统使用的接口，主要有以下几个功能：

+ 应用程序管理和状态报告
+ 执行应用程序操作（例如同步、回滚、用户定义的操作）
+ 存储仓库和集群凭据管理（存储为 K8S Secrets 对象）
+ 认证和授权给外部身份提供者
+ RBAC
+ Git webhook 事件的侦听器/转发器

## 仓库服务
存储仓库服务是一个内部服务，负责维护保存应用程序清单 Git 仓库的本地缓存。当提供以下输入时，它负责生成并返回 Kubernetes 清单：

+ 存储 URL
+ revision 版本（commit、tag、branch）
+ 应用路径
+ 模板配置：参数、ksonnet 环境、helm values.yaml 等

## 应用控制器
应用控制器是一个 Kubernetes 控制器，它持续 watch 正在运行的应用程序并将当前的实时状态与所期望的目标状态（ repo 中指定的）进行比较。它检测应用程序的 `OutOfSync` 状态，并采取一些措施来同步状态，它负责调用任何用户定义的生命周期事件的钩子（PreSync、Sync、PostSync）。

# <font style="color:rgb(28, 30, 33);">核心概念</font>
+ Application：应用，一组由资源清单定义的 Kubernetes 资源，这是一个 CRD 资源对象
+ Application source type：用来构建应用的工具
+ Target state：目标状态，指应用程序所需的期望状态，由 Git 存储库中的文件表示
+ Live state：实时状态，指应用程序实时的状态，比如部署了哪些 Pods 等真实状态
+ Sync status：同步状态表示实时状态是否与目标状态一致，部署的应用是否与 Git 所描述的一样？
+ Sync：同步指将应用程序迁移到其目标状态的过程，比如通过对 Kubernetes 集群应用变更
+ Sync operation status：同步操作状态指的是同步是否成功
+ Refresh：刷新是指将 Git 中的最新代码与实时状态进行比较，弄清楚有什么不同
+ Health：应用程序的健康状况，它是否正常运行？能否为请求提供服务？
+ Tool：工具指从文件目录创建清单的工具，例如 Kustomize 或 Ksonnet 等
+ Configuration management tool：配置管理工具
+ Configuration management plugin：配置管理插件



---

<a id="119667444"></a>

## ArgoCD与GitOps入门 - ArgoCD部署

# 安装Argo CD
## 创建ns
```bash
[root@k8s-master ~]# kubectl create namespace argocd
```

## 安装argocd
```bash
[root@k8s-master ~]# kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

注意事项：默认下载的是最新版argocd，安装argocd时，务必参阅支持的k8s版本列表，否则会出现安装失败pod运行异常的情况。

参考文档：[https://argo-cd.readthedocs.io/en/stable/operator-manual/installation/#supported-versions](https://argo-cd.readthedocs.io/en/stable/operator-manual/installation/#supported-versions)

由于k8s集群版本为1.30.13。因此安装的argo cd版本为 3.1。argocd 分为 HA 和非 HA 版两种方式安装，以非 HA 为例，yaml文件地址：https://github.com/argoproj/argo-cd/blob/v3.1.9/manifests/install.yaml

其他版本安装可参考文档：[https://github.com/argoproj/argo-cd/releases/tag/v3.1.9](https://github.com/argoproj/argo-cd/releases/tag/v3.1.9)

<font style="color:rgb(18, 18, 18);">执行成功后会在</font><font style="color:rgb(18, 18, 18);background-color:rgb(246, 246, 246);">argocd</font><font style="color:rgb(18, 18, 18);">的namespace下创建如下资源。</font>

```bash
[root@tiaoban ~]# kubectl get all -n argocd
NAME                                                    READY   STATUS    RESTARTS   AGE
pod/argocd-application-controller-0                     1/1     Running   0          32s
pod/argocd-applicationset-controller-695985754c-vvww7   1/1     Running   0          32s
pod/argocd-dex-server-b566c57d4-9hrgt                   1/1     Running   0          32s
pod/argocd-notifications-controller-69fd67f96-2tnh2     1/1     Running   0          32s
pod/argocd-redis-c476db8bf-txbhj                        1/1     Running   0          32s
pod/argocd-repo-server-7f4945b77c-pmnzf                 1/1     Running   0          32s
pod/argocd-server-8596cd4c-t7fth                        1/1     Running   0          32s

NAME                                              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
service/argocd-applicationset-controller          ClusterIP   10.98.113.109    <none>        7000/TCP,8080/TCP            33s
service/argocd-dex-server                         ClusterIP   10.107.128.17    <none>        5556/TCP,5557/TCP,5558/TCP   33s
service/argocd-metrics                            ClusterIP   10.98.160.14     <none>        8082/TCP                     33s
service/argocd-notifications-controller-metrics   ClusterIP   10.106.67.83     <none>        9001/TCP                     33s
service/argocd-redis                              ClusterIP   10.102.130.38    <none>        6379/TCP                     33s
service/argocd-repo-server                        ClusterIP   10.106.149.119   <none>        8081/TCP,8084/TCP            33s
service/argocd-server                             ClusterIP   10.100.238.93    <none>        80/TCP,443/TCP               32s
service/argocd-server-metrics                     ClusterIP   10.99.24.19      <none>        8083/TCP                     32s

NAME                                               READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/argocd-applicationset-controller   1/1     1            1           32s
deployment.apps/argocd-dex-server                  1/1     1            1           32s
deployment.apps/argocd-notifications-controller    1/1     1            1           32s
deployment.apps/argocd-redis                       1/1     1            1           32s
deployment.apps/argocd-repo-server                 1/1     1            1           32s
deployment.apps/argocd-server                      1/1     1            1           32s

NAME                                                          DESIRED   CURRENT   READY   AGE
replicaset.apps/argocd-applicationset-controller-695985754c   1         1         1       32s
replicaset.apps/argocd-dex-server-b566c57d4                   1         1         1       32s
replicaset.apps/argocd-notifications-controller-69fd67f96     1         1         1       32s
replicaset.apps/argocd-redis-c476db8bf                        1         1         1       32s
replicaset.apps/argocd-repo-server-7f4945b77c                 1         1         1       32s
replicaset.apps/argocd-server-8596cd4c                        1         1         1       32s

NAME                                             READY   AGE
statefulset.apps/argocd-application-controller   1/1     32s
```

<font style="color:rgb(18, 18, 18);">至此，argocd 部署完成，接下来访问Argo server，我们可以通过以下两种方式访问：</font>

+ <font style="color:rgb(18, 18, 18);">通过web ui</font>
+ <font style="color:rgb(18, 18, 18);">使用argocd 客户端工具</font>

# web访问argocd
## 访问web ui(NodePort方式)
通过kubectl edit -n argocd svc argocd-server将service的type类型从ClusterIP改为NodePort。改完后通过以下命令查看端口：

```bash
[root@k8s-master ~]# kubectl get svc -n argocd
NAME                                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
argocd-applicationset-controller          ClusterIP   10.107.129.45    <none>        7000/TCP,8080/TCP            15h
argocd-dex-server                         ClusterIP   10.101.106.223   <none>        5556/TCP,5557/TCP,5558/TCP   15h
argocd-metrics                            ClusterIP   10.111.3.69      <none>        8082/TCP                     15h
argocd-notifications-controller-metrics   ClusterIP   10.102.91.50     <none>        9001/TCP                     15h
argocd-redis                              ClusterIP   10.106.114.155   <none>        6379/TCP                     15h
argocd-repo-server                        ClusterIP   10.96.39.69      <none>        8081/TCP,8084/TCP            15h
argocd-server                             NodePort    10.108.206.123   <none>        80:30357/TCP,443:32640/TCP   15h
argocd-server-metrics                     ClusterIP   10.110.61.94     <none>        8083/TCP                     15h
```

访问[https://192.168.10.10:32640/](https://192.168.10.10:32640/)

![](images/img_348.png)

## 获取admin密码
用户名为<font style="color:rgb(18, 18, 18);">admin，密码通过以下方式获取。</font>

```bash
[root@master1 argocd]# kubectl get secrets argocd-initial-admin-secret -n argocd -o jsonpath="{.data.password}" | base64 -d
oZoCs1ZVltSplhP5
```

## 访问web ui(ingress方式)
访问web ui必须使用https方式访问，以traefik为例，创建ingressroute资源

```yaml
# 创建证书文件
[root@k8s-master argo]# openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout tls.key -out tls.crt -subj "/CN=argocd.local.com"
# 创建secret资源
[root@k8s-master argo]# kubectl create secret tls ingress-tls --cert=tls.crt --key=tls.key -n argocd
secret/ingress-tls created
# 创建ingress资源
[root@k8s-master argo]# cat ingress.yaml 
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: redirect-https-middleware
  namespace: argocd
spec:
  redirectScheme:
    scheme: https
---
apiVersion: traefik.io/v1alpha1
kind: ServersTransport
metadata:
  name: argocd-transport
  namespace: argocd
spec:
  serverName: "argocd.cuiliangblog.cn"
  insecureSkipVerify: true
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: argocd
  namespace: argocd
spec:
  entryPoints:
    - web
    - websecure 
  tls:
    secretName: ingress-tls                
  routes:
  - match: Host(`argocd.cuiliangblog.cn`)
    kind: Rule
    services:
    - name: argocd-server
      port: 443
      serversTransport: argocd-transport
    middlewares:
    - name: redirect-https-middleware
[root@k8s-master argo]# kubectl apply -f ingress.yaml 
ingressroute.traefik.containo.us/argocd create
```

添加hosts解析记录 `192.168.10.10 argocd.cuiliangblog.cn`

![](images/img_349.png)

# <font style="color:rgb(18, 18, 18);">客户端工具访问argocd</font>
## 下载argocd客户端工具
获取下载包地址

![](images/img_350.png)

或者直接gitlab下载，地址为https://github.com/argoproj/argo-cd/releases/tag/v3.1.9

```bash
[root@tiaoban ~]# wget https://argocd.cuiliangblog.cn/download/argocd-linux-amd64
[root@tiaoban ~]# mv argocd-linux-amd64 /usr/local/bin/argocd
[root@tiaoban ~]# chmod u+x /usr/local/bin/argocd
[root@tiaoban ~]# argocd version
argocd: v3.1.9+8665140
  BuildDate: 2025-10-17T22:07:41Z
  GitCommit: 8665140f96f6b238a20e578dba7f9aef91ddac51
  GitTreeState: clean
  GoVersion: go1.24.6
  Compiler: gc
  Platform: linux/amd64
{"level":"fatal","msg":"Argo CD server address unspecified","time":"2025-10-22T16:35:30+08:00"}
```

## 客户端工具登录argocd
```bash
[root@tiaoban ~]# argocd login argocd.cuiliangblog.cn --username admin --password oZoCs1ZVltSplhP5
WARNING: server certificate had error: tls: failed to verify certificate: x509: certificate signed by unknown authority. Proceed insecurely (y/n)? y
{"level":"warning","msg":"Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web.","time":"2025-10-22T16:37:08+08:00"}
'admin:login' logged in successfully
Context 'argocd.cuiliangblog.cn' updated
```

## 更新admin密码
```bash
argocd account update-password --account admin --current-password oZoCs1ZVltSplhP5 --new-password '!QAZ2wsx'
{"level":"warning","msg":"Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web.","time":"2025-10-22T16:37:45+08:00"}
Password updated
Context 'argocd.cuiliangblog.cn' updated
```



---

<a id="119675638"></a>

## ArgoCD与GitOps入门 - ArgoCD快速体验

# gitlab仓库配置
创建一个名为Argo Demo的仓库，在manifests目录下仅包含应用的yaml文件，文件内容如下

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: ikubernetes/myapp:v1
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: myapp
spec:
  type: ClusterIP
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 80
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: myapp
spec:
  entryPoints:
  - web
  routes:
  - match: Host(`myapp.test.com`)
    kind: Rule
    services:
      - name: myapp 
        port: 80  
```

gitlab仓库内容如下：

![](images/img_351.png)

# argocd配置
## 添加仓库地址
<font style="color:rgb(18, 18, 18);">添加仓库地址，Settings → Repositories，点击 </font><font style="color:rgb(18, 18, 18);background-color:rgb(246, 246, 246);">CONNECT REPO</font><font style="color:rgb(18, 18, 18);"> 按钮添加仓库，填写以下信息</font>

![](images/img_352.png)

如果集群连接失败，检查argocd-repo-server 日志，是否可以正常访问 git 仓库，账号密码是否正确，是否有权限访问仓库。

验证通过后显示如下，点击创建应用。

![](images/img_353.png)

## 创建应用
填写以下内容

![](images/img_354.png)

![](images/img_355.png)

创建完后如下所示：

![](images/img_356.png)

# 访问验证
## 验证应用部署状态
查看k8s创建的资源信息，发现已经成功创建了对应的资源

```bash
[root@tiaoban ~]# kubectl get pod 
NAME                                               READY   STATUS    RESTARTS         AGE
myapp-68c8648d6d-54brv                             1/1     Running   0                62s
[root@tiaoban ~]# kubectl get svc
NAME         TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)    AGE
myapp        ClusterIP      10.97.189.71    <none>           80/TCP     70s
[root@tiaoban ~]# kubectl get ingressroute
NAME     AGE
myapp    78s
```

访问web页面验证

![](images/img_357.png)

## 版本更新
接下来模拟配置变更，将镜像版本从v1改为v2

![](images/img_358.png)

Argo CD默认每180秒同步一次，查看argocd信息，发现已经自动同步了yaml文件，并且正在进行发布

![](images/img_359.png)

访问web页面状态，发现已经完成了发布工作。

![](images/img_360.png)

此时整个应用关联关系如下

![](images/img_361.png)

## 版本回退
点击history and rollback即可看到整个应用的所有发布记录，并且可以选择指定版本进行回退操作。

![](images/img_362.png)

再次访问发现已经回退到v1版本

![](images/img_363.png)

# 


---

<a id="241614266"></a>

## ArgoCD与GitOps入门 - ArgoCD仓库管理

# 仓库管理介绍
Argo CD 的 “Repo 仓库管理（Repository Management）” 是 GitOps 工作流的核心之一 —— 它决定了 Argo CD 从哪里拉取应用配置（YAML/Helm/Kustomize 等），以及如何认证访问这些仓库。  

## 仓库类型
| 类型 | 示例 | 用途 |
| --- | --- | --- |
| **Git** | `https://github.com/org/repo.git` | 最常见，存放 K8s YAML、Kustomize、Helm Chart |
| **Helm 仓库** | `https://charts.bitnami.com/bitnami` | 直接拉取 Helm Chart 部署 |
| **OCI 仓库** | `oci://ghcr.io/org/chart` | Helm v3 支持的 OCI chart 仓库 |
| **HTTP 仓库** | `https://example.com/charts/` | Helm 兼容但非标准仓库 |
| **GPG 签名仓库** | 支持 GPG 校验 commit | 用于增强安全性 |


# 仓库配置
## git仓库配置（最常用）
三种认证方式适用场景与区别配置可参考文档：[https://www.cuiliangblog.cn/detail/section/127410630](https://www.cuiliangblog.cn/detail/section/127410630)，此处不再赘述。

## OCI仓库配置
上传 chart 到 harbor 仓库可参考文档：[https://www.cuiliangblog.cn/detail/section/241615859](https://www.cuiliangblog.cn/detail/section/241615859)，此处不再赘述。

查看 helm 仓库地址

![](images/img_364.png)

创建机器人账户

![](images/img_365.png)

创建 repo

![](images/img_366.png)

查看仓库状态

![](images/img_367.png)

## helm仓库配置
创建 helm 仓库

![](images/img_368.png)

查看仓库状态

![](images/img_369.png)

# Yaml 管理仓库
 ArgoCD 的 **GitOps 思路**就是通过 YAML 文件（Kubernetes CRD）来管理所有配置，包括仓库的创建。

## 查看已有仓库信息
```bash
# kubectl get secrets -n argocd | grep repo
repo-2111645630                    Opaque              4      13h
repo-3457470677                    Opaque              6      13h
repo-3513749900                    Opaque              6      118m
# kubectl get secrets -n argocd repo-3513749900 -o yaml
apiVersion: v1
data:
  name: ZGVtbw==
  password: IVFBWjJ3c3g=
  project: ZGV2b3Bz
  type: Z2l0
  url: aHR0cDovL2dpdGxhYi5jdWlsaWFuZ2Jsb2cuY24vZGV2b3BzL2FyZ28tZGVtby5naXQ=
  username: cm9vdA==
kind: Secret
metadata:
  annotations:
    managed-by: argocd.argoproj.io
  creationTimestamp: "2025-10-23T02:47:04Z"
  labels:
    argocd.argoproj.io/secret-type: repository
  name: repo-3513749900
  namespace: argocd
  resourceVersion: "1905558"
  uid: fe2a00d2-395d-4ce3-9e41-dff844606ab8
type: Opaque
```

## 创建仓库
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: repo-demo  # 资源名称
  namespace: argocd
  labels:
    argocd.argoproj.io/secret-type: repository
  annotations:
    managed-by: argocd.argoproj.io
stringData:
  name: repo-demo
  password: "!QAZ2wsx"
  project: devops
  type: git
  url: http://gitlab.cuilianglblog.cn/devops/argo-demo.git
  username: root
type: Opaque
```

# CLI 管理仓库
## 添加 Git 仓库
```bash
# 添加公共 Git 仓库（HTTPS）
argocd repo add https://github.com/username/repo.git

# 添加私有仓库 - 使用用户名/密码
argocd repo add https://github.com/username/repo.git \
  --username <username> \
  --password <password>

# 添加私有仓库 - 使用 SSH
argocd repo add git@github.com:username/repo.git \
  --ssh-private-key-path ~/.ssh/id_rsa

# 添加仓库并指定名称
argocd repo add https://github.com/username/repo.git \
  --name my-repo

# 添加 Git 仓库 - 使用 Personal Access Token (推荐)
argocd repo add https://github.com/username/repo.git \
  --username git \
  --password <github-token>

# GitLab 私有仓库
argocd repo add https://gitlab.com/username/repo.git \
  --username <username> \
  --password <gitlab-token>

# Gitee 仓库
argocd repo add https://gitee.com/username/repo.git \
  --username <username> \
  --password <token>

# 跳过 TLS 验证（自签名证书）
argocd repo add https://git.example.com/repo.git \
  --insecure-skip-server-verification \
  --username <username> \
  --password <password>
```

## 列出所有仓库
```bash
# 列出所有仓库
argocd repo list

# 使用 grpc-web
argocd repo list --grpc-web

# 输出为 JSON 格式
argocd repo list -o json

# 输出为 YAML 格式
argocd repo list -o yaml

# 显示更多信息
argocd repo list -o wide
```

## 查看仓库详情
```bash
# 查看特定仓库信息
argocd repo get <REPO_URL>

# 输出为 YAML
argocd repo get https://github.com/username/repo.git -o yaml
```

## 删除仓库
```bash
# 删除仓库
argocd repo rm <REPO_URL>
```





---

<a id="241622344"></a>

## ArgoCD与GitOps入门 - ArgoCD集群管理

# 功能介绍
ArgoCD 不仅能管理所在的 k8s 集群，还可以通过添加远程集群Kubeconfig/Token的方式实现管理多个集群，从而实现跨集群的应用部署和 GitOps 自动化。

# 添加集群
假设现在有两套集群，已经在k8s集群部署了gitlab和Argocd，现在需要添加k8s-test集群。

## 获取目标集群 kubeconfig
```bash
[root@k8s-test ~]# kubectl config view --minify --flatten > test.conf
```

## 使用 ArgoCD CLI 添加集群  
查看 context 信息，更多 context 操作可参考文档：[https://www.cuiliangblog.cn/detail/section/175557663](https://www.cuiliangblog.cn/detail/section/175557663)

```bash
# kubectl config get-contexts --kubeconfig /etc/kubernetes/test.conf
CURRENT   NAME                          CLUSTER      AUTHINFO           NAMESPACE
*         kubernetes-admin@kubernetes   kubernetes   kubernetes-admin
```

ArgoCD添加集群

```bash
# argocd cluster add kubernetes-admin@kubernetes \
  --kubeconfig /etc/kubernetes/test.conf \
  --name k8s-test
WARNING: This will create a service account `argocd-manager` on the cluster referenced by context `kubernetes-admin@kubernetes` with full cluster level privileges. Do you want to continue [y/N]? y
{"level":"info","msg":"ServiceAccount \"argocd-manager\" created in namespace \"kube-system\"","time":"2025-10-23T00:20:21+08:00"}
{"level":"info","msg":"ClusterRole \"argocd-manager-role\" created","time":"2025-10-23T00:20:21+08:00"}
{"level":"info","msg":"ClusterRoleBinding \"argocd-manager-role-binding\" created","time":"2025-10-23T00:20:21+08:00"}
{"level":"info","msg":"Created bearer token secret \"argocd-manager-long-lived-token\" for ServiceAccount \"argocd-manager\"","time":"2025-10-23T00:20:21+08:00"}
{"level":"warning","msg":"Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web.","time":"2025-10-23T00:20:22+08:00"}
Cluster 'https://192.168.10.15:6443' added
```

## 查看集群状态信息
![](images/img_370.png)

# CLI 管理集群
## 列出集群
```bash
# 列出所有集群
argocd cluster list

# 使用 grpc-web（如果有连接问题）
argocd cluster list --grpc-web

# 输出格式化
argocd cluster list -o json
argocd cluster list -o yaml
argocd cluster list -o wide
```

## 查看集群详情
```bash
# 查看特定集群信息
argocd cluster get <CLUSTER_URL>

# 例如
argocd cluster get https://192.168.10.15:6443
argocd cluster get https://kubernetes.default.svc  # 本地集群
```

## 更新集群配置
```bash
# 更新集群名称
argocd cluster set <CLUSTER_URL> --name new-name

# 更新集群的 namespaces
argocd cluster set <CLUSTER_URL> --namespace ns1,ns2,ns3

# 设置集群为默认集群
argocd cluster set <CLUSTER_URL> --name in-cluster

# 更新 shard（用于集群分片）
argocd cluster set <CLUSTER_URL> --shard 1
```

## 删除集群
```bash
# 删除集群
argocd cluster rm <CLUSTER_URL>

# 例如
argocd cluster rm https://192.168.10.15:6443

# 强制删除（即使有应用在使用）
argocd cluster rm <CLUSTER_URL> --cascade
```



---

<a id="174837249"></a>

## ArgoCD与GitOps入门 - ArgoCD项目管理

# 项目管理介绍
通过项目，可以配置对应用程序的访问控制策略。例如，可以指定哪些用户或团队有权在特定命名空间或集群中进行部署操作。提供了资源隔离的功能，确保不同项目之间的资源不会互相干扰。这有助于维护不同团队或应用程序之间的清晰界限。

Argo CD 的 Project 可以控制的权限有：

+ 控制这个项目可以访问哪些 Git 仓库；
+ 可以部署到哪些 Kubernetes 集群与命名空间；
+ 可以使用哪些资源种类（RBAC 限制）。

最佳实践应该是为每个gitlab group在argoCD中创建对应的Project，便于各个组之间权限资源相互隔离。

## 核心概念
| 概念 | 说明 |
| --- | --- |
| Project | ArgoCD 的顶层逻辑单元，用于管理一组应用（Applications） |
| Applications | 部署单元，可以归属于某个 Project |
| Permissions & Policies | 控制 Project 下应用可以访问的 Git 仓库和集群 |
| Destination（目标集群）限制 | Project 可以限制应用只能部署到指定集群和 namespace |
| Source（Git/Helm 仓库）限制 | Project 可以限制应用只能拉取指定仓库或 Helm 仓库 |


# Project创建
## webUI创建
![](images/img_371.png)

## CLI创建
```bash
## argocd CLI
# login
argocd login argocd.cuiliangblog.cn

# list 
argocd proj list

# remove
argocd proj remove dev1

# create
argocd proj create --help
argocd proj create dev2
argocd proj list
argocd proj add-source dev2 http://github.com/dev2/app.git
```

## yaml创建
示例文档： [https://argo-cd.readthedocs.io/en/stable/operator-manual/project.yaml](https://argo-cd.readthedocs.io/en/stable/operator-manual/project.yaml)

```bash
apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  name: dev3
  namespace: argocd
  finalizers:
    - resources-finalizer.argocd.argoproj.io
spec:
  description: Example Project
  sourceRepos:
  - 'https://github.com/dev3/app.git'
  destinations:
  - namespace: dev3
    server: https://kubernetes.default.svc
    name: in-cluster
  # Deny all cluster-scoped resources from being created, except for Namespace
  clusterResourceWhitelist:
  - group: ''
    kind: Namespace

  # Allow all namespaced-scoped resources to be created, except for ResourceQuota, LimitRange, NetworkPolicy
  namespaceResourceBlacklist:
  - group: ''
    kind: ResourceQuota
  - group: ''
    kind: LimitRange
  - group: ''
    kind: NetworkPolicy

  # Deny all namespaced-scoped resources from being created, except for Deployment and StatefulSet
  namespaceResourceWhitelist:
  - group: 'apps'
    kind: Deployment
  - group: 'apps'
    kind: StatefulSet
```

# project配置
## webUI配置
![](images/img_372.png)

## CLI 配置
```yaml
argocd proj create devops \
  --description "devops项目" \
  --src "http://gitlab.cuiliangblog.cn/devops/*" \
  --dest https://kubernetes.default.svc,default \
  --dest https://192.168.10.15:6443,test
```

## yaml配置
```yaml
apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  name: devops
  namespace: argocd
spec:
  description: devops项目
  sourceRepos:
    - http://gitlab.cuiliangblog.cn/devops/*
  destinations:
    - name: in-cluster
      namespace: default
      server: https://kubernetes.default.svc
    - name: k8s-test
      namespace: test
      server: https://192.168.10.15:6443
  # 可选：允许同步集群资源类型（若需要，可以放开）
  clusterResourceWhitelist:
    - group: '*'
      kind: '*'
  # 可选：限制可以使用的 namespace 范围
  namespaceResourceBlacklist: []
```

# ProjectRole
ProjectRole 是一种用于定义在特定项目 (Project) 范围内的访问控制策略的资源。它允许你对项目中的资源进行细粒度的权限管理，指定哪些用户或服务账户可以执行哪些操作。ProjectRole 主要用于增强安全性和隔离性，确保只有被授权的用户或系统组件可以对项目内的应用程序和资源进行特定操作。

## 创建role
我们在demo项目下创建名为dev的角色，配置权限为：允许get sync操作权限，不允许delete操作。

![](images/img_373.png)

## 创建JWT Token
```bash
[root@tiaoban ~]# argocd proj role create-token demo-project dev-role
WARN[0000] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
Create token succeeded for proj:demo-project:dev-role.
  ID: 90899748-fb86-4ef9-b3f0-71f820cf10d6
  Issued At: 2024-06-23T12:12:29+08:00
  Expires At: Never
  Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcmdvY2QiLCJzdWIiOiJwcm9qOmRlbW8tcHJvamVjdDpkZXYtcm9sZSIsIm5iZiI6MTcxOTExNTk0OSwiaWF0IjoxNzE5MTE1OTQ5LCJqdGkiOiI5MDg5OTc0OC1mYjg2LTRlZjktYjNmMC03MWY4MjBjZjEwZDYifQ.RCLx7U-2RdQ_BD5z8sBW3Ghh5RA6DnwU9VHvmU8EgQM
```

## 验证测试
```bash
# 注销之前登录的admin账号
[root@tiaoban ~]# argocd logout argocd.cuiliangblog.cn
Logged out from 'argocd.cuiliangblog.cn'
# 使用token查看app列表
[root@tiaoban ~]# argocd app list --auth-token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcmdvY2QiLCJzdWIiOiJwcm9qOmRlbW8tcHJvamVjdDpkZXYtcm9sZSIsIm5iZiI6MTcxOTExNTk0OSwiaWF0IjoxNzE5MTE1OTQ5LCJqdGkiOiI5MDg5OTc0OC1mYjg2LTRlZjktYjNmMC03MWY4MjBjZjEwZDYifQ.RCLx7U-2RdQ_BD5z8sBW3Ghh5RA6DnwU9VHvmU8EgQM
WARN[0000] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
NAME         CLUSTER                         NAMESPACE  PROJECT       STATUS  HEALTH   SYNCPOLICY  CONDITIONS  REPO                                          PATH       TARGET
argocd/demo  https://kubernetes.default.svc             demo-project  Synced  Healthy  Auto        <none>      http://gitlab.cuiliangblog.cn/devops/argo-demo.git  manifests  HEAD
# 使用token执行sync操作
[root@tiaoban ~]# argocd app sync argocd/demo --auth-token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcmdvY2QiLCJzdWIiOiJwcm9qOmRlbW8tcHJvamVjdDpkZXYtcm9sZSIsIm5iZiI6MTcxOTExNTk0OSwiaWF0IjoxNzE5MTE1OTQ5LCJqdGkiOiI5MDg5OTc0OC1mYjg2LTRlZjktYjNmMC03MWY4MjBjZjEwZDYifQ.RCLx7U-2RdQ_BD5z8sBW3Ghh5RA6DnwU9VHvmU8EgQM
WARN[0000] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
TIMESTAMP                  GROUP                      KIND     NAMESPACE                  NAME    STATUS   HEALTH        HOOK  MESSAGE
2024-06-23T12:20:07+08:00                          Service       default                 myapp    Synced  Healthy              
2024-06-23T12:20:07+08:00   apps                Deployment       default                 myapp    Synced  Healthy              
2024-06-23T12:20:07+08:00  traefik.containo.us  IngressRoute     default                 myapp    Synced                       
2024-06-23T12:20:07+08:00  traefik.containo.us  IngressRoute     default                 myapp    Synced                       ingressroute.traefik.containo.us/myapp unchanged
2024-06-23T12:20:07+08:00                          Service       default                 myapp    Synced  Healthy              service/myapp unchanged
2024-06-23T12:20:07+08:00   apps                Deployment       default                 myapp    Synced  Healthy              deployment.apps/myapp unchanged

Name:               argocd/demo
Project:            demo-project
Server:             https://kubernetes.default.svc
Namespace:          
URL:                https://argocd.cuiliangblog.cn/applications/argocd/demo
Source:
- Repo:             http://gitlab.cuiliangblog.cn/devops/argo-demo.git
  Target:           HEAD
  Path:             manifests
SyncWindow:         Sync Allowed
Sync Policy:        Automated
Sync Status:        Synced to HEAD (0ea8019)
Health Status:      Healthy

Operation:          Sync
Sync Revision:      0ea801988a54f0ad73808454f2fce5030d3e28ef
Phase:              Succeeded
Start:              2024-06-23 12:20:07 +0800 CST
Finished:           2024-06-23 12:20:07 +0800 CST
Duration:           0s
Message:            successfully synced (all tasks run)

GROUP                KIND          NAMESPACE  NAME   STATUS  HEALTH   HOOK  MESSAGE
                     Service       default    myapp  Synced  Healthy        service/myapp unchanged
apps                 Deployment    default    myapp  Synced  Healthy        deployment.apps/myapp unchanged
traefik.containo.us  IngressRoute  default    myapp  Synced                 ingressroute.traefik.containo.us/myapp unchanged
# 使用token删除应用，提示权限拒绝
[root@tiaoban ~]# argocd app delete argocd/demo --auth-token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcmdvY2QiLCJzdWIiOiJwcm9qOmRlbW8tcHJvamVjdDpkZXYtcm9sZSIsIm5iZiI6MTcxOTExNTk0OSwiaWF0IjoxNzE5MTE1OTQ5LCJqdGkiOiI5MDg5OTc0OC1mYjg2LTRlZjktYjNmMC03MWY4MjBjZjEwZDYifQ.RCLx7U-2RdQ_BD5z8sBW3Ghh5RA6DnwU9VHvmU8EgQM
WARN[0000] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
Are you sure you want to delete 'argocd/demo' and all its resources? [y/n] y
FATA[0001] rpc error: code = PermissionDenied desc = permission denied: applications, delete, demo-project/demo, sub: proj:demo-project:dev-role, iat: 2024-06-23T04:12:29Z
```



---

<a id="178422013"></a>

## ArgoCD与GitOps入门 - ArgoCD监控

参考文档：[https://argo-cd.readthedocs.io/en/stable/operator-manual/metrics/](https://argo-cd.readthedocs.io/en/stable/operator-manual/metrics/)

# 配置targets
## 查看metrics信息
```bash
[root@tiaoban ~]# kubectl get svc -n argocd 
NAME                                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
argocd-applicationset-controller          ClusterIP   10.97.81.94      <none>        7000/TCP,8080/TCP            27d
argocd-dex-server                         ClusterIP   10.106.72.83     <none>        5556/TCP,5557/TCP,5558/TCP   27d
argocd-metrics                            ClusterIP   10.103.26.87     <none>        8082/TCP                     27d
argocd-notifications-controller-metrics   ClusterIP   10.105.181.100   <none>        9001/TCP                     27d
argocd-redis                              ClusterIP   10.100.131.134   <none>        6379/TCP                     27d
argocd-repo-server                        ClusterIP   10.100.123.80    <none>        8081/TCP,8084/TCP            27d
argocd-server                             NodePort    10.106.11.146    <none>        80:30701/TCP,443:30483/TCP   27d
argocd-server-metrics                     ClusterIP   10.105.164.150   <none>        8083/TCP                     27d
[root@tiaoban ~]# kubectl exec -it rockylinux -- bash
[root@rockylinux /]# curl argocd-metrics.argocd.svc:8082/metrics
# HELP argocd_app_info Information about application.
# TYPE argocd_app_info gauge
argocd_app_info{autosync_enabled="true",dest_namespace="default",dest_server="https://kubernetes.default.svc",health_status="Healthy",name="blue-green",namespace="argocd",operation="",project="default",repo="http://gitlab.local.com/devops/argo-demo",sync_status="Synced"} 1
# HELP argocd_app_reconcile Application reconciliation performance.
# TYPE argocd_app_reconcile histogram
argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="0.25"} 12
argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="0.5"} 18
argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="1"} 21
argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="2"} 21
argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="4"} 22
argocd_app_reconcile_bucket{dest_server="https://kubernetes.default.svc",namespace="argocd",le="8"} 24
```

## 创建<font style="color:rgb(48, 49, 51);">ServiceMonitor</font>资源
```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: argocd-exporter # ServiceMonitor名称
  namespace: monitoring # ServiceMonitor所在名称空间
spec:
  jobLabel: argocd-exporter # job名称
  endpoints: # prometheus所采集Metrics地址配置，endpoints为一个数组，可以创建多个，但是每个endpoints包含三个字段interval、path、port
  - port: metrics # prometheus采集数据的端口，这里为port的name，主要是通过spec.selector中选择对应的svc，在选中的svc中匹配该端口
    interval: 30s # prometheus采集数据的周期，单位为秒
    scheme: http # 协议
    path: /metrics # prometheus采集数据的路径
  selector: # svc标签选择器
    matchLabels:
      app.kubernetes.io/name: argocd-metrics
  namespaceSelector: # namespace选择
    matchNames:
    - argocd
```

## 验证targets
![](images/img_374.png)

# grafana查看数据
## 导入dashboard
参考文档：[https://grafana.com/grafana/dashboards/14584-argocd/](https://grafana.com/grafana/dashboards/14584-argocd/)

## 查看数据
![](images/img_375.png)



---

<a id="174775527"></a>

## ArgoCD创建APP - Directory APP

# APP创建
## webUI创建
![](images/img_376.png)

![](images/img_377.png)

## CLI创建
除了使用webUI创建应用外，也可以使用Argo CLI命令行工具创建

```bash
# 登录Argo CD
[root@tiaoban ~]# argocd login argocd.local.com
WARNING: server certificate had error: tls: failed to verify certificate: x509: certificate is valid for ba3cdea2e0025c0ae0c4538c0bfe0e43.4611c2de05384ee8b14bfeabd906ba18.traefik.default, not argocd.local.com. Proceed insecurely (y/n)? y
WARN[0003] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
Username: admin
Password: 
'admin:login' logged in successfully
Context 'argocd.local.com' updated
# 创建应用
[root@tiaoban ~]# argocd app create demo1 \
--repo http://gitlab.local.com/devops/argo-demo.git \
--path manifests/ --sync-policy automatic --dest-namespace default \
--dest-server https://kubernetes.default.svc --directory-recurse
WARN[0000] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
application 'demo' created
# 查看应用列表
[root@tiaoban ~]# argocd app list
WARN[0000] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
NAME         CLUSTER                         NAMESPACE  PROJECT  STATUS     HEALTH   SYNCPOLICY  CONDITIONS  REPO                                          PATH       TARGET
argocd/demo  https://kubernetes.default.svc  default    default  OutOfSync  Missing  Manual      <none>      http://gitlab.local.com/devops/argo-demo.git  manifests
# 查看应用状态
[root@tiaoban ~]# kubectl get application -n argocd
NAME   SYNC STATUS   HEALTH STATUS
demo   Synced        Healthy
# 执行立即同步操作
[root@tiaoban ~]# argocd app sync argocd/demo
```

## yaml文件创建
![](images/img_378.png)

```yaml
[root@tiaoban ~]# cat demo.yaml 
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: demo
  namespace: argocd
spec:
  destination: # 部署集群和namespace
    namespace: default
    server: 'https://kubernetes.default.svc'
    # name: 'in-cluster' # 也可以通过集群名称指定
  source:
    path: manifests # yaml资源清单路径
    repoURL: 'http://gitlab.local.com/devops/argo-demo.git' # 同步仓库地址
    targetRevision: 'master' # 分支名称
  sources: []
  project: default
  syncPolicy: # 同步策略
    automated:
      prune: false
      selfHeal: false
  # ignoreDifferences: # 知道某些资源忽略同步验证，用于hpa场景
  #   - group: apps
  #     kind: Deployment
  #     jsonPointers:
  #       - /spec/replicas
[root@tiaoban ~]# kubectl apply -f demo.yaml
application.argoproj.io/demo created
```

# 应用同步选项
## 同步策略配置
SYNC POLICY：同步策略

Argo CD能够在检测到 Git 中所需的清单与集群中的实时状态之间存在差异时自动同步应用程序。自动同步是GitOps Pull模式的核心，好处是 CI/CD Pipeline 不再需要直接访问Argo CD API服务器来执行部署，可以通过在WEB UI的Application-SYNC POLICY中启用AUTOMATED或CLIargocd app set <APPNAME> --sync-policy automated 进行配置。

![](images/img_379.png)

PRUNE RESOURCES ：自动删除资源，开启选项后Git Repo中删除资源会自动在环境中删除对应的资源。



![](images/img_380.png)

SELF HEAL：自动痊愈，强制以GitRepo状态为准，手动在环境修改不会生效。

![](images/img_381.png)

## AutoSync自动同步
默认同步周期是180s, 可以修改argocd-cm配置文件，添加`timeout.reconciliation`参数。

同步流程：

1. 获取所有设置为auto-sync的apps
2. 从每个app的git存储库中获取最新状态
3. 将git状态与集群应用状态对比
4. 如果相同，不执行任何操作并标记为synced
5. 如果不同，标记为out-of-sync

## SyncOptions同步选项
+ Validate=false：禁用Kubectl验证
+ Replace=true：kubectl replace替换
+ PrunePropagationPolicy=background：级联删除策略(background, foreground and orphan.)ApplyOutOfSyncOnly=true：仅同步不同步状态的资源。避免大量对象时资源API消耗
+ CreateNamespace=true：创建namespace
+ PruneLast=true：同步后进行修剪
+ RespectlgnoreDifferences=true：支持忽略差异配置(ignoreDifferences:)
+ ServerSideApply=true：部署操作在服务端运行(避免文件过大)

# 应用状态
![](images/img_382.png)

sync status

+ Synced：已同步
+ OutOfSync：未同步

health status

+ Progressing：正在执行
+ Suspended：资源挂载暂停
+ Healthy：资源健康
+ Degraded：资源故障
+ Missing：集群不存在资源







---

<a id="174782935"></a>

## ArgoCD创建APP - Helm App创建

# gitlab仓库配置
## 克隆代码
```bash
[root@tiaoban opt]# cd /opt/
[root@tiaoban opt]# git clone http://gitlab.local.com/devops/argo-demo.git
正克隆到 'argo-demo'...
remote: Enumerating objects: 18, done.
remote: Counting objects: 100% (18/18), done.
remote: Compressing objects: 100% (15/15), done.
remote: Total 18 (delta 4), reused 0 (delta 0), pack-reused 0 (from 0)
接收对象中: 100% (18/18), 4.41 KiB | 4.41 MiB/s, 完成.
处理 delta 中: 100% (4/4), 完成.
[root@tiaoban opt]# cd argo-demo/
[root@tiaoban argo-demo]# ls
manifests  README.md
```

## 创建Helm应用
helm具体参考可参考文档：[https://www.cuiliangblog.cn/detail/section/15287438](https://www.cuiliangblog.cn/detail/section/15287438)

创建一个名为helm的app

```bash
[root@tiaoban argo-demo]# helm create helm
Creating helm
[root@tiaoban argo-demo]# ls
helm  manifests  README.md
[root@tiaoban argo-demo]# tree helm
helm
├── charts
├── Chart.yaml
├── templates
│   ├── deployment.yaml
│   ├── _helpers.tpl
│   ├── hpa.yaml
│   ├── ingress.yaml
│   ├── NOTES.txt
│   ├── serviceaccount.yaml
│   ├── service.yaml
│   └── tests
│       └── test-connection.yaml
└── values.yaml

3 directories, 10 files
```

修改helm配置

```bash
[root@tiaoban argo-demo]# cd helm/
[root@tiaoban helm]# vim Chart.yaml
appVersion: "v1" # 修改默认镜像版本为v1
[root@tiaoban helm]# vim values.yaml
image:
  repository: ikubernetes/myapp # 修改镜像仓库地址
```

helm文件校验

```bash
[root@tiaoban helm]# cd ..
[root@tiaoban argo-demo]# helm lint helm
==> Linting helm
[INFO] Chart.yaml: icon is recommended

1 chart(s) linted, 0 chart(s) failed
```

## 推送代码
```bash
[root@tiaoban helm]# git add .
[root@tiaoban helm]# git commit -m "add helm"
[main ad69f78] add helm
 11 files changed, 405 insertions(+)
 create mode 100644 helm/.helmignore
 create mode 100644 helm/Chart.yaml
 create mode 100644 helm/templates/NOTES.txt
 create mode 100644 helm/templates/_helpers.tpl
 create mode 100644 helm/templates/deployment.yaml
 create mode 100644 helm/templates/hpa.yaml
 create mode 100644 helm/templates/ingress.yaml
 create mode 100644 helm/templates/service.yaml
 create mode 100644 helm/templates/serviceaccount.yaml
 create mode 100644 helm/templates/tests/test-connection.yaml
 create mode 100644 helm/values.yaml
[root@tiaoban helm]# git push 
枚举对象中: 17, 完成.
对象计数中: 100% (17/17), 完成.
使用 4 个线程进行压缩
压缩对象中: 100% (15/15), 完成.
写入对象中: 100% (16/16), 5.56 KiB | 2.78 MiB/s, 完成.
总共 16（差异 0），复用 0（差异 0），包复用 0
To http://gitlab.local.com/devops/argo-demo.git
   2a78761..ad69f78  main -> main
```

## 查看验证
![](images/img_383.png)

# Argo CD配置
## 创建helm类型的app（UI）
通过Argo UI创建app，填写如下信息：

![](images/img_384.png)

除了指定 yaml 文件外，也可以在 Application 中自定义 values 值。

![](images/img_385.png)

## 创建 helm 类型的 app（yaml）
```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: demo-helm
  namespace: argocd
spec:
  project: devops
  source:
    repoURL: http://gitlab.cuiliangblog.cn/devops/argo-demo.git
    targetRevision: HEAD
    path: helm
    helm:
      valueFiles:
        - values.yaml
  destination:
    server: https://kubernetes.default.svc
    namespace: test
  syncPolicy:
    automated:
      enabled: true
```

## 创建 helm 类型的 app（CLI）
```bash
argocd app create demo-helm \
  --project devops \
  --repo http://gitlab.cuiliangblog.cn/devops/argo-demo.git \
  --path helm \
  --dest-server https://kubernetes.default.svc \
  --dest-namespace test \
  --helm-value-files values.yaml \
  --sync-policy automated
```

## 查看验证
查看argo cd应用信息，已完成部署。

![](images/img_386.png)

登录k8s查看资源

```bash
# kubectl get all -n test  
NAME                                  READY   STATUS    RESTARTS   AGE
pod/demo-helm-myapp-c89789845-v2frf   1/1     Running   0          13m

NAME                      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)   AGE
service/demo-helm-myapp   ClusterIP   10.100.159.152   <none>        80/TCP    13m

NAME                              READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/demo-helm-myapp   1/1     1            1           13m

NAME                                        DESIRED   CURRENT   READY   AGE
replicaset.apps/demo-helm-myapp-c89789845   1         1         1       13m
```

## 版本更新测试
修改git仓库文件，模拟版本更新。

```bash
# 修改chart包和镜像版本
[root@tiaoban helm]# vim Chart.yaml
version: 0.2.0
appVersion: "v2"
[root@tiaoban helm]# vim values.yaml
image:
  tag: "v2"
# 提交推送至git仓库
[root@tiaoban helm]# git add .
[root@tiaoban helm]# git commit -m "update helm v2"
[root@tiaoban helm]# git push
```

查看argo cd更新记录

![](images/img_387.png)

访问验证

```bash
[root@tiaoban helm]# kubectl exec -it rockylinux -- bash
[root@rockylinux /]# curl demo-helm 
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
```



---

<a id="174782965"></a>

## ArgoCD创建APP - Kustomize App创建

# 仓库资源配置
## 创建Kustomize应用
Kustomize具体参考可参考文档：[https://www.cuiliangblog.cn/detail/section/119720072](https://www.cuiliangblog.cn/detail/section/119720072)

基础模板文件

```yaml
[root@tiaoban argo-demo]# mkdir kustomize
[root@tiaoban argo-demo]# cd kustomize/
[root@tiaoban kustomize]# mkdir base
[root@tiaoban kustomize]# cd base/
[root@tiaoban kustomize]# cat deployment.yaml 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: ikubernetes/myapp:v1
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        ports:
        - containerPort: 80
[root@tiaoban kustomize]# cat service.yaml 
apiVersion: v1
kind: Service
metadata:
  name: myapp
spec:
  type: ClusterIP
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 80
[root@tiaoban kustomize]# cat kustomization.yaml 
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - deployment.yaml
  - service.yaml
```

Kustomize文件验证

```yaml
[root@tiaoban base]# kustomize build .
apiVersion: v1
kind: Service
metadata:
  name: myapp
spec:
  ports:
  - port: 80
    targetPort: 80
  selector:
    app: myapp
  type: ClusterIP
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - image: ikubernetes/myapp:v1
        name: myapp
        ports:
        - containerPort: 80
        resources:
          limits:
            cpu: 500m
            memory: 128Mi
```

创建测试环境

```yaml
[root@tiaoban kustomize]# ls
base
[root@tiaoban kustomize]# mkdir overlays
[root@tiaoban kustomize]# cd overlays/
[root@tiaoban overlays]# mkdir dev
[root@tiaoban overlays]# cd dev/
[root@tiaoban dev]# cat env.yaml 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  template:
    spec:
      containers:
      - name: myapp
        env:
          - name: ENV_NAME
            value: dev
[root@tiaoban dev]# cat kustomization.yaml 
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
- ../../base

patches:
- path: env.yaml
namespace: dev
```

此时目录结构如下

```bash
[root@tiaoban argo-demo]# tree kustomize/
kustomize/
├── base
│   ├── deployment.yaml
│   ├── kustomization.yaml
│   └── service.yaml
└── overlays
    └── dev
        ├── env.yaml
        └── kustomization.yaml
```

测试验证

```yaml
[root@tiaoban argo-demo]# kustomize build kustomize/overlays/dev/
kustomize build kustomize/overlays/dev/
apiVersion: v1
kind: Service
metadata:
  name: myapp
  namespace: dev
spec:
  ports:
  - port: 80
    targetPort: 80
  selector:
    app: myapp
  type: ClusterIP
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  namespace: dev
spec:
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - env:
        - name: ENV_NAME
          value: dev
        image: ikubernetes/myapp:v1
        name: myapp
        ports:
        - containerPort: 80
        resources:
          limits:
            cpu: 500m
            memory: 512Mi
          requests:
            cpu: 100m
            memory: 128Mi
```

## 推送代码
```bash
[root@tiaoban argo-demo]# git add .
[root@tiaoban argo-demo]# git commit -m "add kustomize"
[root@tiaoban argo-demo]# git push 
```

## 查看验证
![](images/img_388.png)

# Argo CD配置
## 创建Kustomize类型的app
通过Argo UI创建app，填写如下信息：

![](images/img_389.png)

## 查看验证
查看argo cd应用信息，已完成部署。

![](images/img_390.png)

登录k8s查看资源

```bash
[root@tiaoban ~]# kubectl get pod -n dev -o wide
NAME                     READY   STATUS    RESTARTS   AGE   IP            NODE    NOMINATED NODE   READINESS GATES
myapp-569fbc7fc9-x72pr   1/1     Running   0          41s   10.244.3.32   work3   <none>           <none>
[root@tiaoban ~]# kubectl get svc -n dev
NAME    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
myapp   ClusterIP   10.99.178.248   <none>        80/TCP    53s
[root@tiaoban ~]# kubectl exec -it rockylinux -- bash
[root@rockylinux /]# curl myapp.dev.svc
Hello MyApp | Version: v1 | <a href="hostname.html">Pod Name</a>
```

## 版本更新测试
修改git仓库文件，模拟版本更新

```bash
# 修改Kustomize镜像版本
[root@tiaoban dev]# cat image.yaml 
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  template:
    spec:
      containers:
      - name: myapp
        image: ikubernetes/myapp:v2
[root@tiaoban dev]# cat kustomization.yaml 
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
- ../../base

patches:
- path: env.yaml
- path: image.yaml
namespace: dev
# 提交推送至git仓库
[root@tiaoban helm]# git add .
[root@tiaoban helm]# git commit -m "update helm v2"
[root@tiaoban helm]# git push
```

查看argo cd更新记录

![](images/img_391.png)

访问验证

```bash
[root@tiaoban helm]# kubectl exec -it rockylinux -- bash
[root@rockylinux /]# curl myapp.dev.svc
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
```



---

<a id="174841576"></a>

## ArgoCD应用发布 - ArgoCD Rollouts

# Argo Rollouts简介
Argo Rollouts 是一个用于 Kubernetes 的渐进式交付控制器，支持蓝绿部署、金丝雀发布、A/B 测试等高级部署策略。它是 Argo 项目的一部分，旨在帮助团队更安全和更可控地发布应用程序新版本。

## 主要功能
1. **蓝绿部署**：通过创建两个独立的环境（蓝环境和绿环境），在不影响现有用户的情况下发布新版本。当新版本稳定后，将流量切换到新版本。
2. **金丝雀发布**：逐步将新版本推送给一部分用户，监控其性能和稳定性，然后逐步扩大新版本的覆盖范围，直至完全取代旧版本。
3. **A/B 测试**：允许同时运行两个或多个版本的应用程序，以比较它们的性能和用户反馈，从而选择最佳版本。
4. **实验性部署**：能够在生产环境中进行实验性功能测试，同时将影响范围控制在可控范围内。

## 工作原理
Argo Rollouts 基于 Kubernetes 自定义资源 (CRD) 来定义和管理部署策略。关键的自定义资源包括：

+ **Rollout**：定义了应用程序的部署策略，如蓝绿部署、金丝雀发布等。
+ **Experiment**：用于定义和执行实验性部署。
+ **AnalysisTemplate** 和 **AnalysisRun**：用于定义和运行分析任务，以在部署过程中进行自动化验证。

![](images/img_392.png)

## <font style="color:rgb(49, 70, 89);">实现原理</font>
与 Deployment 对象类似，Argo Rollouts 控制器将管理 ReplicaSets 的创建、缩放和删除，这些 ReplicaSet 由 Rollout 资源中的 spec.template 定义，使用与 Deployment 对象相同的 pod 模板。

当 spec.template 变更时，这会向 Argo Rollouts 控制器发出信号，表示将引入新的 ReplicaSet，控制器将使用 spec.strategy 字段内的策略来确定从旧 ReplicaSet 到新 ReplicaSet 的 rollout 将如何进行，一旦这个新的 ReplicaSet 被放大（可以选择通过一个 Analysis），控制器会将其标记为稳定。

如果在 spec.template 从稳定的 ReplicaSet 过渡到新的 ReplicaSet 的过程中发生了另一次变更（即在发布过程中更改了应用程序版本），那么之前的新 ReplicaSet 将缩小，并且控制器将尝试发布反映更新 spec.template 字段的 ReplicasSet。

# 安装Rollouts
参考文档：[https://github.com/argoproj/argo-rollouts](https://github.com/argoproj/argo-rollouts)

## 安装argo-rollouts
```bash
[root@tiaoban ~]# kubectl create namespace argo-rollouts
[root@tiaoban ~]# kubectl apply -n argo-rollouts -f https://github.com/argoproj/argo-rollouts/releases/latest/download/install.yaml
customresourcedefinition.apiextensions.k8s.io/analysisruns.argoproj.io created
customresourcedefinition.apiextensions.k8s.io/analysistemplates.argoproj.io created
customresourcedefinition.apiextensions.k8s.io/clusteranalysistemplates.argoproj.io created
customresourcedefinition.apiextensions.k8s.io/experiments.argoproj.io created
customresourcedefinition.apiextensions.k8s.io/rollouts.argoproj.io created
serviceaccount/argo-rollouts created
clusterrole.rbac.authorization.k8s.io/argo-rollouts created
clusterrole.rbac.authorization.k8s.io/argo-rollouts-aggregate-to-admin created
clusterrole.rbac.authorization.k8s.io/argo-rollouts-aggregate-to-edit created
clusterrole.rbac.authorization.k8s.io/argo-rollouts-aggregate-to-view created
clusterrolebinding.rbac.authorization.k8s.io/argo-rollouts created
configmap/argo-rollouts-config created
secret/argo-rollouts-notification-secret created
service/argo-rollouts-metrics created
deployment.apps/argo-rollouts created
[root@tiaoban ~]# kubectl get all -n argo-rollouts 
NAME                                 READY   STATUS    RESTARTS   AGE
pod/argo-rollouts-699c7d8749-hlrkn   1/1     Running   0          71s

NAME                            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
service/argo-rollouts-metrics   ClusterIP   10.100.64.155   <none>        8090/TCP   71s

NAME                            READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/argo-rollouts   1/1     1            1           71s

NAME                                       DESIRED   CURRENT   READY   AGE
replicaset.apps/argo-rollouts-699c7d8749   1         1         1       71s
```

## 安装Kubectl 插件
```bash
[root@tiaoban ~]# wget https://github.com/argoproj/argo-rollouts/releases/download/v1.8.3/kubectl-argo-rollouts-linux-amd64
[root@tiaoban ~]# mv kubectl-argo-rollouts-linux-amd64 /usr/local/bin/kubectl-argo-rollouts
[root@tiaoban ~]# chmod u+x /usr/local/bin/kubectl-argo-rollouts
[root@tiaoban ~]# kubectl argo rollouts version
kubectl-argo-rollouts: v1.8.3+49fa151
  BuildDate: 2025-06-04T22:15:54Z
  GitCommit: 49fa1516cf71672b69e265267da4e1d16e1fe114
  GitTreeState: clean
  GoVersion: go1.23.9
  Compiler: gc
  Platform: linux/amd64
```

## 安装dashboard插件
```bash
[root@master1 argocd]# wget https://github.com/argoproj/argo-rollouts/releases/download/v1.8.3/dashboard-install.yaml
[root@master1 argocd]# kubectl apply -f dashboard-install.yaml -n argo-rollouts
serviceaccount/argo-rollouts-dashboard created
clusterrole.rbac.authorization.k8s.io/argo-rollouts-dashboard created
clusterrolebinding.rbac.authorization.k8s.io/argo-rollouts-dashboard created
service/argo-rollouts-dashboard created
deployment.apps/argo-rollouts-dashboard created
```

创建ingress资源

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: redirect-https-middleware
  namespace: argo-rollouts
spec:
  redirectScheme:
    scheme: https
---
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: argo-rollouts
  namespace: argo-rollouts
spec:
  entryPoints:
    - web
    - websecure 
  tls:
    secretName: ingress-tls                
  routes:
  - match: Host(`argo-rollouts.cuiliangblog.cn`)
    kind: Rule
    services:
    - name: argo-rollouts-dashboard
      port: 3100
    middlewares:
    - name: redirect-https-middleware
```

绑定 hosts 后访问验证

![](images/img_393.png)



---

<a id="174841574"></a>

## ArgoCD应用发布 - 蓝绿部署

# 概念介绍
蓝绿部署（Blue-Green Deployment）是一种软件发布技术，旨在最大限度地减少应用程序的停机时间，并减少在部署新版本时对用户的影响。这个方法通过运行两个独立的环境（通常称为“蓝色环境”和“绿色环境”）来实现。

## 基本概念
1. 蓝色环境（Blue Environment）：这是当前正在生产环境中运行的版本，用户所有的请求都被路由到这个环境中。
2. 绿色环境（Green Environment）：这是一个与蓝色环境完全相同的环境，用于部署和测试新版本的应用程序。

## 发布流程
1. 初始部署： 蓝色环境是运行应用程序稳定版本的初始生产环境。用户通过该环境访问应用程序，并作为与更新版本进行比较的基线。

![](images/img_394.png)

2. 更新部署： 应用程序的更新版本部署到绿色环境，该环境在基础设施、配置和数据方面镜像蓝色环境。绿色环境最初与用户流量保持隔离。

![](images/img_395.png)

3. 测试和验证： 绿色环境经过彻底测试，以确保更新版本功能正确并满足所需的质量标准。这包括运行自动化测试、执行集成测试以及可能进行用户验收测试或金丝雀发布。
4. 流量切换： 一旦绿色环境通过了所有必要的测试和验证，流量路由机制就会调整为开始将用户流量从蓝色环境引导到绿色环境。此切换可以使用各种技术来完成，例如 DNS 更改、负载平衡器配置更新或反向代理设置。

![](images/img_396.png)

5. 监控和验证： 在整个部署过程中，蓝色和绿色环境都会受到监控，以检测任何问题或异常情况。监控工具和可观察性实践有助于实时识别性能问题、错误或不一致。验证无误后可删除老版本资源。

![](images/img_397.png)

6. 回滚和清理： 当出现意外问题或结果不理想时，可以采用回滚策略将流量切换回蓝色环境，恢复到稳定版本。此外，在部署过程中在绿色环境中进行的任何资源或更改可能需要清理或恢复。

# 创建Rollout及资源
## rollout.yaml
创建rollout资源，定义发布策略和对应的server，以及deployment信息。

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: bluegreen-rollout # 定义Rollout的名称
spec:
  replicas: 2 # 期望副本数
  strategy:
    blueGreen: # 指定蓝绿部署策略
      activeService: bluegreen-active # 用于接收生产流量的Service
      previewService: bluegreen-preview # 用于接收预览流量的Service
      autoPromotionEnabled: false # 是否自动提升预览版本为活动版本
      previewReplicaCount: 1 # 预览版本的副本数
  revisionHistoryLimit: 2 # 保留的历史版本
  selector: # 类似deployment的selector
    matchLabels:
      app: myapp
  template: # 类似deployment的template
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: ikubernetes/myapp:v1
        ports:
        - name: http
          containerPort: 80
          protocol: TCP
```

## service.yaml
```yaml
# 接收生产流量的Service
apiVersion: v1
kind: Service
metadata:
  name: bluegreen-active
spec:
  type: ClusterIP
  selector:
    app: myapp
  ports:
  - name: http
    port: 80
---
# 接收预览流量的Service
apiVersion: v1
kind: Service
metadata:
  name: bluegreen-preview
spec:
  type: ClusterIP
  selector:
    app: myapp
  ports:
  - name: http
    port: 80
```

## ingress.yaml
```yaml
# 生产环境service对应的ingress
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: myapp-prod
spec:
  entryPoints:
  - web
  routes:
  - match: Host(`prod.myapp.com`) # 生产环境域名
    kind: Rule
    services:
      - name: bluegreen-active  # 与svc的name一致
        port: 80 # 与svc的port一致
---
# 预览环境service对应的ingress
apiVersion: traefik.io/v1alpha1
kind: IngressRoute
metadata:
  name: myapp-test
spec:
  entryPoints:
  - web
  routes:
  - match: Host(`test.myapp.com`) # 测试环境域名
    kind: Rule
    services:
      - name: bluegreen-preview # 与svc的name一致
        port: 80 # 与svc的port一致
```

# 创建Argo App
## 推送文件至仓库
使用gitops理念，将yaml文件推送至git仓库，由argoCD负责完成部署。

```yaml
[root@tiaoban argo-demo]# git add . && git commit -m "add argorollout-blue-green" && git push
[main ec83440] add argorollout-blue-green
 5 files changed, 57 insertions(+), 27 deletions(-)
 create mode 100644 argorollout-blue-green/ingress.yaml
 delete mode 100644 argorollout-blue-green/service-active.yaml
 delete mode 100644 argorollout-blue-green/service-preview.yaml
 create mode 100644 argorollout-blue-green/service.yaml
枚举对象中: 9, 完成.
对象计数中: 100% (9/9), 完成.
使用 4 个线程进行压缩
压缩对象中: 100% (6/6), 完成.
写入对象中: 100% (6/6), 922 字节 | 922.00 KiB/s, 完成.
总共 6（差异 2），复用 0（差异 0），包复用 0
To http://gitlab.cuiliangblog.cn/devops/argo-demo.git
   3929004..ec83440  main -> main
```

此时git仓库内容如下

![](images/img_398.png)

## 创建Directory App
```yaml
[root@tiaoban argocd]# cat blue-green.yaml 
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: blue-green
  namespace: argocd
spec:
  destination:
    name: ''
    namespace: default
    server: 'https://kubernetes.default.svc'
  source:
    path: argorollout-blue-green
    repoURL: 'http://gitlab.cuiliangblog.cn/devops/argo-demo.git'
    targetRevision: main
  sources: []
  project: devops
  syncPolicy:
    automated:
      prune: false
      selfHeal: false
[root@tiaoban argocd]# kubectl apply -f blue-green.yaml 
application.argoproj.io/blue-green created
```

## 查看验证
查看argo dashboard，已经显示blue-green应用成功部署。

![](images/img_399.png)

CLI查看应用状态

```bash
[root@tiaoban argocd]# argocd login argocd.cuiliangblog.cn
[root@tiaoban argocd]# argocd app list --grpc-web          
NAME                   CLUSTER                         NAMESPACE  PROJECT  STATUS  HEALTH   SYNCPOLICY  CONDITIONS  REPO                                                PATH                    TARGET
argocd/blue-green      https://kubernetes.default.svc  default    devops   Synced  Healthy  Auto        <none>      http://gitlab.cuiliangblog.cn/devops/argo-demo.git  argorollout-blue-green  main
argocd/demo-helm       https://kubernetes.default.svc  test       devops   Synced  Healthy  Auto        <none>      http://gitlab.cuiliangblog.cn/devops/argo-demo.git  helm                    HEAD
argocd/demo-kustomize  https://kubernetes.default.svc  dev        devops   Synced  Healthy  Auto        <none>      http://gitlab.cuiliangblog.cn/devops/argo-demo.git  kustomize/overlays/dev  HEAD
argocd/demo-yaml       https://kubernetes.default.svc  default    devops   Synced  Healthy  Auto        <none>      http://gitlab.cuiliangblog.cn/devops/argo-demo.git  manifests               HEAD
[root@tiaoban argocd]# kubectl get application -n argocd
NAME             SYNC STATUS   HEALTH STATUS
blue-green       Synced        Healthy
demo-helm        Synced        Healthy
demo-kustomize   Synced        Healthy
demo-yaml        Synced        Healthy
```

kubectl查看状态

```bash
[root@tiaoban argocd]# kubectl get pod
NAME                               READY   STATUS    RESTARTS        AGE
bluegreen-rollout-95d95c65-gqwx5   1/1     Running   0               70s
bluegreen-rollout-95d95c65-pztls   1/1     Running   0               70s
[root@tiaoban argocd]# kubectl get svc
NAME                TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)   AGE
bluegreen-active    ClusterIP   10.111.161.232   <none>        80/TCP    84s
bluegreen-preview   ClusterIP   10.100.217.118   <none>        80/TCP    84s
[root@tiaoban argocd]# kubectl get ingressroute
NAME         AGE
myapp-prod   96s
myapp-test   96s
```

添加hosts解析后访问ingress验证

![](images/img_400.png)

![](images/img_401.png)

由于刚发布第一个版本，因此正式环境和测试环境都是v1版本的镜像。

# 更新版本
## 查看Rollouts状态
在更新应用版本前，先查看Rollouts状态，便于后续更新后对比效果。

```yaml
[root@tiaoban argocd]# kubectl argo rollouts list rollouts
NAME               STRATEGY   STATUS        STEP  SET-WEIGHT  READY  DESIRED  UP-TO-DATE  AVAILABLE
bluegreen-rollout  BlueGreen  Healthy       -     -           2/2    2        2           2        
[root@tiaoban argocd]# kubectl argo rollouts status bluegreen-rollout
Healthy
# 获取滚动更新详细信息
[root@tiaoban argocd]# kubectl argo rollouts get rollout bluegreen-rollout --watch
Name:            bluegreen-rollout
Name:            bluegreen-rollout
Namespace:       default
Status:          ✔ Healthy
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v1 (stable, active)
Replicas:
  Desired:       2
  Current:       2
  Updated:       2
  Ready:         2
  Available:     2

NAME                                           KIND        STATUS     AGE  INFO
⟳ bluegreen-rollout                            Rollout     ✔ Healthy  16s  
└──# revision:1                                                            
   └──⧉ bluegreen-rollout-69dc9f5f56           ReplicaSet  ✔ Healthy  16s  stable,active
      ├──□ bluegreen-rollout-69dc9f5f56-b4cqq  Pod         ✔ Running  16s  ready:1/1
      └──□ bluegreen-rollout-69dc9f5f56-b5z9x  Pod         ✔ Running  16s  ready:1/1
```

此时可以看到，只有一个bluegreen-rollout-69dc9f5f56控制器在提供服务。

## 更新应用版本
修改rollout.yaml，将image镜像从v1升级为v2。

```bash
[root@tiaoban argo-demo]# cat argorollout-blue-green/rollout.yaml | grep image
        image: ikubernetes/myapp:v2
[root@tiaoban argo-demo]# git add . && git commit -m "update v2" && git push
```

## 再次查看Rollouts状态
待ArgoCD完成自动部署后，再次查看资源状态信息。此时可以发现ikubernetes/myapp:v1是生产版本，而ikubernetes/myapp:v2是预览测试版本。

```bash
[root@tiaoban argocd]# kubectl argo rollouts get rollout bluegreen-rollout
Name:            bluegreen-rollout
Name:            bluegreen-rollout
Namespace:       default
Status:          ॥ Paused
Message:         BlueGreenPause
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v1 (stable, active)
                 ikubernetes/myapp:v2 (preview)
Replicas:
  Desired:       2
  Current:       3
  Updated:       1
  Ready:         2
  Available:     2

NAME                                           KIND        STATUS     AGE    INFO
⟳ bluegreen-rollout                            Rollout     ॥ Paused   2m57s  
├──# revision:2                                                              
│  └──⧉ bluegreen-rollout-95d95c65             ReplicaSet  ✔ Healthy  48s    preview
│     └──□ bluegreen-rollout-95d95c65-wcbrs    Pod         ✔ Running  48s    ready:1/1
└──# revision:1                                                              
   └──⧉ bluegreen-rollout-69dc9f5f56           ReplicaSet  ✔ Healthy  2m57s  stable,active
      ├──□ bluegreen-rollout-69dc9f5f56-b4cqq  Pod         ✔ Running  2m57s  ready:1/1
      └──□ bluegreen-rollout-69dc9f5f56-b5z9x  Pod         ✔ Running  2m57s  ready:1/1
```

此时查看pod信息，新增了bluegreen-rollout-95d95c65的pod，运行v2版本的镜像。

```bash
[root@tiaoban ~]# kubectl get pod                    
NAME                                 READY   STATUS    RESTARTS         AGE
bluegreen-rollout-69dc9f5f56-b4cqq   1/1     Running   0                3m22s
bluegreen-rollout-69dc9f5f56-b5z9x   1/1     Running   0                3m22s
bluegreen-rollout-95d95c65-wcbrs     1/1     Running   0                73s
```

此时访问应用生产和测试域名，分别返回不同的版本信息。

![](images/img_402.png)

![](images/img_403.png)

## 手动切换版本
发布新版本后，此时就需要测试人员访问测试域名验证系统功能是否正常，验证无误后，将服务切换至生产域名。

因为配置文件中 autoPromotionEnabled: false，需要在命令行手动执行版本切换。

```bash
[root@tiaoban argocd]# kubectl argo rollouts promote bluegreen-rollout
rollout 'bluegreen-rollout' promoted
```

切换完成后再次查看rollouts状态，发现v2已经变为生产环境

```bash
[root@tiaoban argocd]# kubectl argo rollouts get rollout bluegreen-rollout
Name:            bluegreen-rollout
Name:            bluegreen-rollout
Namespace:       default
Status:          ✔ Healthy
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v1
                 ikubernetes/myapp:v2 (stable, active)
Replicas:
  Desired:       2
  Current:       4
  Updated:       2
  Ready:         2
  Available:     2

NAME                                           KIND        STATUS     AGE    INFO
⟳ bluegreen-rollout                            Rollout     ✔ Healthy  4m54s  
├──# revision:2                                                              
│  └──⧉ bluegreen-rollout-95d95c65             ReplicaSet  ✔ Healthy  2m45s  stable,active
│     ├──□ bluegreen-rollout-95d95c65-wcbrs    Pod         ✔ Running  2m45s  ready:1/1
│     └──□ bluegreen-rollout-95d95c65-zj4hk    Pod         ✔ Running  19s    ready:1/1
└──# revision:1                                                              
   └──⧉ bluegreen-rollout-69dc9f5f56           ReplicaSet  ✔ Healthy  4m54s  delay:11s
      ├──□ bluegreen-rollout-69dc9f5f56-b4cqq  Pod         ✔ Running  4m54s  ready:1/1
      └──□ bluegreen-rollout-69dc9f5f56-b5z9x  Pod         ✔ Running  4m54s  ready:1/1
```

稍后再次查看rollouts状态，v1已经成功删除。

```bash
[root@tiaoban argocd]# kubectl argo rollouts get rollout bluegreen-rollout
Name:            bluegreen-rollout
Name:            bluegreen-rollout
Namespace:       default
Status:          ✔ Healthy
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v2 (stable, active)
Replicas:
  Desired:       2
  Current:       2
  Updated:       2
  Ready:         2
  Available:     2

NAME                                         KIND        STATUS        AGE    INFO
⟳ bluegreen-rollout                          Rollout     ✔ Healthy     5m37s  
├──# revision:2                                                               
│  └──⧉ bluegreen-rollout-95d95c65           ReplicaSet  ✔ Healthy     3m28s  stable,active
│     ├──□ bluegreen-rollout-95d95c65-wcbrs  Pod         ✔ Running     3m28s  ready:1/1
│     └──□ bluegreen-rollout-95d95c65-zj4hk  Pod         ✔ Running     62s    ready:1/1
└──# revision:1                                                               
   └──⧉ bluegreen-rollout-69dc9f5f56         ReplicaSet  • ScaledDown  5m37s 
```

## 查看验证
此时访问web页面，生产和测试环境均返回v2版本信息。

![](images/img_404.png)

![](images/img_405.png)

此时查看dashboard页面，内容如下

![](images/img_406.png)

# 版本回退
如果将新版本推送至生产环境，此时发现系统存在问题，就需要进行版本回退，可通过以下方式执行回退。

## Rollouts dashboard
查看当前rollouts状态，生产环境使用v2版本。

```bash
[root@tiaoban ~]# kubectl argo rollouts get rollout bluegreen-rollout 
Name:            bluegreen-rollout
Namespace:       default
Status:          ✔ Healthy
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v2 (stable, active)
Replicas:
  Desired:       2
  Current:       2
  Updated:       2
  Ready:         2
  Available:     2

NAME                                         KIND        STATUS        AGE    INFO
⟳ bluegreen-rollout                          Rollout     ✔ Healthy     2m25s  
├──# revision:2                                                               
│  └──⧉ bluegreen-rollout-95d95c65           ReplicaSet  ✔ Healthy     88s    stable,active
│     ├──□ bluegreen-rollout-95d95c65-w4xrj  Pod         ✔ Running     88s    ready:1/1
│     └──□ bluegreen-rollout-95d95c65-52swj  Pod         ✔ Running     71s    ready:1/1
└──# revision:1                                                               
   └──⧉ bluegreen-rollout-69dc9f5f56         ReplicaSet  • ScaledDown  2m25s
```

执行版本回退

![](images/img_407.png)

查看rollouts状态，v1为预览测试版，v2为生产版本。

```bash
[root@tiaoban ~]# kubectl argo rollouts get rollout bluegreen-rollout 
Name:            bluegreen-rollout
Namespace:       default
Status:          ॥ Paused
Message:         BlueGreenPause
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v1 (preview)
                 ikubernetes/myapp:v2 (stable, active)
Replicas:
  Desired:       2
  Current:       3
  Updated:       1
  Ready:         2
  Available:     2

NAME                                           KIND        STATUS     AGE    INFO
⟳ bluegreen-rollout                            Rollout     ॥ Paused   3m31s  
├──# revision:3                                                              
│  └──⧉ bluegreen-rollout-69dc9f5f56           ReplicaSet  ✔ Healthy  3m31s  preview
│     └──□ bluegreen-rollout-69dc9f5f56-6dsc6  Pod         ✔ Running  13s    ready:1/1
└──# revision:2                                                              
   └──⧉ bluegreen-rollout-95d95c65             ReplicaSet  ✔ Healthy  2m34s  stable,active
      ├──□ bluegreen-rollout-95d95c65-w4xrj    Pod         ✔ Running  2m34s  ready:1/1
      └──□ bluegreen-rollout-95d95c65-52swj    Pod         ✔ Running  2m17s  ready:1/1
```

手动切换版本

```bash
[root@tiaoban argocd]# kubectl argo rollouts promote bluegreen-rollout
rollout 'bluegreen-rollout' promoted
```

此时查看看rollouts状态，v1为生产版本，v2已删除。

```bash
[root@tiaoban ~]# kubectl argo rollouts get rollout bluegreen-rollout 
Name:            bluegreen-rollout
Namespace:       default
Status:          ✔ Healthy
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v1 (stable, active)
Replicas:
  Desired:       2
  Current:       2
  Updated:       2
  Ready:         2
  Available:     2

NAME                                           KIND        STATUS        AGE    INFO
⟳ bluegreen-rollout                            Rollout     ✔ Healthy     5m20s  
├──# revision:3                                                                 
│  └──⧉ bluegreen-rollout-69dc9f5f56           ReplicaSet  ✔ Healthy     5m20s  stable,active
│     ├──□ bluegreen-rollout-69dc9f5f56-6dsc6  Pod         ✔ Running     2m2s   ready:1/1
│     └──□ bluegreen-rollout-69dc9f5f56-6v8hs  Pod         ✔ Running     34s    ready:1/1
└──# revision:2                                                                 
   └──⧉ bluegreen-rollout-95d95c65             ReplicaSet  • ScaledDown  4m23s 
```

版本回退至此完成。

## ArgoCD dashboard
![](images/img_408.png)

查看当前rollouts状态，生产环境使用v3版本。

```bash
[root@tiaoban ~]# kubectl argo rollouts get rollout bluegreen-rollout 
Name:            bluegreen-rollout
Namespace:       default
Status:          ✔ Healthy
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v3 (stable, active)
Replicas:
  Desired:       2
  Current:       2
  Updated:       2
  Ready:         2
  Available:     2

NAME                                           KIND        STATUS        AGE   INFO
⟳ bluegreen-rollout                            Rollout     ✔ Healthy     8m1s  
├──# revision:4                                                                
│  └──⧉ bluegreen-rollout-68c7647dbb           ReplicaSet  ✔ Healthy     108s  stable,active
│     ├──□ bluegreen-rollout-68c7647dbb-2rkrc  Pod         ✔ Running     108s  ready:1/1
│     └──□ bluegreen-rollout-68c7647dbb-wlcmg  Pod         ✔ Running     93s   ready:1/1
├──# revision:3                                                                
│  └──⧉ bluegreen-rollout-69dc9f5f56           ReplicaSet  • ScaledDown  8m1s  
└──# revision:2                                                                
   └──⧉ bluegreen-rollout-95d95c65             ReplicaSet  • ScaledDown  7m4s
```

执行版本回退

![](images/img_409.png)

查看rollouts状态，v2为预览测试版，v3为生产版本。

```bash
[root@tiaoban ~]# kubectl argo rollouts get rollout bluegreen-rollout 
Name:            bluegreen-rollout
Namespace:       default
Status:          ॥ Paused
Message:         BlueGreenPause
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v2 (preview)
                 ikubernetes/myapp:v3 (stable, active)
Replicas:
  Desired:       2
  Current:       3
  Updated:       1
  Ready:         2
  Available:     2

NAME                                           KIND        STATUS        AGE    INFO
⟳ bluegreen-rollout                            Rollout     ॥ Paused      9m12s  
├──# revision:5                                                                 
│  └──⧉ bluegreen-rollout-95d95c65             ReplicaSet  ✔ Healthy     8m15s  preview
│     └──□ bluegreen-rollout-95d95c65-s5tfd    Pod         ✔ Running     19s    ready:1/1
├──# revision:4                                                                 
│  └──⧉ bluegreen-rollout-68c7647dbb           ReplicaSet  ✔ Healthy     2m59s  stable,active
│     ├──□ bluegreen-rollout-68c7647dbb-2rkrc  Pod         ✔ Running     2m59s  ready:1/1
│     └──□ bluegreen-rollout-68c7647dbb-wlcmg  Pod         ✔ Running     2m44s  ready:1/1
└──# revision:3                                                                 
   └──⧉ bluegreen-rollout-69dc9f5f56           ReplicaSet  • ScaledDown  9m12s 
```

手动切换版本

```bash
[root@tiaoban argocd]# kubectl argo rollouts promote bluegreen-rollout
rollout 'bluegreen-rollout' promoted
```

此时查看看rollouts状态，v2为生产版本，v3已删除。

```bash
[root@tiaoban ~]# kubectl argo rollouts get rollout bluegreen-rollout 
Name:            bluegreen-rollout
Namespace:       default
Status:          ✔ Healthy
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v2 (stable, active)
Replicas:
  Desired:       2
  Current:       2
  Updated:       2
  Ready:         2
  Available:     2

NAME                                           KIND        STATUS         AGE    INFO
⟳ bluegreen-rollout                            Rollout     ✔ Healthy      10m    
├──# revision:5                                                                  
│  └──⧉ bluegreen-rollout-95d95c65             ReplicaSet  ✔ Healthy      9m31s  stable,active
│     ├──□ bluegreen-rollout-95d95c65-s5tfd    Pod         ✔ Running      95s    ready:1/1
│     └──□ bluegreen-rollout-95d95c65-dqbrf    Pod         ✔ Running      33s    ready:1/1
├──# revision:4                                                                  
│  └──⧉ bluegreen-rollout-68c7647dbb           ReplicaSet  • ScaledDown   4m15s  
│     └──□ bluegreen-rollout-68c7647dbb-wlcmg  Pod         ◌ Terminating  4m     ready:0/1
└──# revision:3                                                                  
   └──⧉ bluegreen-rollout-69dc9f5f56           ReplicaSet  • ScaledDown   10m 
```

版本回退至此完成。

# 中止发布
例如，在蓝绿部署中，将一部分流量切换到测试环境进行测试，但发现测试环境有重大问题。使用需要停止流量切换过程，保持生产环境继续接收所有流量。

## 更新应用版本
更新v3至测试环境，模拟发布新版本。

```bash
[root@tiaoban argo-demo]# cat argorollout-blue-green/rollout.yaml | grep image
        image: ikubernetes/myapp:v3
[root@tiaoban argo-demo]# git add . && git commit -m "update v3" && git push
```

查看rollouts状态，发现v3已经变为测试环境

```bash
[root@tiaoban argocd]# kubectl argo rollouts get rollout bluegreen-rollout 
Name:            bluegreen-rollout
Namespace:       default
Status:          ॥ Paused
Message:         BlueGreenPause
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v2 (stable, active)
                 ikubernetes/myapp:v3 (preview)
Replicas:
  Desired:       2
  Current:       3
  Updated:       1
  Ready:         2
  Available:     2

NAME                                          KIND        STATUS        AGE    INFO
⟳ bluegreen-rollout                           Rollout     ॥ Paused      8m30s  
├──# revision:3                                                                
│  └──⧉ bluegreen-rollout-cbb459d74           ReplicaSet  ✔ Healthy     87s    preview
│     └──□ bluegreen-rollout-cbb459d74-857w8  Pod         ✔ Running     87s    ready:1/1
├──# revision:2                                                                
│  └──⧉ bluegreen-rollout-95d95c65            ReplicaSet  ✔ Healthy     6m53s  stable,active
│     ├──□ bluegreen-rollout-95d95c65-rs9n7   Pod         ✔ Running     6m53s  ready:1/1
│     └──□ bluegreen-rollout-95d95c65-4nxwc   Pod         ✔ Running     5m20s  ready:1/1
└──# revision:1                                                                
   └──⧉ bluegreen-rollout-69dc9f5f56          ReplicaSet  • ScaledDown  8m30s
```

## 执行中止操作
此时发现v3版本存在重大bug，需要停止发布流程。

```bash
[root@tiaoban ~]# kubectl argo rollouts abort bluegreen-rollout
rollout 'bluegreen-rollout' aborted
```

此时查看rollouts状态，发现v3测试环境已删除。

```bash
[root@tiaoban argocd]# kubectl argo rollouts get rollout bluegreen-rollout 
Name:            bluegreen-rollout
Namespace:       default
Status:          ✖ Degraded
Message:         RolloutAborted: Rollout aborted update to revision 3
Strategy:        BlueGreen
Images:          ikubernetes/myapp:v2 (stable, active)
Replicas:
  Desired:       2
  Current:       2
  Updated:       0
  Ready:         2
  Available:     2

NAME                                         KIND        STATUS        AGE    INFO
⟳ bluegreen-rollout                          Rollout     ✖ Degraded    9m59s  
├──# revision:3                                                               
│  └──⧉ bluegreen-rollout-cbb459d74          ReplicaSet  • ScaledDown  2m56s  preview,delay:passed
├──# revision:2                                                               
│  └──⧉ bluegreen-rollout-95d95c65           ReplicaSet  ✔ Healthy     8m22s  stable,active
│     ├──□ bluegreen-rollout-95d95c65-rs9n7  Pod         ✔ Running     8m22s  ready:1/1
│     └──□ bluegreen-rollout-95d95c65-4nxwc  Pod         ✔ Running     6m49s  ready:1/1
└──# revision:1                                                               
   └──⧉ bluegreen-rollout-69dc9f5f56         ReplicaSet  • ScaledDown  9m59s 
```

此时访问生产环境，仍然可以正常访问v2版本服务

![](images/img_410.png)

访问测试环境，已经无法提供服务。

![](images/img_411.png)



---

<a id="174841570"></a>

## ArgoCD应用发布 - 金丝雀发布

# 概念介绍
金丝雀发布（Canary Release）是一种软件发布策略，旨在逐步推出新版本的应用程序，以便在实际生产环境中小规模测试新版本的功能和性能，减少发布风险。这个名字来源于矿工在矿井中使用金丝雀作为早期预警系统的做法，金丝雀发布也是为了在早期阶段发现潜在问题。

## 基本概念
1. 逐步发布：新版本的应用程序不会立即替换旧版本，而是逐步地、小规模地发布给一小部分用户。
2. 实时监控：在金丝雀发布过程中，实时监控新版本的性能和行为，以便及时发现和处理问题。
3. 快速回滚：如果新版本出现问题，可以迅速回滚到旧版本，确保服务稳定。
4. 分流流量：将一部分用户流量导向新版本，剩余流量继续使用旧版本。随着新版本被验证稳定，可以逐步增加导向新版本的流量比例，直到完全替换旧版本。

## 发布流程
1. 准备环境：
    - 确保当前的生产环境运行稳定，并且具有良好的监控和日志记录机制。
    - 配置必要的工具和平台（以支持金丝雀发布策略。
2. 部署金丝雀版本：
    - 将新版本部署到生产环境中，但仅运行少量实例（如一个或少数几个 Pod）。
    - 这些实例通常会有专门的标记（label）或服务（service）用于识别和流量路由。
3. 流量分配：
    - 通过负载均衡器，将一小部分用户流量导向新版本。
    - 大部分用户流量仍然导向旧版本，以保证整体服务的稳定性。
4. 监控和验证：
    - 实时监控新版本的关键性能指标（如响应时间、错误率、资源使用等）。
    - 收集用户反馈和日志信息，检查是否存在错误或性能问题。
5. 逐步扩展：
    - 如果新版本表现良好，逐步增加导向新版本的流量比例。
    - 每次增加流量后，重复监控和验证步骤，确保新版本继续表现稳定。
6. 全面发布或回滚：
    - 如果新版本在所有流量下均表现稳定，最终完全替换旧版本。
    - 如果发现问题，立即回滚到旧版本，停止导向新版本的流量。

![](images/img_412.png)

# 创建Rollout及资源
## rollout.yaml
创建rollout资源，定义发布策略和对应的server，以及deployment信息。

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: canary-rollout
spec:
  replicas: 10 # 定义期望的 Pod 副本数
  strategy: # 定义升级策略
    canary: # 金丝雀发布
      # 2个 svc 名称
      canaryService: canary-active  # 正式版本服务名
      stableService: canary-preview  # 预览版本服务名
      trafficRouting: # 配置加权轮循规则
        # nginx ingress 配置：官方文档：https://argoproj.github.io/argo-rollouts/features/traffic-management/nginx/
        # nginx:
        #   # Either stableIngress or stableIngresses must be configured, but not both.
        #   stableIngress: demo-stable-ingress
        # traefik 配置: 官方文档：https://argoproj.github.io/argo-rollouts/features/traffic-management/traefik/
        traefik: 
          weightedTraefikServiceName: canary-service # traefik加权轮循服务名
      steps:  # 发布的节奏
      - setWeight: 10 # 将10%的流量导向新版本
      - pause:
          duration: 5m # 暂停5分钟，用于监控新版本的表现。
      - setWeight: 30 # 将30%的流量导向新版本
      - pause:
          duration: 1m # 暂停1分钟，用于监控新版本的表现。
      - setWeight: 60 # 将60%的流量导向新版本
      - pause:
          duration: 30s # 暂停30秒钟，用于监控新版本的表现。
      - setWeight: 100 # 将 100% 的流量导向新版本，完成金丝雀发布。
  revisionHistoryLimit: 2 # 保留的修订历史版本数
  selector: # 定义Pod模板标签，类似deployment
    matchLabels:
      app: myapp
  template: # 定义Pod模板，类似deployment
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: ikubernetes/myapp:v1
        ports:
        - name: http
          containerPort: 80
          protocol: TCP
```

## service.yaml
```yaml
# 接收生产流量的Service
apiVersion: v1
kind: Service
metadata:
  name: canary-active
spec:
  type: ClusterIP
  selector:
    app: myapp
  ports:
  - name: http
    port: 80
---
# 接收预览测试流量的Service
apiVersion: v1
kind: Service
metadata:
  name: canary-preview
spec:
  type: ClusterIP
  selector:
    app: myapp
  ports:
  - name: http
    port: 80
```

## ingress.yaml
由于argocd老版本并未适配traefik3.1。因此推荐升级argocd版本或者降低traefik版本至2.X，或者3.X的traefik创建TraefikService时两个接口都创建。

```yaml
apiVersion: traefik.containo.us/v1alpha1
kind: TraefikService # traefik加权轮循服务
metadata:
  name: canary-service
spec:
  weighted:
    services:
      - name: canary-active # 正式版本服务名
        port: 80
      - name: canary-preview # 预览版本服务名
        port: 80
---
apiVersion: traefik.io/v1alpha1
kind: TraefikService # traefik加权轮循服务
metadata:
  name: canary-service
spec:
  weighted:
    services:
      - name: canary-active # 正式版本服务名
        port: 80
      - name: canary-preview # 预览版本服务名
        port: 80
---
# 生产环境service对应的ingress
apiVersion: traefik.io/v1alpha1
kind: IngressRoute # traefik路由转发服务
metadata:
  name: myapp-canary
spec:
  entryPoints:
  - web
  routes:
  - match: Host(`canary.myapp.com`) # 域名
    kind: Rule
    services:
      - name: canary-service # 关联traefik加权轮循服务
        kind: TraefikService
```

# 创建Argo App
## 推送文件至仓库
使用gitops理念，将yaml文件推送至git仓库，由argoCD负责完成部署。

```yaml
[root@tiaoban argo-demo]# git add . && git commit -m "add argorollout-canary" && git push
```

此时git仓库内容如下

![](images/img_413.png)

## 创建Directory App
```yaml
[root@tiaoban argocd]# cat canary.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: canary
  namespace: argocd
spec:
  destination:
    name: ''
    namespace: default
    server: 'https://kubernetes.default.svc'
  source:
    path: argorollout-canary
    repoURL: 'http://gitlab.local.com/devops/argo-demo.git'
    targetRevision: main
  sources: []
  project: default
  syncPolicy:
    automated:
      prune: false
      selfHeal: false
[root@tiaoban argocd]# kubectl apply -f canary.yaml 
application.argoproj.io/canary created
```

## 查看验证
查看argo dashboard，已经显示canary应用成功部署。

![](images/img_414.png)

CLI查看应用状态

```bash
[root@tiaoban argocd]# argocd login argocd.local.com
[root@tiaoban argocd]# argocd app list
WARN[0000] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
NAME           CLUSTER                         NAMESPACE  PROJECT       STATUS  HEALTH   SYNCPOLICY  CONDITIONS  REPO                                          PATH                TARGET
argocd/canary  https://kubernetes.default.svc  default    default       Synced  Healthy  Auto        <none>      http://gitlab.local.com/devops/argo-demo.git  argorollout-canary  main
argocd/demo    https://kubernetes.default.svc             demo-project  Synced  Healthy  Auto        <none>      http://gitlab.local.com/devops/argo-demo.git  manifests           HEAD
[root@tiaoban argocd]# kubectl get application -n argocd
NAME     SYNC STATUS   HEALTH STATUS
canary   Synced        Healthy
demo     Synced        Healthy
```

kubectl查看状态

```bash
[root@tiaoban argocd]# kubectl get pod
NAME                              READY   STATUS    RESTARTS       AGE
canary-rollout-69dc9f5f56-28rcd   1/1     Running   0              11s
canary-rollout-69dc9f5f56-4l4wk   1/1     Running   0              11s
canary-rollout-69dc9f5f56-9wfl4   1/1     Running   0              11s
canary-rollout-69dc9f5f56-dntp5   1/1     Running   0              11s
canary-rollout-69dc9f5f56-fbhxx   1/1     Running   0              11s
canary-rollout-69dc9f5f56-jkj8j   1/1     Running   0              11s
canary-rollout-69dc9f5f56-mxrsb   1/1     Running   0              11s
canary-rollout-69dc9f5f56-ptgmc   1/1     Running   0              11s
canary-rollout-69dc9f5f56-qkzxd   1/1     Running   0              11s
canary-rollout-69dc9f5f56-rhl68   1/1     Running   0              11s
[root@tiaoban argocd]# kubectl get svc
NAME             TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
canary-active    ClusterIP   10.108.166.128   <none>        80/TCP     89s
canary-preview   ClusterIP   10.98.9.90       <none>        80/TCP     89s
[root@tiaoban argocd]# kubectl get ingressroute
NAME         AGE
myapp-canary 31s
```

添加hosts解析后访问ingress验证

![](images/img_415.png)

# 更新版本
## 查看Rollouts状态
在更新应用版本前，先查看Rollouts状态，便于后续更新后对比效果。

```yaml
[root@tiaoban ~]# kubectl argo rollouts get rollout canary-rollout
Name:            canary-rollout
Namespace:       default
Status:          ✔ Healthy
Strategy:        Canary
  Step:          7/7
  SetWeight:     100
  ActualWeight:  100
Images:          ikubernetes/myapp:v1 (stable)
Replicas:
  Desired:       10
  Current:       10
  Updated:       10
  Ready:         10
  Available:     10

NAME                                        KIND        STATUS     AGE  INFO
⟳ canary-rollout                            Rollout     ✔ Healthy  63s  
└──# revision:1                                                         
   └──⧉ canary-rollout-69dc9f5f56           ReplicaSet  ✔ Healthy  63s  stable
      ├──□ canary-rollout-69dc9f5f56-28rcd  Pod         ✔ Running  63s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-4l4wk  Pod         ✔ Running  63s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-9wfl4  Pod         ✔ Running  63s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-dntp5  Pod         ✔ Running  63s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-fbhxx  Pod         ✔ Running  63s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-jkj8j  Pod         ✔ Running  63s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-mxrsb  Pod         ✔ Running  63s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-ptgmc  Pod         ✔ Running  63s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-qkzxd  Pod         ✔ Running  63s  ready:1/1
      └──□ canary-rollout-69dc9f5f56-rhl68  Pod         ✔ Running  63s  ready:1/1
```

此时可以看到，只有一个canary-rollout-69dc9f5f56控制器在提供服务。

## 更新应用版本
修改rollout.yaml，将image镜像从v1升级为v2。

```bash
[root@tiaoban argocd]# cat argorollout-canary/rollout.yaml | grep image
        image: ikubernetes/myapp:v2
[root@tiaoban argo-demo]# git add . && git commit -m "update v2" && git push
```

## 流量状态观察
待ArgoCD完成自动部署后，再次查看资源状态信息。此时可以发现增加了1个副本的v2版本的canary。

```bash
[root@tiaoban argocd]# kubectl argo rollouts get rollout bluegreen-rollout
Name:            canary-rollout
Namespace:       default
Status:          ॥ Paused
Message:         CanaryPauseStep
Strategy:        Canary
  Step:          1/7
  SetWeight:     10
  ActualWeight:  10
Images:          ikubernetes/myapp:v1 (stable)
                 ikubernetes/myapp:v2 (canary)
Replicas:
  Desired:       10
  Current:       11
  Updated:       1
  Ready:         11
  Available:     11

NAME                                        KIND        STATUS     AGE    INFO
⟳ canary-rollout                            Rollout     ॥ Paused   2m23s  
├──# revision:2                                                           
│  └──⧉ canary-rollout-95d95c65             ReplicaSet  ✔ Healthy  3s     canary
│     └──□ canary-rollout-95d95c65-jj54b    Pod         ✔ Running  3s     ready:1/1
└──# revision:1                                                           
   └──⧉ canary-rollout-69dc9f5f56           ReplicaSet  ✔ Healthy  2m23s  stable
      ├──□ canary-rollout-69dc9f5f56-28rcd  Pod         ✔ Running  2m23s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-4l4wk  Pod         ✔ Running  2m23s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-9wfl4  Pod         ✔ Running  2m23s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-dntp5  Pod         ✔ Running  2m23s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-fbhxx  Pod         ✔ Running  2m23s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-jkj8j  Pod         ✔ Running  2m23s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-mxrsb  Pod         ✔ Running  2m23s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-ptgmc  Pod         ✔ Running  2m23s  ready:1/1
      ├──□ canary-rollout-69dc9f5f56-qkzxd  Pod         ✔ Running  2m23s  ready:1/1
      └──□ canary-rollout-69dc9f5f56-rhl68  Pod         ✔ Running  2m23s  ready:1/1
```

此时查看pod信息，新增了canary-rollout-95d95c65-n6hsl的pod，运行v2版本的镜像。

```bash
[root@tiaoban ~]# kubectl get pod
NAME                              READY   STATUS    RESTARTS        AGE
canary-rollout-69dc9f5f56-28rcd   1/1     Running   0               2m47s
canary-rollout-69dc9f5f56-4l4wk   1/1     Running   0               2m47s
canary-rollout-69dc9f5f56-9wfl4   1/1     Running   0               2m47s
canary-rollout-69dc9f5f56-dntp5   1/1     Running   0               2m47s
canary-rollout-69dc9f5f56-fbhxx   1/1     Running   0               2m47s
canary-rollout-69dc9f5f56-jkj8j   1/1     Running   0               2m47s
canary-rollout-69dc9f5f56-mxrsb   1/1     Running   0               2m47s
canary-rollout-69dc9f5f56-ptgmc   1/1     Running   0               2m47s
canary-rollout-69dc9f5f56-qkzxd   1/1     Running   0               2m47s
canary-rollout-69dc9f5f56-rhl68   1/1     Running   0               2m47s
canary-rollout-95d95c65-jj54b     1/1     Running   0               27s
```

查看traefik dashboard，此时active权重为90，preview权重为10。

![](images/img_416.png)

此时连续发起10次请求，查看响应信息

```bash
[root@tiaoban ~]# for i in {1..10}; do curl canary.myapp.com; done
Hello MyApp | Version: v1 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v1 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v1 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v1 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v1 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v1 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v1 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v1 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v1 | <a href="hostname.html">Pod Name</a>
```

可以看到，在前5分钟只有10%的流量请求到了v2版本的服务中。

10分钟后，金丝雀发布完成，此时再次访问验证，流量全部到v2版本的服务，且v1版本的服务已经停止。

```bash
[root@tiaoban ~]# for i in {1..10}; do curl canary.myapp.com; done
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
Hello MyApp | Version: v2 | <a href="hostname.html">Pod Name</a>
[root@tiaoban ~]# kubectl argo rollouts get rollout canary-rollout
Name:            canary-rollout
Namespace:       default
Status:          ✔ Healthy
Strategy:        Canary
  Step:          7/7
  SetWeight:     100
  ActualWeight:  100
Images:          ikubernetes/myapp:v2 (stable)
Replicas:
  Desired:       10
  Current:       10
  Updated:       10
  Ready:         10
  Available:     10

NAME                                      KIND        STATUS        AGE    INFO
⟳ canary-rollout                          Rollout     ✔ Healthy     14m    
├──# revision:2                                                            
│  └──⧉ canary-rollout-95d95c65           ReplicaSet  ✔ Healthy     11m    stable
│     ├──□ canary-rollout-95d95c65-jj54b  Pod         ✔ Running     11m    ready:1/1
│     ├──□ canary-rollout-95d95c65-glmvn  Pod         ✔ Running     6m52s  ready:1/1
│     ├──□ canary-rollout-95d95c65-np99r  Pod         ✔ Running     6m52s  ready:1/1
│     ├──□ canary-rollout-95d95c65-pd4xr  Pod         ✔ Running     5m51s  ready:1/1
│     ├──□ canary-rollout-95d95c65-qb76x  Pod         ✔ Running     5m51s  ready:1/1
│     ├──□ canary-rollout-95d95c65-s7gdh  Pod         ✔ Running     5m51s  ready:1/1
│     ├──□ canary-rollout-95d95c65-9s4kl  Pod         ✔ Running     5m20s  ready:1/1
│     ├──□ canary-rollout-95d95c65-bvgqd  Pod         ✔ Running     5m20s  ready:1/1
│     ├──□ canary-rollout-95d95c65-l2tp4  Pod         ✔ Running     5m20s  ready:1/1
│     └──□ canary-rollout-95d95c65-q64rc  Pod         ✔ Running     5m20s  ready:1/1
└──# revision:1                                                            
   └──⧉ canary-rollout-69dc9f5f56         ReplicaSet  • ScaledDown  14m 
```

查看traefik负载均衡权重，此时active权重为0，preview权重为100。

![](images/img_417.png)

# 版本回退与中止发布
与前文蓝绿部署操作过程一致，此处不再赘述。





---

<a id="174841631"></a>

## ArgoCD应用发布 - App of Apps模式

# 简介
## 概念介绍
"App of Apps" 模式是指在 Argo CD 中创建一个父应用（App），这个父应用负责管理多个子应用（Apps）。每个子应用可以代表一个具体的应用程序或微服务。父应用定义了子应用的 Git 仓库位置和相关配置，当父应用被部署或更新时，Argo CD 会自动同步和管理所有子应用。

## 使用场景
+ **微服务架构**：每个微服务作为一个独立的子应用，通过父应用进行统一管理。
+ **多环境管理**：不同环境（如开发、测试、生产）的配置作为不同的子应用，通过父应用进行环境切换和配置管理。
+ **分层部署**：将复杂的应用拆分为多个模块，每个模块作为一个子应用进行管理。
+ **GitOps： **通过 Git 中的 YAML 定义 Application 对象，由 Argo CD 自动同步，实现Argo CD Application 的创建自动化。

# 创建 App of Apps
## 文件目录结构与内容
将app-of-apps目录推送至argo demo仓库，此时文件目录结构如下，其中root-app为父app，app1和2为子app。

```bash
app-of-apps
├── app1
│   ├── deployment.yaml
│   ├── ingress.yaml
│   └── svc.yaml
├── app2
│   ├── deployment.yaml
│   ├── ingress.yaml
│   └── svc.yaml
└── root-app
    └── applications.yaml
```

+ applications.yaml

```bash
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: app1 # 子app1
  namespace: argocd
spec:
  project: default
  source:
    repoURL: 'http://gitlab.local.com/devops/argo-demo.git' # 子app的仓库以及目录
    path: 'app-of-apps/app1'
    targetRevision: HEAD
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: default
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
---
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: app2
  namespace: argocd
spec:
  project: default
  source:
    repoURL: 'http://gitlab.local.com/devops/argo-demo.git'
    path: 'app-of-apps/app2'
    targetRevision: HEAD
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: default
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

两个子app只需要更改资源名称、镜像名称即可。

+ deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp1
spec:
  selector:
    matchLabels:
      app: myapp1
  template:
    metadata:
      labels:
        app: myapp1
    spec:
      containers:
      - name: myapp1
        image: ikubernetes/myapp:v1
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        ports:
        - containerPort: 80
```

+ svc.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp1
spec:
  type: ClusterIP
  selector:
    app: myapp1
  ports:
  - port: 80
    targetPort: 80
```

+ ingress.yaml

```yaml
apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: myapp1
spec:
  entryPoints:
  - web
  routes:
  - match: Host(`myapp1.local.com`) # 域名
    kind: Rule
    services:
      - name: myapp1  # 与svc的name一致
        port: 80      # 与svc的port一致
```

## 创建APP
```yaml
[root@tiaoban argocd]# cat app-of-apps.yaml 
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapps
  namespace: argocd
spec:
  project: default
  source:
    repoURL: 'http://gitlab.local.com/devops/argo-demo.git'
    path: 'app-of-apps/root-app' # 指向父app仓库目录
    targetRevision: HEAD
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: argocd
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

## 查看验证
此时查看ArgoCD dashboard，已经创建了一个父app和两个子app。

![](images/img_418.png)

查看部署资源信息，已成功创建两个app以及相关资源。

```bash
[root@tiaoban argocd]# kubectl get pod
NAME                      READY   STATUS    RESTARTS       AGE
myapp1-f486545bd-fdqcc    1/1     Running   0              6m22s
myapp2-6c5bbccf65-7lk26   1/1     Running   0              6m21s
[root@tiaoban argocd]# kubectl get svc
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
kubernetes   ClusterIP   10.96.0.1        <none>        443/TCP    283d
myapp1       ClusterIP   10.96.154.132    <none>        80/TCP     6m26s
myapp2       ClusterIP   10.105.126.196   <none>        80/TCP     6m25s
[root@tiaoban argocd]# kubectl get ingressroute
NAME     AGE
myapp1   6m31s
myapp2   6m30s
```



---

<a id="174841645"></a>

## ArgoCD应用发布 - 多集群应用部署

# 简介
## 方案介绍
ArgoCD基于声明式配置和同步机制，适用于多环境部署、跨区域/跨云部署、高可用性和灾难恢复、统一管理和监控、合规性和审计，以及团队协作等场景。通过这些功能和特点，ArgoCD 大大简化了多集群应用管理的复杂性，提高了部署和运维的效率。

## 适用场景
1. **多环境部署**：适用于在不同环境（例如开发、测试、生产）中部署相同的应用程序。每个环境可以对应一个不同的 Kubernetes 集群，ArgoCD 可以确保每个环境的配置一致性。
2. **跨区域/跨云部署**：当需要在多个地理区域或多个云提供商（如 AWS、GCP、Azure）中部署应用程序时，ArgoCD 多集群支持可以简化跨区域或跨云的部署管理。
3. **高可用性和灾难恢复**：通过在多个集群中部署相同的应用程序，可以实现高可用性和灾难恢复。如果一个集群发生故障，其他集群仍然可以继续提供服务。
4. **统一管理和监控**：对于拥有多个 Kubernetes 集群的组织，ArgoCD 提供了统一的管理和监控界面，使得运维团队可以在一个界面中查看和管理所有集群中的应用部署状态。
5. **合规性和审计**：通过 Git 仓库管理所有的配置文件，所有的变更都有记录和审计历史。确保配置变更的可追溯性和合规性。
6. **团队协作**：不同的团队可以在同一个或多个 Git 仓库中协作管理应用配置，ArgoCD 确保不同团队的配置变更能够一致地应用到目标集群中。

# 创建多集群应用
## 添加集群
假设现在有两套集群，已经在k8s-ha集群部署了gitlab和Argocd，现在需要添加k8s-test集群。

在添加集群前，先配置config上下文，具体内容可参考文档：[https://www.cuiliangblog.cn/detail/section/175557663](https://www.cuiliangblog.cn/detail/section/175557663)

```bash
[root@tiaoban .kube]# kubectl config get-contexts
CURRENT   NAME                  CLUSTER    AUTHINFO     NAMESPACE
*         ha-admin@k8s-ha       k8s-ha     ha-admin     
          test-admin@k8s-test   k8s-test   test-admin 
[root@tiaoban .kube]# kubectl get node
NAME      STATUS   ROLES           AGE    VERSION
master1   Ready    control-plane   285d   v1.27.6
master2   Ready    control-plane   285d   v1.27.6
master3   Ready    control-plane   285d   v1.27.6
work1     Ready    <none>          285d   v1.27.6
work2     Ready    <none>          285d   v1.27.6
work3     Ready    <none>          285d   v1.27.6
[root@tiaoban .kube]# kubectl config use-context test-admin@k8s-test
Switched to context "test-admin@k8s-test".
[root@tiaoban .kube]# kubectl get node
NAME         STATUS   ROLES                  AGE   VERSION
k8s-master   Ready    control-plane,master   21h   v1.23.17
k8s-work1    Ready    <none>                 20h   v1.23.17
k8s-work2    Ready    <none>                 20h   v1.23.17
```

ArgoCD添加集群

```bash
[root@tiaoban ~]# argocd login argocd.local.com
WARNING: server certificate had error: tls: failed to verify certificate: x509: certificate is valid for de4d64dda4cc17aa063ca24baa2abc22.6d1744aa3a6f00c3129e20bc6d196dd0.traefik.default, not argocd.local.com. Proceed insecurely (y/n)? y
WARN[0002] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
Username: admin
Password: 
'admin:login' logged in successfully
Context 'argocd.local.com' updated
[root@tiaoban ~]# argocd cluster add test-admin@k8s-test --kubeconfig=/root/.kube/config
WARNING: This will create a service account `argocd-manager` on the cluster referenced by context `test-admin@k8s-test` with full cluster level privileges. Do you want to continue [y/N]? y
INFO[0003] ServiceAccount "argocd-manager" created in namespace "kube-system" 
INFO[0003] ClusterRole "argocd-manager-role" created    
INFO[0003] ClusterRoleBinding "argocd-manager-role-binding" created 
WARN[0004] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
Cluster 'https://192.168.10.10:6443' added
```

查看集群状态信息如下

![](images/img_419.png)

## 创建Project
创建名为test的项目，授权k8s-test集群进行操作。

![](images/img_420.png)

## 创建应用
继续使用app of apps项目yaml文件，修改applications.yaml，模拟将其中一个子应用发布至test集群。

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application # 子应用1，发布至default项目
metadata:
  name: app1
  namespace: argocd
spec:
  project: default
  source:
    repoURL: 'http://gitlab.local.com/devops/argo-demo.git'
    path: 'app-of-apps/app1'
    targetRevision: HEAD
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: default
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
---
apiVersion: argoproj.io/v1alpha1
kind: Application # 子应用2，发布至test项目
metadata:
  name: app2 
  namespace: argocd
spec:
  project: test # 指定test项目
  source:
    repoURL: 'http://gitlab.local.com/devops/argo-demo.git'
    path: 'app-of-apps/app2'
    targetRevision: HEAD
  destination:
    server: 'https://192.168.10.10:6443' # 修改为test集群地址
    namespace: default
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

## 发布验证
修改完applications.yaml后推送至仓库，argoCD会自动进行发布，查看发布信息如下：

![](images/img_421.png)

此时访问test集群查看资源，已经成功创建myapp2资源。

```yaml
[root@tiaoban ~]# kubectl config use-context test-admin@k8s-test
Switched to context "test-admin@k8s-test".
[root@tiaoban ~]# kubectl get pod
NAME                      READY   STATUS    RESTARTS   AGE
myapp2-7f8b7dfcc8-7lhd7   1/1     Running   0          2m4s
```



---

<a id="174841493"></a>

## ArgoCD应用发布 - ApplicationSet应用集

# 简介
Argo CD ApplicationSet 是 Argo CD 的一个高级功能，用于大规模和动态地管理应用程序。它允许你使用一个模板和一些参数来创建和管理多个 Argo CD Application 对象。

## 使用场景
+ 管理多个环境（如开发、测试、生产）
+ 管理多租户应用
+ 部署相同应用的多个实例

通常需要手动创建一个个 Application 配置，单个个 Application 大多数的内容都是一样的，此时使用ApplicationSet 就可以大幅减少配置工作量。

## 工作原理
Argo CD ApplicationSet 使用一个 ApplicationSet CRD（自定义资源定义），该 CRD 包含一个生成器（generator）和一个模板（template）。生成器定义如何生成应用程序参数（例如，从 Git 仓库、集群、列表等），而模板定义了生成的每个应用程序的配置。

## 生成器类型
| 生成器 | 介绍 | 使用场景 |
| --- | --- | --- |
| List 生成器 | 允许手动定义一组静态参数集合，每个集合用于生成一个应用。 | 适用于需要部署固定数量的应用程序，每个应用程序有不同的参数。例如，多个环境（开发、测试、生产）的配置。 |
| Git 生成器 | 根据 Git 仓库中的目录结构动态生成应用程序。它扫描指定的目录路径，并根据每个子目录生成一个应用。 | 适用于按照 Git 仓库结构部署多个应用。例如，每个子目录代表一个微服务或环境配置。 |
| Cluster 生成器 | 根据 Argo CD 中注册的集群列表生成应用程序。它会为每个注册的集群创建一个应用。 | 适用于需要在多个 Kubernetes 集群上部署相同应用的场景。比如在多集群环境中进行应用分发。 |
| Matrix 生成器 | 可以组合多个生成器生成的参数集合。它会创建所有可能的参数组合，每个组合生成一个应用。 | 适用于需要组合不同参数生成复杂应用集合的场景。例如，不同集群和不同环境的组合部署。 |
| SCM Provider 生成器 | 使用 SCM 提供商（如 GitHub、GitLab）的 API 列出仓库、分支或文件夹，根据这些信息生成应用。 | 适用于根据版本控制系统中的资源（如仓库或分支）动态生成应用程序的场景。比如根据所有活跃分支创建开发环境。 |
| Pull Request 生成器 | 根据 SCM 提供商（如 GitHub、GitLab）的 Pull Request 列表生成应用程序。每个 Pull Request 生成一个应用。 | 适用于创建临时环境以测试每个 Pull Request 的场景。例如，CI/CD 流程中为每个 Pull Request 部署一个临时测试环境。 |
| Cluster Decision Resource 生成器 | 根据 Open Cluster Management (OCM) 的 ClusterDecisionResource (CDR) 列表生成应用程序。 | 使用 OCM 管理多个集群，并需要根据集群决策资源动态生成应用程序的场景。 |
| Plugin生成器 | 通过 RPC HTTP 请求来获取生成应用程序所需的参数。它调用外部服务来获取参数集合。 | 适用于需要从外部服务动态获取参数并生成应用程序的场景。例如，根据外部配置管理系统或自定义服务的响应生成应用。 |
| Merge 生成器 | 可以合并两个或多个生成器生成的参数。附加生成器可以覆盖基础生成器的值。 | 适用于需要组合多个来源的数据，并且需要对部分参数进行覆盖的复杂场景。例如，基础参数从一个生成器获取，特定环境或集群的覆盖参数从另一个生成器获取。 |


# List生成器
官方参考文档：[https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/Generators-List/](https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/Generators-List/)

从元素`elements`列表中生成变量。可以根据需要构建元素列表并使用。ApplicationSet控制器随后将循环该列表以生成变量。

## 前提条件
同时将myapp项目分别发布至dev、test、uat、prod名称空间下。需要注意的是[http://gitlab.cuiliangblog.cn/devops/argo-demo.git](http://gitlab.cuiliangblog.cn/devops/argo-demo.git)仓库manifests 目录下的文件不要设置 namespace，由 argocd 统一管理。

![](images/img_422.png)

提前创建 namespace 或者配置 devops 项目具备 namespace 管理权限。

![](images/img_423.png)

## 创建应用集
使用 一份 ApplicationSet，自动在两个不同集群、不同 namespace 下部署相同的一套应用，App资源清单如下：

```yaml
[root@tiaoban application-set]# cat list.yaml 
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: applicationset-list
  namespace: argocd
spec:
  generators:
  - list:
      elements:
      - name: prod
        server: https://kubernetes.default.svc
        namespace: prod
      - name: test
        server: https://192.168.10.15:6443
        namespace: test
  template:      
    metadata:
      name: '{{namespace}}-myapp' # 使用动态值列表
    spec:
      project: devops
      source:
        path: manifests
        repoURL: http://gitlab.cuiliangblog.cn/devops/argo-demo.git
        targetRevision: main
      destination:
        server: '{{server}}' # 使用动态值列表
        namespace: '{{namespace}}' # 使用动态值列表
      syncPolicy:
        syncOptions: # 自动创建namespace
          - CreateNamespace=true  
        automated:
          prune: false
          selfHeal: false
[root@tiaoban application-set]# kubectl apply -f list.yaml 
applicationset.argoproj.io/applicationset-list created
```

## 查看验证
创建后查看argoCD dashboard，已经成功在两个集群不同的名称空间下创建了app应用。

![](images/img_424.png)

# Cluster生成器
官方参考文档：[https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/Generators-Cluster/](https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/Generators-Cluster/)

Cluster生成器允许遍历由 `ArgoCD 配置和管理的 Kubernetes 集群`。由于集群是`通过Secret`配置的，ApplicationSet控制器将使用这些 Kubernetes Secret为每个集群生成参数。

集群生成器是一个映射`{}`，默认情况下，以 ArgoCD 配置和管理的所有 Kubernetes 集群为目标，但它还允许您`使用选择器（可以是标签）来定位特定集群`。

+ server:  地址
+ name: cluster名称
+ selector: 通过label选择集群(Secret)
+ values: 添加其他字段,可以通过使用该字段根据目标 Kubernetes 集群添加额外设置，将其他键值对传递给集群生成器。

## 配置集群
## 添加其他集群
具体可参考文档[https://www.cuiliangblog.cn/detail/section/174841645](https://www.cuiliangblog.cn/detail/section/174841645)，此处不再赘述，添加集群后的效果如下：

![](images/img_425.png)

## 创建APP(全部集群)
```yaml
[root@tiaoban application-set]# cat cluster.yaml 
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: applicationset-cluster
  namespace: argocd
spec:
  generators:
  - clusters: {} # 全部集群部署
  template:      
    metadata:
      name: '{{name}}-myapp'  ## name值就是clustername(prod, test)
    spec:
      project: devops
      source:
        path: manifests
        repoURL: http://gitlab.cuiliangblog.cn/devops/argo-demo.git
        targetRevision: main
      destination:
        server: '{{server}}'   # server值就是cluster集群的地址
        namespace: default     # 部署到default名称空间
      syncPolicy:
        syncOptions: # 自动创建namespace
          - CreateNamespace=true  
        automated:
          prune: false
          selfHeal: false
[root@tiaoban application-set]# kubectl apply -f cluster.yaml 
applicationset.argoproj.io/applicationset-cluster created
```

查看部署信息，分别在 prod 和 test 集群创建了集群名-myapp 的应用。

![](images/img_426.png)

## 添加集群标签
有时候我们并不需要所有集群都部署应用，我们可以通过标签选择器，让拥有指定标签的集群部署应用，例如只让具有prod=true标签的集群部署应用。

修改集群配置，新增 env=prod 的标签

![](images/img_427.png)

## 创建APP(指定标签)
```yaml
[root@tiaoban application-set]# cat cluster.yaml 
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: applicationset-cluster
  namespace: argocd
spec:
  generators:
  - clusters:
      selector:
        matchLabels: # 筛选指定标签
          env: "prod"
  template:      
    metadata:
      name: '{{name}}-myapp'  ## name值就是clustername(prod, test)
    spec:
      project: devops
      source:
        path: manifests
        repoURL: http://gitlab.cuiliangblog.cn/devops/argo-demo.git
        targetRevision: main
      destination:
        server: '{{server}}'   # server值就是cluster集群的地址
        namespace: default     # 部署到default名称空间
      syncPolicy:
        syncOptions: # 自动创建namespace
          - CreateNamespace=true  
        automated:
          prune: false
          selfHeal: false
[root@tiaoban application-set]# kubectl apply -f cluster.yaml 
applicationset.argoproj.io/applicationset-cluster created
```

查看验证

![](images/img_428.png)

# Git生成器
参考文档：[https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/Generators-Git/](https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/Generators-Git/)

Git 生成器包含两个子类型：Git 目录生成器和 Git 文件生成器，可以根据git仓库的目录或文件作为参数传递到模板中。

## 目录生成器
在apps目录下分别创建两个目录，分别存放生产和测试环境的yaml文件

![](images/img_429.png)

目录结构如下：

```bash
# tree application-set 
application-set
└── myapp
    ├── prod
    │   └── deployment.yaml
    └── test
        └── deployment.yaml
```

创建APP，内容如下，通过不同的目录名创建不同的app。

```yaml
[root@tiaoban application-set]# kubectl apply -f git-dir.yaml 
applicationset.argoproj.io/applicationset-git-dir created
[root@tiaoban application-set]# cat git-dir.yaml 
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: applicationset-git-dir
  namespace: argocd
spec:
  generators:
  - git:
      repoURL: http://gitlab.cuiliangblog.cn/devops/argo-demo.git
      revision: HEAD
      directories:
      - path: application-set/myapp/* # 扫描路径
  template:      
    metadata:
      name: 'myapp-{{path.basename}}' # myapp-目录名称（prod,test）
    spec:
      project: devops
      source:
        repoURL: http://gitlab.cuiliangblog.cn/devops/argo-demo.git
        targetRevision: main
        path: '{{path}}'  # 完整的路径(application-set/myapps/prod或test)
      destination:
        server: https://kubernetes.default.svc
        namespace: '{{path.basename}}' # 目录名称
      syncPolicy:
        syncOptions:
          - CreateNamespace=true  
        automated:
          prune: false
          selfHeal: false
```

效果如下所示，分别在 prod 和 test 名称空间创建了两个myapp应用。

![](images/img_430.png)

git 目录生成器可以使用的变量如下

| 变量名 | 含义 | 示例值 |
| --- | --- | --- |
| `{{path}}` | 目录的完整相对路径（相对仓库根目录） | `apps/backend` |
| `{{path.basename}}` | 目录的最后一层名称 | `backend` |
| `{{path.dirname}}` | 父目录路径 | `apps` |
| `{{path.basenameNormalized}}` | basename 中的特殊字符替换为 `-`（如 `/`、`_`、`.`） | `backend` |
| `{{revision}}` | 当前扫描的 Git 分支或标签 | `main` |
| `{{repoURL}}` | 当前仓库 URL | `https://gitlab.example.com/devops/gitops.git` |


## 文件生成器
在config目录下分别创建 dev、prod、test 目录，模拟不同环境下的配置文件。

![](images/img_431.png)  
文件内容可以是 json 或者 yaml 文件格式，以 json 为例，内容和目录结构如下

```yaml
[root@tiaoban application-set]# tree application-set/config 
application-set/config
├── dev
│   └── config.json
├── prod
│   └── config.json
└── test
    └── config.json

3 directories, 3 files
[root@tiaoban application-set]# cat config/dev/config.json 
{
    "name": "myapp-dev",
    "config": {
        "server": "https://192.168.10.15:6443",
        "namespace": "dev"
    }
}
[root@tiaoban application-set]# cat config/test/config.json
{
    "name": "myapp-prod",
    "config": {
        "server": "https://192.168.10.15:6443",
        "namespace": "prod"
    }
}
[root@tiaoban application-set]# cat config/prod/config.json
{
    "name": "myapp-test",
    "config": {
        "server": "https://kubernetes.default.svc",
        "namespace": "test"
    }
}
```

创建APP，内容如下，通过不同的配置文件创建不同的app。

```yaml
[root@tiaoban application-set]# kubectl apply -f git-file.yaml 
applicationset.argoproj.io/applicationset-git-file created
[root@tiaoban application-set]# cat git-file.yaml 
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: applicationset-git-file
  namespace: argocd
spec:
  generators:
  - git:
      repoURL: http://gitlab.cuiliangblog.cn/devops/argo-demo.git
      revision: HEAD
      files:
      - path: "application-set/config/**/config.json"
  template:      
    metadata:
      name: '{{name}}' # config.json文件name字段内容(myapp-prod,myapp-test)
    spec:
      project: default
      source:
        repoURL: http://gitlab.cuiliangblog.cn/devops/argo-demo.git
        targetRevision: main
        path: manifests
      destination:
        server: '{{config.server}}' # config.json文件config.server字段内容
        namespace: '{{config.namespace}}' # config.json文件config.namespace字段内容(prod,test)
      syncPolicy:
        syncOptions:
          - CreateNamespace=true  
        automated:
          prune: false
          selfHeal: false
```

效果如下所示，分别创建了 dev、test、prod 的 myapp应用。

![](images/img_432.png)

# Matrix 生成器
参考文档：[https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/Generators-Matrix/](https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/Generators-Matrix/)

Matrix 生成器组合了两个子生成器生成的参数，迭代每个生成器生成的参数的每个组合。

通过组合两个生成器参数来生成每种可能的组合，这使您能够获得两个生成器的内在属性。使用场景案例：

+ SCM Provider Generator + Cluster Generator：扫描 GitHub 组织的存储库以获取应用程序资源，并将这些资源定位到所有可用集群。
+ Git File Generator + List Generator：提供要通过配置文件部署的应用程序列表，以及可选的配置选项，并将它们部署到固定的集群列表。
+ Git Directory Generator + Cluster Decision Resource Generator：找到 Git 存储库的文件夹中包含的应用程序资源，并将它们部署到通过外部自定义资源提供的集群列表。

## git目录生成器+cluster生成器
将上述案例中的2个git目录和2个cluster进行组合，共生成4个应用。

创建APP，内容如下，通过不同的配置文件创建不同的app。

```yaml
[root@tiaoban application-set]# kubectl apply -f git-dir-cluster.yaml
applicationset.argoproj.io/applicationset-git-dir created
[root@tiaoban application-set]# cat git-dir-cluster.yaml
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: applicationset-git-dir-cluster
  namespace: argocd
spec:
  generators:
  - matrix:
      generators:
      - git: # git目录生成器，myapp目录下共有2个应用
          repoURL: http://gitlab.cuiliangblog.cn/devops/argo-demo.git
          revision: HEAD
          directories:
          - path: application-set/myapp/* # 扫描路径
      - clusters: {} # cluster生成器，共有2个集群
  template:      
    metadata:
      name: 'cluster.{{name}}-ns.{{path.basename}}' # clustername(prod、test)与目录名称（myapp1,myapp2）组合
    spec:
      project: devops
      source:
        repoURL: http://gitlab.cuiliangblog.cn/devops/argo-demo.git
        targetRevision: main
        path: '{{path}}'  # 完整的路径(application-set/myapps/prod或test)
      destination:
        server: '{{server}}' # cluster生成器的集群地址
        namespace: '{{path.basename}}' # git目录生成器的目录名称
      syncPolicy:
        syncOptions:
          - CreateNamespace=true  
        automated:
          prune: false
          selfHeal: false
```

效果如下所示，分别在prod和test集群创建了2个myapp应用。

![](images/img_433.png)



---

<a id="241726007"></a>

## ArgoCD应用发布 - Application管理最佳实践

# 应用管理介绍
之前的教程中，所有 Application 的创建管理都是在 web 页面或者通过 yaml 文件管理。但是在实际生产环境中，所有 Application 的创建和更新也应该要通过 gitops 流程进行发布与版本管理，而不是手动的去创建一个又一个 Application。

## 最佳实践
最佳实践是让 ArgoCD 自动监听 Git 仓库中的 Application YAML 文件，一旦有新增或修改，就自动创建或更新对应的应用。  

这样配置后，你只需要：

1. 编写 Application YAML
2. 推送到 Git
3. 其他全部自动完成！

从而实现了 GitOps 的声明式自动化管理！

## 场景举例
假设我们是一家中大型的AI公司，需要使用GitLab 管理研发、运维、模型和数据项目。gitlab 层级关系设计如下：

Group：infra（基础设施组）

+ cmdb（运维平台代码仓库）

Group：model（模型训练与推理组）

+ project：vllm（推理服务代码仓库）

Group：product（产品线组）

+ project：backend（产品后端代码仓库）
+ project：frontend（产品前端代码仓库）

现在需要对所有项目通过 gitops 实现统一发布管理，但是每个用户组只能管理并发布自己组下的应用。

## 环境准备
### 创建部署文件项目
依次创建 infra、model、product群组，并新建相关的项目，以cmdb-deploy 项目为例，内容如下：

![](images/img_434.png)

其他 XXX-deploy 项目内容也是如此，我们可以提前规定所有部署文件必须位于项目根目录的manifests 目录下（也可以根据不同项目灵活指定，此处只是规范建议）

### 创建 project
依次创建 infra、model、product 项目，并记得给 project 授予创建 k8s 的 namespace 资源权限。

![](images/img_435.png)

### 创建 repo
依次添加cmdb-deploy、vllm-deploy、backend-deploy、frontend-deploy 项目。

![](images/img_436.png)

至此，准备工作已经就绪，接下来开始通过 gitops 方式管理 Application 应用。

# App of Apps 方式
## 实现原理与步骤
在上线新项目的时候，创建一个对应的 Application 配置仓库。

该仓库的根目录下创建一个“父级 Application”，它指向一个 Git 路径（例如 `apps/` 目录），  
该路径下包含多个子 `Application`的 YAML，例如前端、后端、生产、测试环境配置。  
ArgoCD 同步父 App 时，就会自动创建/更新所有子 App。  

## gitlab 项目结构
创建 gitlab 项目，内容如下

![](images/img_437.png)

### 目录结构
需要注意的是App of Apps 模式默认扫描该路径下的 YAML 是 Application 对象， 不会去递归扫描子目录 。  

```bash
# tree .
.
├── apps
│   ├── infra.yaml
│   └── model.yaml
└── root-app.yaml
```

### 父应用定义（root-app.yaml）
 一个顶层 `Application`，它指向一个 Git 仓库目录。

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: app-of-apps # 顶层 Application 的名称
  namespace: argocd  # Application 资源创建在 Argo CD 命名空间
spec:
  project: devops # 指定属于哪个 Argo CD Project（权限/命名空间范围）
  source:
    repoURL: http://gitlab.cuiliangblog.cn/devops/gitops-app-of-apps.git # 仓库地址
    targetRevision: main # 要拉取的分支
    path: apps         # Git 仓库中子 Application YAML 文件所在目录
    directory:
      recurse: true # 递归扫描目录下的Application文件
      jsonnet: {} # 递归查找子目录中的 Jsonnet 文件并渲染成 Kubernetes YAML
  destination:
    server: https://kubernetes.default.svc # 部署到当前集群
    namespace: argocd # Application 对象本身存放的命名空间
  syncPolicy: # 自动同步策略
    automated:
      prune: true # 当 Git 仓库里删掉某个资源时，Argo CD 会自动删除集群中的对应资源；
      selfHeal: true # 当集群状态偏离 Git（例如被手动修改），Argo CD 会自动恢复为 Git 定义的状态；
```

### 子应用定义（各 Application）
 该目录下再存放多个子 `Application` 的 YAML 文件。  

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: cmdb            # 应用名称，可自定义
  namespace: argocd           # 注意：Application 必须部署在 argocd 命名空间
spec:
  project: infra             # 绑定到的 ArgoCD Project 名称
  source:
    repoURL: http://gitlab.cuiliangblog.cn/infra/cmdb-deploy.git   # 代码仓库地址
    targetRevision: HEAD                                         # 分支（HEAD=默认分支）
    path: manifests                                              # 仓库内 YAML/Helm 文件路径
  destination:
    server: https://kubernetes.default.svc   # 目标集群（本集群）
    namespace: default                       # 部署到的命名空间
  syncPolicy:
    automated:                               # 启用自动同步
      prune: true                            # 自动删除 Git 中已移除的资源
      selfHeal: true                         # 自动修复偏离集群状态的资源
    syncOptions:
      - CreateNamespace=true                 # 若目标命名空间不存在则自动创建
```

## argocd 创建应用
### 添加 repo
![](images/img_438.png)

### 部署父应用
```yaml
# ls
apps  root-app.yaml
# kubectl apply -f root-app.yaml
application.argoproj.io/devops-app created
```

## 查看验证
登录 argocd，查看 app-of-apps 应用信息。可以看到它自动创建了两个 Application。

![](images/img_439.png)

![](images/img_440.png)

后续如果需要对应用进行新增或者修改，只需要修改 git 仓库 apps 目录下的文件即可。

## 应用更新验证
假设 cmdb 应用新增 service 配置，我们只需要在 cmdb-deploy 项目的 manifests 目录下新增 service.yaml 文件。

![](images/img_441.png)

查看 argocd 应用状态，已经成功新增了 service 资源。

![](images/img_442.png)

## 新增应用验证
假设现在有product（产品线组）应用需要发布。他们的项目分别是backend-deploy（产品后端代码仓库）和 frontend-deploy（产品前端代码仓库）。

我们之前已经在gitlab 分别创建对应项目，并且在argocd 新增 project 和 repo 资源。

接下来我们在gitops-App of Apps 项目的 apps 目录下新增如下内容如下。

```yaml
# tree .     
.
├── apps
│   ├── infra.yaml
│   ├── product.yaml # 新增product项目配置文件
│   └── model.yaml
└── root-app.yaml

1 directory, 4 files
# cat apps/product.yaml
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: product                # ApplicationSet 名称
  namespace: argocd            # 所在命名空间（必须与 Argo CD 控制器相同）
spec:
  generators:
  - list:                      # 使用 list 生成器，定义一组静态的应用参数
      elements:                # 每个元素代表一个要生成的 Application
      - name: backend          # 应用名标识（动态模板中可引用）
        server: https://kubernetes.default.svc     # 要部署的集群 API 地址（当前集群）
        repoURL: http://gitlab.cuiliangblog.cn/product/backend-deploy.git  # 后端应用的 Git 仓库
        namespace: prod        # 部署命名空间
      - name: frontend         # 第二个子应用（前端）
        server: https://192.168.10.15:6443         # 要部署到的另一集群（远程集群）
        repoURL: http://gitlab.cuiliangblog.cn/product/frontend-deploy.git  # 前端应用 Git 仓库
        namespace: prod        # 同样部署到 prod 命名空间
  template:                    # 模板部分：定义每个生成 Application 的通用模板
    metadata:
      name: '{{name}}-product' # 每个 Application 的名字会自动拼接 name（如 backend-product）
    spec:
      project: product         # 所属 Argo CD Project，用于权限范围划分
      source:
        path: manifests        # 指定在仓库中应用 YAML 文件所在路径
        repoURL: '{{repoURL}}' # 动态引用上面 list 元素中的 repoURL
        targetRevision: main   # 同步的分支（通常是 main 或 master）
      destination:
        server: '{{server}}'   # 动态指定目标集群地址
        namespace: '{{namespace}}' # 动态指定部署命名空间
      syncPolicy:              # 同步策略
        syncOptions:
          - CreateNamespace=true  # 自动创建目标 namespace（若不存在）
        automated:
          prune: false          # 不自动清理集群中多余资源（更安全）
          selfHeal: false       # 不自动修复偏移状态（避免误操作）
```

git 提交后，我们登录 app-root 应用进行同步，然后就会新增两个 Application。

![](images/img_443.png)

查看应用状态，已经全部完成发布。

![](images/img_444.png)

# ApplicationSet 方式
通过 app of apps 方式，我们虽然实现了指定项目下所有 Application 的统一管理与 gitops 发布，但我们观察各个 Application 配置就会发现有 90%以上的配置都是重复的，并且每当有新项目上线时，仍然需要手动拷贝并修改 Application 配置。此时使用 ApplicationSet 可以大幅降低配置工作量。

## 实现思路
+ 为每个业务项目在 ArgoCD 中创建独立的 **AppProject**，并通过 ApplicationSet 模板中的 `project:` 字段分别关联。  
+ 通过 **ApplicationSet+Git **目录生成器；定期扫描一个 Git 仓库；
+ 读取其中的“应用定义文件”（例如 `apps/*.yaml`）；
+ 把这些文件的内容作为变量传入模板；
+ 自动生成多个 ArgoCD `Application` 对象。

## gitlab项目配置
### 目录结构
我们接下来创建一个类似 root 的项目，可以管理所有要通过 argocd 发布的项目。目录结构如下：

```bash
# tree gitops-applicationSet 
gitops-applicationSet
├── applications
│   ├── applicationset.yaml # 应用集
│   ├── infra
│   │   └── cmdb.yaml
│   └── model
│       └── vllm.yaml
└── root.yaml # 创建整个应用yaml
```

将该项目推送到 gitlab 仓库，并在 argocd 添加 repo。

### root.yaml
```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: root      # 应用名称，可自定义
  namespace: argocd           # 注意：Application 必须部署在 argocd 命名空间
spec:
  project: devops
  source:
    repoURL: http://gitlab.cuiliangblog.cn/devops/gitops-applicationSet.git
    path: applications
    targetRevision: HEAD
  destination:
    server: https://kubernetes.default.svc
    namespace: argocd
  syncPolicy:
    automated:                               # 启用自动同步
      prune: true                            # 自动删除 Git 中已移除的资源
      selfHeal: true                         # 自动修复偏离集群状态的资源
```

### applicationset.yaml
其中 applicationset.yaml 文件内容如下：

```yaml
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: applicationset
  namespace: argocd
spec:
  goTemplate: true
  goTemplateOptions: ["missingkey=error"]
  generators:
  - git:
      repoURL: http://gitlab.cuiliangblog.cn/devops/gitops-applicationSet.git
      revision: HEAD
      directories:
      - path: applications/* # 扫描路径
  template:      
    metadata:
      name: '{{.path.basename}}' # 组名（infra、model）
    spec:
      project: '{{.path.basename}}'
      source:
        repoURL: http://gitlab.cuiliangblog.cn/devops/gitops-applicationSet.git
        targetRevision: HEAD
        path: '{{.path.path}}'  # 完整的路径(application-set/myapps/prod或test)
      destination:
        server: https://kubernetes.default.svc
        namespace: argocd 
      syncPolicy:
        automated:                               # 启用自动同步
          prune: true                            # 自动删除 Git 中已移除的资源
          selfHeal: true                         # 自动修复偏离集群状态的资源
```

### cmdb.yaml
```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: cmdb            # 应用名称，可自定义
  namespace: argocd           # 注意：Application 必须部署在 argocd 命名空间
spec:
  project: infra             # 绑定到的 ArgoCD Project 名称
  source:
    repoURL: http://gitlab.cuiliangblog.cn/infra/cmdb-deploy.git   # 代码仓库地址
    targetRevision: HEAD                                         # 分支（HEAD=默认分支）
    path: manifests                                              # 仓库内 YAML/Helm 文件路径
  destination:
    server: https://kubernetes.default.svc   # 目标集群（本集群）
    namespace: default                       # 部署到的命名空间
  syncPolicy:
    automated:                               # 启用自动同步
      prune: true                            # 自动删除 Git 中已移除的资源
      selfHeal: true                         # 自动修复偏离集群状态的资源
    syncOptions:
      - CreateNamespace=true                 # 若目标命名空间不存在则自动创建
```

### vllm.yaml
```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: vllm            # 应用名称，可自定义
  namespace: argocd           # 注意：Application 必须部署在 argocd 命名空间
spec:
  project: model             # 绑定到的 ArgoCD Project 名称
  source:
    repoURL: http://gitlab.cuiliangblog.cn/model/vllm-deploy.git   # 代码仓库地址
    targetRevision: HEAD                                         # 分支（HEAD=默认分支）
    path: manifests                                              # 仓库内 YAML/Helm 文件路径
  destination:
    server: https://kubernetes.default.svc   # 目标集群（本集群）
    namespace: default                       # 部署到的命名空间
  syncPolicy:
    automated:                               # 启用自动同步
      prune: true                            # 自动删除 Git 中已移除的资源
      selfHeal: true                         # 自动修复偏离集群状态的资源
    syncOptions:
      - CreateNamespace=true                 # 若目标命名空间不存在则自动创建

```

## argocd 配置
创建对应的项目、repo，并配置项目对 repo 仓库的读取权限。

## 创建 root 应用
```yaml
# ls
applications  root.yaml
# kubectl apply -f root.yaml 
application.argoproj.io/root created
```

## 查看验证
创建完 root 应用后进行同步，便可以自动创建出对应的 Application

![](images/img_445.png)

此时应用发布状态如下

![](images/img_446.png)

## 应用更新验证
假设 vllm 应用新增 service 配置，我们只需要在 vllm-deploy 项目的 manifests 目录下新增 service.yaml 文件。

![](images/img_447.png)

查看 argocd 应用状态，已经成功新增了 service 资源。

![](images/img_448.png)

## 新增应用验证
假设现在有product（产品线组）应用需要发布。他们的项目分别是backend-deploy（产品后端代码仓库）和 frontend-deploy（产品前端代码仓库）。

首先在gitlab 分别创建对应项目，然后在 argocd 新增 project 和 repo 资源，可参考前文，不再赘述。

gitops 项目 application 目录创建对应资源，内容如下。

```yaml
tree .     
.
├── applications
│   ├── applicationset.yaml
│   ├── infra
│   │   └── cmdb.yaml
│   ├── model
│   │   └── vllm.yaml
│   └── product
│       ├── backend.yaml
│       └── frontend.yaml
└── root.yaml
# cat applications/product/backend.yaml 
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: backend            # 应用名称，可自定义
  namespace: argocd           # 注意：Application 必须部署在 argocd 命名空间
spec:
  project: product             # 绑定到的 ArgoCD Project 名称
  source:
    repoURL: http://gitlab.cuiliangblog.cn/product/backend-deploy.git   # 代码仓库地址
    targetRevision: HEAD                                         # 分支（HEAD=默认分支）
    path: manifests                                              # 仓库内 YAML/Helm 文件路径
  destination:
    server: https://kubernetes.default.svc   # 目标集群（本集群）
    namespace: product                       # 部署到的命名空间
  syncPolicy:
    automated:                               # 启用自动同步
      prune: true                            # 自动删除 Git 中已移除的资源
      selfHeal: true                         # 自动修复偏离集群状态的资源
    syncOptions:
      - CreateNamespace=true                 # 若目标命名空间不存在则自动创建
# cat applications/product/frontend.yaml 
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: frontend            # 应用名称，可自定义
  namespace: argocd           # 注意：Application 必须部署在 argocd 命名空间
spec:
  project: product             # 绑定到的 ArgoCD Project 名称
  source:
    repoURL: http://gitlab.cuiliangblog.cn/product/frontend-deploy.git   # 代码仓库地址
    targetRevision: HEAD                                         # 分支（HEAD=默认分支）
    path: manifests                                              # 仓库内 YAML/Helm 文件路径
  destination:
    server: https://kubernetes.default.svc   # 目标集群（本集群）
    namespace: product                       # 部署到的命名空间
  syncPolicy:
    automated:                               # 启用自动同步
      prune: true                            # 自动删除 Git 中已移除的资源
      selfHeal: true                         # 自动修复偏离集群状态的资源
    syncOptions:
      - CreateNamespace=true                 # 若目标命名空间不存在则自动创建
```

git 提交后，我们登录root 应用查看信息，就会新增一个 product 对应的 ApplicationSet。

![](images/img_449.png)

查看应用状态，已经全部完成发布。

![](images/img_450.png)

# 对比总结
| 项目 | App-of-Apps 模式 | ApplicationSet 模式 |
| --- | --- | --- |
| 子应用定义 | 直接在 Git 写多个 Application YAML | 写参数文件（简化） |
| 新增一个应用 | 手动添加一个新的 Application YAML | 只需在 `apps/`<br/> 目录新增一个 `xxx.yaml` |
| Application 创建方式 | ArgoCD 同步时直接 apply 这些 Application | ApplicationSet controller 自动生成 Application |
| 删除应用 | 删除 Application YAML | 删除参数文件，自动删除对应 Application |
| 适用场景 | 小量应用、结构复杂 | 大量相似结构、批量自动化 |


在实际使用中，App-of-Apps 和ApplicationSet 模式并不是二选一，而是可以混合使用的。因此我们可以根据实际需求，灵活组合，从而实现更加强大的部署模板配置。



---

<a id="173479217"></a>

## CI/CD项目综合实践 - gitlab+linux项目实践

# 项目简介
<font style="color:rgb(48, 49, 51);">利用Gitlab、Gitlab Runner(rpm)、SonarQube、Artifactory、Jmeter、Maven、Java技术，搭建一个完整的 CI/CD 管道，实现当开发人员完成代码提交后，开始流水线工作，完成编译打包、单元测试、源码扫描、上传制品、部署服务到Linux主机、自动化测试工作。通过自动化构建、测试、代码质量检查和容器化部署，将开发人员从繁琐的手动操作中解放出来，提高团队的开发效率、软件质量和安全性，实现持续更新迭代和持续部署交付。</font>

## <font style="color:rgb(48, 49, 51);">CI/CD流程图</font>
![](images/img_451.jpeg)

## <font style="color:rgb(48, 49, 51);">流程说明</font>
1. <font style="color:rgb(48, 49, 51);">开发人员将代码提交到Gitlab代码仓库时，触发持续构建和持续部署流程。</font>
2. <font style="color:rgb(48, 49, 51);">使用Maven环境的Gitlab Runner实现编译打包、单元测试、源码扫描和上传制品操作。</font>
3. <font style="color:rgb(48, 49, 51);">使用Java环境的Gitlab Runner实现服务springboot部署。</font>
4. <font style="color:rgb(48, 49, 51);">使用JMeter环境的Gitlab Runner实现自动化测试。</font>
5. <font style="color:rgb(48, 49, 51);">流水线执行完成后，将结果邮件通知给开发和运维人员。</font>
6. <font style="color:rgb(48, 49, 51);">用户访问项目服务器。</font>

## <font style="color:rgb(48, 49, 51);">服务器列表</font>
| **<font style="color:rgb(48, 49, 51);">服务器名称</font>** | **<font style="color:rgb(48, 49, 51);">主机名</font>** | **<font style="color:rgb(48, 49, 51);">IP</font>** | **<font style="color:rgb(48, 49, 51);">部署服务</font>** | **<font style="color:rgb(48, 49, 51);">Runner标签</font>** |
| --- | --- | --- | --- | --- |
| <font style="color:rgb(48, 49, 51);">代码审查服务器</font> | <font style="color:rgb(48, 49, 51);">sonarqube</font> | <font style="color:rgb(48, 49, 51);">192.168.10.71</font> | <font style="color:rgb(48, 49, 51);">SonarQube</font> | <font style="color:rgb(48, 49, 51);"></font> |
| <font style="color:rgb(48, 49, 51);">代码托管服务器</font> | <font style="color:rgb(48, 49, 51);">gitlab</font> | <font style="color:rgb(48, 49, 51);">192.168.10.72</font> | <font style="color:rgb(48, 49, 51);">Gitlab</font> | <font style="color:rgb(48, 49, 51);"></font> |
| 打包编译服务器 | maven | 192.168.10.74 | Java、Maven | build |
| <font style="color:rgb(48, 49, 51);">服务部署服务器</font> | springboot | 192.168.10.75 | Java | <font style="color:rgb(48, 49, 51);">deployment</font> |
| <font style="color:rgb(48, 49, 51);">制品库服务器</font> | <font style="color:rgb(48, 49, 51);">artifactory</font> | <font style="color:rgb(48, 49, 51);">192.168.10.76</font> | <font style="color:rgb(48, 49, 51);">artifactory</font> | <font style="color:rgb(48, 49, 51);"></font> |
| 自动化测试服务器 | jmeter | <font style="color:rgb(48, 49, 51);">192.168.10.77</font> | Java、jmeter | test |


## 服务部署
+ Gitlab：[https://www.cuiliangblog.cn/detail/section/92727905](https://www.cuiliangblog.cn/detail/section/92727905)
+ <font style="color:rgb(48, 49, 51);">SonarQube</font>：[https://www.cuiliangblog.cn/detail/section/131467837](https://www.cuiliangblog.cn/detail/section/131467837)
+ Artifactory：[https://www.cuiliangblog.cn/detail/section/172000978](https://www.cuiliangblog.cn/detail/section/172000978)
+ Jmeter：[https://www.cuiliangblog.cn/detail/section/173491430](https://www.cuiliangblog.cn/detail/section/173491430)

# 模板库创建
## 模板库功能介绍
通常情况下项目流水线大部分的内容都是相同的，为了实现模板复用，减少重复代码，我们可以创建一个git仓库用于存放模板，然后创建一个templates目录存放所有pipeline的模板，创建一个jobs目录存放job模板。

这样我们可以将一些maven、golang、npm工具通过一个job模板和不同的构建命令实现。templates的好处是我们在其中定义了模板流水线，这些流水线可以直接让项目使用。当遇到个性化项目的时候就可以在当前项目创建.gitlab-ci.yml文件来引用模板文件，再进一步实现个性化需要。

## 模板库地址
gitee：[https://gitee.com/cuiliang0302/gitlabci-template](https://gitee.com/cuiliang0302/gitlabci-template)

## 模板库创建
创建模板库项目Gitlabci Template

![](images/img_452.png)

项目文件目录结构如下所示：

```bash
[root@tiaoban gitlabci-template]# tree .
.
├── jobs
│   ├── artifactory.yml
│   ├── build.yml
│   ├── deploy.yml
│   ├── jmeter.yml
│   ├── sonarqube.yml
│   └── test.yml
├── README.md
└── templates
    ├── java-docker.yml
    ├── java-k8s.yml
    └── java-linux.yml
```

artifactory.yml

```yaml
# 制品库上传与下载
variables: # 全局变量
  ARTIFACTORY_PUBLIC_URL: http://192.168.10.76:8081/artifactory # Artifactory地址

.upload-artifact:
  stage: upload-artifact
  tags:
    - build
  script:
    - echo "curl -u$ARTIFACT_USER:$ARTIFACTORY_KEY -T $ARTIFACT_FILE_PATH "$ARTIFACTORY_PUBLIC_URL/$ARTIFACT_REPO/$ARTIFACT_URL_PATH""
    - curl -u$ARTIFACT_USER:$ARTIFACTORY_KEY -T $ARTIFACT_FILE_PATH "$ARTIFACTORY_PUBLIC_URL/$ARTIFACT_REPO/$ARTIFACT_URL_PATH"

.download-artifact:
  stage: download-artifact
  tags:
    - build
  script:
    - curl -u${ARTIFACT_USER}:${ARTIFACT_PASSWD} -O "$ARTIFACTORY_PUBLIC_URL/$ARTIFACT_REPO/$ARTIFACT_URL_PATH"
    - ls
```

build.yml

```yaml
# 打包编译
.mvn-build:
  stage: build
  tags:
    - build
  script: 
    - mvn clean package -DskipTests -Dmaven.repo.local=/home/gitlab-runner/cache/maven
  after_script:
    - ls target/
  artifacts: 
    paths: # 收集打包后的制品
      - target/
  cache:
    policy: pull  # 不下载缓存
```

deploy.yml

```yaml
# 服务部署
.deploy-linux: # 部署到linux系统
  stage: deploy
  tags:
    - deploy
  script:
    - sh -x $DEPLOY_PATH $ARTIFACT_USER $ARTIFACTORY_KEY /opt/$ARTIFACT_URL_PATH $ARTIFACTORY_PUBLIC_URL/$ARTIFACT_REPO/$ARTIFACT_URL_PATH
```

jmeter.yml

```yaml
# jmeter自动化测试
.jmeter: 
  stage: test
  tags: 
    - jmeter
  script:
    - "jmeter -n -t $JMETER_PATH -l $CI_PROJECT_NAME-$CI_COMMIT_SHORT_SHA.jt1 -e -o $PWD/public -Jjemter.save.saveservice.output_format=csv"
  after_script:
    - ls $PWD/public/
  artifacts: # 收集站点page页内容
    paths:
      - public
```

sonarqube.yml

```yaml
# sonarqube代码扫描
variables: 
  SONAR_QUBE_URL: http://192.168.10.71:9000 # sonarqube服务地址

.sonarqube:
  stage: code_scan
  tags:
    - build
  script:
    - "sonar-scanner -Dsonar.projectKey=$CI_PROJECT_NAME -Dproject.settings=$SONAR_QUBE_PATH \
      -Dsonar.branch.name=$CI_COMMIT_REF_NAME -Dsonar.host.url=$SONAR_QUBE_URL -Dsonar.login=$SONAR_QUBE_TOEKN"
```

test.yml

```yaml
# 单元测试
.mvn_unit_test:
  stage: build
  tags:
    - build
  script:
    - mvn test -Dmaven.repo.local=/home/gitlab-runner/cache/maven
  after_script:
    - ls target/surefire-reports/
  artifacts:
    reports:
      junit: target/surefire-reports/TEST-*.xml
```

# 流水线项目创建
## 项目代码仓库地址
gitee：[https://gitee.com/cuiliang0302/spring_boot_demo](https://gitee.com/cuiliang0302/spring_boot_demo)  
github：[https://github.com/cuiliang0302/spring-boot-demo](https://github.com/cuiliang0302/spring-boot-demo)

## gitlab项目权限配置
具体参考文档：[https://www.cuiliangblog.cn/detail/section/169621642](https://www.cuiliangblog.cn/detail/section/169621642)

## Runner部署配置
Runner安装：[https://www.cuiliangblog.cn/detail/section/123128550](https://www.cuiliangblog.cn/detail/section/123128550)

Runner注册：[https://www.cuiliangblog.cn/detail/section/123863613](https://www.cuiliangblog.cn/detail/section/123863613)

注册后记得修改Runner为特权用户，避免部署阶段无法创建目录导致部署失败。

注册的Runner执行器类型为Shell，作用范围为<font style="color:rgb(48, 49, 51);">shared类型，注册</font>后效果如下：

![](images/img_453.png)

## 配置密钥变量
进入项目——>设置——>CI/CD——>变量

新建ARTIFACTORY_KEY、SONAR_QUBE_TOEKN两个变量，取消保护变量，并勾选隐藏变量。

变量配置信息内容如下：

![](images/img_454.png)

## 配置邮件发送
具体可参考文档：[https://www.cuiliangblog.cn/detail/section/173068275](https://www.cuiliangblog.cn/detail/section/173068275)

## 流水线配置
在项目根目录下创建.gitlab-ci.yml文件

![](images/img_455.png)

文件内容如下

```yaml
include: # 引入模板库公共文件
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/build.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/test.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/sonarqube.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/artifactory.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/deploy.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/jmeter.yml'


variables: # 全局变量
  SONAR_QUBE_PATH: "$CI_PROJECT_DIR/cicd/sonar-project.properties" # sonarqube配置文件地址
  # 制品上传
  ARTIFACT_REPO: devops # Artifactory仓库名
  ARTIFACT_USER: admin # Artifactory用户名
  ARTIFACT_FILE_PATH: target/*.jar # 制品本地路径
  ARTIFACT_URL_PATH: "$CI_PROJECT_NAME/$CI_COMMIT_BRANCH/$CI_PROJECT_NAME-$CI_COMMIT_SHORT_SHA.jar" # 制品仓库路径
  # 服务部署
  DEPLOY_PATH: "$CI_PROJECT_DIR/cicd/deployment-linux.sh" # 服务部署脚本路径
  # 自动化测试
  JMETER_PATH: "$CI_PROJECT_DIR/cicd/jmeter/demo.jmx" # 自动化测试脚本路径

default:
  cache: # 全局缓存配置
    paths:
      - target/

stages:
  - build
  - code_scan
  - product
  - deploy
  - test

mvn: # 编译打包
  stage: build
  extends: .mvn-build
  tags:
    - build
  
unit_test: # 单元测试
  stage: build
  extends: .mvn_unit_test
  tags:
    - build

code_scan: # SonarQube代码扫描
  stage: code_scan
  extends: .sonarqube
  tags:
    - build
  
product: # 上传到制品库
  stage: product
  extends: .upload-artifact
  tags: 
    - build

deploy_to_prod: # 部署到生产环境
  stage: deploy
  extends: .deploy-linux
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
  tags: 
    - deployment
  after_script:
    - sleep 10
    - ss -tunlp | grep 8888
  environment: # 生产环境
    name: production
    url: http://prod.demo.com:8888

deploy_to_test: # 部署到测试环境
  stage: deploy
  extends: .deploy-linux
  rules:
    - if: '$CI_COMMIT_BRANCH == "test"'
  tags: 
    - build
  after_script:
    - sleep 10
    - ss -tunlp | grep 8888
  environment: # 测试环境
    name: test
    url: http://test.demo.com:8888

pages: # 自动化测试并收集测试报告
  stage: test
  extends: .jmeter
  tags: 
    - test
```

# 结果验证
创建完pipeline后，自动触发流水线，效果如下：

## 流水线信息
![](images/img_456.png)

## 环境信息
![](images/img_457.png)

## 单元测试报告
![](images/img_458.png)

## 制品库内容
![](images/img_459.png)

## 自动化测试结果
![](images/img_460.png)

## 服务器进程信息
```bash
[root@client1 ~]# ss -tunlp | grep java
tcp   LISTEN 0      100                *:8888            *:*    users:(("java",pid=35089,fd=9)) 
[root@client1 ~]# curl 127.0.0.1:8888
<h1>Hello SpringBoot</h1><p>Version:v1 Env:prod</p>
```

## 邮件通知
![](images/img_461.png)

## 访问验证
修改hosts地址，新增hosts解析记录 192.168.10.74 prod.demo.com

![](images/img_462.png)





---

<a id="172326640"></a>

## CI/CD项目综合实践 - gitlab+docker项目实践

# 项目简介
<font style="color:rgb(48, 49, 51);">利用Docker、Gitlab、Gitlab Runner(docker)、SonarQube、Harbor、Jmeter、Maven、Java技术，搭建一个完整的 CI/CD 管道，实现当开发人员完成代码提交后，开始流水线工作，完成编译打包、单元测试、源码扫描、上传制品、部署服务到Docker容器、自动化测试工作。通过自动化构建、测试、代码质量检查和容器化部署，将开发人员从繁琐的手动操作中解放出来，提高团队的开发效率、软件质量和安全性，实现持续更新迭代和持续部署交付。</font>

## <font style="color:rgb(48, 49, 51);">CI/CD流程图</font>
![](images/img_463.jpeg)

## <font style="color:rgb(48, 49, 51);">流程说明</font>
1. <font style="color:rgb(48, 49, 51);">开发人员将代码提交到Gitlab代码仓库时，触发持续构建和持续部署流程。</font>
2. <font style="color:rgb(48, 49, 51);">在build标签的Runner上通过maven镜像实现编译打包、单元测试操作。</font>
3. <font style="color:rgb(48, 49, 51);">在build标签的Runner上通过sonar-scanner镜像请求sonarqube服务，实现源码扫描操作。</font>
4. <font style="color:rgb(48, 49, 51);">在build标签的Runner上通过docker-dind镜像实现项目镜像构建并推送至Harbor镜像仓库。</font>
5. <font style="color:rgb(48, 49, 51);">在deployment标签的Runner上执行shell脚本完成镜像拉取以及启动容器服务操作。</font>
6. <font style="color:rgb(48, 49, 51);">在build标签的Runner上通过jmeter镜像实现自动化测试操作。</font>
7. <font style="color:rgb(48, 49, 51);">流水线执行完成后，将结果邮件通知给开发和运维人员。</font>
8. <font style="color:rgb(48, 49, 51);">用户访问项目服务器。</font>

## <font style="color:rgb(48, 49, 51);">服务器列表</font>
| **<font style="color:rgb(48, 49, 51);">服务器名称</font>** | **<font style="color:rgb(48, 49, 51);">主机名</font>** | **<font style="color:rgb(48, 49, 51);">IP</font>** | **<font style="color:rgb(48, 49, 51);">部署服务</font>** | **<font style="color:rgb(48, 49, 51);">Runner标签</font>** |
| --- | --- | --- | --- | --- |
| <font style="color:rgb(48, 49, 51);">代码审查服务器</font> | <font style="color:rgb(48, 49, 51);">sonarqube</font> | <font style="color:rgb(48, 49, 51);">192.168.10.71</font> | <font style="color:rgb(48, 49, 51);">SonarQube</font> | <font style="color:rgb(48, 49, 51);"></font> |
| <font style="color:rgb(48, 49, 51);">代码托管服务器</font> | <font style="color:rgb(48, 49, 51);">gitlab</font> | <font style="color:rgb(48, 49, 51);">192.168.10.72</font> | <font style="color:rgb(48, 49, 51);">Gitlab</font> | <font style="color:rgb(48, 49, 51);"></font> |
| 打包编译服务器 | build | 192.168.10.74 | Docker | build |
| <font style="color:rgb(48, 49, 51);">服务部署服务器</font> | springboot | 192.168.10.75 | Docker | <font style="color:rgb(48, 49, 51);">deployment</font> |
| <font style="color:rgb(48, 49, 51);">镜像仓库服务器</font> | <font style="color:rgb(48, 49, 51);">harbor</font> | <font style="color:rgb(48, 49, 51);">192.168.10.10</font> | <font style="color:rgb(48, 49, 51);">Harbor</font> | <font style="color:rgb(48, 49, 51);"></font> |


## 服务部署
+ Gitlab：[https://www.cuiliangblog.cn/detail/section/126398301](https://www.cuiliangblog.cn/detail/section/126398301)
+ <font style="color:rgb(48, 49, 51);">SonarQube</font>：[https://www.cuiliangblog.cn/detail/section/131602160](https://www.cuiliangblog.cn/detail/section/131602160)
+ Jmeter：[https://www.cuiliangblog.cn/detail/section/173491430](https://www.cuiliangblog.cn/detail/section/173491430)
+ Harbor：[https://www.cuiliangblog.cn/detail/section/15189547](https://www.cuiliangblog.cn/detail/section/15189547)

# 镜像构建
## Maven镜像
maven镜像只需要修改镜像源为国内地址即可。

```bash
FROM maven:3.9.3
RUN sed -i -E '159a <mirror>\n<id>TencentMirror</id>\n<name>Tencent Mirror</name>\n<url>https://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>\n<mirrorOf>central</mirrorOf>\n</mirror>' /usr/share/maven/conf/settings.xml
```

## sonar-scanner镜像
仓库地址：[https://hub.docker.com/r/sonarsource/sonar-scanner-cli](https://hub.docker.com/r/sonarsource/sonar-scanner-cli)

```bash
docker pull sonarsource/sonar-scanner-cli:10
```

## docker-dind镜像
仓库地址：[https://hub.docker.com/_/docker](https://hub.docker.com/_/docker)

```bash
docker pull docker:dind
```

## jmeter镜像
<font style="color:rgb(48, 49, 51);">由于官方并未提供jmeter镜像，且第三方镜像版本较老，因此推荐构建自定义镜像完成部署。</font>

```bash
[root@jmeter ~]# cat Dockerfile
# FROM openjdk:17-jdk-alpine
FROM harbor.local.com/library/openjdk:17-jdk-alpine
ENV JMETER_HOME /opt/jmeter
ENV PATH $JMETER_HOME/bin:$PATH
ENV CLASSPATH $JMETER_HOME/lib/ext/ApacheJMeter_core.jar:$JMETER_HOME/lib/jorphan.jar:$CLASSPATH
COPY apache-jmeter-5.6.3.tgz /tmp/
RUN tar -zxf /tmp/apache-jmeter-5.6.3.tgz -C /tmp \
  && mv /tmp/apache-jmeter-5.6.3 /opt/jmeter \
  && rm -rf /tmp/apache-jmeter-5.6.3.tgz
CMD ["jmeter","-v"]
[root@jmeter ~]# docker build -t harbor.local.com/cicd/jmeter:5.6.3 .
```

# 模板库资源更新
模板库具体介绍可参考文档：[https://www.cuiliangblog.cn/detail/section/173479217](https://www.cuiliangblog.cn/detail/section/173479217)，本文是在gitlab+Linux项目基础上补充模板库内容。

## deploy.yml
```yaml
# 服务部署
.deploy-linux: # 部署到linux系统
  stage: deploy
  tags:
    - deploy
  script:
    - sh -x $DEPLOY_PATH $ARTIFACT_USER $ARTIFACTORY_KEY /opt/$ARTIFACT_URL_PATH $ARTIFACTORY_PUBLIC_URL/$ARTIFACT_REPO/$ARTIFACT_URL_PATH

.deploy-docker: # 部署到docker环境
  stage: deploy
  image: harbor.local.com/cicd/docker:dind # 在部署阶段使用docker:dind镜像操作
  tags:
    - docker
  script:
    - sh -x $DEPLOY_PATH $HARBOR_USER $HARBOR_PASSWORD $IMAGE_FULL_NAME $CI_PROJECT_NAME
```

## harbor.yml
```yaml
# 镜像上传与下载
variables: # 全局变量
  HARBOR_URL: harbor.local.com # harbor仓库地址
  IMAGE_FULL_NAME: "$HARBOR_URL/$HARBOR_REPO/$IMAGE_NAME"

.docker-upload-harbor:
  stage: upload-harbor
  image: harbor.local.com/cicd/docker:dind # 在构建镜像阶段使用docker:dind镜像操作
  tags: # 在docker机器构建镜像
    - docker
  before_script:
    - cat $DOCKERFILE_PATH 
  script:
    - docker build -f $DOCKERFILE_PATH -t $IMAGE_FULL_NAME .
    - docker login $HARBOR_URL -u $HARBOR_USER -p $HARBOR_PASSWORD # 登录harbor
    - docker push $IMAGE_FULL_NAME # 上传镜像
    - docker rmi -f $IMAGE_FULL_NAME # 删除镜像

.docker-download-harbor:
  stage: download-harbor
  image: harbor.local.com/cicd/docker:dind # 在构建镜像阶段使用docker:dind镜像操作
  tags:
    - docker
  script:
    - docker login $HARBOR_URL -u $HARBOR_USER -p $HARBOR_PASSWORD # 登录harbor
    - docker pull $IMAGE_FULL_NAME # 下载镜像
  after_script:
    - docker images
```

# 流水线项目创建
## 项目代码仓库地址
gitee：[https://gitee.com/cuiliang0302/spring_boot_demo](https://gitee.com/cuiliang0302/spring_boot_demo)  
github：[https://github.com/cuiliang0302/spring-boot-demo](https://github.com/cuiliang0302/spring-boot-demo)

## gitlab项目权限配置
具体参考文档：[https://www.cuiliangblog.cn/detail/section/169621642](https://www.cuiliangblog.cn/detail/section/169621642)

## Runner部署配置
Runner安装：[https://www.cuiliangblog.cn/detail/section/123128550](https://www.cuiliangblog.cn/detail/section/123128550)

Runner注册：[https://www.cuiliangblog.cn/detail/section/123863613](https://www.cuiliangblog.cn/detail/section/123863613)

注册的Runner执行器类型为Docker，作用范围为<font style="color:rgb(48, 49, 51);">shared类型，注册</font>后效果如下：

![](images/img_464.png)

## 配置密钥变量
进入项目——>设置——>CI/CD——>变量

新建SONAR_QUBE_TOEKN、HARBOR_PASSWORD两个变量，取消保护变量，并勾选隐藏变量。

变量配置信息内容如下：

![](images/img_465.png)

## 配置邮件发送
具体可参考文档：[https://www.cuiliangblog.cn/detail/section/173068275](https://www.cuiliangblog.cn/detail/section/173068275)

## 流水线配置
在项目根目录下创建.gitlab-ci.yml文件

![](images/img_455.png)

流水线内容如下

```yaml
include: # 引入模板库公共文件
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/build.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/test.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/sonarqube.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/harbor.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/deploy.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/jmeter.yml'

variables: # 全局变量
  SONAR_QUBE_PATH: "$CI_PROJECT_DIR/cicd/sonar-project.properties" # sonarqube配置文件地址
  # 镜像上传
  HARBOR_REPO: devops # harbor仓库名
  HARBOR_USER: admin # harbor用户名
  DOCKERFILE_PATH: cicd/Dockerfile # Dockerfile文件路径
  IMAGE_NAME: "$CI_PROJECT_NAME:$CI_COMMIT_BRANCH-$CI_COMMIT_SHORT_SHA" # 镜像名称
  # 服务部署
  DEPLOY_PATH: "$CI_PROJECT_DIR/cicd/deployment-docker.sh" # 服务部署脚本路径
  # 自动化测试
  JMETER_PATH: "$CI_PROJECT_DIR/cicd/jmeter/demo.jmx" # 自动化测试脚本路径

default:
  cache: # 全局缓存配置
    paths:
      - target/

stages:
  - build
  - code_scan
  - product
  - deploy
  - test

mvn: # 编译打包
  stage: build
  extends: .mvn-build
  image: harbor.local.com/cicd/maven:v3.9.3 # 构建阶段使用指定的maven镜像
  tags:
    - build
  
unit_test: # 单元测试
  stage: build
  extends: .mvn_unit_test
  image: harbor.local.com/cicd/maven:v3.9.3 # 构建阶段使用指定的maven镜像
  tags:
    - build

code_scan: # SonarQube代码扫描
  stage: code_scan
  extends: .sonarqube
  image: harbor.local.com/cicd/sonar-scanner-cli:10 # 代码扫描阶段使用sonar-scanner-cli镜像
  before_script:
    - ls target/
  tags:
    - build
  
product: # 上传到harbor仓库
  stage: product
  extends: .docker-upload-harbor
  tags:
    - build

deploy_to_prod: # 部署到生产环境
  stage: deploy
  extends: .deploy-docker
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
  tags: 
    - deployment
  after_script:
    - sleep 10
    - docker ps | grep 8888
  environment: # 生产环境
    name: production
    url: http://prod.demo.com:8888

deploy_to_test: # 部署到测试环境
  stage: deploy
  extends: .deploy-docker
  rules:
    - if: '$CI_COMMIT_BRANCH == "test"'
  tags: 
    - build
  after_script:
    - sleep 10
    - docker ps | grep 8888
  environment: # 测试环境
    name: test
    url: http://test.demo.com:8888

pages: # 自动化测试并收集测试报告
  stage: test
  extends: .jmeter
  image: harbor.local.com/cicd/jmeter:5.6.3 # 自动化阶段使用jmeter镜像
  tags: 
    - build
```

# 结果验证
## 镜像查看
![](images/img_466.png)

## 容器信息查看
登录springboot服务器查看容器信息

```bash
[root@springboot ~]# docker ps
CONTAINER ID   IMAGE                                                      COMMAND                   CREATED          STATUS                    PORTS                                       NAMES
b5bbf8ecd87d   harbor.local.com/devops/spring_boot_demo:master-12895965   "java -jar /app.jar"      51 seconds ago   Up 50 seconds (healthy)   0.0.0.0:8888->8888/tcp, :::8888->8888/tcp   spring_boot_demo
9c3bd4d81c61   harbor.local.com/cicd/gitlab-runner:v16.10.0               "/usr/bin/dumb-init …"   17 minutes ago   Up 12 minutes                                                         gitlab-runner
```

其他效果与之前gitlab+linux效果类似，区别在于本次全程使用docker类型runner运行job任务。





---

<a id="173478562"></a>

## CI/CD项目综合实践 - gitlab+k8s项目实践

# 项目简介
<font style="color:rgb(48, 49, 51);">利用Container、Gitlab、Gitlab Runner(k8s)、SonarQube、Harbor、Jmeter、Maven、Java技术，搭建一个完整的 CI/CD 管道，实现当开发人员完成代码提交后，开始流水线工作，完成编译打包、单元测试、源码扫描、上传制品、部署服务到Docker容器、自动化测试工作。通过自动化构建、测试、代码质量检查和容器化部署，将开发人员从繁琐的手动操作中解放出来，提高团队的开发效率、软件质量和安全性，实现持续更新迭代和持续部署交付。</font>

## <font style="color:rgb(48, 49, 51);">CI/CD流程图</font>
![](images/img_467.png)

## <font style="color:rgb(48, 49, 51);">流程说明</font>
1. <font style="color:rgb(48, 49, 51);">开发人员将代码提交到Gitlab代码仓库时，触发持续构建和持续部署流程。</font>
2. <font style="color:rgb(48, 49, 51);">k8s Runner通过maven镜像实现编译打包、单元测试操作。</font>
3. <font style="color:rgb(48, 49, 51);">k8s Runner通过sonar-scanner镜像请求sonarqube服务，实现源码扫描操作。</font>
4. <font style="color:rgb(48, 49, 51);">k8s Runner通过docker-dind镜像实现项目镜像构建并推送至Harbor镜像仓库。</font>
5. <font style="color:rgb(48, 49, 51);">k8s Runner通过执行shell脚本完成镜像拉取以及启动容器服务操作。</font>
6. <font style="color:rgb(48, 49, 51);">k8s Runner通过jmeter镜像实现自动化测试操作。</font>
7. <font style="color:rgb(48, 49, 51);">流水线执行完成后，将结果邮件通知给开发和运维人员。</font>
8. <font style="color:rgb(48, 49, 51);">用户访问项目服务器。</font>

## <font style="color:rgb(48, 49, 51);">k8s资源列表</font>
| **<font style="color:rgb(48, 49, 51);">服务名称</font>** | **<font style="color:rgb(48, 49, 51);">Service/ingress地址</font>** | **<font style="color:rgb(48, 49, 51);">端口</font>** |
| --- | --- | --- |
| <font style="color:rgb(48, 49, 51);">镜像构建服务</font> | <font style="color:rgb(48, 49, 51);">buildkitd.cicd.svc</font> | <font style="color:rgb(48, 49, 51);">1234</font> |
| <font style="color:rgb(48, 49, 51);">代码托管服务</font> | <font style="color:rgb(48, 49, 51);">gitlab.cicd.svc</font> | <font style="color:rgb(48, 49, 51);">80</font> |
| 代码扫描服务 | sonarqube-sonarqube.cicd.svc | 9000 |
| <font style="color:rgb(48, 49, 51);">镜像仓库服务</font> | <font style="color:rgb(48, 49, 51);">harbor.local.com</font> | <font style="color:rgb(48, 49, 51);">443</font> |


# 准备工作
## 服务部署
+ Gitlab：[https://www.cuiliangblog.cn/detail/section/131418586](https://www.cuiliangblog.cn/detail/section/131418586)
+ <font style="color:rgb(48, 49, 51);">SonarQube</font>：[https://www.cuiliangblog.cn/detail/section/165547985](https://www.cuiliangblog.cn/detail/section/165547985)
+ Harbor：[https://www.cuiliangblog.cn/detail/section/15189547](https://www.cuiliangblog.cn/detail/section/15189547)

## 镜像构建服务部署
关于镜像构建问题，如果k8s容器运行时为docker，可以直接使用docker in docker方案，启动一个docker:dind容器，通过绑定宿主机/var/run/docker.sock即可调用。  
如果k8s容器运行时为container，则推荐使用nerdctl+buildkitd方案，启动一个buildkitd服务并暴露1234端口提供构建镜像服务，通过nerdctl命令请求buildkitd服务，执行镜像构建与推送操作，具体内容可参考  
[https://www.cuiliangblog.cn/detail/section/167380911](https://www.cuiliangblog.cn/detail/section/167380911)。  
本次实验以container环境为例，通过nerdctl+buildkitd方案，实现构建并推送镜像。

+ buildkitd-configmap.yaml

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: buildkitd-config
  namespace: cicd
data:
  buildkitd.toml: |-
    debug = true
    [registry."docker.io"]
      mirrors = ["934du3yi.mirror.aliyuncs.com"]
    [registry."harbor.local.com"]
      http = false
```

+ buildkitd-deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: buildkitd
  name: buildkitd
  namespace: cicd
spec:
  replicas: 1
  selector:
    matchLabels:
      app: buildkitd
  template:
    metadata:
      labels:
        app: buildkitd
    spec:
      containers:
        - name: buildkitd
          # image: moby/buildkit:master-rootless
          image: harbor.local.com/cicd/buildkit:master-rootless
          args:
            - --addr
            - tcp://0.0.0.0:1234
            - --addr
            - unix:///run/user/1000/buildkit/buildkitd.sock
            - --config
            - /etc/buildkitd/buildkitd.toml
          resources:
            requests:
              memory: "1Gi"
              cpu: "1"
            limits:
              memory: "4Gi"
              cpu: "4"
          readinessProbe:
            exec:
              command:
                - buildctl
                - debug
                - workers
          livenessProbe:
            exec:
              command:
                - buildctl
                - debug
                - workers
          securityContext:
            privileged: true
          ports:
            - containerPort: 1234
          volumeMounts:
            - mountPath: /etc/buildkitd
              name: config
      volumes:
        - name: config
          configMap:
            name: buildkitd-config

```

+ buildkitd-svc.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: buildkitd
  name: buildkitd
  namespace: cicd
spec:
  ports:
    - port: 1234
      protocol: TCP
  selector:
    app: buildkitd
```

## Runner镜像构建
Runner不仅要构建镜像，还需要操作k8s资源，因此需要构建一个名为gitlab-runner-agent的镜像，dockerfile内容如下：

```dockerfile
FROM alpine:latest
USER root
COPY kubectl /usr/bin/kubectl
COPY nerdctl /usr/bin/nerdctl
COPY buildctl /usr/bin/buildctl
```

## 部署gitlab-runner与优化
部署gitlab-runner具体内容可参考[https://www.cuiliangblog.cn/detail/section/172302364](https://www.cuiliangblog.cn/detail/section/172302364)，此处不再赘述，注册后的runner效果如下：

![](images/img_468.png)

部署完gitlab-runner后可根据实际情况进行runner优化，具体可参考文档：[https://www.cuiliangblog.cn/detail/section/174152592](https://www.cuiliangblog.cn/detail/section/174152592)。

## 流水线镜像构建
需要构建maven、sonar-scanner、jmeter镜像，具体可参考文档：[https://www.cuiliangblog.cn/detail/section/172326640](https://www.cuiliangblog.cn/detail/section/172326640)

# 模板库资源更新
模板库具体介绍可参考文档：[https://www.cuiliangblog.cn/detail/section/173479217](https://www.cuiliangblog.cn/detail/section/173479217)，本文是在gitlab+Linux项目基础上补充模板库内容。

## deploy.yml
```yaml
# 服务部署
.deploy-linux: # 部署到linux系统
  stage: deploy
  tags:
    - deploy
  script:
    - sh -x $DEPLOY_PATH $ARTIFACT_USER $ARTIFACTORY_KEY /opt/$ARTIFACT_URL_PATH $ARTIFACTORY_PUBLIC_URL/$ARTIFACT_REPO/$ARTIFACT_URL_PATH

.deploy-docker: # 部署到docker环境
  stage: deploy
  image: harbor.local.com/cicd/docker:dind # 在部署阶段使用docker:dind镜像操作
  tags:
    - docker
  script:
    - sh -x $DEPLOY_PATH $HARBOR_USER $HARBOR_PASSWORD $IMAGE_FULL_NAME $CI_PROJECT_NAME

.deploy-k8s: # 部署到k8s环境
  stage: deploy
  image: harbor.local.com/cicd/gitlab-runner-agent:v1.0 # 在部署阶段使用自定义镜像操作
  tags:
    - k8s
  script:
    - echo $NAME_SPACE
    - echo $DOMAIN_NAME
    - echo $IMAGE_FULL_NAME
    - sed -i "s|NAME_SPACE|${NAME_SPACE}|g" cicd/k8s.yaml
    - sed -i "s|DOMAIN_NAME|${DOMAIN_NAME}|g" cicd/k8s.yaml
    - sed -i "s|IMAGE_NAME|${IMAGE_FULL_NAME}|g" cicd/k8s.yaml
    - cat cicd/k8s.yaml
    - kubectl apply -f cicd/k8s.yaml
```

## harbor.yml
```yaml
# 镜像上传与下载
variables: # 全局变量
  HARBOR_URL: harbor.local.com # harbor仓库地址
  IMAGE_FULL_NAME: "$HARBOR_URL/$HARBOR_REPO/$IMAGE_NAME"

.docker-upload-harbor:
  stage: upload-harbor
  image: harbor.local.com/cicd/docker:dind # 在构建镜像阶段使用docker:dind镜像操作
  tags: # 在docker机器构建镜像
    - docker
  before_script:
    - cat $DOCKERFILE_PATH 
  script:
    - docker build -f $DOCKERFILE_PATH -t $IMAGE_FULL_NAME .
    - docker login $HARBOR_URL -u $HARBOR_USER -p $HARBOR_PASSWORD # 登录harbor
    - docker push $IMAGE_FULL_NAME # 上传镜像
    - docker rmi -f $IMAGE_FULL_NAME # 删除镜像

.docker-download-harbor:
  stage: download-harbor
  image: harbor.local.com/cicd/docker:dind # 在构建镜像阶段使用docker:dind镜像操作
  tags:
    - docker
  script:
    - docker login $HARBOR_URL -u $HARBOR_USER -p $HARBOR_PASSWORD # 登录harbor
    - docker pull $IMAGE_FULL_NAME # 下载镜像
  after_script:
    - docker images

.container-upload-harbor:
  stage: upload-harbor
  image: harbor.local.com/cicd/gitlab-runner-agent:v1.0 # 在构建镜像阶段使用自定义镜像操作
  tags: # 在k8s机器构建镜像
    - k8s
  before_script:
    - cat $DOCKERFILE_PATH 
  script:
    - nerdctl build --buildkit-host tcp://buildkitd.cicd.svc:1234 -f $DOCKERFILE_PATH -t $IMAGE_FULL_NAME .
    - nerdctl login $HARBOR_URL --insecure-registry -u $HARBOR_USER -p $HARBOR_PASSWORD # 登录harbor
    - nerdctl push $IMAGE_FULL_NAME --insecure-registry # 上传镜像
    - nerdctl rmi -f $IMAGE_FULL_NAME # 删除镜像

.container-download-harbor:
  stage: download-harbor
  image: harbor.local.com/cicd/gitlab-runner-agent:v1.0 # 在构建镜像阶段使用自定义镜像操作
  tags:
    - k8s
  script:
    - nerdctl login --insecure-registry $HARBOR_URL -u $HARBOR_USER -p $HARBOR_PASSWORD # 登录harbor
    - nerdctl pull $IMAGE_FULL_NAME --insecure-registry # 下载镜像
  after_script:
    - nerdctl images
```

# 流水线项目创建
## 项目代码仓库地址
gitee：[https://gitee.com/cuiliang0302/spring_boot_demo](https://gitee.com/cuiliang0302/spring_boot_demo)  
github：[https://github.com/cuiliang0302/spring-boot-demo](https://github.com/cuiliang0302/spring-boot-demo)

## gitlab项目权限配置
具体参考文档：[https://www.cuiliangblog.cn/detail/section/169621642](https://www.cuiliangblog.cn/detail/section/169621642)

## 配置密钥变量
进入项目——>设置——>CI/CD——>变量

新建SONAR_QUBE_TOEKN、HARBOR_PASSWORD两个变量，取消保护变量，并勾选隐藏变量。

变量配置信息内容如下：

![](images/img_469.png)

## 配置邮件发送
具体可参考文档：[https://www.cuiliangblog.cn/detail/section/173068275](https://www.cuiliangblog.cn/detail/section/173068275)

## 流水线配置
在项目根目录下创建.gitlab-ci.yml文件，流水线内容如下

```yaml
include: # 引入模板库公共文件
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/build.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/test.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/sonarqube.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/harbor.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/deploy.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/jmeter.yml'

variables: # 全局变量
  SONAR_QUBE_PATH: "$CI_PROJECT_DIR/cicd/sonar-project.properties" # sonarqube配置文件地址
  # 镜像上传
  HARBOR_REPO: devops # harbor仓库名
  HARBOR_USER: admin # harbor用户名
  DOCKERFILE_PATH: cicd/Dockerfile # Dockerfile文件路径
  IMAGE_NAME: "$CI_PROJECT_NAME:$CI_COMMIT_BRANCH-$CI_COMMIT_SHORT_SHA" # 镜像名称
  # 服务部署
  DEPLOY_PATH: "$CI_PROJECT_DIR/cicd/deployment-docker.sh" # 服务部署脚本路径
  # 自动化测试
  JMETER_PATH: "$CI_PROJECT_DIR/cicd/jmeter/demo.jmx" # 自动化测试脚本路径

default:
  cache: # 全局缓存配置
    paths:
      - target/

stages:
  - build
  - code_scan
  - product
  - deploy
  - test

mvn: # 编译打包
  stage: build
  extends: .mvn-build
  image: harbor.local.com/cicd/maven:v3.9.3 # 构建阶段使用指定的maven镜像
  tags:
    - k8s
  
unit_test: # 单元测试
  stage: build
  extends: .mvn_unit_test
  image: harbor.local.com/cicd/maven:v3.9.3 # 构建阶段使用指定的maven镜像
  tags:
    - k8s

code_scan: # SonarQube代码扫描
  stage: code_scan
  extends: .sonarqube
  image: harbor.local.com/cicd/sonar-scanner-cli:10 # 代码扫描阶段使用sonar-scanner-cli镜像
  before_script:
    - ls target/
  tags:
    - k8s
  
product: # 上传到harbor仓库
  stage: product
  extends: .container-upload-harbor
  tags:
    - k8s

deploy_to_prod: # 部署到生产环境
  stage: deploy
  extends: .deploy-k8s
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
  tags: 
    - k8s
  variables:
    NAME_SPACE: prod
    DOMAIN_NAME: prod.local.com
  after_script:
    - sleep 10
    - kubectl get pod -n $NAME_SPACE -o wide
  environment: # 生产环境
    name: production
    url: http://$DOMAIN_NAME

deploy_to_test: # 部署到测试环境
  stage: deploy
  extends: .deploy-k8s
  rules:
    - if: '$CI_COMMIT_BRANCH == "test"'
  tags: 
    - k8s
  variables:
    NAME_SPACE: prod
    DOMAIN_NAME: prod.local.com
  after_script:
    - sleep 10
    - kubectl get pod -n $NAME_SPACE -o wide
  environment: # 测试环境
    name: test
    url: http://$DOMAIN_NAME

pages: # 自动化测试并收集测试报告
  stage: test
  extends: .jmeter
  image: harbor.local.com/cicd/jmeter:5.6.3 # 自动化阶段使用jmeter镜像
  tags: 
    - k8s
```

# 结果验证
## pod信息查看
```bash
[root@tiaoban ~]# kubectl get pod -n prod
NAME                    READY   STATUS    RESTARTS   AGE
demo-655457bb99-9s8hr   1/1     Running   0          51s
```

其他效果与之前gitlab+linux效果类似，区别在于本次全程使用k8s类型runner运行job任务。



---

<a id="177846948"></a>

## CI/CD项目综合实践 - GitOps项目实践

# 项目简介
## 项目说明
本项目构建了一个基于GitOps理念的完整CI/CD管道，旨在实现软件开发与运维的高度自动化和一致性。通过GitLab、GitLab Runner（部署于Kubernetes）、Maven、Java、SonarQube、Harbor以及Argo CD等工具的紧密协作，实现代码提交后自动进行编译打包、单元测试、代码扫描、构建镜像、更新资源清单以及滚动更新、蓝绿部署、金丝雀发布、多集群发布功能。

## CI/CD管道流程
1. 代码提交：开发人员将Java代码提交到GitLab仓库，这一动作将触发CI/CD流水线的启动。
2. 编译与构建：GitLab Runner（基于Kubernetes）自动拉取最新的代码，并使用Maven和Java工具链进行编译和构建，生成可部署的制品（如Docker镜像）。
3. 单元测试与源码扫描：执行单元测试以验证代码的功能性，并通过SonarQube进行静态代码分析，确保代码质量和安全性。
4. 制品上传：将构建好的Docker镜像推送到Harbor私有镜像仓库，作为后续部署的输入。
5. GitOps部署：Argo CD监听Git仓库中的基础设施和应用配置更改，自动将更新应用到Kubernetes集群中。这里，Git仓库成为了基础设施和应用状态的唯一真实来源，所有的部署和更新都基于Git中的配置进行。支持滚动更新、蓝绿部署、金丝雀发布、多集群多环境批量发布等多种部署方式。
6. 持续监控与反馈：通过GitLab Runner、Argo CD等工具的exporter暴露的指标，团队可以实时监控CI/CD流水线的状态和部署结果，

## Gitlab CD劣势
1. agent权限过大：通常授予GitLab Runner集群管理员权限，无法有效通过更有限的权限来限制访问。这意味着必须授予对一个相当简单的功能的完全访问权限，这可能会成为一种隐患。
2. 部署功能单一：GitLab Runner的部署功能主要依赖kubectl工具执行，在Kubernetes集群的深入管理和部署方面，不如专门为此设计的工具如Argo CD全面，例如自动同步、健康检查、回滚、多种发布方式。
3. 审计与合规性：Argo CD提供了更加全面的审计日志，并以git作为唯一来源，除此之外，任何人都不可以对集群进行任何更改，也会被 Operator 还原为git仓库期望状态。

## GitOps优势
1. 强化安全保障：GitOps模式下，部署无需Kubernetes或云平台凭证，仅通过Git仓库更新，减少暴露风险。Git的密码学支持确保变更的真实性和来源，加固集群安全。
2. 统一真实来源：Git作为唯一事实来源，存储所有应用及基础设施配置。利用Git的版控、历史、审计和回滚等功能，简化操作，无需额外工具。
3. 提升开发效率：Git的熟悉度促进快速迭代，加快开发与部署速度，加速产品上市，同时提升系统稳定性和可靠性。
4. 简化合规审计：基础设施变更如同软件项目，通过Git管理，支持Pull Request和Code Review流程，确保合规与透明。

更多gitops介绍可参考文档：[GitOps-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/177847499)

## <font style="color:rgb(0, 0, 0);">Kustomize对比Helm</font>
<font style="color:#0e0e0e;">Kustomize强调声明式管理，配置即代码。它允许用户通过层次化的覆盖和变更来定制Kubernetes资源，而不需要使用模板。</font>

<font style="color:#0e0e0e;">Helm是一个包管理工具，类似于Linux的apt或yum，旨在简化Kubernetes应用的部署和管理。Helm使用Charts（模板）来定义Kubernetes资源。</font>

<font style="color:#0e0e0e;">以下是两者的差异对比</font>

| <font style="color:rgb(0, 0, 0);">特征</font> | <font style="color:rgb(0, 0, 0);">Helm</font> | <font style="color:rgb(0, 0, 0);">Kustomize</font> |
| :--- | :--- | :--- |
| <font style="color:rgb(0, 0, 0);">模板支持</font> | <font style="color:rgb(0, 0, 0);">√</font> | <font style="color:rgb(0, 0, 0);">×</font> |
| <font style="color:rgb(0, 0, 0);">覆盖支持</font> | <font style="color:rgb(0, 0, 0);">×</font> | <font style="color:rgb(0, 0, 0);">√</font> |
| <font style="color:rgb(0, 0, 0);">打包支持</font> | <font style="color:rgb(0, 0, 0);">√</font> | <font style="color:rgb(0, 0, 0);">×</font> |
| <font style="color:rgb(0, 0, 0);">验证hooks</font> | <font style="color:rgb(0, 0, 0);">√</font> | <font style="color:rgb(0, 0, 0);">×</font> |
| <font style="color:rgb(0, 0, 0);">回滚支持</font> | <font style="color:rgb(0, 0, 0);">√</font> | <font style="color:rgb(0, 0, 0);">×</font> |
| <font style="color:rgb(0, 0, 0);">原生 K8s 集成</font> | <font style="color:rgb(0, 0, 0);">×</font> | <font style="color:rgb(0, 0, 0);">√</font> |
| <font style="color:rgb(0, 0, 0);">声明性</font> | <font style="color:rgb(0, 0, 0);">√</font> | <font style="color:rgb(0, 0, 0);">√</font> |
| <font style="color:rgb(0, 0, 0);">可见性和透明度</font> | <font style="color:rgb(0, 0, 0);">弱</font> | <font style="color:rgb(0, 0, 0);">强</font> |


相较而言Kustomize使用起来更简单，虽然不支持打包与回滚，但我们可以依赖ArgoCD完成这部分功能，更契合GitOps 版本化控制思想。

更多<font style="color:rgb(0, 0, 0);">Kustomize资料可参考文档：</font>[kustomize多环境管理-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/119720072)

## 项目流程图
![](images/img_470.png)

# 准备工作
## 服务部署
需要部署Gitlab、SonarQube、Harbor、<font style="color:rgb(48, 49, 51);">buildkitd、Gitlab Runner服务，具体可参考文档：</font>[gitlab+k8s项目实战-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/173478562)

部署完成后根据实际情况对Runner进行优化，具体可参考文档：[kubernetes类型runner优化-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/174152592)

部署ArgoCD服务，具体可参考文档：[ArgoCD部署-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/119667444)

部署<font style="color:rgb(48, 49, 51);">ArgoCD Rollouts服务（可选，如果需要蓝绿部署或金丝雀发布时需要部署），具体可参考文档：</font>[ArgoCD Rollouts-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/174841576)

## Runner镜像构建
<font style="color:rgb(48, 49, 51);">在Gitlab CI流程中，Runner主要的工作包括打包镜像、使用kustomize修改images信息，因此需要构建一个名为gitlab-runner-agent的镜像，dockerfile内容如下：</font>

```dockerfile
FROM alpine:latest
USER root
RUN apk update && \
    apk add --no-cache git && \
    rm -rf /var/cache/apk/*
COPY kustomize /usr/bin/kustomize
COPY nerdctl /usr/bin/nerdctl
COPY buildctl /usr/bin/buildctl
[root@tiaoban ~]# docker build -t harbor.local.com/cicd/gitlab-agent:v1.1 .
```

## <font style="color:rgb(48, 49, 51);">流水线镜像构建</font>
<font style="color:rgb(48, 49, 51);">需要构建maven、sonar-scanner、jmeter镜像，具体可参考文档：</font>[gitlab+docker项目实战-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/172326640)

## <font style="color:rgb(48, 49, 51);">项目代码仓库地址</font>
<font style="color:rgb(48, 49, 51);">gitee：</font>[<font style="color:rgb(48, 49, 51);">https://gitee.com/cuiliang0302/spring_boot_demo</font>](https://gitee.com/cuiliang0302/spring_boot_demo)<font style="color:rgb(48, 49, 51);">  
</font><font style="color:rgb(48, 49, 51);">github：</font>[<font style="color:rgb(48, 49, 51);">https://github.com/cuiliang0302/spring-boot-demo</font>](https://github.com/cuiliang0302/spring-boot-demo)

## <font style="color:rgb(48, 49, 51);">gitlab项目权限配置</font>
<font style="color:rgb(48, 49, 51);">具体参考文档：</font>[Jenkins+docker项目实战-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/169621642)

## <font style="color:rgb(48, 49, 51);">配置邮件发送</font>
<font style="color:rgb(48, 49, 51);">具体可参考文档：</font>[Gitlab与Email集成-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/173068275)

## <font style="color:rgb(48, 49, 51);">创建ci用户并添加至devops组</font>
创建一个名为gitlabci的用户，用于提交<font style="color:rgb(48, 49, 51);">kustomize</font>更新后的资源清单文件。将gitlabci用户角色指定为维护者。

![](images/img_471.png)

## Argo CD创建project与<font style="color:rgb(48, 49, 51);">Repo</font>
创建project，具体可参考文档：[ArgoCD project-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/174837249)，project配置如下：

![](images/img_472.png)

创建repo，具体可参考文档：[ArgoCD快速体验-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/119675638)，repo配置如下：

![](images/img_473.png)

# Gitlab CI流程
## <font style="color:rgb(48, 49, 51);">配置密钥变量</font>
<font style="color:rgb(48, 49, 51);">进入项目——>设置——>CI/CD——>变量  
</font><font style="color:rgb(48, 49, 51);">新建SONAR_QUBE_TOEKN、HARBOR_PASSWORD、CI_PASSWORD三个变量，取消保护变量，并勾选隐藏变量。  
</font><font style="color:rgb(48, 49, 51);">变量配置信息内容如下：</font>

![](images/img_474.png)

## 模板库资源更新
<font style="color:rgb(48, 49, 51);">模板库具体介绍可参考文档：</font>[gitlab+linux项目实战-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/173479217)<font style="color:rgb(48, 49, 51);">，本文是在gitlab+k8s项目基础上补充模板库内容。</font>

<font style="color:rgb(48, 49, 51);">完整模板库链接：</font>[https://gitee.com/cuiliang0302/gitlabci-template](https://gitee.com/cuiliang0302/gitlabci-template)

+ kustomize.yaml

该job的主要内容是通过kustomize工具，根据不同的分支提交事件，生成不同环境的资源清单，并将镜像替换为最新的镜像地址，并将资源清单文件提交至Gitlab仓库。

```yaml
# 更新kustomize
variables: # 全局变量
  KUSTOMIZE_OVERLAY: '' # kustomize环境目录

.update-kustomize:
  stage: update-kustomize
  tags:
    - build
  only:
    - master
    - test
  before_script:
    - git remote set-url origin http://${CI_USER}:${CI_PASSWORD}@gitlab.local.com/devops/spring_boot_demo.git
    - git config --global user.email "${CI_EMAIL}"
    - git config --global user.name "${CI_USER}"
    - if [ "$CI_COMMIT_BRANCH" == "master" ]; then KUSTOMIZE_OVERLAY="prod"; fi
    - if [ "$CI_COMMIT_BRANCH" == "test" ]; then KUSTOMIZE_OVERLAY="test"; fi
  script:
    - git checkout -B ${CI_COMMIT_BRANCH}
    - cd cicd/kustomize/overlays/${KUSTOMIZE_OVERLAY}
    - kustomize edit set image $CONTAINER_NAME=$IMAGE_FULL_NAME
    - kustomize build .
    - git commit -am '[gitlab ci] kustomize update'
    - git push origin ${CI_COMMIT_BRANCH}
```

## 流水线配置
<font style="color:rgb(48, 49, 51);">在项目根目录下创建.gitlab-ci.yml文件，流水线内容如下</font>

```yaml
include: # 引入模板库公共文件
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/build.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/test.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/sonarqube.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/harbor.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/kustomize.yml'
variables: # 全局变量
  SONAR_QUBE_PATH: "$CI_PROJECT_DIR/cicd/sonar-project.properties" # sonarqube配置文件地址
  # 镜像上传
  HARBOR_REPO: devops # harbor仓库名
  HARBOR_USER: admin # harbor用户名
  DOCKERFILE_PATH: cicd/Dockerfile # Dockerfile文件路径
  IMAGE_NAME: "$CI_PROJECT_NAME:$CI_COMMIT_BRANCH-$CI_COMMIT_SHORT_SHA" # 镜像名称
  # 更新yaml
  CI_USER: gitlabci # gitlab ci用户名
  CI_EMAIL: gitlabci@qq.com # gitlab ci用户邮箱
  CONTAINER_NAME: demo # k8s控制器container名称

default:
  cache: # 全局缓存配置
    paths:
      - target/
      
workflow: # Gitlabci更新不触发流水线
  rules:
    - if: '$GITLAB_USER_LOGIN == "gitlabci"'
      when: never
    - when: always
stages:
  - build
  - code_scan
  - product
  - update_yaml

mvn: # 编译打包
  stage: build
  extends: .mvn_build
  image: harbor.local.com/cicd/maven:v3.9.3 # 构建阶段使用指定的maven镜像
  before_script:
    - ls -lh /home/gitlab-runner/cache/
  tags:
    - k8s
unit_test: # 单元测试
  stage: build
  extends: .mvn_unit_test
  image: harbor.local.com/cicd/maven:v3.9.3 # 构建阶段使用指定的maven镜像
  before_script:
    - ls -lh /home/gitlab-runner/cache/
  tags:
    - k8s
code_scan: # SonarQube代码扫描
  stage: code_scan
  extends: .sonarqube
  image: harbor.local.com/cicd/sonar-scanner-cli:10 # 代码扫描阶段使用sonar-scanner-cli镜像
  before_script:
    - ls target/
  tags:
    - k8s
  
product: # 打包上传镜像到harbor仓库
  stage: product
  image: harbor.local.com/cicd/gitlab-agent:v1.1
  extends: .container_upload_harbor
  tags:
    - k8s

update_yaml: # 更新资源清单
  stage: update_yaml
  image: harbor.local.com/cicd/gitlab-agent:v1.1
  extends: .update_kustomize
  tags:
    - k8s
```

## Gitlab CI结果验证
查看update_yaml阶段kustomize生成的资源清单文件，已完成image和namespace的更新

![](images/img_475.png)

查看kustomization.yaml文件，已替换并提交最新的镜像地址。

![](images/img_476.png)

同样的操作，对test分支配置ci流水线，查看test分支kustomization.yaml文件信息

![](images/img_477.png)

至此 CI流程配置完成，CI流程只需要将集成后的文件提交至Gitlab仓库即可，后续CD流程会根据Gitlab资源清单自动完成服务部署与状态同步。

# Argo CD流程(滚动更新)
## 创建APP
Argo CD支持通过web UI、CLI命令行工具、yaml文件创建APP，具体可参考文档[Directory APP创建与配置-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/174775527)

此处以yaml文件创建<font style="color:rgb(48, 49, 51);">Kustomize类型APP为例，具体可参考文档：</font>[Kustomize App创建-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/174782965)，yaml文件内容如下：

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: demo-prod
  namespace: argocd
spec:
  destination:
    namespace: 'prod'
    server: 'https://kubernetes.default.svc'
  source:
    path: cicd/kustomize/overlays/prod
    repoURL: 'http://gitlab.local.com/devops/spring_boot_demo.git'
    targetRevision: 'master'
  sources: []
  project: devops
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
---
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: demo-test
  namespace: argocd
spec:
  destination:
    namespace: 'test'
    server: 'https://kubernetes.default.svc'
  source:
    path: cicd/kustomize/overlays/test
    repoURL: 'http://gitlab.local.com/devops/spring_boot_demo.git'
    targetRevision: 'test'
  sources: []
  project: devops
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

此时查看Argo CD页面，已根据master和test分支分别部署了两套demo服务。

![](images/img_478.png)

## 结果验证
查看pod信息

```bash
[root@tiaoban ~]# kubectl get pod -n prod
NAME                   READY   STATUS    RESTARTS   AGE
demo-7dd977b57-5qdcx   1/1     Running   0          4m41s
[root@tiaoban ~]# kubectl get pod -n test
NAME                    READY   STATUS    RESTARTS   AGE
demo-6b67766cb5-c9fq9   1/1     Running   0          4m32s
```

修改host解析，分别访问测试和生产域名验证。

```bash
[root@tiaoban ~]# curl demo.prod.com
<h1>Hello SpringBoot</h1><p>Version:v1 Env:prod</p> 
[root@tiaoban ~]# curl demo.test.com
<h1>Hello SpringBoot</h1><p>Version:v1 Env:test</p>
```

修改springboot项目源码，将version内容从v1升级为v2，等待gitlab CI和Argo CD执行完成。

![](images/img_479.png)

此时查看生产环境pod并访问服务，已经通过deployment滚动更新到v2版本。

```bash
[root@tiaoban ~]# kubectl get pod -n prod
NAME                   READY   STATUS        RESTARTS   AGE
demo-65b44b4d8-58f67   1/1     Running       0          21s
demo-7dd977b57-5qdcx   1/1     Terminating   0          10m
[root@tiaoban ~]# curl demo.prod.com
<h1>Hello SpringBoot</h1><p>Version:v2 Env:prod</p>
```

# Argo CD流程(蓝绿部署)
Argo CD蓝绿部署和金丝雀发布主要依赖<font style="color:rgb(48, 49, 51);">Rollouts组件实现，具体内容可参考文档：</font>[ArgoCD Rollouts-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/174841576)

蓝绿部署具体内容可参考文档：[蓝绿部署-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/174841574)

## 模板库资源配置
+ rollout.yml

该job的主要内容是将镜像替换为最新的镜像地址，并将资源清单文件提交至Gitlab仓库。

```bash
# 更新rollout资源镜像
.update_rollout:
  stage: update_rollout
  tags:
    - build
  only:
    - master
  before_script:
    - git remote set-url origin http://${CI_USER}:${CI_PASSWORD}@gitlab.local.com/devops/spring_boot_demo.git
    - git config --global user.email "${CI_EMAIL}"
    - git config --global user.name "${CI_USER}"
  script:
    - git checkout -B master
    - sed -i "s|\(image:\s*\).*|\1${IMAGE_FULL_NAME}|" ${ROLLOUT_PATH}
    - git commit -am '[gitlab ci] rollout update'
    - git push origin ${CI_COMMIT_BRANCH}
  after_script:
    - cat ${ROLLOUT_PATH}
```

## 流水线配置
在流水线update_yaml阶段使用上面定义的更新rollout资源job。

```yaml
include: # 引入模板库公共文件
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/build.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/test.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/sonarqube.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/harbor.yml'
  - project: 'devops/gitlabci-template'
    ref: master
    file: 'jobs/rollout.yml'

variables: # 全局变量
  SONAR_QUBE_PATH: "$CI_PROJECT_DIR/cicd/sonar-project.properties" # sonarqube配置文件地址
  # 镜像上传
  HARBOR_REPO: devops # harbor仓库名
  HARBOR_USER: admin # harbor用户名
  DOCKERFILE_PATH: cicd/Dockerfile # Dockerfile文件路径
  IMAGE_NAME: "$CI_PROJECT_NAME:$CI_COMMIT_BRANCH-$CI_COMMIT_SHORT_SHA" # 镜像名称
  # 更新yaml
  CI_USER: gitlabci # gitlab ci用户名
  CI_EMAIL: gitlabci@qq.com # gitlab ci用户邮箱
  ROLLOUT_PATH: cicd/argo-cd/bluegreen/rollout.yaml # rollout文件路径

workflow: # Gitlabci更新不触发流水线
  rules:
    - if: '$GITLAB_USER_LOGIN == "gitlabci"'
      when: never
    - when: always
    
default:
  cache: # 全局缓存配置
    paths:
      - target/

stages:
  - build
  - code_scan
  - product
  - update_yaml

mvn: # 编译打包
  stage: build
  extends: .mvn_build
  image: harbor.local.com/cicd/maven:v3.9.3 # 构建阶段使用指定的maven镜像
  tags:
    - k8s
  
unit_test: # 单元测试
  stage: build
  extends: .mvn_unit_test
  image: harbor.local.com/cicd/maven:v3.9.3 # 构建阶段使用指定的maven镜像
  tags:
    - k8s

code_scan: # SonarQube代码扫描
  stage: code_scan
  extends: .sonarqube
  image: harbor.local.com/cicd/sonar-scanner-cli:10 # 代码扫描阶段使用sonar-scanner-cli镜像
  before_script:
    - ls target/
  tags:
    - k8s
  
product: # 打包上传镜像到harbor仓库
  stage: product
  image: harbor.local.com/cicd/gitlab-agent:v1.1
  extends: .container_upload_harbor
  tags:
    - k8s

update_yaml: # 更新资源清单
  stage: update_yaml
  image: harbor.local.com/cicd/gitlab-agent:v1.1
  extends: .update_rollout
  tags:
    - k8s
```

## Gitlab CI结果验证
查看update_yaml任务信息，已替换为最近的镜像地址。

![](images/img_480.png)

查看仓库rollout.yaml文件，已经替换为最新的镜像地址。

![](images/img_481.png)

## Argo CD创建APP
接下来创建ArgoCD APP，资源清单内容如下：

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: blue-green
  namespace: argocd
spec:
  destination:
    namespace: default
    server: 'https://kubernetes.default.svc'
  source:
    path: cicd/argo-cd/bluegreen
    repoURL: 'http://gitlab.local.com/devops/spring_boot_demo.git'
    targetRevision: master
  sources: []
  project: devops
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

此时查看Argo CD页面，已经成功部署了名为blue-green的应用。

![](images/img_482.png)

## 蓝绿部署验证
添加hosts域名解析后访问，由于刚发布第一个版本，因此正式环境和测试环境都是v1版本的镜像。

```bash
[root@tiaoban ~]# kubectl get pod
NAME                                READY   STATUS    RESTARTS       AGE
bluegreen-rollout-7679f8576-bj9lw   1/1     Running   0              4s
bluegreen-rollout-7679f8576-lrt5r   1/1     Running   0              4s
[root@tiaoban ~]# curl demo.prod.com
<h1>Hello SpringBoot</h1><p>Version:v2 Env:prod</p>
[root@tiaoban ~]# curl demo.test.com
<h1>Hello SpringBoot</h1><p>Version:v1 Env:prod</p>
```

修改springboot项目源码，将version内容从v2升级为v3，等待gitlab CI和Argo CD执行完成。

![](images/img_479.png)

此时访问应用生产和测试域名，分别返回不同的版本信息。

```bash
[root@tiaoban ~]# kubectl get pod
NAME                                 READY   STATUS    RESTARTS       AGE
bluegreen-rollout-6f76ccc55c-gbgsc   1/1     Running   0              7s
bluegreen-rollout-7679f8576-bj9lw    1/1     Running   0              3m49s
bluegreen-rollout-7679f8576-lrt5r    1/1     Running   0              3m49s
[root@tiaoban ~]# curl demo.prod.com
<h1>Hello SpringBoot</h1><p>Version:v2 Env:prod</p>
[root@tiaoban ~]# curl demo.test.com
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
```

发布新版本后，此时就需要测试人员访问测试域名验证系统功能是否正常，验证无误后，将服务切换至生产域名。

```bash
[root@tiaoban ~]# kubectl argo rollouts promote bluegreen-rollout
rollout 'bluegreen-rollout' promoted
```

此时访问web页面，生产和测试环境均返回v3版本信息。

```bash
[root@tiaoban ~]# kubectl get pod
NAME                                 READY   STATUS    RESTARTS       AGE
bluegreen-rollout-6f76ccc55c-gbgsc   1/1     Running   0              83s
bluegreen-rollout-6f76ccc55c-hcflg   1/1     Running   0              19s
bluegreen-rollout-7679f8576-bj9lw    1/1     Running   0              5m5s
bluegreen-rollout-7679f8576-lrt5r    1/1     Running   0              5m5s
[root@tiaoban ~]# curl demo.prod.com
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
[root@tiaoban ~]# curl demo.test.com
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
```

至此整个蓝绿发布流程完成。

# Argo CD流程(金丝雀发布)
金丝雀发布具体内容可参考文档：[金丝雀发布-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/174841570)，此处不再赘述。

## 模板库与流水线配置
模板库与流水线配置与上面的蓝绿部署一致，区别在于流水线中ROLLOUT_PATH指定为金丝雀资源路径

```yaml
variables: # 全局变量
  ROLLOUT_PATH: cicd/argo-cd/canary/rollout.yaml # rollout文件路径
```

## Gitlab CI结果验证
查看流水线update_yaml阶段日志，已经替换为最新的镜像地址。

![](images/img_483.png)

## Argo CD创建APP
接下来创建ArgoCD APP，资源清单内容如下：

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: canary
  namespace: argocd
spec:
  destination:
    namespace: default
    server: 'https://kubernetes.default.svc'
  source:
    path: cicd/argo-cd/canary
    repoURL: 'http://gitlab.local.com/devops/spring_boot_demo.git'
    targetRevision: master
  sources: []
  project: devops
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

此时查看Argo CD页面，已经成功部署了名为canary的应用。

![](images/img_484.png)

## 金丝雀发布验证
<font style="color:rgb(48, 49, 51);">添加hosts域名解析后访问，由于刚发布第一个版本，因此所有流量都调度到v3版本的服务。</font>

```bash
[root@tiaoban ~]# kubectl get pod
NAME                              READY   STATUS    RESTARTS        AGE
canary-rollout-7d77478fd7-4vdzn   1/1     Running   0               115s
canary-rollout-7d77478fd7-5rbmp   1/1     Running   0               115s
canary-rollout-7d77478fd7-6pm62   1/1     Running   0               115s
canary-rollout-7d77478fd7-98xmk   1/1     Running   0               115s
canary-rollout-7d77478fd7-jv6zk   1/1     Running   0               115s
canary-rollout-7d77478fd7-l22zh   1/1     Running   0               115s
canary-rollout-7d77478fd7-lhxm8   1/1     Running   0               115s
canary-rollout-7d77478fd7-tkfrb   1/1     Running   0               115s
canary-rollout-7d77478fd7-zcgwq   1/1     Running   0               115s
canary-rollout-7d77478fd7-zw4w2   1/1     Running   0               115s
[root@tiaoban ~]# for i in {1..10}; do curl canary.demo.com; done
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
```

修改springboot项目源码，将version内容从v3升级为v4，等待gitlab CI和Argo CD执行完成。

![](images/img_485.png)

查看<font style="color:rgb(48, 49, 51);">Rollouts状态，新增了canary-rollout-6c764844bd，运行v4版本的镜像。</font>

```bash
[root@tiaoban ~]#  kubectl argo rollouts get rollout canary-rollout
Name:            canary-rollout
Namespace:       default
Status:          ॥ Paused
Message:         CanaryPauseStep
Strategy:        Canary
  Step:          1/7
  SetWeight:     10
  ActualWeight:  10
Images:          harbor.local.com/devops/spring_boot_demo:master-3bccf809 (canary)
                 harbor.local.com/devops/spring_boot_demo:master-e58822da (stable)
Replicas:
  Desired:       10
  Current:       11
  Updated:       1
  Ready:         11
  Available:     11

NAME                                        KIND        STATUS     AGE  INFO
⟳ canary-rollout                            Rollout     ॥ Paused   12m  
├──# revision:2                                                         
│  └──⧉ canary-rollout-6c764844bd           ReplicaSet  ✔ Healthy  24s  canary
│     └──□ canary-rollout-6c764844bd-dzc4t  Pod         ✔ Running  24s  ready:1/1
└──# revision:1                                                         
   └──⧉ canary-rollout-7d77478fd7           ReplicaSet  ✔ Healthy  12m  stable
      ├──□ canary-rollout-7d77478fd7-4vdzn  Pod         ✔ Running  12m  ready:1/1
      ├──□ canary-rollout-7d77478fd7-5rbmp  Pod         ✔ Running  12m  ready:1/1
      ├──□ canary-rollout-7d77478fd7-6pm62  Pod         ✔ Running  12m  ready:1/1
      ├──□ canary-rollout-7d77478fd7-98xmk  Pod         ✔ Running  12m  ready:1/1
      ├──□ canary-rollout-7d77478fd7-jv6zk  Pod         ✔ Running  12m  ready:1/1
      ├──□ canary-rollout-7d77478fd7-l22zh  Pod         ✔ Running  12m  ready:1/1
      ├──□ canary-rollout-7d77478fd7-lhxm8  Pod         ✔ Running  12m  ready:1/1
      ├──□ canary-rollout-7d77478fd7-tkfrb  Pod         ✔ Running  12m  ready:1/1
      ├──□ canary-rollout-7d77478fd7-zcgwq  Pod         ✔ Running  12m  ready:1/1
      └──□ canary-rollout-7d77478fd7-zw4w2  Pod         ✔ Running  12m  ready:1/1
[root@tiaoban ~]# kubectl get pod
NAME                              READY   STATUS    RESTARTS        AGE
canary-rollout-6c764844bd-dzc4t   1/1     Running   0               28s
canary-rollout-7d77478fd7-4vdzn   1/1     Running   0               12m
canary-rollout-7d77478fd7-5rbmp   1/1     Running   0               12m
canary-rollout-7d77478fd7-6pm62   1/1     Running   0               12m
canary-rollout-7d77478fd7-98xmk   1/1     Running   0               12m
canary-rollout-7d77478fd7-jv6zk   1/1     Running   0               12m
canary-rollout-7d77478fd7-l22zh   1/1     Running   0               12m
canary-rollout-7d77478fd7-lhxm8   1/1     Running   0               12m
canary-rollout-7d77478fd7-tkfrb   1/1     Running   0               12m
canary-rollout-7d77478fd7-zcgwq   1/1     Running   0               12m
canary-rollout-7d77478fd7-zw4w2   1/1     Running   0               12m
rockylinux                        1/1     Running   21 (140m ago)   52d
```

循环请求访问验证,可以看到，在前5分钟只有10%的流量请求到了v4版本的服务中。

```bash
[root@tiaoban ~]# for i in {1..10}; do curl canary.demo.com; done
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v4 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
<h1>Hello SpringBoot</h1><p>Version:v3 Env:prod</p>
```

持续观察流量v4的占比会逐步增加直到最后达到100%。

# Argo CD流程(多集群发布)
我们在实际工作中会存在多个生产、测试集群，通常会将test分支代码发布至测试环境，master分支代码发布至生产环境，Argo同样支持这种多集群模式发布，且配置起来更为简单。

多集群发布配置具体可参考文档：[多集群应用部署-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/174841645)

## <font style="color:rgb(48, 49, 51);">添加集群</font>
<font style="color:rgb(48, 49, 51);">假设现在有两套集群，已经在k8s-ha集群部署了gitlab和Argocd，现在需要添加k8s-test集群。  
</font><font style="color:rgb(48, 49, 51);">在添加集群前，先配置config上下文，具体内容可参考文档：</font>[kubectl多集群管理-崔亮的博客 (cuiliangblog.cn)](https://www.cuiliangblog.cn/detail/section/175557663)

```bash
[root@tiaoban .kube]# kubectl config get-contexts
CURRENT   NAME                  CLUSTER    AUTHINFO     NAMESPACE
*         ha-admin@k8s-ha       k8s-ha     ha-admin     
          test-admin@k8s-test   k8s-test   test-admin 
[root@tiaoban .kube]# kubectl get node
NAME      STATUS   ROLES           AGE    VERSION
master1   Ready    control-plane   285d   v1.27.6
master2   Ready    control-plane   285d   v1.27.6
master3   Ready    control-plane   285d   v1.27.6
work1     Ready    <none>          285d   v1.27.6
work2     Ready    <none>          285d   v1.27.6
work3     Ready    <none>          285d   v1.27.6
[root@tiaoban .kube]# kubectl config use-context test-admin@k8s-test
Switched to context "test-admin@k8s-test".
[root@tiaoban .kube]# kubectl get node
NAME         STATUS   ROLES                  AGE   VERSION
k8s-master   Ready    control-plane,master   21h   v1.23.17
k8s-work1    Ready    <none>                 20h   v1.23.17
k8s-work2    Ready    <none>                 20h   v1.23.17
```

<font style="color:rgb(48, 49, 51);">ArgoCD添加集群</font>

```bash
[root@tiaoban ~]# argocd login argocd.local.com
WARNING: server certificate had error: tls: failed to verify certificate: x509: certificate is valid for de4d64dda4cc17aa063ca24baa2abc22.6d1744aa3a6f00c3129e20bc6d196dd0.traefik.default, not argocd.local.com. Proceed insecurely (y/n)? y
WARN[0002] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
Username: admin
Password: 
'admin:login' logged in successfully
Context 'argocd.local.com' updated
[root@tiaoban ~]# argocd cluster add test-admin@k8s-test --kubeconfig=/root/.kube/config
WARNING: This will create a service account `argocd-manager` on the cluster referenced by context `test-admin@k8s-test` with full cluster level privileges. Do you want to continue [y/N]? y
INFO[0003] ServiceAccount "argocd-manager" created in namespace "kube-system" 
INFO[0003] ClusterRole "argocd-manager-role" created    
INFO[0003] ClusterRoleBinding "argocd-manager-role-binding" created 
WARN[0004] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web. 
Cluster 'https://192.168.10.10:6443' added
```

<font style="color:rgb(48, 49, 51);">查看集群状态信息如下  
</font>![](images/img_486.png)

## <font style="color:rgb(48, 49, 51);">更新Project</font>
<font style="color:rgb(48, 49, 51);">更新devops项目权限配置，允许对k8s-test集群进行操作。</font>

![](images/img_487.png)

## <font style="color:rgb(48, 49, 51);">创建应用</font>
<font style="color:rgb(48, 49, 51);">创建Argo CD app，按照不同的分支同时发布至不同的k8s集群中。</font>

```yaml
# master分支代码发布至生产环境
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: demo-prod
  namespace: argocd
spec:
  destination:
    namespace: 'prod'
    server: 'https://kubernetes.default.svc'
  source:
    path: cicd/kustomize/overlays/prod
    repoURL: 'http://gitlab.local.com/devops/spring_boot_demo.git'
    targetRevision: 'master'
  sources: []
  project: devops
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
---
# test分支代码发布至测试环境
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: demo-test
  namespace: argocd
spec:
  destination:
    namespace: 'test'
    server: 'https://192.168.10.10:6443'
  source:
    path: cicd/kustomize/overlays/test
    repoURL: 'http://gitlab.local.com/devops/spring_boot_demo.git'
    targetRevision: 'test'
  sources: []
  project: devops
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

## <font style="color:rgb(48, 49, 51);">多集群发布验证</font>
<font style="color:rgb(48, 49, 51);">ArgoCD会自动进行发布，查看发布信息如下：</font>

![](images/img_488.png)<font style="color:rgb(48, 49, 51);">  
</font><font style="color:rgb(48, 49, 51);">此时访问test集群查看资源，已经成功创建myapp2资源。</font>

```bash
[root@tiaoban ~]# kubectl config use-context test-admin@k8s-test
Switched to context "test-admin@k8s-test".
[root@tiaoban ~]# kubectl get pod -n test
NAME                    READY   STATUS    RESTARTS   AGE
demo-6c86b77bd6-dpf4m   1/1     Running   0          3m3s
[root@tiaoban ~]# kubectl config use-context ha-admin@k8s-ha
Switched to context "ha-admin@k8s-ha".
[root@tiaoban ~]# kubectl get pod -n prod
NAME                    READY   STATUS    RESTARTS   AGE
demo-77b7f4576b-vlwtc   1/1     Running   0          3m
```



---

