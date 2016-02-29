var express = require('express')
var port = process.env.PORT || 3000
var app=express()

app.set('views','./views')
app.set('view engine','jade')
app.listen(port)

console.log('imoocSzh started on port '+ port);