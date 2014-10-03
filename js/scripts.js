$(document).ready(function(){
	
	$(window).resize(function(){
		$(window).bind('scroll', function() {
		var navHeight = $('.main-display').height();
			if ($(window).scrollTop() > navHeight) {
				$('#main-nav').addClass('fixed');
				$('.people').addClass('on-fixed-menu');
			}
			else {
				$('#main-nav').removeClass('fixed');
				$('.people').removeClass('on-fixed-menu');
			}
		});
	}).trigger('resize');

	$('#main-nav .mobile-menu-button').click(function(e){
		e.preventDefault();
		if($('#main-nav').hasClass('active')) {
			$('#main-nav').removeClass('active');
			$('#main-nav').stop(true, false).animate({top: 0},200);
			$('#main-nav ul').stop(true, false).slideToggle(200);
			$('.site-content').stop(true, false).animate({top: 0}, 200);
			// if ($('.people').hasClass('on-fixed-menu')) {
			// 	$('.people').stop(true, false).animate({marginTop: 210},0);
			// } else {
			// 	$('.people').stop(true, false).animate({marginTop: 0},200);
			// }
		} else {
			$('#main-nav').addClass('active');
			$('#main-nav').stop(true, false).animate({top: 0},200);
			$('#main-nav ul').stop(true, false).slideToggle(200);
			if ($(window).width() > 767) {
				$('.site-content').stop(true, false).animate({top: 70}, 200);
			} else {
				$('.site-content').stop(true, false).animate({top: 107}, 200);
			}
			// $('.people').stop(true, false).animate({marginTop: 210},200);
			// if ($('.people').hasClass('on-fixed-menu')) {
			// 	$('.people').stop(true, false).animate({marginTop: 0},200);
			// } else {
			// 	// $('.people').stop(true, false).animate({marginTop: 150},200);
			// }
		};
	});

	$(window).resize(function(){
		if ($(window).width() > 767) {
			$('#main-nav').removeClass('active');
			$('#main-nav ul').stop(true, false);
			$('#main-nav').stop(true, false).animate({top: 0}, 0);
		}
	});
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top - 50
			}, 1000);
			return false;
		  }
		}
	  });
	});
});