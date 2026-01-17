# nginx-Ingress案例
> 注意要点：
>
> + ingress中的serviceName要与service中的metadata-name保持一致
> + service中的selector-app要与deployment中的selector-app保持一致
> + deployment中的matchlables-app要与template中的matadata-lables-app保持一致
>



# 一、部署myapp1实例


1. 使用Deployment控制器部署myapp1相关的Pod对象

![img_624.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_624.png)

+ 查看deployment状态



2. 使用ClusterIP控制器部署svc1相关的对象

![img_704.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_704.png)

+ 查看svc

![img_4480.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4480.png)



# 二、部署myapp2实例


1. 使用Deployment控制器部署myapp2相关的Pod对象

![img_4032.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4032.jpeg)



+ 查看deployment状态



2. 使用ClusterIP控制器部署svc2相关的对象





+ 查看svc





# 三、创建Ingress实例


1. 编写ingress使访问myapp1.cuiliang.com跳转至myapp1，访问myapp2.cuiliang.com跳转至myapp2

![img_1488.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1488.png)

2. 查看svc服务信息

![img_3552.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3552.png)

3. 查看ingress规则

![img_1248.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1248.png)

4. 查看ingress-nginx配置文件

![img_4240.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4240.png)

5. 修改host文件



6. 访问测试

![img_2400.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2400.png)

![img_2256.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2256.png)



# 四、Ingress https代理


1. 创建证书，以及 cert 存储  
`# openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout tls.key -out tls.crt -subj "/CN=nginxsvc/O=nginxsvc"`   
`# kubectl create secret tls tls-secret --key tls.key --cert tls.crt` 
2. 使用Deployment控制器部署myapp3相关的Pod对象





+ 查看deployment状态





3. 使用ClusterIP控制器部署svc3相关的对象





+ 查看svc





4. 创建Ingress实例  


![img_3008.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3008.png)



+ 查看svc-ingress信息

![img_4720.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4720.jpeg)



5. 修改host文件

![img_3904.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3904.png)

6. 访问测试

![img_2752.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2752.png)



# 五、BasicAuth用户认证


1. 创建证书，以及 cert 存储  
`#yum -y install httpd`   
`#htpasswd -c auth foo`   
`#kubectl create secret generic basic-auth --from-file=auth` 
2. 使用Deployment控制器部署myapp4相关的Pod对象



+ 查看deployment状态  
![img_3712.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3712.png)
3. 使用ClusterIP控制器部署svc4相关的对象

![img_1712.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1712.png)

+ 查看svc



4. 创建Ingress实例

![img_4448.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4448.png)



5. 查看svc-ingress信息

![img_2960.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2960.jpeg)

6. 修改host文件

![img_944.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_944.png)

7. 访问测试





# 六、nginx重写


+ 当用户访问myapp5.cuiliang.com时跳转到myapp3.cuiliang.com



1. 创建Ingress实例



2. 查看svc-ingress信息

![img_976.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_976.png)

3. 修改host文件



4. 访问测试  
   

![img_3520.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3520.png)


