window.onload = function () {
    var box = document.getElementById("box");
    var smallBox = document.getElementById("small-box");
    var mark = document.getElementById("mark");
    var floatBox = document.getElementById("float-box");
    var bigBox = document.getElementById("big-box");
    var image = bigBox.getElementsByTagName("img")[0];

    mark.onmouseover = function () {
        floatBox.style.display = "block";
        bigBox.style.display = "block";
    }
    mark.onmouseout = function () {
        floatBox.style.display = "none";
        bigBox.style.display = "none";
    }
    mark.onmousemove = function (start) {
        var move = start || window.event;
        var left = move.clientX - box.offsetLeft - smallBox.offsetLeft - floatBox.offsetLeft/2;//相对于smallbox的X坐标
        var top = move.clientY - box.offsetTop - smallBox.offsetTop - floatBox.offsetTop/2;
        if (left<0){
            left = 0;
        } else if(left> mark.offsetWidth - floatBox.offsetWidth){
            left = mark.offsetWidth - floatBox.offsetWidth;
        }
        if (top<0){
            top = 0;
        } else if(top> mark.offsetHeight - floatBox.offsetHeight){
            top = mark.offsetHeight - floatBox.offsetHeight;
        }
        floatBox.style.left = left + "px";
        floatBox.style.top = top + "px";
        var percentX = left/(mark.offsetWidth - floatBox.offsetWidth);
        var percentY = top/(mark.offsetHeight - floatBox.offsetHeight);
        image.style.left = -percentX*(image.offsetWidth - bigBox.offsetWidth) + "px";
        image.style.top = -percentY*(image.offsetHeight - bigBox.offsetHeight) + "px";
    }
}