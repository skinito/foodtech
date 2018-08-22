// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.

//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require jquery-ui
//= require jquery.slick
//= require moment
//= require bootstrap-datetimepicker
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


// NOTE: fullscreen hero intro
jQuery(document).ready(function($){
 // Defining a function to set size for #hero
	function fullscreen(){
		jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
	}

	fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();
    });

});



// NOTE: tabs
jQuery(document).ready(function() {
  jQuery('.box-menu a').on('click', function(e) {
    var currentAttrValue = jQuery(this).attr('href');

    // Show/Hide Tabs
    jQuery('.tab-content ' + currentAttrValue).slideDown(400).siblings().slideUp(400);

    // Change/remove current tab to active
    jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

    e.preventDefault();
  });
});


// NOTE: slider
$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    fade: true,
    dots: true,
    arrows: true
  });
});



// NOTE: datetimepicker
$(function () {
    $('#datetimepicker12').datetimepicker({
        inline: true,
        sideBySide: true
    });
});
