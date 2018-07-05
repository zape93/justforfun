function animate(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json){
                    obj.style.zIndex = json[k];
        }
        if(flag){
            clearInterval(obj.timer);
            if (fn){
                fn();
            }
        }
    },15);
}
window.onload = function () {
    if (!document.getElementById)return false;
    if (!document.getElementsByTagName)return false;
    if (!document.getElementById("box"))return false;
    if (!document.getElementById("list"))return false;
    if (!document.getElementById("prev"))return false;
    if (!document.getElementById("next"))return false;
    if (!document.getElementById("buttons"))return false;
    if (!document.getElementsByTagName("li"))return false;
    if (!document.getElementsByTagName("span"))return false;
    var config = [
        {
            "zIndex":4
        },
        {
            "zIndex":2
        },
        {
            "zIndex":2
        },
        {
            "zIndex":2
        },
    ];
    var box = document.getElementById("box");
    var list = document.getElementById("list").getElementsByTagName("li");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 1;
    function assign() {
        for (var i=0;i<list.length;i++){
            animate(list[i],config[i],function () {
                flag = true;
            });
        }
    }
    assign();
    function buttonsShow(){
        for (var i=0;i<buttons.length;i++){
            if (buttons[i].className == "on"){
                buttons[i].className = "";
            }
        }
        buttons[index - 1].className = "on";
    }
    prev.onclick = function () {
        index = index - 1;
        if (index < 1){
            index = 4;
        }
        flag = false;
        buttonsShow();
        config.push(config.shift());
        assign();
    }
    next.onclick = function () {
        index = index + 1;
        if(index>4){
            index = 1;
        }
        flag = false;
        buttonsShow();
        config.unshift(config.pop())
        assign();
    }
        for(var i=0;i<buttons.length;i++){
            buttons[i].onclick = function () {
                if (this.className == "on"){
                    return ;
                }
                var clickIndex = this.getAttribute("index");
                var step = Math.abs(parseInt(index-clickIndex));
                if (index>clickIndex) {
                    for (var i=0;i<step;i++){
                        prev.onclick();
                    }
                }
                if(index<clickIndex){
                    for (var i=0;i<step;i++){
                        next.onclick();
                    }
                }
            }
        }
        var play = function () {
            move = setInterval(next.onclick,2000);
            move;
        }
        var stop = function () {
            clearInterval(move);
        }
        box.onmouseover = stop;
        box.onmouseout = play;
        play();
    }