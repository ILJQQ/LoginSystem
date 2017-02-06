/**
 * Created by huyiqing on 16/11/6.
 */
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var weekend = now.getDay();
var hour = now.getHours();
var minutes = now.getMinutes();
minutes = extra(minutes);

var weekday = new Array(7);
weekday[0] = "星期天";
weekday[1] = "星期一";
weekday[2] = "星期二";
weekday[3] = "星期三";
weekday[4] = "星期四";
weekday[5] = "星期五";
weekday[6] = "星期六";

function extra(x){
    if(x < 10) {
        return "0" + x;
    } else{
        return x;
    }
}

var today = (year + "-" + month + "-" + date + ", " + weekday[weekend]+", " + hour + ":" + minutes);
document.getElementById('time').innerHTML = today;