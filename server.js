const Webpack = require("webpack");
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require("./webpack.config");
const config = require('./config/');

var compiler = Webpack(webpackConfig);
var server = new WebpackDevServer(compiler);

server.listen(4006, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('http://localhost:4006' + config.publicPath)
});