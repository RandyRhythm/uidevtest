$(document).ready(function(){
	$('.type').click(function () {
     var str = $("#changeType").text();
     if(str != "Larger type") {
		 $("#changeType").text("Larger type");
		 $(".type").css("background-position", "3px -359px");
	 } else{
		 $("#changeType").text("Smaller type");
		 $(".type").css("background-position", "3px -404px");
     }
     $(".article").toggleClass("sixteen");
    });
});