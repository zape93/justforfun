addLoadEvent(function () {
    var buttons = document.getElementById("tab_head").getElementsByTagName("div");
    var items = document.getElementsByClassName("tab_body_item");
    var btns = document.getElementById("tab_btns").getElementsByTagName("span");
    var list = document.getElementsByClassName("tab_body_list");
    var index = 1;
    var tab_index = 1;
    function init() {
        for (var i=0;i<list.length;i++){
            list[i].style.left = 0 + "px";
        }
        if (btns[0].className == "tab_buttons"){
            addClass(btns[0],"tab_on")
        }
        if (btns[1].className == "tab_buttons tab_on"){
            btns[1].classList.remove("tab_on");
        }
        tab_index = 1;
    }
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
    function getStyle(obj,attr){
        if (window.getComputedStyle){
            return window.getComputedStyle(obj)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }


        function show1() {
            for (var j = 0; j < btns.length; j++) {
                if (btns[j].className == "tab_buttons tab_on") {
                    btns[j].classList.remove("tab_on");
                    //console.log(items[j]);
                    //console.log(buttons[j].className);
                }
            }
            addClass(btns[tab_index-1],"tab_on");
        }
    function show() {
        for (var j = 0; j < buttons.length; j++) {
            if (buttons[j].className == "tab_head_item tab_head_active") {
                buttons[j].classList.remove("tab_head_active");
                items[j].style.display = "none";
                //console.log(items[j]);
                //console.log(buttons[j].className);
            }
        }
        addClass(buttons[index-1],"tab_head_active");
        items[index-1].style.display = "block";
        //console.log(j);
    }
    for (var l=0;l<btns.length;l++){
        btns[l].onclick = function () {
            if(this.className == "tab_on"){
                return ;
            }
            var clickIndex = parseInt(this.getAttribute("tab_index"));
            var offset = 330*(tab_index-clickIndex);
            animate(offset);
            tab_index = clickIndex;
            show1();
        }
    }
    function animate(offset) {
        console.log(index-1);
        var newPos = parseInt(list[index-1].style.left) + offset;
        list[index-1].style.left = newPos + "px";
        if(newPos>-330){
            list[index-1].style.left = 0 + "px";
        }
        if (newPos<0){
            list[index-1].style.left = -330 + "px";
        }
    }
    for(var i=0;i<buttons.length;i++){
        buttons[i].onmouseover = function () {
            if(this.className == "tab_head_active"){
                return ;
            }
            var clickIndex = parseInt(this.getAttribute("index"));
            index = clickIndex;
            init();
            show();
           // console.log(buttons.length);
        }
    }
});