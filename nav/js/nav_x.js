// JavaScript Document
$(document).ready(function(){
		// openNav //
		$("dl").attr("id","openNavX");
		
		//装飾
		$("#openNavX dd").css({"display":"none","border":"1px solid #ccc"});
		
		$("#openNavX dt:even").css("background-color","#CFA");
		$("#openNavX dt:odd").css("background-color","#FFB");		
		
		$("#openNavX dt").each(function(){
			var bgColor = $(this).css("background-color");
				$(this).hover(function(){
					$(this).css({
						"background-color":"#FFF"
					});
					},function(){
							$(this).css({
								"background-color":bgColor
							});
					});
		});
									

		//動かすやつ
		$("#openNavX dt").click(function(){
			$(this).toggleClass(".tabOpen");
			$(this).next(this).slideToggle("fast");
		});
		// openNav //
		


});
