/**
 * Created by csz on 2016/12/7.
 */
/*����js�ļ�*/
/*����һ������ ���������Ƿ�װ���¼�*/
window.itcsz = {};/*������һ��itcast�Ķ���*/
//��װһ��transitionEnd  ���Ƚ����¼�
itcsz.transitionEnd = function(dom,callback){
    /* ��Ҫ���¼���dom  ��֮��  �������� �¼���ʱ��  ִ�� callback */
    if(dom && typeof  dom == 'object'){
        dom.addEventListener('webkitTransitionEnd',function(){
            /*if(callback){
             callback();
             }*/
            callback && callback();
        });
        dom.addEventListener('transitionEnd',function(){
            callback && callback();
        });
    }
}