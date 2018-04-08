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
/**
 * @api{get}/v3/test-api 3.1 Basic Parameterized Http Route
 * @apiGroup Policeman
 * @apiName Http_Route
 * @apiDescription 测试路由的路径，能访问到这个路径就显示hello world 
 * 
 * @apiExample Example usage:
 * 键入URL  http://localhost:3000/v3/test-api
 * 
 * @apiSuccess{String} print "hello world"
 */
app.get(constants.ROUTER_PARAMS.VERSION + constants.ROUTER_PARAMS.ACTION, testrouter.fun2); 
//统一资源定位器请求的基本查询
/**
* @api {get} /v:version/:action 3.2 Basic Query in Request
* @apiName QueryInRequst
* @apiGroup Policeman
* @apiDescription 路由的基本查询操作，使用get请求，将a和b的值传到后台，计算后返回一串json数据
*
* @apiExample Example usage:
* 键入URL http://localhost:3000/v3/plus?a=3&b=4
*
* @apiParam {Number} version  the app version
* @apiParam {String} action   the operate for two number
* @apiParam {Number} a
* @apiParam {Number} b
*
* @apiSuccessExample {json} Succes-response:
*     Http/1.1 200 ok
*     {
*       'ret' :1000,
*       'version':3,
*       'action':'plus',
*       'result':7
*     }
*/
app.post(constants.ROUTER_PARAMS.VERSION + constants.ROUTER_PARAMS.ACTION, testrouter.fun3); 
//访问静态页面显示一个表单，提交表单返回json 数据
/**
* @api {post} /v:version/:action 3.3 URLEncoded Form in Request
* @apiName FormInRequest
* @apiGroup Policeman
* @apiDescription 访问静态页面显示一个表单，提交表单数据，后台计算后返回json 数据
*
* @apiExample Example usage:
* 键入URL  http://localhost:3000/index
*
* @apiParam {Number} version  the app version
* @apiParam {String} action   the operate for two number
* @apiParam {Number} a
* @apiParam {Number} b
*
* @apiSuccessExample {json} Succes-response:
*     Http/1.1 200 ok
*     {
*       'ret' :1000,
*       'version':3,
*       'action':'plus',
*       'result':7
*     }
*/

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
