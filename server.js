const http = require('http');
const url = require('url');
const Router = require('./router/');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.base.js');
const compiler = webapck(config);

http.createServer((request, response) => {
    // console.log(url);
    Router(url.parse(request.url).path,request, response);
}).listen(3000);