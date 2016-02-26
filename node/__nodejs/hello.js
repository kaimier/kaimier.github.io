//引用http模块
var http=require("http");
//创建服务端
http.createServer(function(request,response){
    response.writeHead(200,{
        //网页MIME类型
        "content-type":"text/html"
    });

    //输出网页内容
    response.write("<h1>Hello world!</h1>");

    //控制台输出
    console.log("Hello world!");

    //结束输出
    response.end();
})

.listen(2014);
//第1次：请求http://localhost:2014
// 第2次：请求http://localhost:2014/favicon.ico