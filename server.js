const http = require('http');
const exporess = require('express');
const url = require('url');
const Router = require('./router/');

const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.base.js');
const compiler = webapck(config);

// http.createServer((request, response) => {
//     // console.log(url);
//     Router(url.parse(request.url).path,request, response);
// }).listen(3000);
app.set('views', './dist');

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, function(){
    console.log('app listening on port 3000\n');
});