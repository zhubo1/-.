/**
 * Created by csz on 2016/12/13.
 */
$(function () {
    $('.con_right').on('click', function () {
        $('.box').css("display","block");
        $('.csz_box').addClass("bounceInDown");
        $('.head').css("z-index",'1');
    })
    $('.cancel').on('click', function () {
        $('.box').css("display","none");
    })
    $('.submit').on('click', function () {
        //$('.con_right')
    })
})