clean(document);

// Get IE or Edge browser version
var version = detectIE();
if (version <= 11 && version) {
  $('body').addClass('IE');
} else if (version > 11) {
  $('body').addClass('EDGE');
}


var w = $(window);
var wW = w.width();

var $scroll = $('.scroll');

var setScroll = function (){
  if (wW > 1024 && !isMobile.any()){ 
    $scroll.perfectScrollbar({'wheelPropagation':true});
  }
}

setScroll();
w.resize(setScroll);
