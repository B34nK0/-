

var mayDate = new Date();//鑾峰彇鏃ユ湡
var curMonth = mayDate.getMonth();//鑾峰彇鏈堜唤(0-11,0浠ｈ〃1鏈�)
var curDate = mayDate.getDate()//鑾峰彇鏃ユ湡
var mytime = mayDate.toLocaleTimeString()// //鑾峰彇褰撳墠鏃堕棿
var week = mayDate.getDay()
weekDay = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
curMonth += 1;

/*鍙栧緱褰撳墠鏈堜唤鏈夊嚑澶�*/
var date = new Date();

//鑾峰彇骞翠唤
var year = date.getFullYear();

//鑾峰彇褰撳墠鏈堜唤
var mouth = date.getMonth() + 1;

//瀹氫箟褰撴湀鐨勫ぉ鏁帮紱
var days;

//褰撴湀浠戒负浜屾湀鏃讹紝鏍规嵁闂板勾杩樻槸闈為棸骞村垽鏂ぉ鏁�
if (mouth == 2) {
	days = year % 4 == 0 ? 29 : 28;

}
else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
	//鏈堜唤涓猴細1,3,5,7,8,10,12 鏃讹紝涓哄ぇ鏈�.鍒欏ぉ鏁颁负31锛�
	days = 31;
}
else {
	//鍏朵粬鏈堜唤锛屽ぉ鏁颁负锛�30.
	days = 30;

}


//+-------淇敼鏃堕棿瑙勫緥
// if(weekDay[week]==="鏄熸湡涓€")
// {
// 	curDate+=2
// }
// else if(weekDay[week]==="鏄熸湡浜�")
// {
// 	curDate+=1;
// }
// else if(weekDay[week]==="鏄熸湡涓�")
// {
// 	curDate+=2;
// 	//curDate = days;
// }
// else if(weekDay[week]==="鏄熸湡鍥�")
// {
// 	curDate+=1;
// }
// else if(weekDay[week]==="鏄熸湡浜�")
// {
// 	curDate+=2;
// }
// else if(weekDay[week]==="鏄熸湡鍏�")
// {
// 	curDate+=1;
// }
// else
// {
// 	curDate;
// };


//褰撴湀鏄�30澶�
if (days == 30) {
	if (days - curDate < 0) {//瓒呰繃褰撴湀澶╂暟
		curDate -= days;
		curMonth += 1;//鎶婃湀浠借皟鍒颁笅涓湀浠�
	} else {
		curDate;
		curMonth;
	}

}
else if (days == 31)//褰撴湀31澶�
{

	if (days - curDate < 0) {//瓒呰繃褰撴湀澶╂暟
		curDate -= days;
		curMonth += 1;//鎶婃湀浠借皟鍒颁笅涓湀浠�
	} else {
		curDate;
		curMonth;
	}

}
else if (days == 28)//褰撴湀28澶�
{

	if (days - curDate < 0) {//瓒呰繃褰撴湀澶╂暟
		curDate -= days;
		curMonth += 1;//鎶婃湀浠借皟鍒颁笅涓湀浠�
	} else {
		curDate;
		curMonth;
	}

};

if (curMonth > 12) {
	curMonth = 1;
}



//璁剧疆娲诲姩鏃堕棿娈电殑璧峰鏃堕棿
var curDate_start = 20;//鍥哄畾璁剧疆1鏃�
var curMonth_start = curMonth - 1;//璁剧疆褰撴湀鐨勪笂涓湀
if (curMonth_start <= 0) {
	curMonth_start = 12;
}

//JQ鑾峰彇鎵€鏈夊璞�
$(function () {
	$(".curMonth").html(curMonth);
	$(".curDate").html(curDate);

	$(".curMonth_start").html(curMonth_start);
	$(".curDate_start").html(curDate_start);

});