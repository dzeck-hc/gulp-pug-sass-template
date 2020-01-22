"use strict";

// Polyfills
// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // closest IE 11


(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})(); // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}
"use strict";

clean(document); // Get IE or Edge browser version

var version = detectIE();

if (version <= 11 && version) {
  $('body').addClass('IE');
} else if (version > 11) {
  $('body').addClass('EDGE');
}

var w = $(window);
var wW = w.width();
var $scroll = $('.scroll');

var setScroll = function setScroll() {
  if (wW > 1024 && !isMobile.any()) {
    $scroll.perfectScrollbar({
      'wheelPropagation': true
    });
  }
};

setScroll();
w.resize(setScroll);
"use strict";

(function () {
  // Form Styles
  var $input = $('input'),
      $checkbox = $('input[type="checkbox"]'),
      fill = function fill(t, l) {
    t.addClass('filled');
    l.addClass('filled');
  },
      clearFill = function clearFill(t, l) {
    t.removeClass('filled');
    l.removeClass('filled');
  };

  $input.blur(function (t, l) {
    var t = $(this),
        l = t.siblings('label');
    '' != this.value ? fill(t, l) : clearFill(t, l);
  });
  $checkbox.change(function () {
    this.checked ? this.addClass('checked') : this.removeClass('checked');
  });
})();
"use strict";

var $loader = $('.loader'),
    showLoader = function showLoader() {
  $loader.fadeIn().addClass('is-active');
},
    hideLoader = function hideLoader() {
  $loader.fadeOut(function () {
    $loader.removeClass('is-active').removeAttr("style");
    $('body').addClass('is-loaded');
  });
};

showLoader();
$(document).ready(function () {
  $('body').imagesLoaded(function () {
    setTimeout(hideLoader, 2000);
  });
});
"use strict";

(function () {
  var $body = $('body'),
      $modal = $('.modalBox'),
      $navigation = $('.nav-panel, .wrapper '),
      //Content
  $bases = $('.bases'),
      $basesTarget = $('.bases-target'),
      $leave = $('.leave'),
      $save = $('.save'),
      $info = $('.info'),
      $login = $('.login'),
      $infoSlider,
      //Triggers
  $showBases = $('.link-bases'),
      $showLeaveAlert = $('.nav-sesion-logout'),
      $showSaveAlert = $('.btn-save'),
      $loginBtn = $('.login-user'),
      $loginFB = $('#btnLogin'),
      $loginNavBtn = $('.nav-sesion-login'),
      $showInfoTicket = $(".btn-link-help"),
      $scroll = $('.scroll'),
      terms = function () {
    var $basesURL = termsConditions;
    $.get($basesURL, function (data) {
      var $termsData = data;

      var _content = $basesTarget.find('p');

      if (!_content.length) {
        $basesTarget.append($termsData).perfectScrollbar('update');
      } else {
        $scroll.perfectScrollbar('update');
      }
    });
  }(),
      //Exit
  $closeM = $('.btn-exit-modal, .btn-modal-stay, .btn-modal-edit'),
      showModal = function showModal(target) {
    var _target = target;
    $modal.addClass('open');

    _target.addClass('show');

    $body.addClass('modal-is-open');
    setTimeout(function () {
      $body.addClass('no-scroll');
    }, 450);
  },
      quitModal = function quitModal() {
    $modal.removeClass('open').find('.show').removeClass('show');
    $body.removeClass('no-scroll modal-is-open');
  }; //Click Events


  if (wW < 800 || isMobile.any()) {
    $infoSlider = new Swiper(".info-content", {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    }, function () {
      this.addClass("mobile-slider");
    });
  }

  $showBases.on('click', function (e) {
    e.preventDefault();
    showModal($bases);
  });
  $loginBtn.on('click', function (e) {
    $navigation.removeClass('nav-is-open');
    var element = $(this);

    if (element.attr("href") === "javascript:") {
      showModal($login);
    }
  });
  $loginFB.on('click', function () {
    showLoader();
  });
  $loginNavBtn.on('click', function (e) {
    e.preventDefault();
    $navigation.toggleClass('nav-is-open');
    showModal($login);
  });
  $showSaveAlert.on('click', function (e) {
    e.preventDefault();
    showModal($save);
  });
  $showLeaveAlert.on('click', function (e) {
    e.preventDefault();
    $navigation.toggleClass('nav-is-open');
    showModal($leave);
  });
  $showInfoTicket.on("click", function (e) {
    e.preventDefault();
    showModal($info);
    wW < 800 || isMobile.any() ? $infoSlider.update() : '';
  });
  $closeM.on('click', function (e) {
    e.preventDefault();
    quitModal();
  });
})();
"use strict";

(function () {
  var $navigation = $('.nav-panel, .wrapper '),
      $navBtn = $('.nav-icon'),
      $secondNav = $('.menu-panel'),
      $closeSecondNav = $('.menu-panel-close'),
      $secondTrigger = $('.menu');
  $navBtn.on('click', function () {
    $navigation.toggleClass('nav-is-open');
  });
  $closeSecondNav.on('click', function () {
    $secondNav.removeClass('menu-is-open');
  });
  $secondTrigger.on('click', function () {
    $secondNav.addClass('menu-is-open');
  });
})();