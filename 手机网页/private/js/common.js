/*�����ֺͱ�ǩ�Ĵ�С������Ļ�ĳߴ����仰 �ȱ�����*/
window.onload = function () {
    /*�����ֺͱ�ǩ�Ĵ�С������Ļ�ĳߴ����仰 �ȱ�����*/
    fontsize();
    /*�����ֺͱ�ǩ�Ĵ�С������Ļ�ĳߴ����仰 �ȱ�����*/
    window.onresize = function () {
        fontsize();
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
