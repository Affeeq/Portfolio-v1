// Slide navbar up/down when scroll up/down
$(function () {
	var lastScroll = 0;
	$(document).scroll(function(){
		var navbarHeight = $(".navbar").innerHeight();
		var currentScroll = $(window).scrollTop();
		if(currentScroll > navbarHeight && currentScroll > lastScroll) {
			$(".navbar").addClass("navbarHideDisplay").removeClass("navbarShowDisplay").removeClass("navbarTransparent");
			lastScroll = currentScroll;
		} else {
			$(".navbar").addClass("navbarShowDisplay").addClass("navbarShowDisplayColor").removeClass("navbarHideDisplay");
			lastScroll = currentScroll;
			if(currentScroll < navbarHeight) {
				$(".navbar").addClass("navbarTransparent").removeClass("navbarShowDisplay").removeClass("navbarShowDisplayColor");
				console.log(currentScroll)
				console.log(navbarHeight)
			}
		}
	});
})