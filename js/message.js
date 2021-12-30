//var basePath="http://localhost:8000/portal-war-tg/";
var basePath="http://oldlp.sunlands.com/";
//var basePath="http://42.62.10.136:9880/";
//鏃犲脊鍑烘楠岃瘉
function tuiguang_message_open(messageForm,callback,messageId,schoolId){
	var phone=$("#"+messageForm).find("input[name='msg.phone']").val();
	var photo=/^1\d{10}$/;
	if(phone==""){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}
	if(photo.test(phone)==false){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}
}

//鎻愪緵璺ㄥ煙璇锋眰鐣欒█鍜屽彂閫佺煭淇�
function tuiguang_message_jsonp(messageForm,callback,messageId,schoolId){
	var phone=$("#"+messageForm).find("input[name='msg.phone']").val();
	var photo=/^1\d{10}$/;
	if(phone==""){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}
	if(photo.test(phone)==false){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}
}