/**
 * Created by li on 2016/12/6.
 */
/*�����ֺͱ�ǩ�Ĵ�С������Ļ�ĳߴ����仰 �ȱ�����*/
var html = document.getElementsByTagName('html')[0];
console.log(html);
/*ȡ����Ļ�Ŀ��*/
var width = window.innerWidth;
console.log(width);
/* 640 100  320 50 */
var fontSize = 100/640*width;
console.log(fontSize);
/*����fontsize*/
html.style.fontSize = fontSize +'px';
window.onresize = function() {
    var html = document.getElementsByTagName('html')[0];
    console.log(html);
    /*ȡ����Ļ�Ŀ��*/
    var width = window.innerWidth;
    console.log(width);
    /* 640 100  320 50 */
    var fontSize = 100 / 640 * width;
    console.log(fontSize);
    /*����fontsize*/
    html.style.fontSize = fontSize + 'px';
}