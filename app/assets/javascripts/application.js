// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.820017, lng: -69.663975},
    zoom: 12,
    scrollwheel:false
  });
}

//smooth scrolling
$(document).on('click', 'a.smooth', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 40
    }, 500);
});

//navbar transparent to filled on scroll
var animatedScroll = false;

$(document).scroll(function () {
    if($(window).scrollTop() > 100 && !animatedScroll){

      animatedScroll = true;

      $(".topbar").stop().animate({opacity: "1"}, 100);
    }
    else if ($(window).scrollTop() < 100 && animatedScroll){

      animatedScroll = false;

      $(".topbar").stop().animate({opacity: "0"}, 400);
    }

});
