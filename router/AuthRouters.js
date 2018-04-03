const express = require('express'); 
const AbstractAuthRouterCollection = require('./AbstractAuthRouterCollection'); 
const Logger = require('../utils/LoggerConfig'); 
const MySQLManager = require("../utils/MySQLManager"); 
const TokenCache = require('../utils/TokenCache').default; 
tokenCahe = new TokenCache(); 
const Token = require('../model/Token').default; 
const User = require('../model/User').default; 

const BasicParameterizedHttpRoute = function (req, res) {
    res.send('Hello World!'); 
    //3.1基本参数化的Http路由 Basic Parameterized Http Route
}

const QueryInRequst = function (req, res) {
    var a = parseFloat(req.query.a); 
    var b = parseFloat(req.query.b); 
    var result = a + b; 
    res.json( {
        "ret":1000, 
        "version":req.params.version, 
        "action":req.params.action, 
        "result":result
    }); 
    //3.2请求中的基本查询Basic Query in Request
}

const FormInRequest = function (req, res) {
    var a = parseFloat(req.body.a || req.query.a); 
    var b = parseFloat(req.body.b || req.query.b); 
    var result = a + b; 
    res.json( {
        "ret":1000, 
        "version":req.params.version, 
        "action":req.params.action, 
        "result":result
    }); 
    //3.3表单请求  URLEncoded Form in Request
}

const TemplateEngine = function (req, res) {
    var arr = ["1111111", "2222222", "3333333"]; 
    res.render('index',  {
        title:'hey guys', 
        arr:arr
    }); 
    //3.4使用模板引擎 Html Template Engine Practice
}

const LoggingToMultipleFiles = function (req, res) {
    // console.log(req.params.level, 'WOW!!!');
    Logger.instance.app.info(req.query.username || req.body.username, 
            req.query.lv1 || req.body.lv1, 'wow！'); 
    res.send( {
        ret:1000
    }); 
    //3.5Logging to Multiple Files Differentiated by Levels 记录按级区分的多个文件
}

const AuthMiddlewareProtected = function(req, res, next) {
    const instance = this; 
    let intAuthToken = req.query.intAuthToken || req.params.intAuthToken || req.body.intAuthToken; 
    let id = req.query.userid || req.params.userid || req.body.userid;
    tokenCahe.check.call(this, intAuthToken, id).then(function (isTokenExisits) {
        if (isTokenExisits != true) {
            throw"IntAuthToken isn't found in mysql"
        }
        next(); 
    })
    .catch(function (err) {
        Logger.instance.app.info(err); 
        err.ret = 1001; 
        instance.respondWithError(res, err); 
    })
    //3.6 Hiding Your Authentication Protected Service behind AuthMiddleware 中间件保护的用户验证
}

const getDetail = function(req, res, next) {
    let intAuthToken = req.query.intAuthToken || req.params.intAuthToken||req.body.intAuthToken;
    let device = req.query.device || req.params.device||req.body.device;   
       
    Token.findOne( {
      where: {
        intAuthToken:intAuthToken,
        
      }
    })
      .then(function (token) {
        if (null !== token) {
          User.findOne( {
            where: {
              id:token.tokenId
            }
          })
            .then(user =>  {
              res.render('user',  {
                token:token, 
                user:user
              }); 
            }); 
        }else {
          throw 'not found any detail in mysql'; 
        }
      })
      .catch(function (res, err) {
        Logger.instance.app.info(err),
        err.ret = 1001
        instance.respondWithError(err); 
      }); 
  }


//3.7  Automate Your Documentation


class AuthRouters extends AbstractAuthRouterCollection {
    constructor(props) {
        super(props);
        const instance = this; 
        this.fun1 = BasicParameterizedHttpRoute.bind(instance); 
        this.fun2 = QueryInRequst.bind(instance); 
        this.fun3 = FormInRequest.bind(instance); 
        this.fun4 = TemplateEngine.bind(instance); 
        this.fun5 = LoggingToMultipleFiles.bind(instance); 
        this.fun6 = AuthMiddlewareProtected.bind(instance); 
        this.fun7 = getDetail.bind(instance); 
    }

}


module.exports.default = AuthRouters; 