//引用http模块
var http = require("http");
// 引用url模块
var url = require("url");
//引用querystring模块
var querystring = require("querystring");

http.createServer(function(request,response) {
    var objectUrl=url.parse(request.url);
    var objectQuery=querystring.parse(objectUrl.query);

    response.writeHead(200,{
        "content-type":"text/html"
    });

    //输出url的各项参数
    response.write("<h1>objectUrl</h1>");
    for(var i in objectUrl){
        if (typeof (objectUrl[i])!="function") {
            response.write(i+"=>"+objectUrl[i]+"<br>");
        }
    }
    //输出url中的query的各项参数
    response.write("<h1>objectQuery</h1>");
    for(var i in objectQuery){
        response.write(i+"=>"+objectQuery[i]+"<br>");
    }
    response.end();
}).listen(2014);