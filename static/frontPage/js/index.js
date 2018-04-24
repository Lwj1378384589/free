/**
 * Created by lenovo on 2017/12/27.
 */


function lul_list(){
    var l_ul_box=document.getElementById("box1");
    l_ul_box.style.display="block";
}
function lul_out(){
    var l_ul_box=document.getElementById("box1");
    l_ul_box.style.display="none";
}
function lul_list1(){
    var l_ul_box1=document.getElementById("box2");
    l_ul_box1.style.display="block";
}
function lul_out1(){
    var l_ul_box1=document.getElementById("box2");
    l_ul_box1.style.display="none";
}

function lul_list2(){
    var l_ul_box1=document.getElementById("box3");
    l_ul_box1.style.display="block";
}
function lul_out2(){
    var l_ul_box1=document.getElementById("box3");
    l_ul_box1.style.display="none";
}
function lul_list3(){
    var l_ul_box1=document.getElementById("box4");
    l_ul_box1.style.display="block";
}
function lul_out3(){
    var l_ul_box1=document.getElementById("box4");
    l_ul_box1.style.display="none";
}

function seen(){
	
    var cssbox=document.getElementById("css-box");
    cssbox.style.display="block";
}

function disn(){
    var cssbox=document.getElementById("css-box");
    cssbox.style.display="none";
}
//У԰������ѡ�





//ͼƬ�ֲ�
//var lia=0;
//function lBA(){
//
//    var lB=document.getElementById("lB");
//    var a=lB.getElementsByTagName("a");
//    var dian_ul=document.getElementById("dian_ul");
//    var li=dian_ul.getElementsByTagName("li");
//    var Tul=document.getElementById("Tul");
//    var li1=Tul.getElementsByTagName("li");
//    lia++;
//    if (lia>= a.length){
//        lia=0;
//    }
//    for ( var x=0; x< a.length; x++){
//        a[x].style.display="none";
//    }
//    for (var aa=0; aa<li.length; aa++){
//        li[aa].className=" ";
//    }
//    for ( var x1=0; x1< li1.length; x1++){
//        li1[x1].style.display="none";
//    }
//
//    li[lia].className="dian_li_bg";
//    a[lia].style.display="block";
//    li1[lia].style.display="block";
//}
//var s1 =setInterval("lBA()",2000);


function dian_list(b){
    //var ba_img=document.getElementById("ba_img");
    clearInterval(s1);
    var lB=document.getElementById("lB");
    var a=lB.getElementsByTagName("a");
    var Tul=document.getElementById("Tul");
    var li1=Tul.getElementsByTagName("li");
    lia=b;
    for ( var x=0; x< a.length; x++){
        a[x].style.display="none";
    }
    a[b].style.display="block";
    var dian_ul=document.getElementById("dian_ul");
    var li=dian_ul.getElementsByTagName("li");

    for (var aa=0; aa<li.length; aa++){
        li[aa].className=" ";
    }
    li[b].className="dian_li_bg";

    for ( var x1=0; x1< li1.length; x1++){
        li1[x1].style.display="none";
    }
    li1[b].style.display="block";
}



function ba_move(){ //4????????????????��
    clearInterval(s1);
}
function ba_out(){
    s1=setInterval("lBA()", 2000);
}


function xpT(x){

    var li=$("#txtUl li");
    var xiaoBox=$("#xwBox .xiaoBox");
    for (var j=0; j<xiaoBox.length; j++){
        xiaoBox[j].style.display="none";
        li[j].style.color=" #ffffff";
    }
    xiaoBox[x].style.display="block";
    li[x].style.color="red";

}

function fou(f){
    var li=$("#txtUl li");
    for (var j=0; j<li.length; j++){
        li[j].style.color=" #ffffff";
    }
    li[f].style.color="red";
}


function lanX(n){
    var lianUl=document.getElementById("lianUl");
    var li=lianUl.getElementsByTagName("li");
    for (var lia=0;lia<li.length; lia++){
        li[lia].style.borderTop="3px solid #f6f7f8";
    }
    li[n].style.borderTop="3px solid #0ca4e9";
}


var i=1;
function ar(){
    var left= $("#lianUl").css("left");
    left=parseInt(left)-360;
    var img= $("#lianUl img");
    if (i < img.length-3){
        i++;
        $("#lianUl").css("left", left+"px");
    }
}
//        var s=setInterval("a()",1000);
function br(){

    var left= $("#lianUl").css("left");
    left=parseInt(left)+360;
    if (i>1){
        i--;
        $("#lianUl").css("left", left+"px");
    }
}




