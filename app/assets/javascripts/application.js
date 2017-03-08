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

//smooth scrolling
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

//chevron animation function
$(document).ready(function () {
    $(".glyph").hover(
        function () {
            $(this).animate({
                fontSize: "40px"
            }, 200);
        },
        function () {
            $(this).animate({
                fontSize: "35px"
            }, 200);
        }
    );

    $(document).scroll(function() {
        var yPos = -(parseInt(window.pageYOffset / 2));
        console.log(yPos);
        $(".jumbotron").css("background-position", "50%" + yPos + "px");
    });
});

//navbar transparent to filled on scroll
var animatedScroll = false;

$(document).scroll(function () {
    if($(window).scrollTop() > 10 && !animatedScroll){

      animatedScroll = true;

      $(".topbar").stop().animate({opacity: "1"}, 100);
    }
    else if ($(window).scrollTop() < 10 && animatedScroll){

      animatedScroll = false;

      $(".topbar").stop().animate({opacity: "0"}, 400);
    }

});
