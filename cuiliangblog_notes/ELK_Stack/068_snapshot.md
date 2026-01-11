# snapshot

> 来源: ELK Stack
> 创建时间: 2023-07-13T10:57:22+08:00
> 更新时间: 2026-01-11T09:26:41.978026+08:00
> 阅读量: 563 | 点赞: 0

---

# 题目
创建my_backup快照存储库，然后对data_stream_1创建快照

## 答案
```json
# 创建快照存储库
PUT /_snapshot/my_backup
{
  "type": "fs",
  "settings": {
    "location": "my_backup_location"
  }
}
# 查看快照存储库
GET /_snapshot/my_backup
# 创建快照
PUT /_snapshot/my_backup/snapshot_1?wait_for_completion=true
{
  "indices": "data_stream_1",
  "ignore_unavailable": true,
  "include_global_state": false
}
```

## 

