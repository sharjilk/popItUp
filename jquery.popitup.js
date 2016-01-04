(function($){

  // Plugin function
  $.fn.popitup = function(options) {

    /* defaults */
    var defaults = {
      widthSet     :  '300',
      overlayColor :  "#000",
      autoClose    :  false,
      animation    :  null,
      colorChange  :  {
                        color      : null,
                        background : null
                      },
      chase        :  false,
      chaseSpeed   :  "500",
      onCloseModal :  function(){},
      onOpenModal  :  function(){}
    }

    var opts = $.extend(true, {}, defaults, options);
    
    /* validate options */
    var regExpWidth = /^[0-9]/;
    var regExpColor = /^[#][A-Fa-f0-9]/ /* only hexcode is required */

    $.each(opts, function validateOptions(key, val){

      /* widthSet */
      if( key === 'widthSet' ){
        if( val.match(regExpWidth) === null ){
          opts[key] = defaults[key];
        }
      }

      /* overlayColor */
      if( key === 'overlayColor' ){
        if( val.match(regExpColor ) === null ){
          opts[key] = defaults[key];
        }
      }

      /* autoClose */
      if( key === 'autoClose' ){
        if( val !== true ){
          opts[key] = defaults[key];
        }
      }

      /* colorChange */
      if( key === 'colorChange' ){
        if( val.color.match(regExpColor ) === null ){
          opts[key]['color'] = defaults[key]['color'];
        }
        if( val.background.match(regExpColor ) === null ){
          opts[key]['background'] = defaults[key]['background'];
        }
      }

      /* autoClose */
      if( key === 'chase' ){
        if( val !== true ){
          opts[key] = defaults[key];
        }
      }

    });

    /* open popup */
    $modal = this;
    $('body').append('<div class="popitup-overlay"></div>');
    $('.popitup-overlay').css("background",opts.overlayColor);

    $modal.css({
      "width"    :  opts.widthSet+'px',
      "position" :  "absolute",
      "display"  :  "block",
      "opacity"  :  "0",
      "z-index"  :  "99999",
    });
    $margin_left = $modal.outerWidth()/2;
    $margin_top  = $modal.outerHeight()/2;
    $modal.css({
      "margin-top"  : "-" + $margin_top + "px",
      "margin-left" : "-" + $margin_left + "px"
    });

    switch (opts.animation)
    {
      case 'slideDown': 
        $modal.css("top","0")
        .animate({top: ( ($(window).height() + $(window).scrollTop()) / 2 ) + "px", opacity: "1"}, 300);
        applyModalOffset();
        break;

      case 'slideUp':
        $modal.css("bottom","0")
        .animate({top: ( ($(window).height() + $(window).scrollTop()) / 2 ) + "px", opacity: "1"}, 300);
        applyModalOffset();
        break;

      default: 
        $modal.css({'top':'50%', 'opacity':'1'});
        applyModalOffset();
        break;
    }

    opts.onOpenModal();

    function applyModalOffset(){
      $modal.css({
        "left"   :  "50%",
        "bottom" :  "",
        "right"  :  ""
      });
    }

    /* AutoClose */
    if(opts.autoClose){

      $('.popitup-overlay').bind('click', function(){
        switch (opts.animation)
        {
          case 'slideDown': 
            $modal.animate({top: "0", opacity: "0", display: "none"}, 300);
            applyModalOffset();
            setTimeout(function(){
              $modal.css({'top':'','left':'','right':'','bottom':''});
            }, 300);
            break;

          case 'slideUp':
            $modal.animate({top: "100%", opacity: "0", display: "none"}, 300);
            applyModalOffset();
            setTimeout(function(){
              $modal.css({'top':'','left':'','right':'','bottom':''});
            }, 300);
            break;

          default: 
            $modal.css({'top':'','left':'','right':'','bottom':''})
            .hide();
            break;
        }

        setTimeout(function(){
          $('.popitup-overlay').remove();
        }, 300);
        opts.onCloseModal.call();

      });

    }
    
    /* popup follow while scroll */
    if(opts.chase){

      var lastScrollTop = 0;
      $(window).scroll(function(event){

        var st = $(this).scrollTop();
        if (st > lastScrollTop){
          /* to bottom */
           $modal.stop().animate({"marginTop": ($(window).scrollTop() + (-93)) + "px"}, +opts.chaseSpeed);
        } else {
          /* to top */
          $modal.stop().animate({"marginTop": ($(window).scrollTop() + (-93)) + "px"}, +opts.chaseSpeed);
        }
        lastScrollTop = st;

      });

    }

    /* Finding close button */
    $('*').each(function(){

      $varClose = $(this).hasClass('popitup-close');
      if($varClose){
        $(this).bind('click', function(){

          switch (opts.animation)
          {
            case 'slideDown': 
              $modal.animate({top: "0", opacity: "0", display: "none"}, 300);
              applyModalOffset();
              setTimeout(function(){
                $modal.css({'top':'','left':'','right':'','bottom':''});
              }, 300);
              break;

            case 'slideUp':
              $modal.animate({top: "100%", opacity: "0", display: "none"}, 300);
              applyModalOffset();
              setTimeout(function(){
                $modal.css({'top':'','left':'','right':'','bottom':''});
              }, 300);
              break;

            default: 
              $modal.css({'top':'','left':'','right':'','bottom':''})
              .hide();
              break;
          }

          setTimeout(function(){
            $('.popitup-overlay').remove();
          }, 300);
          
          opts.onCloseModal.call();

        });
      }

    });

    /* overlay color */
    if(opts.colorChange){
      $modal.css({
        "color": opts.colorChange.color,
        "background": opts.colorChange.background
      });
    }

    return $modal;
  };
  // End of Plugin function

}(jQuery));
