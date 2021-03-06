var webpack = require('webpack')
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var clientSrcPath = './client';
var clientDistPath = './dist/client';

module.exports = {
    entry: {
        "common-libs": [

            // common styles
            clientSrcPath + '/bower_components/font-awesome/css/font-awesome.css',
            clientSrcPath + '/bower_components/metisMenu/dist/metisMenu.css',
            clientSrcPath + '/bower_components/bootstrap/dist/css/bootstrap.css',
            clientSrcPath + '/bower_components/datatables.net-bs/css/dataTables.bootstrap.css',
            clientSrcPath + '/css/sb-admin-2.css',

            'jquery', 'metisMenu', 'bootstrap'
        ],
        "pg-index": clientSrcPath + '/js/pg-index.js',
        "pg-login": clientSrcPath + '/js/pg-login.js',
        "pg-manage-content": clientSrcPath + '/js/pg-manage-content.js',
        "pg-book-detail": clientSrcPath + '/js/pg-book-detail.js',
        "pg-channel-add": clientSrcPath + '/js/pg-channel-add.js',
        "pg-channel-manage": clientSrcPath + '/js/pg-channel-manage.js',
        "pg-third-party-cp": clientSrcPath + '/js/pg-third-party-cp.js',
        "pg-modify-profile": clientSrcPath + '/js/pg-modify-profile.js'
    },
    resolve: {
        root: [path.join(__dirname, "./client/bower_components")],
        // modulesDirectories: ["node_modules", "./client/bower_components/"],
        // modulesDirectories: ["web_modules", "node_modules", "./client/bower_components"],
        alias: {
            'bootstrap-select': path.join(__dirname, clientSrcPath, "/bower_components/bootstrap-select/dist/js/bootstrap-select.js"),
            'datatables.net': path.join(__dirname, clientSrcPath, "/bower_components/datatables.net/js/jquery.dataTables.js"),
            'datatables.net-bs': path.join(__dirname, clientSrcPath, "/bower_components/datatables.net-bs/js/dataTables.bootstrap.js")
        }
    },
    output: {
        path: path.join(__dirname, clientDistPath),
        publicPath: '/client/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader') // just extract the raw text from css file, not transfer to js resourc
        }, {
            test: /\.(jpeg|jpg|png|gif)$/,
            loader: 'file-loader?name=img/[name].[ext]'
        }, {
            test: /\.(woff|svg|eot|ttf)\??.*$/,
            loader: 'file-loader?name=font/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        ),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.ProvidePlugin({     // 解决morrisjs中直接调用Raphael找不到对象的问题
            Raphael: "raphael"
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common-libs',
            filename: 'js/common-libs.js'
        })
    ]
};
