$(".nav-link").click(function() {
	$(this).addClass("active");
	$(".nav-link").not(this).removeClass("active");
})