var express = require('express')
var path =require('path')
var port = process.env.PORT || 3000
var app = express()
app.set('views','./views/pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)
console.log('imooc started on port ' + port);
//index page
app.get('/',function(req,res) {
    res.render('index',{
        title:'imooc 首页',
        movies:[{
            title:'机械战警',
            _id:1,
            poster:'http://r3.ykimg.com/0516000053EEB63675839160D0B79D5'
        },{
            title:'机械战警',
            _id:2,
            poster:'http://r3.ykimg.com/0516000053EEB63675839160D0B79D5'
        },{
            title:'机械战警',
            _id:3,
            poster:'http://r3.ykimg.com/0516000053EEB63675839160D0B79D5'
        },{
            title:'机械战警',
            _id:4,
            poster:'http://r3.ykimg.com/0516000053EEB63675839160D0B79D5'
        },{
            title:'机械战警',
            _id:5,
            poster:'http://r3.ykimg.com/0516000053EEB63675839160D0B79D5'
        },{
            title:'机械战警',
            _id:6,
            poster:'http://r3.ykimg.com/0516000053EEB63675839160D0B79D5'
        }]
    })
})
//detail page
app.get('/movie/:id',function(req,res) {
    res.render('detail',{
        title:'imooc 详情页',
        movie:{
            doctor:'苏智慧',
            country:'中国',
            title:'机械战警',
            year:2016,
            poster:'http://r3.ykimg.com/0516000053EEB63675839160D0B79D5',
            language:'中文',
            flash:'http://player.youku.com/player.php/sid/XNjc0NTUy/v.swf',
            summary:'本剧是苏导处女作。。。'
        }
    })
})
//admin page
app.get('/admin/movie',function(req,res) {
    res.render('admin',{
        title:'imooc 后面录入页',
        movie:{
            title:'',
            doctor:'',
            country:'',
            year:'',
            poster:'',
            flash:'',
            summary:'',
            language:''
        }
    })
})
//list page
app.get('/admin/list',function(req,ress) {
    res.render('list',{
        title:'imooc 列表页',
        movies:[{
            _id:1,
            doctor:'苏智慧',
            country:'中国',
            title:'机械战警',
            year:2016,
            language:'中文',
            flash:'http://player.youku.com/player.php/sid/XNjc0NTUy/v.swf',
            summary:'本剧是苏导处女作。。。'            
        }]
    })
})