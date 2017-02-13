var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.render('manage_content', {
        title:"首页",
        data:""
    });
});
module.exports = router;