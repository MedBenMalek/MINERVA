(function($) {
	'use strict';
	/*
	Variable
	=========================== */
	var $window_w = $(window).width(),
        $body = $("body"),
        $nav = $("nav");

    /*
	Features
	=========================== */
    $("ul.feature-two").each(function(){
        var $this = $(this),
            $window_w = $(window).width(),
            $gHeight = $this.height();

        $this.append("<span class='line'></span>");
        $("li", this).last().css("margin-bottom","-19px");
    });
    
    /*
	Gallery
	=========================== */
    $(".wrap-gallery").each(function(){
        var $this = $(this);
        $(".img-wrapper", this).append("<span class='bg-gallery'></span>");
        $this.on("mouseenter", function() {
            $("a.hover", this).stop().fadeIn({queue:false});
            $(".bg-gallery", this).stop().fadeIn({queue:false});
            return false;
        });
        $this.on("mouseleave", function() {
            $("a.hover", this).stop().fadeOut({queue:false});
            $(".bg-gallery", this).stop().fadeOut({queue:false});
            return false;
        });
    });
    
    /*
	Animated Scroll
	=========================== */   
    $(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0){
			$("nav.navbar").addClass("nav-fixed");
            $(".scroll.top").fadeIn(1000);
            $(".submenu").slideUp(1000);
			return false;
		} else {
			$("nav.navbar").removeClass("nav-fixed");
            $(".scroll.top").fadeOut(1000);
            $(".submenu").slideDown(1000);
			return false;
		}
	});
    
    /*
	Blog Current
	=========================== */
    function blog_current(){
        $(".post.current").each(function(){
            var $window_w = $(window).width();
            if( $window_w < 981 && $window_w > 641 ){
                $(".img-post", this).addClass("col-sm-push-6");
                $(".content-post", this).addClass("col-sm-pull-6");
            }else{
                $(".img-post", this).removeClass("col-sm-push-6");
                $(".content-post", this).removeClass("col-sm-pull-6");
            }
        });
    }
    $(window).on("load", blog_current);
    $(window).on("resize", blog_current);
    
})(jQuery);

$(function() {
  var chatWidget = (".chat-widget-container"),
    chatBox = $(".chat-box-container");

  $(".chat-box-content").hide();
  $(".message-box").show();
  $(".messages").show();


  /* button */

  $( "#buttonCon" ).click(function() {
    $( "#buttonCon" ).addClass( "onclic", 250, validate);
    $(".chat-box-content").css( "z-index", "3" );
    setTimeout(function() {
      $(".buttonCon").hide();
      $(".message-box").show();
      $(".messages").show();
    }, 3000);

  });

  function validate() {
    setTimeout(function() {
      $( "#buttonCon" ).removeClass( "onclic" );
      $( "#buttonCon" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
  function callback() {
    setTimeout(function() {
      $( "#buttonCon" ).removeClass( "validate" );
    }, 1250 );
  }

  $(chatWidget).click(function(e){

    e.preventDefault();

    $(chatBox).toggleClass("show");
    $(".chat-box-content").toggle();
    $(chatWidget).toggleClass("open");
  })

  $(".messages").addClass("thin");
  $(".messages").mouseover(function(){
    $(this).removeClass("thin");
  });
  $(".messages").mouseout(function(){
    $(this).addClass("thin");
  });
  $(".messages").scroll(function () {
    $(".messages").addClass("thin");
  });


});
