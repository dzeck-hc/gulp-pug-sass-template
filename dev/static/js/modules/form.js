(function () {

	// Form Styles
	var $input 	= $('input'),
      $checkbox		= $('input[type="checkbox"]'),

			fill 		= function(t, l){
									t.addClass('filled');
									l.addClass('filled');
								},

			clearFill= function(t, l){
									t.removeClass('filled');
									l.removeClass('filled');
								};

	$input.blur(function(t, l) {
		var t = $(this),
				l = t.siblings('label');

  	'' != this.value ? fill(t, l) : clearFill(t, l);
  });
  
  $checkbox.change(function(){
    (this.checked) ? this.addClass('checked') : this.removeClass('checked');
  });

})();
