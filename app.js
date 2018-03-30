var express = require('express');
const router = require('./router/routers');
const bodyParser = require('body-parser');
var content = require('./content');

const Logger = require('./lib/Logger');
const userLogger = Logger.app;

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.raw({
  type: '*/*'
}));

app.get(content.ROUTER_PATHS.BASE + content.ROUTER_PATHS.TEST_API, function (req, res) {
  res.send('Hello World!');//测试路由的路径，能访问到这个路径就显示hello world 
});

app.post(content.ROUTER_PATHS.BASE + content.ROUTER_PATHS.PLUS, router);//访问静态页面显示一个表单，提交表单返回json 数据

app.use('/index', express.static('public/index.html'));//访问静态页面显示一个表单，提交表单返回json 数据
app.set('view engine', 'jade');

app.get('/tutorial/student/list', function (req, res) {
  //使用模板引擎返回一个表格
  res.render('index', { title: 'hey guys' })
});


app.use('/log', express.static('public/logdemo.html'));
app.post('/v3/peter/debug/append', function (req, res) {
  //这里为能将log成功打印
  res.send({ ret: 1000 });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
