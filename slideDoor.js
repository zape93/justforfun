window.onload = function () {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var list = document.getElementById("list");
    var pic = document.getElementsByTagName("img");
    var exposeWidth = 100;
    var picWidth = pic[0].offsetWidth;
    var listwidth = picWidth + exposeWidth*(pic.length - 1);
    var moveWidth = picWidth - exposeWidth;
    var molecule = 600;
    var denominator = 20;
    list.style.width = listwidth + "px";

    function init() {
        for (var i=1;i<pic.length;i++){
            pic[i].style.left = picWidth + exposeWidth*(i-1) + "px";
        }
    }
    init();
    for (var i=1;i<pic.length;i++){
            pic[i].onmouseover = (function (i) {//这里运用闭包 将鼠标悬浮的图片的索引保留到内存，用来定位其他图片相对于悬浮图片的位置
                var returnFuc =  function () {//用匿名函数封装滑动动作 并作为方法返回给鼠标悬浮事件
                for (var j = 1; j < pic.length; j++) {
                    if (j <= i) {//如果这个图片索引小于悬浮图片索引 ，那么就需要向终点滑动
                        moveElement(pic[j], picWidth + (j - 1) * exposeWidth - moveWidth, molecule, denominator);//这个图片之前的图片需要滑动到终点
                    } else {//如果图片索引大于悬浮图片索引，那么就需要向初始化状态滑动
                        moveElement(pic[j], picWidth + (j - 1) * exposeWidth, molecule, denominator);//这个图片之后的图片需要滑动到初始化位置
                    }
                }
            }
            return returnFuc;
            })(i);
    }
    pic[0].onmouseover = function () {
        for (var i=1;i<pic.length;i++){
            moveElement(pic[i],picWidth+(i-1)*exposeWidth,molecule,denominator);//所有图片滑动到初始化状态
        }
    }
    function moveElement(whichPic,target,molecule,denominator) {
        if (whichPic.timer){clearInterval(whichPic.timer);}
        var leader =parseFloat(getStyle(whichPic,"left")); //目标图片当前位置
        var abs = Math.abs(target - leader);    //求取移动距离的绝对值
        var symbol = (target-leader)/abs;   //标记当前图片向左还是右移动的记号
        var count = 0;  //计数器，保存移动了多少像素
        var steplength = abs/(molecule/denominator); //每次需要移动的距离
        whichPic.timer = setInterval(function () {
            if (count + steplength < abs) {//防止图片左右抖动(抖动一下) 控制图片不要溢出限制条件
                whichPic.style.left = parseFloat(getStyle(whichPic,"left")) + steplength*symbol + "px";
                count = count + steplength;
            }else {
                whichPic.style.left = target + "px";
                clearInterval(whichPic.timer);
            }
        },denominator);
        whichPic.timer;
    }
    function getStyle(obj,attr) {
        if (window.getComputedStyle){
            return window.getComputedStyle(obj)[attr];
        } else{
            return obj.currentStyle[attr];
        }
    }
}