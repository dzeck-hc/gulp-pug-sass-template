(function () {
	var $body 			= $('body'),
      $modal 			= $('.modalBox'),
      $navigation   = $('.nav-panel, .wrapper '),

			//Content
			$bases			= $('.bases'),
			$basesTarget= $('.bases-target'),

			$leave 			= $('.leave'),
			$save 			= $('.save'),
      $info 			= $('.info'),
      $login      = $('.login'),
      $infoSlider,


			//Triggers
			$showBases	= $('.link-bases'),
			$showLeaveAlert	= $('.nav-sesion-logout'),
      $showSaveAlert	= $('.btn-save'),
      $loginBtn       = $('.login-user'),
      $loginFB        = $('#btnLogin'),
      $loginNavBtn    = $('.nav-sesion-login'),
			$showInfoTicket = $(".btn-link-help"),

			$scroll			= $('.scroll'),

			terms				= function (){
                      var $basesURL = termsConditions;

											$.get($basesURL, function (data){
												let $termsData = data;
												let _content = $basesTarget.find('p');
												if (!_content.length) {
													$basesTarget.append($termsData)
													.perfectScrollbar('update');
												} else {
													$scroll.perfectScrollbar('update');
												}
											});
										}(),
			//Exit
      $closeM			= $('.btn-exit-modal, .btn-modal-stay, .btn-modal-edit'),

			showModal = function (target) {
				let _target = target;
				$modal.addClass('open');
				_target.addClass('show');
				$body.addClass('modal-is-open');
				setTimeout(function () {
					$body.addClass('no-scroll');
				}, 450);
			},

			quitModal = function () {
				$modal.removeClass('open').find('.show').removeClass('show');
				$body.removeClass('no-scroll modal-is-open');
			};

	
  //Click Events
  if (wW < 800 || isMobile.any()) {
    $infoSlider = new Swiper(".info-content",{
                       pagination: {
                         el: '.swiper-pagination',
                         type: 'bullets',
                         clickable: true
                       }
                     },
                     function() {
                       this.addClass("mobile-slider");
                     });
   }

	$showBases.on('click', function(e){
		e.preventDefault();
		showModal($bases);
  });

  $loginBtn.on('click', function(e){
    $navigation.removeClass('nav-is-open');
    var element = $(this);
    if (element.attr("href") === "javascript:") {
      showModal($login)
    }
  });

  $loginFB.on('click', function(){
    showLoader();
  });

  $loginNavBtn.on('click', function(e){
    e.preventDefault();
    $navigation.toggleClass('nav-is-open');
    showModal($login);
  });

  $showSaveAlert.on('click', function(e){
    e.preventDefault();
    showModal($save);
  });

  $showLeaveAlert.on('click', function(e){
    e.preventDefault();
    $navigation.toggleClass('nav-is-open');
    showModal($leave);
  });

  $showInfoTicket.on("click", function(e) {
    e.preventDefault();
    showModal($info);
    (wW < 800 || isMobile.any()) ?
      $infoSlider.update() : '';
   });

	$closeM.on('click', function(e){
		e.preventDefault();
    quitModal();
	});

})();
