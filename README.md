> 访问前你应改做以下准备，下载node必要的依赖包：log4js，express。然后在命令行输入node app.js启动应用进行测试。
### 测试路由的路径，能访问到这个路径就显示hello world 
> 1.操作步骤：浏览器访问："http://localhost:3000/v3/test-api" 路由成功返回hello world

### 访问静态页面显示一个表单，提交表单返回json 数据
> 2.操作步骤：浏览器访问："http://localhost:3000/index" 出现一个表单，输入数据3和4 返回'{ret: 1000, version: 3, action: plus, result: 7}'

### 使用模板引擎返回一个表格
> 3.操作步骤：浏览器访问："http://localhost:3000/tutorial/student/list" 返回一个表格

### 打印log的没能成功打印
> 操作步骤：浏览器访问："http://localhost:3000/log" 点击add返回"{ ret: 1000 }" log文件能生成，但是没能将内容打印进去  T T
