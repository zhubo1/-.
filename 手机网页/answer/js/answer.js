/*
* @Author: Marte
* @Date:   2016-12-10 18:34:31
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-13 19:51:04
*/

//拒绝回答
var refuse = document.querySelector('.refuse');
var refuseMask = document.querySelector('.refuse_mask');
//弹出框中拒绝回答对应的内容盒子
var noAnswer = document.querySelector('.no_answer');
//弹出框中确认发送对应的内容盒子
var remind = document.querySelector('.remind');
//点击拒绝回答，弹出mask，并显示对应的内容
my.tap(refuse, function(){
    refuseMask.style.display = "block";
    noAnswer.style.display = "block";
    remind.style.display = "none";
});

//我再想想
var considers = document.querySelectorAll('.consider');
for (var i = 0; i < considers.length; i++) {
    my.tap(considers[i], function(){
        refuseMask.style.display = "none";
    });
}

//点击确认发送
var send = document.querySelector('.send');
my.tap(send, function(){
    refuseMask.style.display = "block";
    remind.style.display = "block";
    noAnswer.style.display = "none";
});



/**
 * @todo [回头改事件]
 */
//点击录制
var record = document.querySelector('.recording');
//点击按钮切换背景
my.tap(record, function(){
    record.style.backgroundColor = "#EBEBEB";
    record.style.backgroundPosition = "-.7rem .55rem";
    record.style.border = "2px solid #C8C8C8";
});

//点击重录
var rerecord = document.querySelector('.rerecording');
my.tap(rerecord, function(){
    rerecord.style.backgroundColor = "#E94D37";
});