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
    var box = document.getElementsByClassName("miaosha_list");
    var list = document.getElementById("miaosha_items");
    var prev = document.getElementById("miaosha_prev");
    var next = document.getElementById("miaosha_next");
   // console.log(list.style.left);
    function animate(offset) {
        var newPos = parseInt(list.style.left) + offset;
        list.style.left = newPos + "px";
        if (newPos > 0) {
            list.style.left = -800 + "px";
        }
        if (newPos < -800) {
            list.style.left = 0 + "px";
        }
    }
    prev.onclick = function () {
        animate(200);
    };
    next.onclick = function () {
        animate(-200);
    };
});