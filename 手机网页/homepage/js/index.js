///**
// * Created by csz on 2016/12/6.
// */
///*�����ֺͱ�ǩ�Ĵ�С������Ļ�ĳߴ����仰 �ȱ�����*/
//var html = document.getElementsByTagName('html')[0];
//console.log(html);
///*ȡ����Ļ�Ŀ��*/
//var width = window.innerWidth;
//console.log(width);
///* 640 100  320 50 */
//var fontSize = 100/640*width;
//console.log(fontSize);
///*����fontsize*/
//html.style.fontSize = fontSize +'px';
//window.onresize = function(){
//    var html = document.getElementsByTagName('html')[0];
//    //console.log(html);
//    /*ȡ����Ļ�Ŀ��*/
//    var width = window.innerWidth;
//    //console.log(width);
//    /* 640 100  320 50 */
//    var fontSize = 100/640 * width;
//    //console.log(fontSize);
//    /*����fontsize*/
//    html.style.fontSize = fontSize +'px';
//}
/*�����ֺͱ�ǩ�Ĵ�С������Ļ�ĳߴ����仰 �ȱ�����*/
window.onload = function () {
    /*�����ֺͱ�ǩ�Ĵ�С������Ļ�ĳߴ����仰 �ȱ�����*/
    fontsize();
    /*�����ֺͱ�ǩ�Ĵ�С������Ļ�ĳߴ����仰 �ȱ�����*/
    window.onresize = function () {
        fontsize();
        console.log("222")
    }
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
}