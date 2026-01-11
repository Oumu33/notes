# nginx-Ingress案例
> 注意要点：
>
> + ingress中的serviceName要与service中的metadata-name保持一致
> + service中的selector-app要与deployment中的selector-app保持一致
> + deployment中的matchlables-app要与template中的matadata-lables-app保持一致
>



# 一、部署myapp1实例


1. 使用Deployment控制器部署myapp1相关的Pod对象

![](https://via.placeholder.com/800x600?text=Image+777d6d2d46ac03f5)

+ 查看deployment状态

![](https://via.placeholder.com/800x600?text=Image+4ecbc1530e2bc416)

2. 使用ClusterIP控制器部署svc1相关的对象

![](https://via.placeholder.com/800x600?text=Image+91f8df5341dc77e2)

+ 查看svc

![](https://via.placeholder.com/800x600?text=Image+34a0ccaa9743747f)



# 二、部署myapp2实例


1. 使用Deployment控制器部署myapp2相关的Pod对象

![](https://via.placeholder.com/800x600?text=Image+26fc199853b29a6b)



+ 查看deployment状态

![](https://via.placeholder.com/800x600?text=Image+4b237a558271df57)

2. 使用ClusterIP控制器部署svc2相关的对象

![](https://via.placeholder.com/800x600?text=Image+70ae5612220469c0)



+ 查看svc

![](https://via.placeholder.com/800x600?text=Image+4a2f049779084964)



# 三、创建Ingress实例


1. 编写ingress使访问myapp1.cuiliang.com跳转至myapp1，访问myapp2.cuiliang.com跳转至myapp2

![](https://via.placeholder.com/800x600?text=Image+3704108c3283011a)

2. 查看svc服务信息

![](https://via.placeholder.com/800x600?text=Image+5f937beb46b5ae36)

3. 查看ingress规则

![](https://via.placeholder.com/800x600?text=Image+f956901589159e2b)

4. 查看ingress-nginx配置文件

![](https://via.placeholder.com/800x600?text=Image+815dd671fbc327fa)

5. 修改host文件

![](https://via.placeholder.com/800x600?text=Image+c5134ceb7b13fbe4)

6. 访问测试

![](https://via.placeholder.com/800x600?text=Image+e2031a424ccb9d97)

![](https://via.placeholder.com/800x600?text=Image+aa7ee76472a41104)



# 四、Ingress https代理


1. 创建证书，以及 cert 存储  
`# openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout tls.key -out tls.crt -subj "/CN=nginxsvc/O=nginxsvc"`   
`# kubectl create secret tls tls-secret --key tls.key --cert tls.crt` 
2. 使用Deployment控制器部署myapp3相关的Pod对象

![](https://via.placeholder.com/800x600?text=Image+a14a571fe32e4380)



+ 查看deployment状态

![](https://via.placeholder.com/800x600?text=Image+b4870c0b337fd52f)



3. 使用ClusterIP控制器部署svc3相关的对象

![](https://via.placeholder.com/800x600?text=Image+3f048577f1007dd7)



+ 查看svc

![](https://via.placeholder.com/800x600?text=Image+69e83493965c2d09)



4. 创建Ingress实例  
![](https://via.placeholder.com/800x600?text=Image+68bdcc57706947b6)

![](https://via.placeholder.com/800x600?text=Image+4ce22549b46a6240)



+ 查看svc-ingress信息

![](https://via.placeholder.com/800x600?text=Image+af77b2823919fe2d)



5. 修改host文件

![](https://via.placeholder.com/800x600?text=Image+312a7cde2486f17d)

6. 访问测试

![](https://via.placeholder.com/800x600?text=Image+84b7b8bfefa5807b)



# 五、BasicAuth用户认证


1. 创建证书，以及 cert 存储  
`#yum -y install httpd`   
`#htpasswd -c auth foo`   
`#kubectl create secret generic basic-auth --from-file=auth` 
2. 使用Deployment控制器部署myapp4相关的Pod对象

![](https://via.placeholder.com/800x600?text=Image+d623eb13e35868f0)

+ 查看deployment状态  
![](https://via.placeholder.com/800x600?text=Image+a27517b16c694e02)
3. 使用ClusterIP控制器部署svc4相关的对象

![](https://via.placeholder.com/800x600?text=Image+b952ff86924b50fb)

+ 查看svc

![](https://via.placeholder.com/800x600?text=Image+8ecc3594cd31886b)

4. 创建Ingress实例

![](https://via.placeholder.com/800x600?text=Image+54b91b785e9ff479)

![](https://via.placeholder.com/800x600?text=Image+047940775bf43495)

5. 查看svc-ingress信息

![](https://via.placeholder.com/800x600?text=Image+af32eb042660bf95)

6. 修改host文件

![](https://via.placeholder.com/800x600?text=Image+6aafcf9e6d8f39cc)

7. 访问测试

![](https://via.placeholder.com/800x600?text=Image+87cc47f7f37452c0)



# 六、nginx重写


+ 当用户访问myapp5.cuiliang.com时跳转到myapp3.cuiliang.com



1. 创建Ingress实例

![](https://via.placeholder.com/800x600?text=Image+9dc0efa042ac297f)

2. 查看svc-ingress信息

![](https://via.placeholder.com/800x600?text=Image+57dcd0363b015b08)

3. 修改host文件

![](https://via.placeholder.com/800x600?text=Image+781bb59f6afe4ee1)

4. 访问测试  
   ![](https://via.placeholder.com/800x600?text=Image+215b5d198e06349c)

![](https://via.placeholder.com/800x600?text=Image+1d28ec11dcba2983)


