/*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
window.onload = function () {
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
     var sections=document.querySelectorAll("section");
     for(var i=0;i<sections.length;i++){
        sections[i].onclick=function(){
            window.open(index1.html)
        }
     }
    fontsize();
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
    window.onresize = function () {
        fontsize();
    }
}

    function fontsize(){
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