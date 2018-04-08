
# Installation and Use
> 访问前你应改做以下准备
- 在根目录文件夹打开cmd
- 下载node所需的依赖包
- 执行.sql脚本文件
- 执行node app.js 就可以跑起来啦~~~


## 3.1 Basic Parameterized Http Route
### 测试路由的路径，能访问到这个路径就显示hello world 
> 操作步骤：浏览器访问："http://localhost:3000/v3/test-api" 路由成功返回hello 

## 3.2 Basic Query in Request
### 请求中基本查询
> 操作步骤：浏览器访问："http://localhost:3000/v3/plus?a=3&b=4",查询成功返回一串json数据 {ret: 1000, version: 3, action: plus, result: 7}

## 3.3 URLEncoded Form in Request
### 访问静态页面显示一个表单，提交表单返回json 数据
> 操作步骤：浏览器访问："http://localhost:3000/index" 出现一个表单，输入数据3和4 返回json数据 '{ret: 1000, version: 3, action: plus, result: 7}'

## 3.4 URLEncoded Form in Request
### 使用模板引擎返回一个表格
> 操作步骤：浏览器访问："http://localhost:3000/tutorial/student/list" 访问成功，返回一个表格

## 3.5 Logging to Multiple Files Differentiated by Levels
### log打印
> 操作步骤：浏览器访问："http://localhost:3000/log" 选择name & lv 后点击add，浏览器返回"{ ret: 1000 }" 根目录生出一个log的文件及log文件，而且该文件会记录下此次访问的时间，日志的级别和输出信息'WOW!'。

## 3.6 Hiding Your Authentication Protected Service behind AuthMiddleware 
### 该例子中并没有提供登陆的实现,这里主要根据用户拿到intAuthToken和id后,在Token表中查询是否有值,如有则说明该用户已经能够登陆,可以执行下一步的"查询详情操作".

> 操作步骤:浏览器访问：(http://localhost:3000/sp100032/wallet/self/detail?intAuthToken=yuqbajnnr)，则会显示'welcome iPhone se user from 121.2.88.137', 如果输入的是：(http://localhost:3000/sp100032/wallet/self/detail),则显示'{"ret":1001}';

## 3.7 Automate Your Documentation
### 通过apidoc快速生成api文档
> 操作步骤：请先通过NPM 安装apidoc依赖包 "npm i apidoc -g"
> 在根目录命令行执行"app.js"文件 apidoc -f "app\.js$" 