$(document).ready(function(){

	$('.marker').hover(
	 function() {$(this).find(".hover").show()},
	 function() {$(this).find(".hover").hide()}
	);

	// pop-up
	$("#Melbourne").click(function(){
		$("#MelbourneLB").show();
	});

	$("#Kyoto").click(function(){
		$("#KyotoLB").show();
	});

	$("#Brighton").click(function(){
		$("#BrightonLB").show();
	});

	$("#Seattle").click(function(){
		$("#SeattleLB").show();
	});

	$("#Saltlake").click(function(){
		$("#SaltlakeLB").show();
	});

	//scroll
	$("#Shanghai").click(function(){
		$('html, body').animate({
			 scrollTop: $("#About").offset().top
	 }, 1000);
	});

	$("#Berkeley").click(function(){
		$('html, body').animate({
			 scrollTop: $("#About").offset().top
	 }, 1000);
	});

	//closing
	$(".close").click(function(){
		$(".lightbox").hide();
	});

	$(".overlay").click(function(){
		$(".lightbox").hide();
	});

   $(".box").click((e) => {
    e.stopPropagation();
})

});
