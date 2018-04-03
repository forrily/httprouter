const basePath = __dirname + '/'; 
const log4js = require('log4js'); 

var pattern = '.yyyy-MM-dd-hh'; 
const singleton = Symbol(); 
const singletonEnforcer = Symbol(); 


log4js.configure( {//配置
appenders: {
        app: {
            type:'file', 
            filename:basePath + '../log/app.log', 
            maxLogSize:10485760, 
            pattern:pattern, 
            backups:5, 
            compress:true
        }, 
        apiAccess: {
            type:'file', 
            filename:basePath + '../log/api_access.log', 
            maxLogSize:10485760, 
            pattern:pattern, 
            backups:5, 
            compress:true
        }, 
        apiError: {
                type:'file', 
                filename:basePath + '../log/api_error.log', 
                pattern:pattern, 
                maxLogSize:10485760, 
                backups:5, 
                compress:true, 
                category:"apiError", 
            }, 
    }, 
    categories: {
        default: {
            appenders:['app', 'apiAccess', 'apiError'], 
            level:'INFO'
            
        }
    }
}); 

class LoggerConfig {
    static get instance() {
      if ( ! this[singleton]) {
        this[singleton] = new LoggerConfig(singletonEnforcer); 
      }
      return this[singleton]; 
    }
  
    constructor(enforcer) {
      if (enforcer != singletonEnforcer)
        throw "Cannot construct singleton"; 
      this.apiAccess = log4js.getLogger('apiAccess'); 
      this.apiError = log4js.getLogger('apiError'); 
      this.app = log4js.getLogger('app'); 
    }
  }


  module.exports = LoggerConfig; 