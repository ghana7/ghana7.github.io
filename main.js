
$(document).ready(function(){
	$(".mainBox").click(function() {
		$("h1").slideUp(1000);
		$("#boxWrapper").animate({float:"left"});
	});
	$("#made").click(function(){
		$(this).animate({height:"90vh",width:"90vw",marginLeft:"0"},1000);
		$("#did").hide("slide",{direction:"right"},1000);;
		$("#am").hide("slide",{direction:"right"},1000);;
	});
	$("#did").click(function(){
		$(this).animate({height:"90vh",width:"90vw",marginLeft:"0"},1000);
		$("#made").hide("slide",{direction:"left"},1000);;
		$("#am").hide("slide",{direction:"right"},1000);;
	});
	$("#am").click(function(){
		$(this).animate({height:"90vh",width:"90vw",marginLeft:"0"},1000);
		$("#did").hide("slide",{direction:"left"},1000);;
		$("#made").hide("slide",{direction:"left"},1000);;
	});
});