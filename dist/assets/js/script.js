$(document).ready(function(){
	/*----------------------------------------------
	  MOBILE NAVIGATION
	----------------------------------------------*/
	if($(window).width() < 1200) {
		// HIDE MENU
		$('.menu-list').css({"display":"none"});
		// $('#menu').click(function(){
		$('.nav-container').on('click','#menu', function(){
			//slow down the effect
			$('.menu-list').toggle('slow');
			//give the full opacity background-color
			$('#main-nav').addClass('darker');
			//removes class effecting navigation background-color
			$('#main-nav').removeClass('lighter');
		});
		$('#projects-link').click(function() {
			$('.menu-list').hide();
		});
		$('#about-link').click(function() {
			$('.menu-list').hide();
		});
		$('#contact-link').click(function() {
			$('.menu-list').hide();
		});
		// CLOSE MENU ON CLICK OUTSIDE
		$(document).mouseup(function(e) {
			var container = $('nav'),
				menu = $('.menu-list');
			//if the target of the click isn't in the container and the target of the click isn't a child of the container
			if(!container.is(e.target) && container.has(e.target).length === 0)
			{
				menu.hide('slow');
			}
		});
		// CHANGE NAV BACKGROUND ON SCROLL FOR MOBILE
		$(window).scroll(function() {
			if($(window).scrollTop() >= 251) {
				$('#main-nav').addClass('darker');
				$('#main-nav').removeClass('lighter');
			} else {
				$('#main-nav').addClass('lighter');
				$('#main-nav').removeClass('darker');
			}
		});
		$(window).scroll(function() {
			if($(window).scrollTop() >= 251) {
				$('#project-nav').addClass('darker');
				$('#project-nav').removeClass('lighter');
			} else {
				$('#project-nav').addClass('lighter');
				$('#project-nav').removeClass('darker');
			}
		});
	}
	/*----------------------------------------------
	  NAVIGATION -- SCROLL TO ELEMENT ON CLICK
	----------------------------------------------*/
	// SCROLL TO TOP
	$('nav').on('click','#logo', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#home').offset().top
		}, 500, 'easeInOutQuad');
	});
	// SCROLL TO PORTFOLIO SECTION
	$('nav').on('click','#projects-link', function(e) {
		e.preventDefault();
		var nav = $('nav').height();
		$('html, body').animate({
			scrollTop: $('#projects').offset().top - nav - 40
		}, 500, 'easeInOutQuad');
	});
	$('#identity').on('click','.see-projects', function(e) {
		e.preventDefault();
		var nav = $('nav').height();
		$('html, body').animate({
			scrollTop: $('#projects').offset().top - nav - 40
		}, 500, 'easeInOutQuad');
	});
	$('#projects').on('click','.see-projects', function(e) {
		e.preventDefault();
		var nav = $('nav').height();
		$('html, body').animate({
			scrollTop: $('#projects').offset().top - nav - 40
		}, 500, 'easeInOutQuad');
	});
	// SCROLL TO ABOUT SECTION
	$('nav').on('click','#about-link', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		}, 500, 'easeInOutQuad');
	});
	// SCROLL TO CONTACT SECTION
	$('nav').on('click','#contact-link', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
		}, 500, 'easeInOutQuad');
	});
	/*----------------------------------------------
	  NAVIGATION -- CHANGE NAVIGATION BAR COLOR
	----------------------------------------------*/
	// CHANGE NAV BACKGROUND ON SCROLL FOR MIN-WIDTH 600px
	if($(window).width() >= 601) {
		$(window).scroll(function() {
			if($(window).scrollTop() >= 488) {
				$('#main-nav').addClass('darker');
				$('#main-nav').removeClass('lighter');
			} else {
				$('#main-nav').addClass('lighter');
				$('#main-nav').removeClass('darker');
			}
		});
	}
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1024px
	if($(window).width() >= 1024) {
		$(window).scroll(function() {
			if($(window).scrollTop() >= 650) {
				$('#main-nav').addClass('darker');
				$('#main-nav').removeClass('lighter');
			} else {
				$('#main-nav').addClass('lighter');
				$('#main-nav').removeClass('darker');
			}
		});
	}
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1280px
	if($(window).width() >= 1280) {
		$(window).scroll(function() {
			if($(window).scrollTop() >= 800) {
				$('#main-nav').addClass('darker');
				$('#main-nav').removeClass('lighter');
			} else {
				$('#main-nav').addClass('lighter');
				$('#main-nav').removeClass('darker');
			}
		});
	}
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1440px
	if($(window).width() >= 1440) {
		$(window).scroll(function() {
			if($(window).scrollTop() >= 900) {
				$('#main-nav').addClass('darker');
				$('#main-nav').removeClass('lighter');
			} else {
				$('#main-nav').addClass('lighter');
				$('#main-nav').removeClass('darker');
			}
		});
	}
	// CHANGE NAV BACKGROUND ON SCROLL FOR SCREEN MIN-WIDTH 1920px
	if($(window).width() >= 1920) {
		$(window).scroll(function() {
			if($(window).scrollTop() >= 1200) {
				$('#main-nav').addClass('darker');
				$('#main-nav').removeClass('lighter');
			} else {
				$('#main-nav').addClass('lighter');
				$('#main-nav').removeClass('darker');
			}
		});
	}
	/*----------------------------------------------
	  SCROLL TO TOP BUTTON
	----------------------------------------------*/
	// HIDE AND SHOW SCROLL TO TOP BUTTON
	$(window).scroll(function() {
		if($(this).scrollTop() >=300) {
			$('#top-scroll').fadeIn(1000, function() {
				$('.up').fadeIn(500);
			});
		} else {
			$('#top-scroll').fadeOut(2000, function() {
				$('.up').fadeIn(1000);
			});
		}
	});
	// SCROLL TO TOP
	$('.container').on('click','#top-scroll', function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $('#home').offset().top
		}, 500, 'easeInOutQuad');
	});
	/*----------------------------------------------
	  Bottom Project Links
	----------------------------------------------*/
	if($(window).width() >= 725){
		var links = $('#process .view-content').length;
		if (links == 3) {
			$('#process .view-content').addClass('view3');
		} else if (links == 2) {
			$('#process .view-content').addClass('view2');
		} else {
			$('#process .view-content').addClass('view1');
		}
	}
	/*----------------------------------------------
	  Image Modal
	----------------------------------------------*/
	$('.see-img').on('click', 'a', function(e) {
		var modal = $('#theModal'),
			modalImg = $('#modal-image'),
			showImg = $('.see-img a').attr('href'),
			minHeight = 458,
			ratio = 0,
			height = ($('#theModal').height()/100)*90;
			// Prevent hyperlink default action
			e.preventDefault();
			// Display modal image using hyperlink address
			modalImg.attr('src',this);
			// Open modal
			modal.addClass('open');
			// Close modal
			modal.removeClass('close');
			// A click outside the modal image will close the modal
			modal.mouseup(function(e) {
			if(!modalImg.is(e.target) && modalImg.has(e.target).length === 0) {
				modal.addClass('close');
			}
		});
	});
	// Close the modal by clicking the X
	$('section').on('click','.exit', function() {
		modal.addClass('close');
	});
	/*----------------------------------------------
	  History Back Link
	----------------------------------------------*/
	$('#back').on('click', function() {
		history.back(-1);
	});
});