/*!Js.Date:20151127*/
function util() {
    //a
    function getStyle () {
        function Getcss(node){
            this._el=node; //元素
        }
        function b(oArr,b){
            var rel=-1;
            if("[object Array]" === !Object.prototype.toString.call(a) || "string" !=typeof  b) return rel;
            for(var i= 0,j=oArr.length;j>i;i++){
                if(oArr[i]===b) return i;
            }
            return rel;
        }
        /**
         * 根据节点实例Getcss对象
         * @param  {object} node 节点
         * @return {obj}    Getcss对象
         */
        var creatGetcss=function(node){
            var tag="object" == typeof node && node.nodeName;
            if(tag){
                return new Getcss(node);
            }
        }

        return Getcss.prototype={
            _toArray:function(){
                var className=this._el.className;
                return className.match(/[\w-]+/g)||[]
            },
            _ck:function(obj){
                return "string" == typeof obj && /^[\w-]+$/g.test(a);
            },
            _contains:function(a){
                return -1 !== b(this._toArray(),a)
            },
            add:function(ele){
                if(!this._ck(ele) || this._contains(ele)) return !1;
                var rel=this._toArray();
                rel.push(ele),this._el.className= rel.join(" ");
            },
            remove:function(ele){
                if("undefined" == typeof ele) return void(this._el.className="");
                if(!this._ck(ele)||this._contains(ele))return !1;
                var className=this._el.className,
                    c=new RegExp("\\b"+ele+"\\b\\s*","g");
                this._el.className =className.replace(c,"");
            },
            toggle:function(ele){
                return this._ck(ele)?void(this._contains(ele)?this.remove(ele):this.add(ele)):!1;
            }
        },creatGetcss
    }

    //c
    function pushcss(a){
        var b;
        if("string"==typeof a){
            b=[];b.push(a);
        }else{
            if ("[object Array]" !==Object.prototype.toString.call(a)) {
                return !1;
            };
            b=a;
        }
        var creatStyle=document.createElement('style'),
            oHead=document.head||document.getElementsByName('head')[0];
            creatStyle=b.join('\r\n'),oHead.appendChild(creatStyle);
    }

    //s
    function w(){
        function a (b,c) {
            return new a.fn.init(b,c)
        }
        function b(b,c) {
            var d=result[c];
            d!=a && (b[c]=d);
        }
        a.nocopy=!0; a.fn=a.prototype=result; a.indexStr="data-sn-index";
        for(var c in result){
            b(a,c);
        }
        var d= a.fn.init =function(b,c) {
        
            this.doms=a.fn.$(b,c),this.length = this.doms.length,this.each(function(b,c){b.setAttribute(a.indexStr,c)})
        }

    }



    var result={};
    return result.css=getStyle(), result.pushcss=pushcss,result.s=w(),result;
}