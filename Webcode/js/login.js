$(".qr-login").mouseenter(function(){
	$(".login .form").stop(true,false).fadeOut(500,function(){
		$(".qr-code").stop(true,false).fadeIn(500);		
	});

}).mouseleave(function(){		
	$(".qr-code").stop(true,false).fadeOut(500,function(){
		$(".login .form").stop(true,false).fadeIn(500);
	});	

})
