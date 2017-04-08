
window.my = {};

//封装transitionEnd 过渡结束事件
my.transitionEnd = function (dom, fn) {
    if (dom && typeof dom === 'object') {
        dom.addEventListener('webkitTransitionEnd', function () {
            if (fn && typeof fn === 'function') {
                fn();
            }
        });

        dom.addEventListener('transitionEnd', function () {
            if (fn && typeof fn === 'function') {
                fn();
            }
        });
    }
};


my.tap = function (dom, callback) {
     /*
    * 在移动端  click事件有300ms的 延时
    * 为了提高用户体验 要降低响应时间
    * touchend 响应时间要比 click快
    * 发现 响应时间只有 几十毫秒  比click 快的多
    * 怎么样才符合  tap  事件 点击  轻触
    * 要求  没有触发 touchmove 事件
    *       并且响应速度要比click快
    * */
    if (dom && typeof dom === 'object') {
        var isMove = false;
        var startTime = 0;

        dom.addEventListener('touchstart',function(e){
            //console.time('tap');/*记录tap这个参数现在的时间*/
            startTime = Date.now();
        });
        dom.addEventListener('touchmove',function(e){
            isMove = true;
        });
        dom.addEventListener('touchend',function(e){
            //console.timeEnd('tap')/*打印tap这个参数距离上一次记录的时候的时间*/
            /*判读  是否满足tap 的要求  一般要求tap的响应时间150*/
            if(!isMove && (Date.now()-startTime) < 150){
                /*调用 callback*/
                callback && callback(e);
            }

            /*重置 参数*/
            isMove = false;
            // startTime = 0; //此参数不用重置，每次调用都会重新赋值
        });
    }
};