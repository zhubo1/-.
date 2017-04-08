/**
 * Created by csz on 2016/12/7.
 */
/*公用js文件*/
/*定义一个对象 来承载我们封装的事件*/
window.itcsz = {};/*定义了一个itcast的对象*/
//封装一个transitionEnd  过度结束事件
itcsz.transitionEnd = function(dom,callback){
    /* 需要绑定事件的dom  绑定之后  当触发了 事件的时候  执行 callback */
    if(dom && typeof  dom == 'object'){
        dom.addEventListener('webkitTransitionEnd',function(){
            /*if(callback){
             callback();
             }*/
            callback && callback();
        });
        dom.addEventListener('transitionEnd',function(){
            callback && callback();
        });
    }
}