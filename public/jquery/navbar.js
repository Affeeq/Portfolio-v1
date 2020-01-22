// Slide navbar up/down when scroll up/down
$(function () {
	var lastScroll = 0;
	$(document).scroll(function(){
		var navbarHeight = $(".navbar").innerHeight();
		var currentScroll = $(window).scrollTop();
		if(currentScroll > navbarHeight && currentScroll > lastScroll) {
			$(".navbar").addClass("navbarHideDisplay").removeClass("navbarShowDisplay");
			lastScroll = currentScroll;
		} else {
			$(".navbar").addClass("navbarShowDisplay").removeClass("navbarHideDisplay");
			lastScroll = currentScroll;
		}
	});
})


$(".nav-link").click(function() {
	$(this).addClass("active");
	$(".nav-link").not(this).removeClass("active");
})