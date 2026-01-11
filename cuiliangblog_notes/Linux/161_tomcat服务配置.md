# tomcat服务配置
<font style="color:#000000;"></font>

# 一、实验目的
1.  掌握tomcat服务的搭建

# 二、实验内容
1.  搭建一台缓存tomcat服务器。

# 三、实验环境
1.  tomcat服务器centos7对应主机ip为10.10.64.178

2.  客户机win7对应主机ip为10.10.64.227

# 四、环境搭建
1.   安装jdk

①  yum安装

![](https://via.placeholder.com/800x600?text=Image+59f0b5485a89c76d)

       ②  rpm安装

              ![](https://via.placeholder.com/800x600?text=Image+031f70cb02da0484)

2.   安装tomcat

![](https://via.placeholder.com/800x600?text=Image+5e80902b0726596d)

3.   配置环境变量

![](https://via.placeholder.com/800x600?text=Image+7dc4b8405d4e4141)

![](https://via.placeholder.com/800x600?text=Image+ca51692d14d10d0e)

![](https://via.placeholder.com/800x600?text=Image+111d27092672c168)

4.   检查配置文件语法

![](https://via.placeholder.com/800x600?text=Image+c76d0bd981f8859b)

5.   启动服务

![](https://via.placeholder.com/800x600?text=Image+b711ca46b182e31e)

6.   访问验证

![](https://via.placeholder.com/800x600?text=Image+dfec1b4d2e531f99)

7.   查看文件树

![](https://via.placeholder.com/800x600?text=Image+4ba7d40b9f0663c1)

# 五、部署第一个web应用
1.   在webapps文件夹下创建项目目录

![](https://via.placeholder.com/800x600?text=Image+ad06609c20f3bea4)

2.   在项目文件夹下编写测试页

![](https://via.placeholder.com/800x600?text=Image+6abb55a9e7a52f0a)

![](https://via.placeholder.com/800x600?text=Image+6dbf5d6f49b23555)

3.   访问测试

![](https://via.placeholder.com/800x600?text=Image+08c743ed218ec3d3)

4.   查看work文件树

![](https://via.placeholder.com/800x600?text=Image+b976cd3c5af2124a)

# 六、其他配置
1.   显示服务管理员页面

①  编辑webapps管理功能配置文件

       ![](https://via.placeholder.com/800x600?text=Image+478c71dfaed5f836)

②  注释掉ip地址限制

       ![](https://via.placeholder.com/800x600?text=Image+e49e750676e3ab15)

③  编辑用户认证配置文件

       ![](https://via.placeholder.com/800x600?text=Image+831fb2b988a75061)

④  添加账号密码信息

       ![](https://via.placeholder.com/800x600?text=Image+d541498c59bc4992)

⑤  访问验证

       ![](https://via.placeholder.com/800x600?text=Image+becd104c4dcae7dd)

2.   显示虚拟主机管理页面

①  编辑虚拟主机管理功能配置文件

        ![](https://via.placeholder.com/800x600?text=Image+597950d15915473d)

②  注释掉ip地址限制

        ![](https://via.placeholder.com/800x600?text=Image+bd84d60c99721998)

③  编辑用户认证配置文件

        ![](https://via.placeholder.com/800x600?text=Image+3638b3fa73153cba)

④  添加账号密码信息

       ![](https://via.placeholder.com/800x600?text=Image+7dcf785d7e075dd9)

⑤  访问验证

       ![](https://via.placeholder.com/800x600?text=Image+f2ec46b7adb0ce66)

3.   修改端口号

①  编辑主配置文件

       ![](https://via.placeholder.com/800x600?text=Image+09285b1d58b83992)

②  修改端口号

       ![](https://via.placeholder.com/800x600?text=Image+9d5223ced591ff22)

③  访问验证

       ![](https://via.placeholder.com/800x600?text=Image+b4a1e23a934b1f49)

4.   https连接

①  使用keytool为tomcat生成密钥

             ![](https://via.placeholder.com/800x600?text=Image+2fb109852872afae)

              -genkey 表示生成密钥

-alias 指定密钥别名，这里是tomcat

-keyalg 指定密钥算法，这里是RSA

-keystore 指定密钥文件存储位置和文件名

-validity 指定有效期，单位天，这里是36000天

②  修改端口号

             ![](https://via.placeholder.com/800x600?text=Image+7cccd126f7792715)

③  修改https配置

       ![](https://via.placeholder.com/800x600?text=Image+c8b3e7e315dd2fab)

④  抓包工具给客户端信任根证书

       ![](https://via.placeholder.com/800x600?text=Image+1c73d512ba5e6a16)

⑤  访问验证

             ![](https://via.placeholder.com/800x600?text=Image+7a5722e4954b9cc0)

5.   定义虚拟主机

①  修改主配置文件host区域

       ![](https://via.placeholder.com/800x600?text=Image+2e6ce96cd5aa2643)

name="www.cuiliang123.com" （网站名称）

appBase="/data/webapps" （web路径）

unpackWARs="true" （支持WAR包）

autoDeploy="true"（支持热部署）

docBase="/data/webapps" （web路径）

directory="/data/logs" （日志路径）

prefix="www.cuiliang123.com_access_log" suffix=".txt"（日志名称）

pattern="% %l %u %t &quot; %r&quot; %s %b" （日志格式）

②  创建对应的文件夹

       ![](https://via.placeholder.com/800x600?text=Image+c9b55c124bdff223)

③  创建web应用

       ![](https://via.placeholder.com/800x600?text=Image+383a35aad342996c)

       ![](https://via.placeholder.com/800x600?text=Image+9c1021e113485c9b)

④  访问验证

       ![](https://via.placeholder.com/800x600?text=Image+66150de619ed9246)

⑤  查看日志

       ![](https://via.placeholder.com/800x600?text=Image+82dd3f201076a9e8)

6.   定义默认web应用

①  修改主配置文件host区域

      ![](https://via.placeholder.com/800x600?text=Image+39ceebfc8be4f697)

②  创建ROOT文件夹,并将项目移动至ROOT文件夹中

      ![](https://via.placeholder.com/800x600?text=Image+ec31e7ee8a04ad3e)

③  访问验证

      ![](https://via.placeholder.com/800x600?text=Image+db2b0aaa4c6aae44)

7.   定义别名访问

①  修改主配置文件host区域，定义别名

       ![](https://via.placeholder.com/800x600?text=Image+6eb6636fbfac947c)

②  创建shangcheng文件夹,并将项目移动至shangcheng文件夹中

       ![](https://via.placeholder.com/800x600?text=Image+9a0025607817e45f)

③  创建链接文件

       ![](https://via.placeholder.com/800x600?text=Image+64bef7d1e890d3f2)

④  访问验证

       ![](https://via.placeholder.com/800x600?text=Image+8f2653f5b0886a31)

8.   设置访问控制

①  在host区域定义访问控制类

       ![](https://via.placeholder.com/800x600?text=Image+b200df942af63cd0)

②  访问验证

       ![](https://via.placeholder.com/800x600?text=Image+970762936edb60e8)

9.   搭建项目勾连数据库

①  查看lib中是否有支持数据库的jar包

       ![](https://via.placeholder.com/800x600?text=Image+8e883c853e0ec324)

②  在数据库服务器中创建相应表及账号授权

③  jdbc文件中配置数据库

       ![](https://via.placeholder.com/800x600?text=Image+dda8cf2607544ecb)

       ![](https://via.placeholder.com/800x600?text=Image+83bb024e77c3275a)

④  访问验证

       ![](https://via.placeholder.com/800x600?text=Image+07fc6099eb1dc44c)

# 七、LNMT架构
1.   实现动静分离

①  修改nginx服务器配置文件

       ![](https://via.placeholder.com/800x600?text=Image+4b0c578e4894bfa3)

②  访问静态资源

       ![](https://via.placeholder.com/800x600?text=Image+bda2ae730ec35f9a)

③  访问动态资源

       ![](https://via.placeholder.com/800x600?text=Image+561966621a8df91a)

2.   通过URL重写，默认访问index.jsp

①  修改nginx服务器配置文件

       ![](https://via.placeholder.com/800x600?text=Image+a8da7f202b860d66)

②  访问测试

       ![](https://via.placeholder.com/800x600?text=Image+d4966389862f7ed1)

3.   Nginx调度tomcat

①  修改nginx服务器配置文件

![](https://via.placeholder.com/800x600?text=Image+e2fa0d68101bd408)

![](https://via.placeholder.com/800x600?text=Image+d187d7effb127f75)

       ②  访问测试

![](https://via.placeholder.com/800x600?text=Image+fdaeb2dff16ed639)

![](https://via.placeholder.com/800x600?text=Image+3af6d21f7923aff1)

# 八、LAMT架构
1.   使用apache虚拟主机，基于proxy_module模块代理

①  查看是否安装proxy_module模块

       ![](https://via.placeholder.com/800x600?text=Image+3bcac5fb8f94120b)

②  Apache服务器子文件配置

       ![](https://via.placeholder.com/800x600?text=Image+51b242601d06d65e)

       ![](https://via.placeholder.com/800x600?text=Image+1d166974d4bbb993)

③  访问测试

       ![](https://via.placeholder.com/800x600?text=Image+244fc441b5344ab6)

      


