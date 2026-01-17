# Artifactory使用
# 新建仓库
## 新建本地仓库
![img_208.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_208.png)

## 选择仓库类型
![img_704.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_704.png)

## 填写仓库信息


## 查看仓库信息
![img_4832.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4832.png)

## 修改文件大小限制
<font style="color:rgb(77, 77, 77);">认是限制上传文件大小为100MB，我们把它改成0，即不限制大小</font>



# 上传制品到Artifactory
## 通过web页面上传
选择上传的仓库



选择文件

![img_1696.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1696.png)

查看文件信息

![img_3728.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3728.png)

## 通过API上传
获取api上传命令

![img_4464.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4464.png)

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