//新增新增
/**
 * @classDescription 超级Marquee，可做图片导航，图片轮换
 * @DOM
 *  	<div id="marquee">
 *  		<ul>
 *   			<li></li>
 *   			<li></li>
 *  		</ul>
 *  	</div>
 * @CSS
 *  	#marquee {width:200px;height:50px;overflow:hidden;}
 * @Usage
 *  	$('#marquee').kxbdSuperMarquee(options);
 * @options
 *		distance:200,//一次滚动的距离
 *		duration:20,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
 *		time:5,//停顿时间，单位为秒
 *		direction: 'left',//滚动方向，'left','right','up','down'
 *		scrollAmount:1,//步长
 *		scrollDelay:20//时长，单位为毫秒
 *		isEqual:true,//所有滚动的元素长宽是否相等,true,false
 *		loop: 0,//循环滚动次数，0时无限
 *		btnGo:{left:'#goL',right:'#goR'},//控制方向的按钮ID，有四个属性left,right,up,down分别对应四个方向
 *		eventGo:'click',//鼠标事件
 *		controlBtn:{left:'#goL',right:'#goR'},//控制加速滚动的按钮ID，有四个属性left,right,up,down分别对应四个方向
 *		newAmount:4,//加速滚动的步长
 *		eventA:'mouseenter',//鼠标事件，加速
 *		eventB:'mouseleave',//鼠标事件，原速
 *		navId:'#marqueeNav', //导航容器ID，导航DOM:<ul><li>1</li><li>2</li><ul>,导航CSS:.navOn
 *		eventNav:'click' //导航事件
 */
