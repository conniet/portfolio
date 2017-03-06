/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
//  */
// ( function() {

// 	var win, menu, button, project, about, contact, nav; //Declaring variables to be used.

// 	win = window.innerWidth; //window width variable
// 	menu = document.getElementById('primary-menu'); //primary-menu variable
// 	button = document.getElementById('menu-button'); //hamburger button variable
// 	project = document.getElementById('projectbtn'); //project link variable
// 	about = document.getElementById('aboutbtn'); //about link variable
// 	contact = document.getElementById('contactbtn'); //contact link variable
// 	nav = document.getElementById('site-navigation'); //navigation bar variable


// 	//Mobile navigation functions
// 	if(win <= 600) {
// 		//toggle function for hamburger
// 		button.onclick = function() {
// 			if(menu.style.display != 'block') {
// 				menu.style.display = 'block';
// 			} else {
// 				menu.style.display = 'none';
// 			}
// 		};
// 		//close nav after menu choice
// 		project.onclick = function() {
// 			menu.style.display='none';
// 		};
// 		about.onclick = function() {
// 			menu.style.display='none';
// 		};
// 		contact.onclick = function() {
// 			menu.style.display='none';
// 		};
// 		function navColorSm() {
// 			if(window.pageYOffset > 200) {
// 				nav.style.backgroundColor = 'rgba(49,131,136,.9)';
// 			} else {
// 				nav.style.backgroundColor = 'rgba(77,204,213,.5)';
// 			}
// 		}
// 		window.onscroll = navColorSm;
// 	}
// 	else if(win > 601 && win < 801) {
// 		function navColorMd() {
// 			if(window.pageYOffset > 400) {
// 				nav.style.backgroundColor = 'rgba(49,131,136,.9)';
// 			} else {
// 				nav.style.backgroundColor = 'rgba(77,204,213,.5)';
// 			}
// 		}
// 		window.onscroll = navColorMd;
// 	} else {
// 		function navColorLg() {
// 			if(window.pageYOffset > 710) {
// 				nav.style.backgroundColor = 'rgba(49,131,136,.9)';
// 			} else {
// 				nav.style.backgroundColor = 'rgba(77,204,213,.5)';
// 			}
// 		}
// 		window.onscroll = navColorLg;
// 	};

	// container.click(function() {
	// 	alert('Deadpool');
	// });

	// var container, button, menu, links, subMenus;

	// container = document.getElementById( 'site-navigation' );
	// if ( ! container ) {
	// 	return;
	// }

	// button = container.getElementsByTagName( 'button' )[0];
	// if ( 'undefined' === typeof button ) {
	// 	return;
	// }

	// menu = container.getElementsByTagName( 'ul' )[0];

	// // Hide menu toggle button if menu is empty and return early.
	// if ( 'undefined' === typeof menu ) {
	// 	button.style.display = 'none';
	// 	return;
	// }

	// menu.setAttribute( 'aria-expanded', 'false' );
	// if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
	// 	menu.className += ' nav-menu';
	// }

	// button.onclick = function() {
	// 	if ( -1 !== container.className.indexOf( 'toggled' ) ) {
	// 		container.className = container.className.replace( ' toggled', '' );
	// 		button.setAttribute( 'aria-expanded', 'false' );
	// 		menu.setAttribute( 'aria-expanded', 'false' );
	// 	} else {
	// 		container.className += ' toggled';
	// 		button.setAttribute( 'aria-expanded', 'true' );
	// 		menu.setAttribute( 'aria-expanded', 'true' );
	// 	}
	// };

	// // Get all the link elements within the menu.
	// links    = menu.getElementsByTagName( 'a' );
	// subMenus = menu.getElementsByTagName( 'ul' );

	// // Set menu items with submenus to aria-haspopup="true".
	// for ( var i = 0, len = subMenus.length; i < len; i++ ) {
	// 	subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
	// }

	// // Each time a menu link is focused or blurred, toggle focus.
	// for ( i = 0, len = links.length; i < len; i++ ) {
	// 	links[i].addEventListener( 'focus', toggleFocus, true );
	// 	links[i].addEventListener( 'blur', toggleFocus, true );
	// }

	// /**
	//  * Sets or removes .focus class on an element.
	//  */
	// function toggleFocus() {
	// 	var self = this;

	// 	// Move up through the ancestors of the current link until we hit .nav-menu.
	// 	while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

	// 		// On li elements toggle the class .focus.
	// 		if ( 'li' === self.tagName.toLowerCase() ) {
	// 			if ( -1 !== self.className.indexOf( 'focus' ) ) {
	// 				self.className = self.className.replace( ' focus', '' );
	// 			} else {
	// 				self.className += ' focus';
	// 			}
	// 		}

	// 		self = self.parentElement;
	// 	}
	// }
// } )();
