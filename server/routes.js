var routeRegister = function(app) {

    /* register page routes */
    app.use('/', require('./routes/index.js'));
    app.use('/index', require('./routes/index.js'));
    app.use('/login', require('./routes/login.js'));
    app.use('/manage_content', require('./routes/manage_content.js'));
    app.use('/book_detail', require('./routes/book_detail.js'));
    app.use('/channel_add', require('./routes/channel_add.js'));
    app.use('/channel_manage', require('./routes/channel_manage.js'));
    app.use('/channel_cooperation', require('./routes/channel_cooperation.js'));
    app.use('/third_party_cp', require('./routes/third_party_cp.js'));
    app.use('/modify_profile', require('./routes/modify_profile.js'));

    /* 404 */
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.render('404');
        }
    });

};

module.exports = routeRegister;

