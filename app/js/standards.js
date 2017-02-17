/* global window:false */
/* global document:false */

// Namespace
var brei = brei || {};

(function ($, Modernizr, window, Foundation) {

	'use strict';

	brei.standards = {

		// Cached selectors
		elem: {},

		// Initialize
		init: function () {

			this.bindUIEvents();

			$(document).foundation();

		},

		// UI Events
		bindUIEvents: function () {

			// hide #back-top first
			$('#back-top').hide();

			// fade in #back-top
			$(function () {
			  $(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
				  $('#back-top').fadeIn();
				} else {
				  $('#back-top').fadeOut();
				}
			  });

			  // scroll body to 0px on click
			  $('#back-top .fi-arrow-up').click(function () {
				$('body,html').animate({
				  scrollTop: 0
				}, 800);
				return false;
			  });
			});

		}

	};

}(window.jQuery, window.Modernizr, window, window.Foundation));

// On dom ready...
window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	brei.standards.init();

}, false);
