```
use yueloo;

db.users.createIndex({
    username: 1
}, {
    unique: true
});

db.users.remove({});

db.users.insert({
    _id: ObjectId("5783302564bd0c294318192a"),
    username: "admin",
    real_name: "admin",
    mobile: "12345678901",
    role: "administrator",
    is_super_admin: true,
    created_at: Date(),
    creator_name: "admin",
    password: "21232f297a57a5a743894a0e4a801fc3"
});
```