(function($){

    $.fn.kxbdSuperMarquee = function(options){
        var opts = $.extend({},$.fn.kxbdSuperMarquee.defaults, options);

        return this.each(function(){
            var $marquee = $(this);//滚动元素容器
            var _scrollObj = $marquee.get(0);//滚动元素容器DOM
            var scrollW = $marquee.width();//滚动元素容器的宽度
            var scrollH = $marquee.height();//滚动元素容器的高度
            var $element = $marquee.children(); //滚动元素
            var $kids = $element.children();//滚动子元素
            var scrollSize=0;//滚动元素尺寸
            var _type = (opts.direction == 'left' || opts.direction == 'right') ? 1:0;//滚动类型，1左右，0上下
            var scrollId, rollId, isMove, marqueeId;
            var t,b,c,d,e; //滚动动画的参数,t:当前时间，b:开始的位置，c:改变的位置，d:持续的时间，e:结束的位置
            var _size, _len; //子元素的尺寸与个数
            var $nav,$navBtns;
            var arrPos = [];
            var numView = 0; //当前所看子元素
            var numRoll=0; //轮换的次数
            var numMoved = 0;//已经移动的距离

            //防止滚动子元素比滚动元素宽而取不到实际滚动子元素宽度
            $element.css(_type?'width':'height',10000);
            //获取滚动元素的尺寸
            var navHtml = '<ul>';
            if (opts.isEqual) {
                _size = $kids[_type?'outerWidth':'outerHeight']();
                _len = $kids.length;
                scrollSize = _size * _len;
                for(var i=0;i<_len;i++){
                    arrPos.push(i*_size);
                    navHtml += '<li>'+ (i+1) +'</li>';
                }
            }else{
                $kids.each(function(i){
                    arrPos.push(scrollSize);
                    scrollSize += $(this)[_type?'outerWidth':'outerHeight']();
                    navHtml += '<li>'+ (i+1) +'</li>';
                });
            }
            navHtml += '</ul>';

            //滚动元素总尺寸小于容器尺寸，不滚动
            if (scrollSize<(_type?scrollW:scrollH)) return;
            //克隆滚动子元素将其插入到滚动元素后，并设定滚动元素宽度
            $element.append($kids.clone()).css(_type?'width':'height',scrollSize*2);

            //轮换导航
            if (opts.navId) {
                $nav = $(opts.navId).append(navHtml).hover( stop, start );
                $navBtns = $('li', $nav);
                $navBtns.each(function(i){
                    $(this).bind(opts.eventNav,function(){
                        if(isMove) return;
                        if(numView==i) return;
                        rollFunc(arrPos[i]);
                        $navBtns.eq(numView).removeClass('navOn');
                        numView = i;
                        $(this).addClass('navOn');
                    });
                });
                $navBtns.eq(numView).addClass('navOn');
            }

            //设定初始位置
            if (opts.direction == 'right' || opts.direction == 'down') {
                _scrollObj[_type?'scrollLeft':'scrollTop'] = scrollSize;
            }else{
                _scrollObj[_type?'scrollLeft':'scrollTop'] = 0;
            }

            if(opts.isMarquee){
                //滚动开始
                //marqueeId = setInterval(scrollFunc, opts.scrollDelay);
                marqueeId = setTimeout(scrollFunc, opts.scrollDelay);
                //鼠标划过停止滚动
                $marquee.hover(
                    function(){
                        clearInterval(marqueeId);
                    },
                    function(){
                        //marqueeId = setInterval(scrollFunc, opts.scrollDelay);
                        clearInterval(marqueeId);
                        marqueeId = setTimeout(scrollFunc, opts.scrollDelay);
                    }
                );

                //控制加速运动
                if(opts.controlBtn){
                    $.each(opts.controlBtn, function(i,val){
                        $(val).bind(opts.eventA,function(){
                            opts.direction = i;
                            opts.oldAmount = opts.scrollAmount;
                            opts.scrollAmount = opts.newAmount;
                        }).bind(opts.eventB,function(){
                            opts.scrollAmount = opts.oldAmount;
                        });
                    });
                }
            }else{
                if(opts.isAuto){
                    //轮换开始
                    start();

                    //鼠标划过停止轮换
                    $marquee.hover( stop, start );
                }

                //控制前后走
                if(opts.btnGo){
                    $.each(opts.btnGo, function(i,val){
                        $(val).bind(opts.eventGo,function(){
                            if(isMove == true) return;
                            opts.direction = i;
                            rollFunc();
                            if (opts.isAuto) {
                                stop();
                                start();
                            }
                        });
                    });
                }
            }

            function scrollFunc(){
                var _dir = (opts.direction == 'left' || opts.direction == 'right') ? 'scrollLeft':'scrollTop';

                if(opts.isMarquee){
                    if (opts.loop > 0) {
                        numMoved+=opts.scrollAmount;
                        if(numMoved>scrollSize*opts.loop){
                            _scrollObj[_dir] = 0;
                            return clearInterval(marqueeId);
                        }
                    }
                    var newPos = _scrollObj[_dir]+(opts.direction == 'left' || opts.direction == 'up'?1:-1)*opts.scrollAmount;
                }else{
                    if(opts.duration){
                        if(t++<d){
                            isMove = true;
                            var newPos = Math.ceil(easeOutQuad(t,b,c,d));
                            if(t==d){
                                newPos = e;
                            }
                        }else{
                            newPos = e;
                            clearInterval(scrollId);
                            isMove = false;
                            return;
                        }
                    }else{
                        var newPos = e;
                        clearInterval(scrollId);
                    }
                }

                if(opts.direction == 'left' || opts.direction == 'up'){
                    if(newPos>=scrollSize){
                        newPos-=scrollSize;
                    }
                }else{
                    if(newPos<=0){
                        newPos+=scrollSize;
                    }
                }
                _scrollObj[_dir] = newPos;

                if(opts.isMarquee){
                    marqueeId = setTimeout(scrollFunc, opts.scrollDelay);
                }else if(t<d){
                    if(scrollId) clearTimeout(scrollId);
                    scrollId = setTimeout(scrollFunc, opts.scrollDelay);
                }else{
                    isMove = false;
                }

            };

            function rollFunc(pPos){
                isMove = true;
                var _dir = (opts.direction == 'left' || opts.direction == 'right') ? 'scrollLeft':'scrollTop';
                var _neg = opts.direction == 'left' || opts.direction == 'up'?1:-1;

                numRoll = numRoll +_neg;
                //得到当前所看元素序号并改变导航CSS
                if(pPos == undefined&&opts.navId){
                    $navBtns.eq(numView).removeClass('navOn');
                    numView +=_neg;
                    if(numView>=_len){
                        numView = 0;
                    }else if(numView<0){
                        numView = _len-1;
                    }
                    $navBtns.eq(numView).addClass('navOn');
                    numRoll = numView;
                }

                var _temp = numRoll<0?scrollSize:0;
                t=0;
                b=_scrollObj[_dir];
                //c=(pPos != undefined)?pPos:_neg*opts.distance;
                e=(pPos != undefined)?pPos:_temp+(opts.distance*numRoll)%scrollSize;
                if(_neg==1){
                    if(e>b){
                        c = e-b;
                    }else{
                        c = e+scrollSize -b;
                    }
                }else{
                    if(e>b){
                        c =e-scrollSize-b;
                    }else{
                        c = e-b;
                    }
                }
                d=opts.duration;

                //scrollId = setInterval(scrollFunc, opts.scrollDelay);
                if(scrollId) clearTimeout(scrollId);
                scrollId = setTimeout(scrollFunc, opts.scrollDelay);
            }

            function start(){
                rollId = setInterval(function(){
                    rollFunc();
                }, opts.time*1000);
            }
            function stop(){
                clearInterval(rollId);
            }

            function easeOutQuad(t,b,c,d){
                return -c *(t/=d)*(t-2) + b;
            }

            function easeOutQuint(t,b,c,d){
                return c*((t=t/d-1)*t*t*t*t + 1) + b;
            }

        });
    };
    $.fn.kxbdSuperMarquee.defaults = {
        isMarquee:false,//是否为Marquee
        isEqual:true,//所有滚动的元素长宽是否相等,true,false
        loop: 0,//循环滚动次数，0时无限
        newAmount:3,//加速滚动的步长
        eventA:'mousedown',//鼠标事件，加速
        eventB:'mouseup',//鼠标事件，原速
        isAuto:true,//是否自动轮换
        time:5,//停顿时间，单位为秒
        duration:50,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
        eventGo:'click', //鼠标事件，向前向后走
        direction: 'left',//滚动方向，'left','right','up','down'
        scrollAmount:1,//步长
        scrollDelay:10,//时长
        eventNav:'click'//导航事件
    };

    $.fn.kxbdSuperMarquee.setDefaults = function(settings) {
        $.extend( $.fn.kxbdSuperMarquee.defaults, settings );
    };

})(jQuery);

