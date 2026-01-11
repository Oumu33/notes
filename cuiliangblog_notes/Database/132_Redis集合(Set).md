# Redis集合(Set)

> 来源: Database
> 创建时间: 2021-02-13T14:07:28+08:00
> 更新时间: 2026-01-11T09:18:23.796698+08:00
> 阅读量: 627 | 点赞: 0

---

# 一、简介
1. Redis 的 Set 是 String      类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据。
2. Redis      中集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。
3. 集合中最大的成员数为 232 - 1 (4294967295,      每个集合可存储40多亿个成员)。
4. 举例

![](https://via.placeholder.com/800x600?text=Image+3d036139a3d83394)

# 二、命令
1. 添加集合

| 命令 | 描述 |
| --- | --- |
| SADD   KEY_NAME VALUE1..VALUEN | 将一个或多个成员元素加入到集合中，已经存在于集合的成员元素将被忽略 |


1. 查询集合

| 命令 | 描述 |
| --- | --- |
| SMEMBERS   key | 返回集合中的所有的成员 |
| SINTER KEY   KEY1..KEYN  | 返回给定所有给定集合的交集 |
| SDIFF   FIRST_KEY OTHER_KEY1..OTHER_KEYN | 返回给定集合之间的差集 |
| SUNION KEY   KEY1..KEYN | 返回给定集合的并集 |
| SCARD   KEY_NAME  | 返回集合中元素的数量 |


1. 移出集合成员

| 命令 | 描述 |
| --- | --- |
| SPOP key   [count] | 移除集合中的指定 key 的一个或多个随机元素 |
| SREM KEY   MEMBER1..MEMBERN | 移除集合中的一个或多个成员元素 |
| SMOVE   SOURCE DESTINATION MEMBER  | 将指定成员 member 元素从 source   集合移动到 destination 集合 |


# 三、示例
+ redis      Sets集合是一组无重值，无排序的string字符串
1. sadd设置key对应的value集合
2. smembers查看key对应集合的成员

![](https://via.placeholder.com/800x600?text=Image+a9fbbfe91a76b801)

+ 集合成员不会按照插入的顺序显示
1. sismember查看指定元素是否属于一个集合

![](https://via.placeholder.com/800x600?text=Image+e2bb5a0a5b699740)

+ c属于集合myset，x不属于

![](https://via.placeholder.com/800x600?text=Image+ab86db4d6d8617b1)

+ 已有的集合元素不会重复添加
1. sinter查看多个集合的交集

![](https://via.placeholder.com/800x600?text=Image+e1cb33426ed98d2d)

1. sdiff查看多个集合的差集

![](https://via.placeholder.com/800x600?text=Image+2100ba5e47d88e39)

1. sunion查看多个集合的合集

![](https://via.placeholder.com/800x600?text=Image+39dc5aa4647fd24c)

1. scard查看集合中元素的个数

![](https://via.placeholder.com/800x600?text=Image+c31efe40e53f7ae9)


