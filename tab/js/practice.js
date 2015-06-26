// JavaScript Document
$(document).ready(function(){

  $(".cont").hide();
		$("#tags li:first").click(function(){
				$(this).css({
						color:"#F56",
					 backgroundColor:"#CE2"
				});
						$("#tags li:not(li:first)").css({
							  color:"#000",
								 backgroundColor:"#FFF"
				});
				$(".cont").hide();
					 $("#html").show(500)
		});
		
		$("#tags li:nth-of-type(2)").click(function(){
				$(this).css({
					 color:"#F56",
					 backgroundColor:"#CE2"
		  });
						$("#tags li:not(li:nth-of-type(2))").css({
							  color:"#000",
								 backgroundColor:"#FFF"	
						});
 	  $(".cont").hide();
					 $("#css").show(500)
		});
		
		$("#tags li:last").click(function(){
		  $(this).css({
					color:"#F56",
					backgroundColor:"#CE2"
		 });
						$("#tags li:not(li:last)").css({
							  color:"#000",
								 backgroundColor:"#FFF"	
						});
	  $(".cont").hide();
 					$("#jquery").show(500)
				});

})
