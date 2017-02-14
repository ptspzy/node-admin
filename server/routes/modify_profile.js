var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.render('modify_profile', {
        title:"渠道管理",
        data:""
    });
});
module.exports = router;