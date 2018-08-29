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
    var box = document.getElementsByClassName("miaosha_right_inner");
    var list = document.getElementById("miaosha_right_list");
    var buttons = document.getElementById("miaosha_buttons").getElementsByTagName("span");
    var prev = document.getElementById("miaosha_right_prev");
    var next = document.getElementById("miaosha_right_next");
    var index = 1;
    var timer;
    function animate(offset) {
        var newPos = parseInt(list.style.left) + offset;
        list.style.left = newPos + "px";
        if(newPos>0){
            list.style.left = -180 + "px";
        }
        if (newPos<-180){
            list.style.left = 0 + "px";
        }
    }
    function play() {
        timer = setInterval(function () {
            next.onclick();
        },2000);
    }
    function stop() {
        clearInterval(timer);
    }
    function show() {
        for (var i=0;i<buttons.length;i++){
            if(buttons[i].className == "on"){
                buttons[i].className = "";
            }
        }
        buttons[index-1].className = "on";
    }
    prev.onclick = function () {
        index = index - 1;
        if(index<1){
            index = 2;
        }
        show();
        animate(180);
    };
    next.onclick = function () {
        index = index + 1;
        if(index>2){
            index = 1;
        }
        animate(-180);
        show();
    };
    for(var i=0;i<buttons.length;i++){
        buttons[i].onclick = function () {
            if(this.className == "on"){
                return ;
            }
            var clickIndex = parseInt(this.getAttribute("index"));
            var offset = 600*(index-clickIndex);
            animate(offset);
            index = clickIndex;
            show();
        }
    }
    box.onmouseover = stop;
    box.onmouseout = play;
    play();
});