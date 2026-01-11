# MySQL创建用户
    1. 语法：
+ create  user ‘username’@ ‘host‘ identified by ‘password’;
+ username最长16个字符，如果包含特殊字符如：下划线  _ 必须使用单引号，如果没有单引号可选，password必须用单引号括起来，否则报错
    1. 示例：
+ create  user zhang@localhost identified by ‘zhang’;
+ create  user ma identified by ‘ma’;
+ create  user ‘tom’@’192.168.2.1’identified by ‘tom’;
+ ![](https://via.placeholder.com/800x600?text=Image+66d3cddc008bd959)
    1. 测试连接
    - 本地
+ #>mysql  -uzhang –p   --可以本地连接
+ #>mysql  -uma –p        --可以本地连接
+ #>mysql  -utom -p        --不可以本地连接，因为只能ip为192.168.2.1的主机连接
    - windows远程（测试主机IP       192.168.2.1）(mysql服务器IP 192.168.2.3)
+ c:\  mysql -uzhang -h192.168.2.3 -p    --不可以远程连接，因为host=localhost
+ c:\  mysql -uma -h192.168.2.3 -p         --可以远程连接，因为host=%
+ c:\  mysql -utom -h192.168.2.3 -p        --可以远程连接，因为host=192.168.2.1


