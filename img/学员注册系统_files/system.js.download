function save(){
    var photo = /^1[23456789]\d{9}$/;
    var name = $('.name').val();
    var mobile = $('.mobile').val();
    var companyName = $('.companyName').val();
    var majorName = $('.majorName').val();
    if(name == ''){
        $('.name').focus();
        alert("请填写姓名!!!");
        return false;
    };
    
    if(companyName == ''){
        $('.companyName').focus();
        alert("请填写院校!!!");
        return false;
    };
    if(majorName == ''){
        $('.majorName').focus();
        alert("请填写专业!!!");
        return false;
    };
    if(!photo.test(mobile)){
        $('.mobile').focus();
        alert("请输入11位有效的手机号!!!");
        return false;
    }
    var paraC = {};
    paraC.name = name;
    paraC.companyName = companyName;
    paraC.majorName = majorName;
    paraC.mobile = mobile;
    $.ajax({
    //璇锋眰鏂瑰紡
    type : "POST",
    // url : "http://www.chengkaopeixun.com/index.php/api/ReceiveData/saveSWTData",
    url : "http://www.88y.org/sendSms.php",
    //鏁版嵁锛宩son瀛楃涓�
    data : {name:paraC.name,companyName:paraC.companyName,name:paraC.name,majorName:paraC.majorName,mobile:paraC.mobile},
    //璇锋眰鎴愬姛
    success : function(result) {
        
        
             console.log(result);
        alert('发送成功');
        $('form').submit();
      
           
      
       
       
        
    },
    error : function(e){
        console.log(e.status);
        console.log(e.responseText);
    }			
    });
}