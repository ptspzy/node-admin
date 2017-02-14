#!/usr/bin/env node

(function () {
    var app = require('./app.js');
    var cfg = require('./config.js');
    var http = require('http');

    var DEFAULT_HTTP_PORT = 3000;
    var httpPort = cfg.http.port || process.env.PORT || DEFAULT_HTTP_PORT;

    var http_server = http.createServer(app);

    http_server.listen(httpPort, function (){
        console.log('HTTP server listening on port', httpPort);
        console.log('Node:', 'admin');
    });

    // error page
    app.use(function (err, req, res, next) {
        res.render('error', {
            error: err
        });
    });

})();
