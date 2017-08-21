var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// json类型body
app.use(bodyParser.json());
// query string类型body
app.use(bodyParser.urlencoded({
	extended: false
}));
// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

//开始的routes
app.use('/', require('./routes/index.js'));
// --------------- END ROUTES --------------------
// 启动端口
app.listen(81);
console.log(' started at localhost: 81');