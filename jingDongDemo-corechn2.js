addLoadEvent(function () {
    /* if(!document.getElementById())return false;
     if(!document.getElementsByTagName())return false;
     if(!document.getElementById("box"))return false;
     if (!document.getElementById("list")) return false;
     if(!document.getElementById("buttons"))return false;
     if (!document.getElementsByTagName("span"))return false;
     if (!document.getElementById("prev"))return false;
     if (!document.getElementById("next"))return false;
     */
    var box = document.getElementById("corechn2_box");
    var list = document.getElementById("corechn2_list");
    var buttons = document.getElementById("corechn2_buttons").getElementsByTagName("span");
    var prev = document.getElementById("corechn2_prev");
    var next = document.getElementById("corechn2_next");
    var index = 1;
    var timer;
    var timers;
    function addClass(element,value) {
        if(!element.className){
            element.className = value;
        }else{
            var newClassName = element.className;
            newClassName += " ";
            newClassName += value;
            element.className = newClassName;
        }
    }
    function getStyle(obj,attr) {
        if (window.getComputedStyle){
            return window.getComputedStyle(obj)[attr];
        } else{
            return obj.currentStyle[attr];
        }
    }
    function show() {
        for (var i=0;i<buttons.length;i++){
            if(buttons[i].className == "corechn2_button corechn2_on"){
                buttons[i].classList.remove("corechn2_on");
            }
        }
        addClass(buttons[index-1],"corechn2_on");
    }
    prev.onclick = function () {
        index = index - 1;
        if(index<1){
            index = 3;
        }
        if (timer){clearInterval(timer)};
        var target = parseInt(getStyle(list,"left")) + 350;
        timer = setInterval(function () {
            if (parseInt(getStyle(list,"left"))< 0) {
                if (parseInt(getStyle(list,"left"))<target){
                    //console.log(target);
                    list.style.left = parseInt(getStyle(list,"left")) + 7 + "px";
                } else{
                    clearInterval(timer);
                }
            }else{
                clearInterval(timer);
                list.style.left = -1050 + "px";
            }
        },5);
        show();
    };
    next.onclick = function () {
        index = index + 1;
        if(index>3){
            index = 1;
        }
        if (timer){clearInterval(timer)};
        var target = parseInt(getStyle(list,"left")) - 350;
        timer = setInterval(function () {
            if (parseInt(getStyle(list,"left"))> -1400) {
                if (parseInt(getStyle(list,"left"))>target){
                    //console.log(target);
                    list.style.left = parseInt(getStyle(list,"left")) - 7 + "px";
                } else{
                    clearInterval(timer);
                }
            }else{
                clearInterval(timer);
                list.style.left = -350 + "px";
            }
        },5);
        show();
    };
    //console.log(buttons);
    for(var i=0;i<buttons.length;i++){
        buttons[i].onclick = function () {
            if(this.className == "daily_button daily_on"){
                return ;
            }
            var clickIndex = parseInt(this.getAttribute("index"));
            var abs = Math.abs(clickIndex - index);//需要点击的次数
            var symbol = abs/(clickIndex-index);//正负记号 决定向左还是向右点击
            var target = parseInt(getStyle(list,"left")) - 350*abs*symbol;
            console.log(target);
            if (symbol>0){
                if (timer){clearInterval(timer)};
                timer = setInterval(function () {
                    if (parseInt(getStyle(list,"left"))> -1400) {
                        if (parseInt(getStyle(list,"left"))>target){
                            //console.log(target);
                            list.style.left = parseInt(getStyle(list,"left")) - 7 + "px";
                        } else{
                            clearInterval(timer);
                        }
                    }else{
                        clearInterval(timer);
                        list.style.left = -350 + "px";
                    }
                },5);
            }else{
                if (timer){clearInterval(timer)};
                timer = setInterval(function () {
                    if (parseInt(getStyle(list,"left"))<= -350) {
                        if (parseInt(getStyle(list,"left"))<target){
                            //console.log(target);
                            list.style.left = parseInt(getStyle(list,"left")) + 7 + "px";
                        } else{
                            clearInterval(timer);
                        }
                    }else{
                        clearInterval(timer);
                        list.style.left = - 1050 + "px";
                    }
                },5);
            }
            index = clickIndex;
            show();
        }
    }
    function play() {
        timers = setInterval(function () {
            next.onclick();
        },5000);
    }
    function stop() {
        clearInterval(timers);
    }
    box.onmouseover = stop;
    box.onmouseout = play;
    play();
});