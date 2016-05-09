var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=768;
var RADIUS=8;
var MARGIN_TOP=60;
var MARGIN_LEFT=30;

const endTime = new Date(2016,4,10,18,47,52);
//const es6定义一个常量
var curShowTimeSeconds =0;

var balls=[];//生成小球数组
const colors=["#33b5e5","#0099cc","#aa66cc","#9933cc","#99cc00","#669900","#ffbb33","#ff8800","#ff4444",'#cc0000']; //生成小球的颜色数组


window.onload=function(){
    var canvas=document.getElementById('canvas');
    var context=canvas.getContext("2d");

    canvas.width=WINDOW_WIDTH;
    canvas.height=WINDOW_HEIGHT;

    curShowTimeSeconds = getCurrentShowTimeSeconds();
    setInterval(function() {
        render(context);
        update();
    }, 50)
    render(context);
}
/**
 * 返回结束时间与当前时间的时间差
 * @Author: 老苏
 * @return  {毫秒数} 时间差值
 */
function getCurrentShowTimeSeconds() {
    var curTime = new Date();
    var ret = endTime.getTime()-curTime.getTime();
    ret=Math.round(ret/1000);
    return ret>=0?ret:0;
}
function update() {
    //重新new了个时间对象，每50毫秒调用这个update方法
    var nextShowTimeSeconds=getCurrentShowTimeSeconds();

    var nextHours = parseInt(nextShowTimeSeconds/3600);
    var nextMinutes=parseInt((nextShowTimeSeconds-nextHours*3600)/60);
    var nextSeconds = nextShowTimeSeconds%60;

    var curHours = parseInt(curShowTimeSeconds/3600);
    var curMinutes=parseInt((curShowTimeSeconds-curHours*3600)/60);
    var curSeconds = curShowTimeSeconds%60;

    if (nextSeconds != curSeconds) {
        //数字产生变化的位置生成小球
        if (parseInt(curHours/10) != parseInt(nextHours/10)) {
            addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(curHours/10));
        }
        if (parseInt(curMinutes/10) != parseInt(nextMinutes/10)) {
            addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds/10));
        }
        if (parseInt(curSeconds/10) != parseInt(nextSeconds/10)) {
            addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds%10));
        }
        if (parseInt(curSeconds%10)!= parseInt(nextSeconds%10)) {
            addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(nextSeconds%10));
        }

        curShowTimeSeconds = nextShowTimeSeconds;
    }

    updateBalls();
    console.log(balls.length);
}
function updateBalls() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].x+=balls[i].vx;
        balls[i].y+=balls[i].vy;
        balls[i].vy+=balls[i].g;

        //碰撞检测
        if (balls[i].y>=WINDOW_HEIGHT-RADIUS) {
            balls[i].y=WINDOW_HEIGHT-RADIUS;
            balls[i].vy= -balls[i].vy*0.75;
        }
    }
    //出画面的小球删除
    var cnt = 0;
    for (var i = 0; i < balls.length; i++)
        if (balls[i].x+RADIUS>0 && balls[i].x - RADIUS<WINDOW_WIDTH)
            balls[cnt++] = balls[i];

    while(balls.length>cnt){
        balls.pop();
    }



}
/**
 * 添加小球
 * @Author: 老苏
 * @param   {int} x   x坐标
 * @param   {int} y   y坐标
 * @param   {int} num 绘制的数字
 */
function addBalls(x,y,num){
    for (var i = 0; i < digit[num].length; i++)
        for (var j = 0; j < digit[num][i].length; j++)
            if(digit[num][i][j] == 1){
                var aBall={
                    x:x+j*2*(RADIUS+1)+(RADIUS+1),
                    y:y+i*2*(RADIUS+1)+(RADIUS+1),
                    g:1.5+Math.random(),
                    vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,//[-4,4]
                    vy:-5,//小球会有一个向上抛的动作
                    color:colors[Math.floor(Math.random()*colors.length)] //小球的颜色
                }
                balls.push(aBall);
            }



}


function render(cxt) {

    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

    var hours=parseInt(curShowTimeSeconds/3600),
        minutes=parseInt((curShowTimeSeconds - hours*3600)/60),
        seconds=curShowTimeSeconds%60;

    renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
    renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);
    renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);
    renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);
    renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt);
    renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt);

    for (var i = 0; i < balls.length; i++) {
        cxt.fillStyle=balls[i].color;
        cxt.beginPath();
        cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI,true);
        cxt.closePath();
        cxt.fill();
    }

}
function renderDigit(x,y,num,cxt) {
    cxt.fillStyle="rgb(0,102,153)";
    for(var i=0;i<digit[num].length;i++)
        for(var j=0;j<digit[num][i].length;j++)
            if(digit[num][i][j] == 1){
                cxt.beginPath();
                cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
                cxt.closePath();
                cxt.fill();
            }
}