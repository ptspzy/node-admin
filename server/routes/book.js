var express = require('express');
var router = express.Router();

router.get('/:bookid', function(req, res, next) {

    res.render('book', {
        title:"首页",
        data:""
    });
});
module.exports = router;