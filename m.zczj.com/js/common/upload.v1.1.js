//闭包
(function(){
    "use strict";
    /*
    * 文件上传组件
    * 支持三种上传方式，html5、flash和iframe
    * 目的是以简单并且通用的方式解决上传问题
    * @author xuyong <xuyong@ucfgroup.com>
    * 在原有组件的基础上更换了flash部分，对局部做了修改, 脱离wx依赖
    * 修改为Class形式, html5和iframe形式使用同一种配置，flash单独使用一种配置
    * @createTime 2014-03-18
    * @modify 2014-08-18
    * @modify author snowNorth
    * @modify 2015-08-17
    * @modify author snowNorth
    * @version v1.0 v1.1
    * html5版 脱离jQuery
    */
    //程序入口
    var Upload = function (ele, opts) {
        // ele是dom对象
        var options = {
            "html5":{
                _switch : "html5", //上传方式选择 html5 flash normal
                static : ["./css/html5.v1.css"], //需要额外加载的静态资源 css和js
                datatype : "json", //返回值类型
                onsuccess : function(ele, data){ //上传成功回调
                   //console.log('data, ele', data, ele);
                },
                onerror : function(e){ //产生错误回调
                   //console.log('error', e);
                },
                progress : function(per, ele){ //上传进度条回调, 参数 per 代表百分比
                    var pele = ele.parent().parent().parent().find(".progress");
                    pele.css({"display": "block", "width": per + "%"});
                    if (per>=100) {
                        pele.hide(100);
                    }
                },
                upload_url : "./ww-upload.php", //上传地址
                //文件类型限制
                type : "'jpeg|jpg|png|gif'", //允许上传类型
                size : 1 * 1024 * 1024, // 1M 单个文件大小限制
                post_params: {"test": "html5"} //post参数
            },
            "auto":{
                //ie 测试
                datatype : "json",//返回值类型
                onsuccess : function(ele, data){ //上传成功回调
                   //console.log('data, ele', data, ele);
                },
                onerror : function(e){ //产生错误回调
                   //console.log(e);
                },
                post_params: {"test": "normal"}, //其他传递参数
                upload_url : "./ww-upload.php"
            }
        };
        var keys = 0;
        for ( var key in opts) {
            keys++;
            if (keys > 1) {
                break;
            }
        }
        if (keys == 1 && opts._switch) {
            //覆盖
            opts = options[opts._switch];
        }

        var defallt = {
            //模板
            template : {
                "html5"   : '<div class="progress"></div><div class="upfile_root">'
                            +   '<div class="upfile_c">'
                            +   '<a class="upfile_word" href="#">上传图片</a>'
                            +   '<input id="Filedata" class="ui_file" type="file" name="Filedata" multiple="multiple" />'
                            +   ''
                            +   '</div>' +
                            '</div>'
            },
            //是否支持html5
            html5 : window.FormData !== undefined ? true : false,
            //附带参数
            post_params : {}, //弃用字符串形式，改用对象形式
            //上传完成回调
            /*
                params data ajax返回json, ele jquery对象
            */
            onsuccess : function(ele, data){
               //console.log('data, ele', data, ele);
            },
            onerror : function(e){
               //console.log('error', e);
            },
            //上传前回调
            before : null,
            //上传进度条回调, 参数 per 代表百分比
            progress : function(per, ele){
                var pele = ele.parent().find(".progress");
                pele.css({"display": "block", "width": per + "%"});
                if (per>=100) {
                    pele.hide(100);
                }
            },
            //上传地址最好使用绝对地址,使用相对地址时flash的上传路径会产生问题，因为flash的上传路径是相对swf文件来确定的，其他方法是相对当前html文件
            upload_url : "./ww-upload.php",
            //文件类型限制
            type : "'jpeg|jpg|png|gif'",
            //单个文件大小限制
            size : 1 * 1024 * 1024, // 1M
            //begin处理样式
            begin: function(ele){},
            end: function(ele){}
        };
        opts = opts || {};
        var self = this;
        this.ele = ele;
        //初始化配置
        this._opts = this.copy(defallt, opts);
        this.init();
    };
    Upload.prototype = {
        // 浅复制
        copy: function(target, source) {
            for (var key in source) {
                target[key] = source[key];
            }
            return target;
        },
        /**
         * 初始化 如果需要则加载异步资源,由static指定
         * @method init
         */
        init: function() {
            var ele = this.ele;
            var self = this;
            switch (this._opts._switch) {
                case "html5" :
                    self._html5();
                    break;
                default:
                    //自动选择
                    self._html5();
                    break;
            }
        },
        /**
         * html5中转接口
         * @private
         * @method _html5
         */
        _html5: function() {
            var ele = this.ele, self = this;
            ele.innerHTML = this._opts.template["html5"];
            var exec = function() {
                var doms = ele.querySelectorAll("input[type=file]");
                if (!doms.length) {
                    return;
                }
                var el = doms[0];
                el.addEventListener("change", function(){
                    if (self._opts.begin) {
                        self._opts.begin(self.ele);
                    }
                    self._do_html5(this);
                }, false);
            };
            exec();
        },
        /**
         * html5接口
         * @private
         * @method _do_html5
         * @param {options} 配置 
         */
        _do_html5 : function(el) {
            var fd = null,
                xhr = null,
                files = el.files,
                self = this,
                options = this._opts;
            if (!this._before(options, el)) return;
            var addParam = function(fd) {
                if (options.post_params) {
                    for ( var key in options.post_params) {
                        fd.append(key, options.post_params[key]);
                    }
                }
            }
            var bindEvent = function(xhr) {
                if (options.progress) {
                    xhr.addEventListener("progress", function (evt) {
                        if (evt.lengthComputable) {
                            options.progress(Math.round(evt.loaded * 100 / evt.total).toString(), el);
                        } else {
                           //console.log('unable to compute');
                        }
                    }, false);
                }
                xhr.addEventListener("load", function (evt) { self._complete(evt.target.responseText, options, el); }, false);
                xhr.addEventListener("error", function (error) { self._complete('{"status:0",error:"' + error + '"}', options, el); }, false);
            }
            //ie9不支持files属性，兼容
            if (typeof files == 'undefined') {
                alert("不支持files属性, 请使用normal模式");
                if (this._opts.end) {
                    this._opts.end(this.ele);
                }
                return false;
            }
            for (var i = 0; i < files.length; i++) {
                if (options.size && files[i].size > options.size) {
                    alert("上传的文件太大，请压缩后重新上传");
                    if (this._opts.end) {
                        this._opts.end(this.ele);
                    }
                    continue;
                } else if (options.type && options.type.indexOf(files[i].name.match(/\.(\w+)$/)[1].toLowerCase()) === -1 ) {
                    alert("文件格式不符" + files[i].name);
                    if (this._opts.end) {
                        this._opts.end(this.ele);
                    }
                    continue;
                }
                fd = new FormData();
                xhr = new XMLHttpRequest();
                xhr.open("POST", options.upload_url);
                bindEvent(xhr);
                addParam(fd);
                fd.append(el.name, files[i]);
                xhr.send(fd);
                fd = xhr = null;
            }
        },
        //url hash 防止同一资源加载多次
        _preload_hash : [],
        /**
         * 数组indexOf方法
         * @method _arr_indexof
         * @param [arr] 队列数组  "item" 要查找的项目
         */
        _arr_indexof : function(arr, item) {
            for (var i = 0; i < arr.length; i++) {
              if (arr[i] === item) {
                return i
              }
            }
            return -1
        },
        /**
         * 上传前回调
         * @private
         * @method _before
         * @param options 配置  $input dom
         */
        _before : function(options, $input) {
            var result = true;
            if (options.before) {
                result = options.before($input);
            }
            if (result && options.loading) {
               //console.log("正在上传...");
            }
            return result;
        },
        /**
         * 上传完成处理
         * @private
         * @method _complete
         * @param responseText ajax返回值 options 配置 $input dom
         */
        _complete: function(responseText, options, $input) {
            if (this._opts.end) {
                this._opts.end(this.ele);
            }

            try {
                var data = responseText;
                if (options.datatype && options.datatype == "json") {
                   data = this.str2code("(" + responseText + ")");
                }
                if (options.loading) {
                   //console.log("close loading!");
                }
                if (options.onsuccess) {
                    options.onsuccess($input, data);
                }
            }
            catch (e) {
                alert("uploadComplete error " + e);
                if (options.onerror) {
                    options.onerror(e);
                }
            }
        },
        /**
         * 工具函数 执行字符串
         * @method str2code
         * @param "str"
         */
        str2code: function(str) {
            return (new Function("return " + str))();
        }
    }
    window.zJdComUpload = function(el, opts) {
        return new Upload(el, opts);
    }
})("html5上传组件");