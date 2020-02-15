// Slide navbar up/down when scroll up/down
$(function () {
	var lastScroll = 0;
	$(document).scroll(function(){
		var navbarHeight = $(".navbar").innerHeight();
		var currentScroll = $(window).scrollTop();
		if(currentScroll > navbarHeight && currentScroll > lastScroll) {
			$(".navbar").addClass("navbarShowDisplay").removeClass("navbarTransparent");
			lastScroll = currentScroll;
		} else {
			lastScroll = currentScroll;
			if(currentScroll < navbarHeight) {
				$(".navbar").addClass("navbarTransparent").removeClass("navbarShowDisplay");
			}
		}
		
		$("section").each(function() {
			var id = $(this).attr("id");
			if(currentScroll < $("header").innerHeight() - ($("header").innerHeight() * 0.25)) {
				$(".nav-item").removeClass("navbar-active");
			} else if($(window).scrollTop() + $(window).height() == $(document).height()) {
				$(".nav-item").removeClass("navbar-active");
				$("#contact" + "-link").addClass("navbar-active");
			} else if(currentScroll >= $(this).offset().top - 1) {
				$(".nav-item").removeClass("navbar-active");
				$("#"+id+"-link").addClass("navbar-active");
			}
		})
	});
})

$( ".nav-link" ).click(function() {
  $(".navbar-toggler:visible").click();
});


$('.modal').on('shown.bs.modal', function() {
	$(".modal").css("padding",'0px 5px');
});