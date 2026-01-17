# 在HTTP API中使用PromQL
## <font style="color:rgb(48, 49, 51);">一、获取targets数据</font>
### <font style="color:rgb(48, 49, 51);">1. prometheus查看targets数据</font>
![img_624.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_624.png)

+ <font style="color:rgb(48, 49, 51);">如图所示，现在的prometheus共有三个targets，一个为prometheus，还有两个为Windows</font>

### <font style="color:rgb(48, 49, 51);">2. 使用apifox模拟请求，获取数据</font>
+ <font style="color:rgb(48, 49, 51);">调用</font><font style="color:rgb(48, 49, 51);">http://<prometheus.address>/api/v1/targets</font><font style="color:rgb(48, 49, 51);">并解析</font>

![img_4624.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4624.png)

## <font style="color:rgb(48, 49, 51);">二、获取当前时间指标值</font>
<font style="color:rgb(106, 115, 125);">适用于获取服务器的CPU核心数、操作系统内核版本、内存总容量等这些当前状态下的指标值</font>

### <font style="color:rgb(48, 49, 51);">1. prometheus dashboard查询</font>
+ <font style="color:rgb(48, 49, 51);">以查询Linux系统内核版本为例</font>

![img_896.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_896.jpeg)

+ <font style="color:rgb(48, 49, 51);">如图所示，执行</font><font style="color:rgb(48, 49, 51);"> </font><font style="color:rgb(48, 49, 51);">node_uname_info{job="linux",instance="139.***.***.149:9100"}</font><font style="color:rgb(48, 49, 51);"> 查询语句即可。</font>

### <font style="color:rgb(48, 49, 51);">2. 使用apifox模拟请求，获取数据</font>
+ <font style="color:rgb(48, 49, 51);">调用</font><font style="color:rgb(48, 49, 51);">http://<prometheus.address>/api/v1/query?query=<expr></font><font style="color:rgb(48, 49, 51);">，其中expr为prometheus的查询语句。</font>

![img_1648.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1648.png)<font style="color:rgb(144, 147, 153);background-color:rgb(246, 248, 250);">  
</font>

## <font style="color:rgb(48, 49, 51);">三、获取时间范围内指标值</font>
<font style="color:rgb(106, 115, 125);">grafana的折线图数据，都是这种使用场景，例如在指定时间范围内的CPU使用率、内存使用率、系统负载等</font>

### <font style="color:rgb(48, 49, 51);">1. prometheus dashboard查询</font>
+ <font style="color:rgb(48, 49, 51);">以查询CPU使用率为例</font>



### <font style="color:rgb(48, 49, 51);">2. 使用apifox模拟请求，获取数据</font>
+ <font style="color:rgb(48, 49, 51);">调用</font><font style="color:rgb(48, 49, 51);">http://<prometheus.address>/api/v1/query_range?query=<expr>&start=<startstamp>&end=<endstamp>&step=<step></font>
+ <font style="color:rgb(48, 49, 51);">expr为prometheus的查询语句</font>
+ <font style="color:rgb(48, 49, 51);">startstamp为范围查询开始时间戳</font>
+ <font style="color:rgb(48, 49, 51);">endstamp为范围查询结束时间戳</font>
+ <font style="color:rgb(48, 49, 51);">step为查询时间间隔（单位为秒）</font>

![img_1120.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1120.png)<font style="color:rgb(48, 49, 51);">  
</font>![img_4384.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4384.png)<font style="color:rgb(144, 147, 153);background-color:rgb(246, 248, 250);"></font>

## <font style="color:rgb(48, 49, 51);">四、获取告警数据</font>
### <font style="color:rgb(48, 49, 51);">1. prometheus查询</font>
![img_2160.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2160.png)

### <font style="color:rgb(48, 49, 51);">2. 使用apifox模拟请求，获取数据</font>
+ <font style="color:rgb(48, 49, 51);">调用</font><font style="color:rgb(48, 49, 51);">http://<prometheus.address>/api/v1/rules?type=alert</font><font style="color:rgb(48, 49, 51);">并解析</font>




