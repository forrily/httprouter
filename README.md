#测试路由的路径，能访问到这个路径就显示hello world 
>1.访问"localhost:3000/v3/test-api" 路由成功返回hello world

#访问静态页面显示一个表单，提交表单返回json 数据
>2.访问"localhost:3000/index" 出现一个表单，输入数据3和4 返回'{ret: 1000, version: 3, action: plus, result: 7}'

#使用模板引擎返回一个表格
>3.访问"localhost:3000/tutorial/student/list" 返回一个表格

#打印log的没能成功打印
>访问"http://localhost:3000/log"点击add返回"{ ret: 1000 }" log文件能生成，但是没能将内容打印进去  T T