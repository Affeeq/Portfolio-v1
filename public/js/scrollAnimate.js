$(document).ready(function() {
	// Header Section
	$('.header-title').waypoint(function() {
		$('.header-title').addClass('animated fadeInDown');
	}, { offset: '75%' });

	$('.header-subtitle').waypoint(function() {
		$('.header-subtitle').addClass('animated fadeInUp');
	}, { offset: '100%' });

	// Intro Section
	$('.scroll-intro-img').waypoint(function() {
		$('.scroll-intro-img').addClass('animated fadeIn');
	}, { offset: '75%' });

	$('.scroll-intro-content-1').waypoint(function() {
		$('.scroll-intro-content-1').addClass('animated fadeInUp');
	}, { offset: '75%' });

	$('.scroll-intro-content-2').waypoint(function() {
		$('.scroll-intro-content-2').addClass('animated fadeInUp');
	}, { offset: '75%' });

	$('.scroll-intro-content-3').waypoint(function() {
		$('.scroll-intro-content-3').addClass('animated fadeInUp');
	}, { offset: '75%' });

	// Focus Section
	$('.scroll-focus-content-1').waypoint(function() {
		$('.scroll-focus-content-1').addClass('animated fadeIn');
	}, { offset: '75%' });

	$('.scroll-focus-content-2').waypoint(function() {
		$('.scroll-focus-content-2').addClass('animated fadeIn');
	}, { offset: '75%' });

	$('.scroll-focus-content-3').waypoint(function() {
		$('.scroll-focus-content-3').addClass('animated fadeIn');
	}, { offset: '75%' });

	$('.scroll-focus-content-4').waypoint(function() {
		$('.scroll-focus-content-4').addClass('animated fadeIn');
	}, { offset: '75%' });

	// Experience Section
	$('.scroll-experience-content-1').waypoint(function() {
		$('.scroll-experience-content-1').addClass('animated fadeIn');
	}, { offset: '75%' });

	$('.scroll-experience-content-2').waypoint(function() {
		$('.scroll-experience-content-2').addClass('animated fadeInUp');
	}, { offset: '75%' });

	$('.scroll-experience-content-3').waypoint(function() {
		$('.scroll-experience-content-3').addClass('animated fadeInUp');
	}, { offset: '75%' });

	// Projects Section
	$('.scroll-projects').waypoint(function() {
		$('.scroll-projects').addClass('animated fadeIn');
	}, { offset: '75%' });
})