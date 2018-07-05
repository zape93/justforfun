window.onload = function () {
    var larger = document.getElementById("large");
    var small = document.getElementById("small");
    var image = document.getElementById("images");
    var move;
    function getStyle(obj,attr){
        if (window.getComputedStyle){
            return window.getComputedStyle(obj)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
    larger.onclick = function () {
        clearInterval(move);
          move = setInterval(function () {
            if(parseInt(getStyle(image,"width"))<400){
                image.style.width = parseInt(getStyle(image,"width"))+2+"px";
                image.style.height = parseInt(getStyle(image,"height"))+2+"px";
                image.style.marginTop = parseInt(getStyle(image,"marginTop"))-1+"px";
                image.style.marginLeft = parseInt(getStyle(image,"marginLeft"))-1+"px";
            }else{
                clearInterval(move);
            }
        },20);
    }
    small.onclick = function () {
        clearInterval(move);
            move = setInterval(function () {
            if (parseInt(getStyle(image,"width"))>200){
                image.style.width = parseInt(getStyle(image,"width"))-2+"px";
                image.style.height = parseInt(getStyle(image,"height"))-2+"px";
                image.style.marginTop = parseInt(getStyle(image,"marginTop"))+1+"px";
                image.style.marginLeft = parseInt(getStyle(image,"marginLeft"))+1+"px";
            } else{
                clearInterval(move);
            }
        },20);
    }
        image.onmouseover = function () {
            clearInterval(image.timer);
            image.timer = setInterval(function () {
                if (getStyle(image,"opacity")*100 > 0){
                    image.style.opacity = (getStyle(image,"opacity")*100 - 10)/100;
                } else{
                    clearInterval(image.timer);
                }
            },100);
        }
        image.onmouseout = function () {
            clearInterval(image.timer);
            image.timer = setInterval(function () {
                if (getStyle(image,"opacity")*100 < 100){
                    image.style.opacity = (getStyle(image,"opacity")*100 + 10)/100;
                } else{
                    clearInterval(image.timer);
                }
            },100);
        }
}