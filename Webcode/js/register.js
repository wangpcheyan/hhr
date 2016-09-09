
//随机生成背景图
var bgran=Math.floor(Math.random()*3);
$(".register").css("background","url(img/common/"+bgran+".jpg) no-repeat center center");

//是否同意协议
var isselected=false;
$(".checkbox").click(function(){
	if(isselected){
	  $(".reg-btn").attr("disabled","true");
	  isselected=false;
	}else{
		$(".reg-btn").removeAttr("disabled");
		isselected=true;
	}
})
// $(".checkbox").removeAttr("checked");
// $(".register").mousemove(function(){

// 	if(!$(".checkbox").attr("checked")){

// 	}else{
// 		$(".reg-btn").removeAttr("disabled");		
// 	}
// })
 $(".register").mousemove(function(){
 if($("input[type='checkbox']").is(':checked')==false){
	 $(".reg-btn").attr("disabled","true");
	}else{
 		$(".reg-btn").removeAttr("disabled");		
	}
 })
//注册页随机生成验证码
function authran(){
	var authran=Math.floor(Math.random()*8999+1000);
	$(".auth").text(authran);
}
authran();
$(".reset").click(function(){
	authran();
})

$('.verification').bind('input propertychange', function() { 
	if($('.verification').val()==$(".auth").text()){
		$(".cross").show();
		$(".uncross").hide();
	}else{
		$(".cross").hide();
		$(".uncross").show();
	}
});