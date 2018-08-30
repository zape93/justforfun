addLoadEvent(function () {
    var box = document.getElementById("lottery_box");
    var list = document.getElementById("lottery_list");
    var buttons = document.getElementById("lottery_buttons").getElementsByTagName("span");
    var index = 1;
    var timer;
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
            if(buttons[i].className == "lottery_buttons lottery_on"){
                buttons[i].classList.remove("lottery_on");
            }
        }
        addClass(buttons[index-1],"lottery_on");
    }
    for(var i=0;i<buttons.length;i++){
        buttons[i].onmouseover = function () {
            if(this.className == "daily_button daily_on"){
                return ;
            }
            var clickIndex = parseInt(this.getAttribute("index"));
            var abs = Math.abs(clickIndex - index);//需要点击的次数
            var symbol = abs/(clickIndex-index);//正负记号 决定向左还是向右点击
            var target = parseInt(getStyle(list,"left")) - 340*abs*symbol;
            console.log(target);
            if (symbol>0){
                if (timer){clearInterval(timer)};
                timer = setInterval(function () {
                    if (parseInt(getStyle(list,"left"))> -340) {
                        if (parseInt(getStyle(list,"left"))>target){
                            //console.log(target);
                            list.style.left = parseInt(getStyle(list,"left")) - 10 + "px";
                        } else{
                            clearInterval(timer);
                        }
                    }else{
                        clearInterval(timer);
                        list.style.left = -340 + "px";
                    }
                },17);
            }else{
                if (timer){clearInterval(timer)};
                timer = setInterval(function () {
                    if (parseInt(getStyle(list,"left"))< 0) {
                        if (parseInt(getStyle(list,"left"))<target){
                            //console.log(target);
                            list.style.left = parseInt(getStyle(list,"left")) + 10 + "px";
                        } else{
                            clearInterval(timer);
                        }
                    }else{
                        clearInterval(timer);
                        list.style.left = 0 + "px";
                    }
                },17);
            }
            index = clickIndex;
            show();
        }
    }
});