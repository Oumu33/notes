# Redis哈希(Hash)
# 一、简介
1. Redis hash 是一个键值(key=>value)对集合。
2. Redis      hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象。
3. 每个 hash 可以存储 2<font style="color:#333333;">32</font> -1 键值对（40多亿）。

# 二、hash命令
1. 添加哈希表字段

| 命令 | 描述 |
| --- | --- |
| lrange key   start end | 获取链表中从start开始到end的值，start从0开始计，倒数第一元素的位置为-1 |
| llen key | 获得列表元素的个数 |
| lindex   key 位置 | 获取指定位置列表的值 |


1. 查询哈希表字段

| 命令 | 描述 |
| --- | --- |
| HEXISTS   key field | 查看哈希表 key 中，指定的字段是否存在 |
| HGET key field | 获取存储在哈希表中指定字段的值。 |
| HGETALL key | 获取在哈希表中指定 key 的所有字段和值 |
| HKEYS key | 获取所有哈希表中的字段 |
| HLEN key | 获取哈希表中字段的数量 |
| HMGET key field1   [field2] | 获取所有给定字段的值 |
| HVALS key | 获取哈希表中所有值 |


1. 删除哈希表字段

| 命令 | 描述 |
| --- | --- |
| HDEL key   field1 [field2] | 删除一个或多个哈希表字段 |
| llen key | 获得列表元素的个数 |
| lindex   key 位置 | 获取指定位置列表的值 |


1. 操作哈希表字段

| 命令 | 描述 |
| --- | --- |
| HINCRBY key field   increment | 为哈希表 key 中的指定字段的整数值加上增量 increment  |
| HINCRBYFLOAT key   field increment | 为哈希表 key 中的指定字段的浮点数值加上增量 increment 。 |
| lindex   key 位置 | 获取指定位置列表的值 |
| HSET key   field value | 将哈希表 key 中的字段 field 的值设为 value |


# 三、示例
1. hmset将多个field->value键值对写入key

例如：> hmset users:10 uid 15 uname zhangsan password 1234 birth 1990-10-12

其中users:10为key（引用编号为10号的用户信息）

uname zhangsan (uname为field1,zhangsan为其对应的值)

![img_2448.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2448.png)

1. hget获取指定key中指定的一个field对应的value



1. hmget获取指定key中指定的多个field对应的value

![img_2400.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2400.png)

1. hgetall获取指定key中所有field和value键值对数据

![img_1184.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1184.png)

1. hlen获取指定key中所有field和value键值对的数量

![img_528.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_528.png)

1. hkeys获取指定key中所有field数据



1. hvals获取指定key中所有field对应value数据



1. hdel删除指定key中多个field及其对应value数据



1. hset或hmset修改key中一个或多个field对应的值




