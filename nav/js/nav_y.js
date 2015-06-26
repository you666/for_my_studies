// JavaScript Document
$(document).ready(function(){
		// openNav //
		$("dl").attr("id","openNavY");
		
		//装飾
		$("#openNavY>dd").css({"display":"none","border":"1px solid #ccc"});
		
		$("#openNavY>dt").css({"font-size":"18px","border":"1px solid #CCC"});
		
		$("#openNavY>dt:even").css("background-color","#BEF");
		$("#openNavY>dt:odd").css("background-color","#BFF");
		
		
		//動かすやつ
		$("#openNavY>dt").click(function(){
			$(this).toggleClass(".tabOpen");
			$(this).next(this).slideToggle("fast");
		});
		// openNav //
		


});
