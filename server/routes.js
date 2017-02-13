var routeRegister = function(app) {

    /* register page routes */
    app.use('/', require('./routes/index.js'));
    app.use('/manage_content', require('./routes/manage_content.js'));
    app.use('/book', require('./routes/book.js'));
    app.use('/channel_add', require('./routes/channel_add.js'));
    app.use('/channel_manage', require('./routes/channel_manage.js'));
    app.use('/third_party_cp', require('./routes/third_party_cp.js'));
    // app.use('/userinfo', require('./routes/userinfo.js'));
    // app.use('/bookshelf', require('./routes/bookshelf.js'));

    /* 404 */
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.render('404');
        }
    });

};

module.exports = routeRegister;

