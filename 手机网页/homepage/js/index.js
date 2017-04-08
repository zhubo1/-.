///**
// * Created by csz on 2016/12/6.
// */
///*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
//var html = document.getElementsByTagName('html')[0];
//console.log(html);
///*取到屏幕的宽度*/
//var width = window.innerWidth;
//console.log(width);
///* 640 100  320 50 */
//var fontSize = 100/640*width;
//console.log(fontSize);
///*设置fontsize*/
//html.style.fontSize = fontSize +'px';
//window.onresize = function(){
//    var html = document.getElementsByTagName('html')[0];
//    //console.log(html);
//    /*取到屏幕的宽度*/
//    var width = window.innerWidth;
//    //console.log(width);
//    /* 640 100  320 50 */
//    var fontSize = 100/640 * width;
//    //console.log(fontSize);
//    /*设置fontsize*/
//    html.style.fontSize = fontSize +'px';
//}
/*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
window.onload = function () {
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
    fontsize();
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
    window.onresize = function () {
        fontsize();
        console.log("222")
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
}