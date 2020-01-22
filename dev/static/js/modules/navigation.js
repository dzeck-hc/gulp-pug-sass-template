(function() {
  var $navigation   = $('.nav-panel, .wrapper '),
      $navBtn       = $('.nav-icon'),

      $secondNav    = $('.menu-panel'),
      $closeSecondNav = $('.menu-panel-close'),
      $secondTrigger = $('.menu');
    
  $navBtn.on('click', function(){
    $navigation.toggleClass('nav-is-open');
  });

  $closeSecondNav.on('click', function(){
    $secondNav.removeClass('menu-is-open');
  });

  $secondTrigger.on('click', function(){
    $secondNav.addClass('menu-is-open');

  });
})()