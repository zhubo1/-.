/**
 * Created by csz on 2016/12/11.
 */
window.onload = function () {
    banner();
    yuyin();
     fontsize();
    /*�����ֺͱ�ǩ�Ĵ�С������Ļ�ĳߴ����仰 �ȱ�����*/
    window.onresize = function () {
        fontsize();
}}
//�ҵ�banner���Ӻ�ͼƬ����
function banner() {
    var banner = document.querySelector(".banner");
    var width = banner.offsetWidth
    var imageBox = banner.querySelector("ul");
    var index = 1;
    //��Ӷ������Ⱥ���
    var addTransition = function () {
        imageBox.style.webkitTransition = "all 0.2s";
        imageBox.style.transition = "all 0.2s";
    }
//�Ƴ��������Ⱥ���
    var removeTransition = function () {
        imageBox.style.webkitTransition = "none";
        imageBox.style.transition = "none";
    }
//��Ӷ�λ����
    var transform = function (x) {
        imageBox.style.webkitTransform = "translateX(" + x + "px)";
        imageBox.style.transform = "translateX(" + x + "px)";
    }
//��ʱ�����ֲ�ͼ������
    var timer = setInterval(function () {
        index++;
        addTransition();
        transform(-index * width);
    }, 3000)
    //��Ӷ���������������
    itcsz.transitionEnd(imageBox, function () {
        //���˼ٵĵ�һ��ͼ��ת����ĵ�һ��
        //˲�䶨λ��ȥ��������
        if (index >= 5) {
            index = 1;
            removeTransition();
            transform(-index*width);
        }else if(index <= 0){
            //���˼ٵ����һ��ͼ��ת��������һ��
            index = 4;
            removeTransition();
            transform(-index*width);
        }
    });
    //����3�������ֱ���
    // ��ָ���ƶ��˴���ʱ��Ĵ���λ��
    // ��ָ�ƶ���Ĵ���λ��
    //������λ��֮��Ĳ�ֵ
    var touchX = 0;
    var afterX = 0;
    var distanceX = 0;
    var flag = false;
    imageBox.addEventListener("touchstart", function (e) {
        //�ҵ���һ�δ�����λ�á�
        //�����ʱ��
        clearInterval(timer);
        touchX = e.touches[0].clientX;
        console.log(touchX);
    });
    imageBox.addEventListener("touchmove", function (e) {
        flag = true;
        //�ҵ������ƶ����λ��
        afterX = e.touches[0].clientX
        console.log(afterX);
        distanceX = afterX - touchX;
        console.log(distanceX);
        //����λ�õı仯��λͼƬ��λ�ã���˲�䶨λ
        removeTransition();
        //��ǰ���ڵ�ͼƬλ�ü����ƶ���Ĳ�ֵ
        transform(-index * width + distanceX);
    });
    //��ָ�����ٴ������ϵ�ʱ��
    window.addEventListener("touchend", function () {
        //�����ж����distanceX����banner��1/3����ͼƬ��Ϊ��һ�š�
        if (Math.abs(distanceX) > (1 / 3 * width)) {
            if (distanceX > 0) {
                index--;
                //�������ɵ��ƶ�����һ��
                addTransition();
                transform(-index * width);
            } else {
                index++;
                //�������ɵ��ƶ�����һ��
                addTransition();
                transform(-index * width);
            }
        } else {
            addTransition();
            transform(-index * width);
        }
        //��ʼ�����б���
        touchX = 0;
        afterX = 0;
        distanceX = 0;
        flag = false;
        //�����ʱ������϶�ʱ��
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            //��ӹ���
            addTransition();
            //��Ӷ�λ
            transform(-index * width);
        }, 3000);
    });
}
function yuyin(){
    //���������ť���һ�����ֲ�����
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
    //��Ӷ���Ч�����
    //���ȶ���һ������������ж���ִ��
    //��ͨ������¼�����Ҫִ�ж�����Ԫ�ؼ����Ǹ���
    for(var i = 0;i<hears.length;i++){
        hears[i].addEventListener("click", function () {
            for(var i = 0;i<voice.length;i++){
                $(hears[i]).removeClass("animation");
            }
            $(this).addClass("animation");
        })
    }
    //���ֹͣ����
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