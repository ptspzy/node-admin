var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.render('third_party_cp', {
        title:"渠道管理",
        data:""
    });
});
module.exports = router;