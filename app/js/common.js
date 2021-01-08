(function ($) {
	$(document).ready(function () {
		
		$('.popup-link').magnificPopup({
			type: 'inline',
			focus: 'input',
			showCloseBtn: true,
			alignTop: true,
			fixedContentPos: true
		});
		
		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
		var $video = 'https://www.youtube.com/watch?v=';
		$('.popup-video').attr('href', $video + $('.popup-video').attr('href'));

		// SmartMenus init
		$(function () {
			$('#main-menu').smartmenus({
				mainMenuSubOffsetX: -1,
				mainMenuSubOffsetY: 4,
				subMenusSubOffsetX: 6,
				subMenusSubOffsetY: -6,
				markCurrentItem: true,
				markCurrentTree: true,
				collapsibleBehavior: 'link'
			});
		});

		// SmartMenus mobile menu toggle button
		$(function () {
			var $mainMenuState = $('#main-menu-state');
			if ($mainMenuState.length) {
				// animate mobile menu
				$mainMenuState.change(function (e) {
					var $menu = $('#main-menu');
					if (this.checked) {
						$menu.hide().slideDown(250, function () {
							$menu.css('display', '');
						});
					} else {
						$menu.show().slideUp(250, function () {
							$menu.css('display', '');
						});
					}
				});
				// hide mobile menu beforeunload
				$(window).bind('beforeunload unload', function () {
					if ($mainMenuState[0].checked) {
						$mainMenuState[0].click();
					}
				});
			}
		});

		$('.mainblock .slider').slick({
			dots: true,
			infinite: true,
			arrows: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});

		$('.doctors .slider').slick({
			dots: false,
			prevArrow: '<button class="arrow arrow-prev"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></button>',
			nextArrow: '<button class="arrow arrow-next"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></button>',
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		var $status = $('.metro .slider-counter');
		var $slickElement = $('.metro .slider-for');

		$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			var i = (currentSlide ? currentSlide : 0) + 1;
			$status.html('<span class="slider-counter__curr">' + i + '</span>' + '<span class="slider-counter__all">/' + slick.slideCount + '</span>');
		});

		$('.metro .slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			prevArrow: '<button class="arrow arrow-prev"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></button>',
			nextArrow: '<button class="arrow arrow-next"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></button>',
			asNavFor: '.metro .slider-nav',
			responsive: [{
				breakpoint: 800,
				settings: {
					fade: false
				}
			}]
		});
		$('.metro .slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.metro .slider-for',
			dots: false,
			arrows: false,
			focusOnSelect: false,
			vertical: true,
			// autoplay: true,
			// autoplaySpeed: 5000,
			responsive: [{
				breakpoint: 800,
				settings: {
					// vertical: false
				}
			}, {
				breakpoint: 575,
				settings: {
					// vertical: false,
					// slidesToShow: 2
				}
			}]
		});

		$(".works .slide").twentytwenty({
			before_label: 'До',
			after_label: 'После'
		});
		
		$('.works .slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.works .slider-nav'
		});
		$('.works .slider-nav').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: '.works .slider-for',
			dots: false,
			draggable: false,
			variableWidth: true,
			swipe: false,
			touchMove: false,
			adaptiveHeight: false,
			prevArrow: '<button class="arrow arrow-prev"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></button>',
			nextArrow: '<button class="arrow arrow-next"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></button>',
			focusOnSelect: false,
			vertical: false,
			// autoplay: true,
			// autoplaySpeed: 5000,
			responsive: [{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					variableWidth: false
				}
			}]
		});

		$('.recommend .slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.recommend .slider-nav'
		});
		$('.recommend .slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.recommend .slider-for',
			dots: false,
			prevArrow: '<button class="arrow arrow-prev"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></button>',
			nextArrow: '<button class="arrow arrow-next"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></button>',
			focusOnSelect: true,
			vertical: false,
			// autoplay: true,
			// autoplaySpeed: 5000,
			responsive: [{
				breakpoint: 800,
				settings: {
					slidesToShow: 3
				}
				}, {
					breakpoint: 575,
					settings: {
						slidesToShow: 2
					}
				}, {
					breakpoint: 400,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		$('input[type="tel"]').inputmask({
			mask: "+7 (999) 999-99-99",
			greedy: false
		});

		$(document).on('click', '.spoiler', function(e) {
			$(this).toggleClass('active');
			$(this).find('.spoiler__text').slideToggle();
		});

	});
})(jQuery);