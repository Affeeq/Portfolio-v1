// Slide navbar up/down when scroll up/down
$(function () {
	var lastScroll = 0;
	$(document).scroll(function(){
		$("#navbarTarget").removeClass("show");
		var navbarHeight = $(".navbar").innerHeight();
		var currentScroll = $(window).scrollTop();
		if(currentScroll > navbarHeight && currentScroll > lastScroll) {
			$(".navbar").addClass("navbarHideDisplay").removeClass("navbarShowDisplay").removeClass("navbarTransparent");
			$(".navbar-brand").addClass("navbar-scrolled");
			lastScroll = currentScroll;
		} else {
			$(".navbar").addClass("navbarShowDisplay").removeClass("navbarHideDisplay");
			lastScroll = currentScroll;
			if(currentScroll < navbarHeight) {
				console.log(navbarHeight)
				console.log(currentScroll)
				$(".navbar").addClass("navbarTransparent").removeClass("navbarShowDisplay");
				$(".navbar-brand").removeClass("navbar-scrolled");
			}
		}
		
		$("section").each(function() {
			var id = $(this).attr("id");
			if(currentScroll < $("header").innerHeight()) {
				$(".nav-item").removeClass("navbar-active");
			} else if(currentScroll >= $(this).offset().top){
				$(".nav-item").removeClass("navbar-active");
				$("#"+id+"-link").addClass("navbar-active");
			}
		})
	});
})