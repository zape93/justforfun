var to = new Date(2018, 8, 29, 15, 20, 10);
function antitime() {
    var now = new Date();

    //2. 拿到当前时间和过期时间之间的时间差（毫秒）
    var deltaTime = to - now; //到期时间和当前时间相差的毫秒数

    //如果超时了，就停止倒计时
    if (deltaTime <= 0) {
        //停止计时器
        window.clearInterval(timer);
        //停止执行下面的代码
        return;
    }

    //已知毫秒数，算出几天
    var d = Math.floor(deltaTime / (24*60*60*1000));
    //几小时
    var h = Math.floor(deltaTime / (24*60*1000) % 24);
    //几分钟
    var m = Math.floor(deltaTime / (60*1000) % 60);
    //算出有多少秒
    var s = Math.floor(deltaTime / 1000 % 60);
    //算出多少毫秒, 毫秒数只显示10位和百位
    var ms = Math.floor(deltaTime % 1000 / 10);

    //把时间的数字转成字符串， 如果分秒毫秒不足10， 则前面补0
    var timeStr = ""+(d<10?"0"+d:d)+(h<10?"0"+h:h) + (m<10?"0"+m:m) + (s<10?"0"+s:s) + (ms<10?"0"+ms:ms);
    //console.log(timeStr);
    //console.log(d);

    //063535

    //each是用来遍历.num元素， 其实你可以理解成循环

    $(".cd .num").each(function(index, span) {
        //console.log(span);
        $(span).html(timeStr.substring(index, index+1));

        //$(span), span默认是一个js对象，需要用$(span)变成一个jquery对象
        //$(span).html();这个方法是用来设置span里面的值的
        //timeStr.subSring();该方法是用来截取字符串 “abcdefg”
    });
}

//每十毫秒执行一次
var timer = setInterval(antitime, 10);