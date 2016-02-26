var http=require('http');
var querystring=require('querystring');
http.createServer(function(request,response) {
    //定义变量，来处理post数据
    var postData="";
    //输出字符串
    var responseString ="";
    response.writeHead(200,{
        "content-type":"text/html"
    });

    //如果是get请求
    if (request.method=="GET") {
        responseString='<!doctype html><html lang="en"></head><meta charset="UTF-8" /><title>Document</title></head><body>'
        +'<form action="/" method="post">'
        +'<input type ="text" name="a" value="1" />'
        +'<input type ="text" name="b" value="2" />'
        +'<input type ="text" name="c" value="3" />'
        +'<input type="submit" value="submit" />'
        +'<form>'
        +'</body></html>';
        response.write(responseString);
        response.end();
    }else if(request.method=="POST"){
        //设置接收数据编码格式为UTF-8
        request.setEncoding('utf-8');
        //因为nodejs在处理post数据的时候，会将数据分成小包来序列处理
        //所以必须监听每一个数据小包的结果
        request.addListener("data",function(postDataChunk) {
            postData+=postDataChunk;
        });
        //所有数据接收完毕
        request.addListener("end",function() {
            //解析post数据
            var objectPostData=querystring.parse(postData);
            for(var i in objectPostData){
                responseString +=i+"=>"+objectPostData[i]+"<br>";
            }
            response.write(responseString);
            response.end();
        });
    }
}).listen(2014);