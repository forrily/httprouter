const basePath = __dirname + '/';
const usa = Symbol();
const usb = Symbol();

const log4js = require('log4js');
log4js.configure({
    appenders: {
        cheese:
        { type: 'file', filename: 'cheese.log' },
        app: {
            type: 'file',
            filename: basePath + '../log/app.log',
            maxLogSize: 10485760,
            pattern: '.yyyy-MM-dd-hh',
            backups: 5,
            compress: true
        },
        apiAccess: {
            type: 'file',
            filename: basePath + '../log/api_access.log',
            maxLogSize: 10485760,
            pattern: '.yyyy-MM-dd-hh',
            backups: 5,
            compress: true
        },
        apiError:
        {
            type: 'file',
            filename: basePath + '../log/api_error.log',
            pattern: '.yyyy-MM-dd-hh',
            maxLogSize: 10485760,
            backups: 5,
            compress: true
        },
    },
    categories: {
        default:{
            appenders: ['cheese', 'app'],
            level: 'error'
        }
    }
});
class Logger{
    constructor(){
this.cheese = log4js.getLogger('cheese');
this.app = log4js.getLogger('app');
this.apiError = log4js.getLogger('apiError');
this.apiAccess = log4js.getLogger('apiAccess');
    }

}

module.exports = Logger;