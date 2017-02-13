var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.render('channel_add', {
        title:"首页",
        data:""
    });
});
module.exports = router;