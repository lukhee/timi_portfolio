/*
 * Copyright (c) 2019 marketify
 * Author: marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	beny_tm_anchor();
	beny_tm_down();
	beny_tm_imgtosvg();
	beny_tm_data_images();
	beny_tm_animate_text();
	beny_tm_jarallax();
	beny_popup();
	beny_tm_projects();
	beny_tm_isotope();
	beny_tm_partners();
	beny_tm_contact_form();
	beny_tm_location();
	beny_tm_totop();
	beny_tm_nav_bg();
	beny_hero_effect();
	beny_tm_kenburn_slider();
	beny_tm_ripple();
	beny_tm_videoplayer();
	morocco_music();
	beny_tm_about_animation();
	
	
	jQuery(window).on('resize',function(){
		beny_tm_isotope();
	});
	
	jQuery(window).on('scroll',function(){
		
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.beny_tm_preloader').addClass('loaded');
    }, 1000);
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

function beny_tm_anchor(){
	
	"use strict";
	
	jQuery('.beny_tm_first_menu .inner .menu ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-213
			}, 1000);
		}
		return false;
	});
	
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function beny_tm_down(){
	
	"use strict";
	
	jQuery('.beny_tm_arrow_wrap a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-225
			}, 1000);
		}
		return false;
	});
	jQuery('.beny_tm_arrow_wrap_second a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-220
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function beny_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function beny_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function beny_tm_animate_text(){
	
	"use strict";
	
	var animateSpan1			= jQuery('.beny_tm_animation_text_word');
	
		animateSpan1.typed({
			strings: ["Freelancer", "Web Developer", "Photographer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
	
	var animateSpan2			= jQuery('.beny_tm_animation_text_word2');
	
		animateSpan2.typed({
			strings: ["Alexander", "Freelancer", "Developer", "Photographer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function beny_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function beny_popup(){
		"use strict";
	
		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
	}


// -----------------------------------------------------
// --------------------   SKILLS    --------------------
// -----------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*300));
	});
}

	jQuery('.beny_progress').each(function() {

		"use strict";

		var pWrap 			= jQuery(this);
		pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	});

function beny_tm_projects() {
	
	"use strict";
	
	jQuery('.beny_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.beny_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.beny_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.beny_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.beny_tm_portfolio_titles').removeClass('visible');
		});
	});
}


// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function beny_tm_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function beny_tm_partners(){
	
	"use strict";
	
		var carousel1			= jQuery('.beny_tm_partners .owl-carousel');
		carousel1.owlCarousel({
				loop: true,
				items: 4,
				lazyLoad: true,
				margin: 40,
				autoplay: true,
				autoplayTimeout: 4000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:3},
					1200:{items:4},
					1600:{items:4},
					1920:{items:4}
				}
		});
	
		var carousel2			= jQuery('.beny_tm_portfolio_testimonial .owl-carousel');
		carousel2.owlCarousel({
				loop: true,
				items: 3,
				margin: 50,
				lazyLoad: true,
				autoplay: true,
				autoplayTimeout: 5000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
						0:{items:1},
						480:{items:1},
						768:{items:2},
						1040:{items:3},
						1200:{items:3},
						1600:{items:3},
						1920:{items:3}
					}
		});
	
		var carousel4			= jQuery('.beny_tm_service_second .owl-carousel');
		carousel4.owlCarousel({
				loop: true,
				items: 3,
				lazyLoad: true,
				margin: 50,
				autoplay: true,
				autoplayTimeout: 5000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:3},
					1200:{items:3},
					1600:{items:3},
					1920:{items:3}
				}
		});
		beny_tm_imgtosvg();
	}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function beny_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// ----------------    PLACEHOLDER    ------------------
// -----------------------------------------------------

function beny_tm_location(){
		var button		= jQuery('.href_location');
		button.on('click',function(){
			var element		= jQuery(this);
			var address		= element.text();
			address			= address.replace(/\ /g,'+');
			var text		= 'https://maps.google.com?q=';
			window.open(text+address);
			return false;
		});
	}


// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function beny_tm_totop(){
	
	"use strict";
	
	jQuery(".beny_tm_footer .footer_inner .top a").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

// -----------------------------------------------------
// ------------------    NAV BG SCROLL    --------------
// -----------------------------------------------------

function beny_tm_nav_bg(){
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.beny_tm_first_menu');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 250){
			menu.addClass('animate');
		}else{
			menu.removeClass('animate');
		}
	});
}

// -----------------------------------------------------
// --------------------    HERO EFFECT    --------------
// -----------------------------------------------------

function beny_hero_effect(){
		
	jQuery(window).on('scroll',function(){
		var WinScroll			= jQuery(window).scrollTop();
		var text				= jQuery(".beny_tm_third_hero .hero_texts");
		var currentScroll		= window.pageYOffset;
		text.css({'opacity' : (1 - (currentScroll/20) / 15)});
		
		if(WinScroll >= 400){
			text.addClass('changed');
		}else{
			text.removeClass('changed');
		}
	});
	
}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function beny_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.beny_tm_first_hero .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/slider/1.jpg' },
				{ src: 'img/slider/2.jpg' },
				{ src: 'img/slider/5.jpg' },
			]

		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function beny_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function beny_tm_videoplayer(){
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// ---------------------    AUDIO   --------------------
// -----------------------------------------------------

jQuery('body.music').append('<audio loop autoplay volume="0" id="audio-player"><source src="audio/2.mp3" type="audio/mpeg"></audio>');
    var audio2 = jQuery("#audio-player");
    audio2.volume = 0.2;

function morocco_music(){
	
	"use strict";
      jQuery('.morocco_music').css({'visibility':'visible'});
      jQuery('body').addClass("audio-on");
      if (jQuery('body').hasClass('audio-off')) {
        jQuery('body').removeClass('audio-on');
      } 
      jQuery(".morocco_music").on('click', function() {
          jQuery('body').toggleClass("audio-on audio-off");         
          if (jQuery('body').hasClass('audio-off')) {
            audio2[0].pause();
          } 
          if (jQuery('body').hasClass('audio-on')) {
            audio2[0].play();
          }
      });

}


// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

	function beny_tm_about_animation(){
		
		"use strict";
		
		if ($('.parallax').length > 0) { 
		  var scene = $('.parallax').get(0);
		  var parallax = new Parallax(scene, { 
			relativeInput: true,
			onReady: function() { console.log('ready!');
		  } });
		}
	}