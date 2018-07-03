window.onload = function () {
   /* if(!document.getElementById())return false;
    if(!document.getElementsByTagName())return false;
    if(!document.getElementById("box"))return false;
    if (!document.getElementById("list")) return false;
    if(!document.getElementById("buttons"))return false;
    if (!document.getElementsByTagName("span"))return false;
    if (!document.getElementById("prev"))return false;
    if (!document.getElementById("next"))return false;
    */
   var box = document.getElementById("box");
    var list = document.getElementById("list");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 1;
    var timer;
    function animate(offset) {
        var newPos = parseInt(list.style.left) + offset;
        list.style.left = newPos + "px";
        if(newPos>-600){
            list.style.left = -3000 + "px";
        }
        if (newPos<-3000){
            list.style.left = -600 + "px";
        }
    }
    function play() {
        timer = setInterval(function () {
            next.onclick();
        },1500);
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
            index = 5;
        }
        show();
        animate(600);
    };
    next.onclick = function () {
        index = index + 1;
        if(index>5){
            index = 1;
        }
        animate(-600);
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
}