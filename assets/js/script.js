/*global jQuery:false */
'use strict';
(function ($, window, document, undefined) {
	function isMobile () {
		return $(window).width() < 992
	}
	$(window).load(function(){
		//navbar mobile collapse
		var navbar = $("#my-navbar"),
			clearNavBar = function () {
				if ( !isMobile() ) {
					navbar.addClass("in").css("height","100%");
				} else {
					navbar.removeClass("in");
				}
			};
		clearNavBar();
		$(this).resize( clearNavBar );
		navbar.click( clearNavBar );

		//navbar active control
		$(".navigation ul li").on("click", function(){
			if ( $(this).is("#home-btn") ) {
				$("#my-home").addClass("col-md-offset-3");
				$(".main-image").css("background-position","center top");
			} else {
				$("#my-home").removeClass("col-md-offset-3");
				$(".main-image").css("background-position","left top");
			}

			$("html, body").animate({ scrollTop: 0 }, 0);
			$(".navigation li.active").removeClass("active");
			$(this).addClass("active");
		});

		// Return to home page whenever the page is reload
		location.hash = "#";
		$("html, body").animate({ scrollTop: 0 }, "slow");

		// set the background image for each posts
		$(".post .bg_image").each(function(){
			$(this).css("background-image","url('"+$(this).attr("bg-img")+"')");
		});

		// Circle Process Bar
		$('.progress-pie-chart').each(function(){
			var percent = parseInt( $(this).data('percent') ),
				deg = 360*percent/100;
			if ( percent > 50 ) {
				$(this).addClass('gt-50');
			}
			$(this).find('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
			$(this).find('.ppc-percents span').html(percent+'%');
		});

		//backstretch
		$("body").backstretch([
			"assets/img/bg/bg1.jpg"
			, "assets/img/bg/bg2.jpg"
			, "assets/img/bg/bg3.jpg"
		], {duration: 6000, fade: 750});
	});
})(jQuery, window, document);