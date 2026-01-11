# snapshot

> 分类: ELK Stack > ECE认证
> 更新时间: 2026-01-10T23:33:39.241360+08:00

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
