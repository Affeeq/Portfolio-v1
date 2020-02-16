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
				$(".nav-link").removeClass("navbar-active");
			} else if($(window).scrollTop() + $(window).height() == $(document).height()) {
				$(".nav-link").removeClass("navbar-active");
				$("#contact" + "-link").addClass("navbar-active");
			} else if(currentScroll >= $(this).offset().top - 1) {
				$(".nav-link").removeClass("navbar-active");
				$("#"+id+"-link").addClass("navbar-active");
			}
		})
	});
})

// animate scrolling when links are clicked
$("#intro-link, #landing-link-down").click(function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 1500);
});

$("#focus-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#focus").offset().top
    }, 1500);
});

$("#experience-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#experience").offset().top
    }, 1500);
});

$("#project-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#project").offset().top
    }, 1500);
});

$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1500);
});

$(".footer-icon-up").click(function() {
    $('html, body').animate({
        scrollTop: $("#landing-img-container").offset().top
    }, 1500);
});


// close navbar when nav-link is clicked
$( ".nav-link" ).click(function() {
  $(".navbar-toggler:visible").click();
});


$('.modal').on('shown.bs.modal', function() {
	$(".modal").css("padding",'0px 5px');
});