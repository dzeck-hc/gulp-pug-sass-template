var $loader = $('.loader'),

  showLoader = function() {
    $loader.fadeIn().addClass('is-active');
  },

  hideLoader = function() {
    $loader.fadeOut(function(){
      $loader.removeClass('is-active').removeAttr("style");
      $('body').addClass('is-loaded');
    });
  };

showLoader();

$(document).ready(function() {
  $('body').imagesLoaded( function() {
    setTimeout(hideLoader, 2000);
  });
 });
