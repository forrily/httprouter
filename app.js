const express = require('express'); 
const app = express(); 
const Testrouter = require('./router/AuthRouters').default; //模块调用
const bodyParser = require('body-parser'); 
var constants = require('./constants'); 


const testrouter = new Testrouter(); 


app.use(bodyParser.urlencoded( {
  extended:true
})); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded( {
  extended:true
})); 
app.use(bodyParser.raw( {
  type:'*/*'
}));


app.get(constants.ROUTER_PATHS.BASE + constants.ROUTER_PATHS.TEST_API, testrouter.fun1);
//测试路由的路径，能访问到这个路径就显示hello world 

app.get(constants.ROUTER_PARAMS.VERSION + constants.ROUTER_PARAMS.ACTION, testrouter.fun2); 
//统一资源定位器请求的基本查询
app.post(constants.ROUTER_PARAMS.VERSION + constants.ROUTER_PARAMS.ACTION, testrouter.fun3); 
//访问静态页面显示一个表单，提交表单返回json 数据

app.use('/index', express.static('public/index.html')); 
app.set('view engine', 'jade'); 

app.get(constants.ROUTER_PARAMS.NAMESPACE + constants.ROUTER_PARAMS.RESOURCE + constants.ROUTER_PARAMS.ACTION, testrouter.fun4); 
//使用模板引擎返回一个表格

app.use('/log', express.static('public/logdemo.html')); 
app.post(constants.ROUTER_PARAMS.VERSION + constants.ROUTER_PARAMS.RESOURCE + constants.ROUTER_PARAMS.LEVEL + constants.ROUTER_PARAMS.ACTION, testrouter.fun5); 
//打印log
app.get(constants.ROUTER_PARAMS.USERID + constants.ROUTER_PATHS.WALLET + constants.ROUTER_PATHS.SELF + constants.ROUTER_PATHS.DETAIL, testrouter.fun6,testrouter.fun7); 

//中间件///user/{:userId}/wallet/self/detail
var server = app.listen(3000, function () {
  var host = server.address().address; 
  var port = server.address().port; 

  console.log('Example app listening at http://%s:%s', host, port);
});
