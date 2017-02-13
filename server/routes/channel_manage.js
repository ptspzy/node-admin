var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.render('channel_manage', {
        title:"渠道管理",
        data:""
    });
});
module.exports = router;