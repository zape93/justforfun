window.onload = function () {
    var box = document.getElementById("box");
    var height = parseFloat(getStyle(box,"height"));
    var target = 600
    var molecule = 600;
    var interval = 5;
        var doit = function (){
            return setInterval(function () {
            if (parseFloat(getStyle(box,"height"))<target){
                addHeight(parseFloat(getStyle(box,"height")),target,molecule,interval);
            }},3000);};
         doit();

    function getStyle(obj,attr) {
        if (window.getComputedStyle){
            return window.getComputedStyle(obj)[attr];
        } else{
            return obj.currentStyle[attr];
        }
    }
    function addHeight(leader,target,molecule,interval) {
        clearInterval(box.timer);//清除外部计时器
        var dis = target - leader ;
        var steplength =dis/(molecule/interval);//每次移动的距离
        var count = 0;  //移动的距离
        box.timer = setInterval(function () {//创建外部计时器 实现显示效果
            if (count < target ){//控制外部计时器实现条件
                box.style.height = parseFloat(getStyle(box,"height")) + steplength + "px";
                count = count + steplength;
                if (parseFloat(getStyle(box,"height"))>=target){//控制外部计时器 当达到最大值时 准备内部计时器
                    clearInterval(box.timer);//清除外部计时器
                    box.time = setInterval(function () {//创建内部计时器 实现收缩效果
                        if (count>leader){//控制内部计时器实现条件
                            box.style.height = parseFloat(getStyle(box,"height")) - steplength +"px";
                            count = count - steplength;
                            if (parseFloat(getStyle(box,"height"))<=leader){//当内部计时器达到最大值时
                                clearInterval(box.time);//清除内部计时器
                                ;
                            }
                        }
                    },10);
                    box.time;
                }
            }
        },10);
        box.timer;
    }

}
