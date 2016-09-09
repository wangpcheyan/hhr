//头部下拉菜单
$(".add-btn").mouseenter(function(){
    $(".self .dropdown").stop(true, false).slideUp();
	$(".add-new .dropdown").stop(true, false).slideDown();
})
$(".add-new .dropdown-menu").mouseleave(function () {
    $(".add-new .dropdown").stop(true, false).slideUp();
})
$(".user").mouseenter(function(){
    $(".add-new .dropdown").stop(true, false).slideUp();
    $(".self .dropdown").stop(true, false).slideDown();
})
$(".self .dropdown").mouseleave(function () {
    $(".self .dropdown").stop(true, false).slideUp();
})

//侧边栏显示子菜单
$(".item-div").mousemove(function(){
	var itemIndex=$(".item-div").index(this);
	$(".item-div .childItem-box").hide();
	$(".item-div:eq("+itemIndex+") .childItem-box").show();
	$(".item-div").removeClass("current");
	$(".item-div").eq(itemIndex).addClass("current");

})
$(".childItem-box").mouseleave(function(){
	$(".item-div .childItem-box").hide();
	$(".item-div").removeClass("current");
})

//三级菜单控制
//$(".hasChild").mousemove(function(){
//	var hasChildIndex=$(".hasChild").index(this);
//	$(".hasChild .grandson-box").hide();
//	$(".hasChild .thirdMnue").css({"background":"none"});
//	$(".hasChild .thirdMnue:eq("+hasChildIndex+")").css({"background":"#13a787"});
//	$(".hasChild .grandson-box:eq("+hasChildIndex+")").show();
//}).mouseleave(function(){
//		var hasChildIndex=$(".hasChild").index(this);
//			$(".hasChild .grandson-box:eq("+hasChildIndex+")").hide();
//		$(".hasChild .thirdMnue").css({"background":"none"});
//})
//$(".childItem-box").mouseleave(function(){
//	$(".hasChild .grandson-box").hide();
//})

//$("body").click(function(){
//	$(".dropdown").stop(true,false).slideUp();
//})
