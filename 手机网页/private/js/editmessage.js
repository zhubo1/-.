window.onload = function () {
    option();
     fontsize();
    /*�����ֺͱ�ǩ�Ĵ�С������Ļ�ĳߴ����仰 �ȱ�����*/
    window.onresize = function () {
        fontsize();
};
    function fontsize() {
        var html = document.getElementsByTagName('html')[0];
        /*ȡ����Ļ�Ŀ��*/
        var width = window.innerWidth;
        /* 640 100  320 50 */
        var fontSize = 100 / 640 * width;
        if (fontSize > 101) {
            fontSize = 100;
        }
        /*����fontsize*/
        html.style.fontSize = fontSize + 'px';
    }

//按钮点击滑动
function option() {
    var option = document.querySelector(".option");
    var circle = option.querySelector(".circle");
    var frame = option.querySelector(".frame");
    var tag = true;
    var addTransitionC = function () {
        circle.style.transition = "all .2s";
        circle.style.webkitTransition = "all .2s";
    };
    var setTranslateC = function (x) {
        circle.style.transform = "translateX(" + x + "rem)";
        circle.style.webkitTransform = "translateX(" + x + "rem)";
    };
    option.onclick = function () {
        if (tag) {
            addTransitionC();
            setTranslateC(-0.33);
            tag = false;
        } else {
            addTransitionC();
            setTranslateC(0);
            tag = true;
        }

    };
}

//字数变化
function change() {

}
