
// Detect IE, returns version of IE or false if browser is not Internet Explorer

function detectIE() {
  var ua = window.navigator.userAgent;
  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) { return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);}
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  var trident = ua.indexOf('Trident/');
  if (trident > 0) { var rv = ua.indexOf('rv:'); return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);}
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
  var edge = ua.indexOf('Edge/');
  if (edge > 0) { return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);}
  // other browser
  return false;
}

// Detect Mobile
isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPod/i);
	},
	iPad: function() {
		return navigator.userAgent.match(/iPad/);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	phones: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	},
	any: function() {
		return (isMobile.Android() || isMobile.iPad() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};


// Detectar si soporta svg
function svgasimg() {
	return document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1");
}

if (!svgasimg()){
  var e = document.getElementsByTagName("img");
  if (!e.length){
    e = document.getElementsByTagName("IMG");
  }
  for (var i=0, n=e.length; i<n; i++){
    var img = e[i],
        src = img.getAttribute("src");
    if (src.match(/svgz?$/)) {
      /* URL ends in svg or svgz */
      img.setAttribute("src",
             img.getAttribute("data-fallback"));
    }
  }
}
