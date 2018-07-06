window.onload = function () {
    var list = document.getElementsByClassName("box");
    for (var i=0;i<list.length;i++){
        var buttons = list[i].getElementsByTagName("span");
        switch (i){
            case 0:
                buttons[0].onclick = function () {
                    if ( confirm("你要为路飞投票吗？")){
                        alert("感谢你对路飞的支持!可以多选的,你可以考虑一下索隆和香吉士~");
                    }else{
                        alert("为什么不投票给路飞？路飞那么强那么厉害巴拉巴拉#￥%)(*^%%$$");
                    }
                }
                break;
            case 1:
                buttons[0].onclick = function () {
                    if ( confirm("你要为索隆投票吗？")){
                        alert("感谢你！感谢你八辈祖宗！！！");
                    }else{
                        prompt("为什么不投票给索隆？说出你的意见？嗯？");
                    }
                }
                break;
            case 2:
                    buttons[0].onclick = function () {
                        if ( confirm("你要为乌索普投票吗？")){
                            alert("投票成功");
                        }
                    }
                    break;
            case 3:
                buttons[0].onclick = function () {
                    if ( confirm("你要为纳美投票吗？")){
                        alert("投票成功");
                    }
                }
                break;
            case 4:
                buttons[0].onclick = function () {
                    if ( confirm("你要为布鲁克投票吗？")){
                        alert("投票成功");
                    }
                }
                break;
            case 5:
                buttons[0].onclick = function () {
                    if ( confirm("你要为弗兰奇投票吗？")){
                        alert("投票成功");
                    }
                }
                break;
            case 6:
                buttons[0].onclick = function () {
                    if ( confirm("你要为乔巴投票吗？")){
                        alert("投票成功");
                    }
                }
                break;
            case 7:
                buttons[0].onclick = function () {
                    if ( confirm("你要为妮可罗宾投票吗？")){
                        alert("投票成功");
                    }
                }
                break;
            case 8:
                buttons[0].onclick = function () {
                    if ( confirm("你要为香吉士投票吗？")){
                        alert("感谢你对香吉士的支持，我代表全人类感谢你！！");
                    }else{
                        prompt("为什么不投票给香吉士？说出你的意见？嗯？");
                    }
                }
                break;
            case 9:
                buttons[0].onclick = function () {
                    if ( confirm("你要为甚平投票吗？")) {
                        alert("投票成功");
                    }
                }
                break;
            default:
                alert("感谢你的支持");
        }
    }
}