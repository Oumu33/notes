# yum安装jdk修改环境变量
    1. 查看java命令文件路径
+ ![](https://via.placeholder.com/800x600?text=Image+4daecfc7024bed85)
    1. export       JAVA_HOME=/usr/lib/jvm/jre-1.6.0-openjdk
+ export  PATH=$PATH:$JAVA_HOME/bin
+ export CLASSPATH=.:$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar


