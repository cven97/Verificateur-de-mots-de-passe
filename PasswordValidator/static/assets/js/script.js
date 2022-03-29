$(window).on("load", function() {
    "use strict";

    //  ============= SIGNIN CONTROL FUNCTION =========

    $('.sign-control li').on("click", function(){
        var tab_id = $(this).attr('data-tab');
        $('.sign-control li').removeClass('current');
        $('.sign_in_sec').removeClass('current');
        $(this).addClass('current animated fadeIn');
        $("#"+tab_id).addClass('current animated fadeIn');
        return false;
    });

    //  ============= SIGNIN TAB FUNCTIONALITY =========

    $('.signup-tab ul li').on("click", function(){
        var tab_id = $(this).attr('data-tab');
        $('.signup-tab ul li').removeClass('current');
        $('.dff-tab').removeClass('current');
        $(this).addClass('current animated fadeIn');
        $("#"+tab_id).addClass('current animated fadeIn');
        return false;
    });

    //  ============= SIGNIN SWITCH TAB FUNCTIONALITY =========

    $('.tab-feed ul li').on("click", function(){
        var tab_id = $(this).attr('data-tab');
        $('.tab-feed ul li').removeClass('active');
        $('.product-feed-tab').removeClass('current');
        $(this).addClass('active animated fadeIn');
        $("#"+tab_id).addClass('current animated fadeIn');
        return false;
    });

  
    // ============== Menu Script =============

    $(".menu-btn > a").on("click", function(){
        $("nav").toggleClass("active");
        return false;
    });


    //  ============ Notifications Open =============

    $(".not-box-open").on("click", function(){$("#message").hide();
        $(".user-account-settingss").hide();
        $("#friend").hide();
        $(this).next("#notification").toggle();
    });

    $(".not-box-openf").on("click", function(){
        $("#message").hide();
        $(".user-account-settingss").hide();
        $("#notification").hide();
        $(this).next("#friend").toggle();
    });

     //  ============ Messages Open =============

    $(".not-box-openm").on("click", function(){$("#notification").hide();
        $(".user-account-settingss").hide();
        $("#friend").hide();
        $(this).next("#message").toggle();
    });


    // ============= User Account Setting Open ===========
	
	$( ".user-info" ).click(function() {
  $( ".user-account-settingss" ).slideToggle( "fast");
	  $("#message").not($(this).next("#message")).slideUp();
	  $("#friend").not($(this).next("#friend")).slideUp();
	  $("#notification").not($(this).next("#notification")).slideUp();
    // Animation complete.
  });

  $( "main, section" ).click(function() {
        $("#message").not($(this).next("#message")).slideUp();
        $("#friend").not($(this).next("#friend")).slideUp();
        $(".user-account-settingss").not($(this).next(".user-account-settingss")).slideUp();
        $("#notification").not($(this).next("#notification")).slideUp();
      // Animation complete.
    });
});


