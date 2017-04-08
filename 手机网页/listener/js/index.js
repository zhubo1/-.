/*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
window.onload = function () {
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
    fontsize();
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
    window.onresize = function () {
        fontsize();
    }
    //给中间的设置手指的滑动事件
    //触碰开始
    //竖直放向上面的滑动有滑动区间和定位区间
    //向上滑动的最大距离为50
    //定位区间为0~-55
    //触发了加载后，定位区间和滑动区间的最小值都要发生变化,每次触发都会加载一个li，所以他俩的最小值就发生对应的变化
    //滑动区间为50~-105，
    //手指滑动的时候，要让值在滑动区间内才给ul赋值
    //手指松开的时候，要判断值大于和小于最小定位时发生的事件，在中间的时候，只是对当前的位置做了一个记录
    var sx=0;
    var sy=0;
    var mx=0;
    var my=0;
    var currX=0;
    var currY=0;
    var directX=0;
    var directY=0;
    //最大滑动区间
    var hmax=50;
    //最小滑动区间
    var hmin=-105;
    //得到左边的一个li的高度
    var liH=$(".yk_c_all li")[0].offsetHeight;
    console.log(liH)
    //得到左边的一个li的宽度
    var liW=$(".yk_c_all").width();
    console.log(liW)
    //最小定位区间
    var dmin=-55;
   //最大定位区间
    var dmax=0;
    var num=0;
    var right=true;
    var ismove=false;
    $(".ullist")[0].addEventListener("touchstart",function(e){
         sx= e.touches[0].clientX;
         sy=e.touches[0].clientY;
    })
    //触屏移动
    $(".ullist")[0].addEventListener("touchmove",function(e){
        ismove=true;
         mx= e.touches[0].clientX;
         my=e.touches[0].clientY;
        //当手指上下滑动的时候，让内容跟着变
         directX=mx-sx;
         directY=my-sy;
        //console.log("directX的值"+directX);
        //console.log("directY的值"+directY);
        //console.log(directY)
        //console.log(13);
        //console.log(directX);
        //左右和上下滑动不能同时进行，给个判断的范围，让左右滑动，(给一个判断的条件)
        if(Math.abs(directX)>10){
            //横向不像纵向一样需要记录下来当前的位置，它只存在2种情况，就是滑动的距离大，就跳到别的页，滑动的距离小，它就吸附回去
            if(directX<0){
                $(".ullist")[0].style.transform="translate("+ directX +"px ,"+(currY+directY) +"px)";
                $(".ullist")[0].style.transition="all 0s";

            }
        }else{
            right=false;
            if(currY+directY >hmin && currY+directY<50){
                if(currY+directY <dmin){
                    $(".yk_content>span")[0].style.height="15px"
                }
                $(".ullist")[0].style.transform="translate(0px,"+(currY+directY)+"px)";
                $(".ullist")[0].style.transition="all 0s";
                //当大于最小的滑动尺寸，小于最小的定位尺寸的时候，让“正在加载”出现
            }
        }
    })
    //触碰结束
    window.addEventListener("touchend",function(){
    //左右结束和上下结束可以分开进行，不用像上面一样,还是要分开，要不然就是会对它的y值directX判断时候有影响
        if(right){
            //判断横向是吸附上去还是过度到下一个页面上
            if(directX>(-liW/3)){
                $(".ullist")[0].style.transform="translate("+ 0 +"px , "+(currY+directY) +"px)";
                $(".ullist")[0].style.transition="all 0s";
            }else{
                $(".ullist")[0].style.transform="translate("+ -liW +"px ,0px)";
                $(".ullist")[0].style.transition="all 0s";
                $(".header_list li p").css("borderBottom","none");
                $(".header_list li p").css("color","#ccc");
                $(".drop").find("p").css("borderBottom","2px solid #44B181");
                $(".drop").find("p").css("color","#44B181");
            }
        }else{
            //console.log(11);
            //console.log(currY+directY)
            //当鼠标离开，并且currY的值大于0小于50时，就出现刷新2个字
            //在横向是0px的时候手指放开的加载和横向是一个liW的加载
            var transX=$(".ullist")[0].style.transform;
            console.log(transX)
            //if()
            if(ismove&&currY+directY>0){
                $(".ullist")[0].style.transform="translate(0px,"+(0)+"px)";
                $(".ullist")[0].style.transition="all 0s";
            }else if(ismove&&currY+directY<dmin){
                num++;
                //在这个范围内，只要一开，就让“正在加载“消失
                $(".yk_content>span")[0].style.height="0px";
                //让它们复位到最小的定位尺寸
                $(".ullist")[0].style.transform="translate(0px,"+(dmin)+"px)";
                $(".ullist")[0].style.transition="all 0s";
                //改变他的最小定位尺寸和最小滑动尺寸，因为又从新加载了内容
                dmin=-55-num*liH;
                //console.log("第"+num+"次的dmin"+dmin)
                hmin=-100-num*liH;
                //console.log("第"+num+"次的hmin"+hmin)
                var string=" <li>"+ "<div class='li_content'>"
                    +"<h3>如何学习语文的文言文内容,快速提高语文成绩？</h3>"
                    +"<p><span>王知易</span><span>英语文学语言老师</span></p>"
                    +"<div>"
                    +"<span></span>"
                    +"<span>限时免费听</span>"
                    +"<span>22人听过</span>"
                    +"</div>"
                    +"</div>"
                    +"</li>";
                //console.log(string)
                $(".yk_c_all").append(string);
                console.log("加载成功")
            }else{
                //在一定的范围内才让currY和 directY相加
                currY=currY+directY;
            }
        }
        //结束的时候要归0
        sx=0;
         sy=0;
         mx=0;
         my=0;
        directX=0;
        directY=0;
        right=true;
        ismove=false;
    })


    //点击导航条的对应的li，它里面的span的背景变成绿色，其他的不变，
    $(".nav_list li").on("click",function(){
        $(".nav_list li span:first-child").css("backgroundPosition","0px 0px");
       console.log(this);
        $(this).find("span:first-child").css("backgroundPosition","0px -22px")
    })
     //点击头部的内容，让页面的内容变到对应的内容，并且中间的内容也跟着变
        $(".header_list li").on("click",function(){
            //改变底部和字体的颜色还有对应的内容
            $(".header_list li p").css("borderBottom","none");
            $(".header_list li p").css("color","#ccc");
            $(this).find("p").css("borderBottom","2px solid #44B181");
            $(this).find("p").css("color","#44B181");
            var target=$(this).hasClass("drop");
            console.log(target)
            if(target){
                // console.log($("ullist")[0])
                $(".ullist").css("transform","translate("+(-liW)+"px , 0px )")
            }
        })



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