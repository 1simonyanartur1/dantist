(function ($) {
	$(document).ready(function () {
		
		$(document).on('click', '.choose-tel .city__curr', function () {
			$(this).toggleClass('active').next('.city-list').slideToggle();
		});
		$(document).on('click', '.choose-tel .city-list li', function () {
			$(this).parent('.city-list').slideToggle();
			$(this).parent('.city-list').prev('.city__curr').toggleClass('active');

			$('.choose-tel .city-list li').removeClass('active');
			$(this).addClass('active');
			var $city = $(this).data('city');
			$('.choose-tel .city__curr').text($city);
			$('.choose-tel .phone-list li').each(function () {
				if($(this).data('city') == $city) {
					var $cityNum = $(this).text();
					$('.choose-tel .phone__curr').text($cityNum);
				}
			});
		});

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
		$('.mainblock.type2 .slider').slick('destroy');
		$('.mainblock.type3 .slider').slick('destroy');
		$('.stocks .slider').slick({
			dots: false,
			infinite: true,
			arrows: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<div class="arrow arrow-prev"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></siv>',
			nextArrow: '<div class="arrow arrow-next"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></siv>',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 575,
					settings: {
						dots: true,
						arrows: false,
						slidesToShow: 1
					}
				}
			]
		});

		$('.similar-articles .slider').slick({
			dots: false,
			infinite: true,
			arrows: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<div class="arrow arrow-prev"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></siv>',
			nextArrow: '<div class="arrow arrow-next"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></siv>',
			responsive: [
				{
					breakpoint: 1200,
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

		$(".works .slide, .portfolio .slide-top-right").twentytwenty({
			before_label: 'До',
			after_label: 'После'
		});

		$(document).on('click', '.implantations-methods .tabs-list__link', function (e) {
			e.preventDefault();
			$('.implantations-methods .tabs-list__link').removeClass('active');
			$(this).addClass('active');
			var priceId = $(this).data('tab');

			$('.implantations-methods .tabs-card').each(function () {
				if ($(this).data('tab') == priceId) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});
		});


		
		$('.works .slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots: false,
			draggable: false,
			swipe: false,
			touchMove: false,
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

		$('.portfolio .slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			draggable: false,
			swipe: false,
			touchMove: false,
			prevArrow: '<button class="arrow arrow-prev"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></button>',
			nextArrow: '<button class="arrow arrow-next"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></button>',
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
					breakpoint: 370,
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

		$('.more-services .slider').slick({
			dots: false,
			prevArrow: $('.more-services .arrow-prev'),
			nextArrow: $('.more-services .arrow-next'),
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		$('.implantations-cost-key .slider').slick({
			dots: false,
			prevArrow: '<div class="arrow arrow-prev"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></siv>',
			nextArrow: '<div class="arrow arrow-next"><svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z"/></svg></siv>',
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});

		$('.prices-spoilers-item__list, .prices-spoilers-block .action').hide();
		$('.prices-spoilers-item-row').on('click', function () {
			$(this).parent('.prices-spoilers-item').toggleClass('active');
			$(this).next('.prices-spoilers-item__list').slideToggle();
			$(this).parents('.prices-spoilers-block').find('.action').slideToggle();
		});

		$('.stock-item-inner').hide();
		$('.stock-item-row').on('click', function () {
			$(this).parent('.stock-item').toggleClass('active');
			$(this).next('.stock-item-inner').slideToggle();
		});

		function hideStockItem () {
			var i = 0;
			$('.stock-item').each(function () {
				i++;
				if(i <= 2) {
					$(this).show();
				} else if (i > 2) {
					$(this).hide();
				}
			});
		}
		hideStockItem();
		
		$('.stock .action .submit').on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('active');
			if($(this).hasClass('active')) {
				$('.stock-item').show();
				$(this).text('Скрыть');
			} else {
				$(this).text('Показать еще акции');
				$('.stock-item').show();
				hideStockItem();
			}
		});

	});
})(jQuery);

(function (document, window, index) {
	var inputs = document.querySelectorAll('.fileinput');
	Array.prototype.forEach.call(inputs, function (input) {
		var label = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener('change', function (e) {
			var fileName = '';
			if (this.files && this.files.length > 1)
				fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
			else
				fileName = e.target.value.split('\\').pop();

			if (fileName)
				label.querySelector('span').innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener('focus', function () {
			input.classList.add('has-focus');
		});
		input.addEventListener('blur', function () {
			input.classList.remove('has-focus');
		});
	});
}(document, window, 0));