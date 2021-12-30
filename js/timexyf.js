
$(function () {
    var now = new Date()
    function time() {
        //鑾峰緱鏄剧ず鏃堕棿鐨刣iv
        t_div = document.getElementById('showtime');
        var now = new Date()
        //鏇挎崲div鍐呭 
        t_div.innerHTML = "填表时间" + now.getFullYear()
         + "年" + (now.getMonth() + 1) + "月" + now.getDate()
         + "日" + now.getHours() + "时" + now.getMinutes()
         + "分" + now.getSeconds() + "秒";
        //绛夊緟涓€绉掗挓鍚庤皟鐢╰ime鏂规硶锛岀敱浜巗ettimeout鍦╰ime鏂规硶鍐咃紝鎵€浠ュ彲浠ユ棤闄愯皟鐢�
        setTimeout(time, 1000);
    }
    time();
    t_span = document.getElementById('spantime');
    t_span.innerHTML = now.getFullYear()
     + "年" + (now.getMonth() + 1) + "月" + now.getDate()
     + "日";
});

// JavaScript Document