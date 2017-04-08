/**
 * Created by csz on 2016/12/11.
 */
window.onload = function () {
    banner();
    yuyin();
     fontsize();
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
    window.onresize = function () {
        fontsize();
}}
//找到banner盒子和图片盒子
function banner() {
    var banner = document.querySelector(".banner");
    var width = banner.offsetWidth
    var imageBox = banner.querySelector("ul");
    var index = 1;
    //添加动画过度函数
    var addTransition = function () {
        imageBox.style.webkitTransition = "all 0.2s";
        imageBox.style.transition = "all 0.2s";
    }
//移除动画过度函数
    var removeTransition = function () {
        imageBox.style.webkitTransition = "none";
        imageBox.style.transition = "none";
    }
//添加定位函数
    var transform = function (x) {
        imageBox.style.webkitTransform = "translateX(" + x + "px)";
        imageBox.style.transform = "translateX(" + x + "px)";
    }
//定时器让轮播图滚起来
    var timer = setInterval(function () {
        index++;
        addTransition();
        transform(-index * width);
    }, 3000)
    //添加动画结束监听函数
    itcsz.transitionEnd(imageBox, function () {
        //到了假的第一张图就转到真的第一张
        //瞬间定位过去消除过度
        if (index >= 5) {
            index = 1;
            removeTransition();
            transform(-index*width);
        }else if(index <= 0){
            //到了假的最后一张图就转到真的最后一张
            index = 4;
            removeTransition();
            transform(-index*width);
        }
    });
    //定义3个参数分别是
    // 手指在移动端触摸时候的窗口位置
    // 手指移动后的窗口位置
    //这两个位置之间的差值
    var touchX = 0;
    var afterX = 0;
    var distanceX = 0;
    var flag = false;
    imageBox.addEventListener("touchstart", function (e) {
        //找到第一次触摸的位置。
        //清除定时器
        clearInterval(timer);
        touchX = e.touches[0].clientX;
        console.log(touchX);
    });
    imageBox.addEventListener("touchmove", function (e) {
        flag = true;
        //找到触摸移动后的位置
        afterX = e.touches[0].clientX
        console.log(afterX);
        distanceX = afterX - touchX;
        console.log(distanceX);
        //根据位置的变化定位图片的位置，是瞬间定位
        removeTransition();
        //当前所在的图片位置加上移动后的差值
        transform(-index * width + distanceX);
    });
    //手指弹起不再触摸屏上的时候
    window.addEventListener("touchend", function () {
        //先做判断如果distanceX大于banner的1/3就让图片变为下一张。
        if (Math.abs(distanceX) > (1 / 3 * width)) {
            if (distanceX > 0) {
                index--;
                //让它过渡的移动到下一张
                addTransition();
                transform(-index * width);
            } else {
                index++;
                //让它过渡的移动到上一张
                addTransition();
                transform(-index * width);
            }
        } else {
            addTransition();
            transform(-index * width);
        }
        //初始化所有变量
        touchX = 0;
        afterX = 0;
        distanceX = 0;
        flag = false;
        //清除定时器后加上定时器
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            //添加过渡
            addTransition();
            //添加定位
            transform(-index * width);
        }, 3000);
    });
}
function yuyin(){
    //点击语音按钮添加一个音乐播放器
    var str='<audio  autoplay loop="3">'+
    '<source src="1.mp3">'+
    '<source src="1.wav">'+
    '<source src="1.ogg">'+
        '</audio>';
    var voice = document.querySelectorAll(".voice");
    //console.log(voice);
    for(var i = 0;i<voice.length;i++){
        voice[i].addEventListener("click", function () {
            for(var i = 0;i<voice.length;i++){
                $(voice[i]).find(".music").html("");
            }
            $(this).find(".music").html(str);
        })
    }
    var hears = document.querySelectorAll(".voice_hear")
    //添加动画效果添加
    //首先定义一个类让这个类有动画执行
    //在通过点击事件让想要执行动画的元素加上那个类
    for(var i = 0;i<hears.length;i++){
        hears[i].addEventListener("click", function () {
            for(var i = 0;i<voice.length;i++){
                $(hears[i]).removeClass("animation");
            }
            $(this).addClass("animation");
        })
    }
    //添加停止播放
    var user = document.querySelectorAll(".user");
    for(var i = 0;i<hears.length;i++){
        user[i].addEventListener("click", function () {
            $(this).siblings(".voice").find(".music").html("");
            $(this).siblings(".voice").find(".voice_hear").removeClass("animation");
        });
    }
}
 function fontsize() {
        var html = document.getElementsByTagName('html')[0];
        /*取到屏幕的宽度*/
        var width = window.innerWidth;
        /* 640 100  320 50 */
        var fontSize = 100 / 640 * width;
        if (fontSize > 101) {
            fontSize = 100;
        }
        /*设置fontsize*/
        html.style.fontSize = fontSize + 'px';
    }