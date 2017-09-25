$(document).ready(function() {

  $(".overlay").hide();
  $(".menu-container").hide();
  $(".menu_text").hide();
  $(".about").hide();
  $(".portfolio").hide();
  $(".graphics").hide();
  $(".art").hide();
  $(".photo").hide();
  $(".resume").hide();
  $(".contact").hide();


  $(".menu").click(function(){
    $(".menu-container").fadeIn(200);
    $(".menu_text").fadeIn(200);
    $(".overlay").fadeIn(200);
  });

  $( function() {
    $(".menu_text").hover(function(){
      var $this = $(this);
      $this
        .data("prehovercolor", $this.css("color"))
        .css("color","grey");
    },
    function(){
      var $this = $(this);
      $this.css("color", $this.data("prehovercolor") );
    });
  });

  $("#close").click(function() {
    $(".overlay").fadeOut(300);
    $(".menu-container").fadeOut(200);
    $(".menu_text").fadeOut(200);
    $(".menu_text").css("color", "white");
    $(".contact").hide();
  });

  $("#about").click(function(){
    $(".overlay").fadeOut(200);
    $(".menu-container").fadeOut(200);
    $(".menu_text").fadeOut(200);
    $(".about").fadeIn(500);
    $(".portfolio").hide();
    $(".graphics").hide();
    $(".art").hide();
    $(".photo").hide();
    $(".resume").hide();
    $(".contact").hide();
    $(".navbar").show();
    $("svg").hide();

  });

  $("#navbar-text").click(function(){
    $(".overlay").hide();
    $(".menu-container").hide();
    $(".menu_text").hide();
    $(".about").hide();
    $(".portfolio").hide();
    $(".graphics").hide();
    $(".art").hide();
    $(".photo").hide();
    $(".resume").hide();
    $(".contact").hide();
    $(".navbar").show();
    $("svg").fadeIn(500);
  });

  $("#resume").click(function(){
    $(".overlay").fadeOut(200);
    $(".menu-container").fadeOut(200);
    $(".menu_text").fadeOut(200);
    $(".about").hide();
    $(".portfolio").hide();
    $(".graphics").hide();
    $(".art").hide();
    $(".photo").hide();
    $(".resume").fadeIn(1000);
    $(".contact").hide();
    $(".navbar").show();
    $("svg").hide()
  });

  $("#portfolio").click(function(){
    $(".overlay").fadeOut(200);
    $(".menu-container").fadeOut(200);
    $(".menu_text").fadeOut(200);
    $(".about").hide();
    $(".portfolio").fadeIn(1000);
    $(".graphics").hide();
    $(".art").hide();
    $(".photo").hide();
    $(".resume").hide();
    $(".contact").hide();
    $(".navbar").show();
    $("svg").hide()
  });
  $("#contact").click(function(){
    $(".overlay").show();
    $(".menu-container").show();
    $(".menu_text").css("color", "grey");
    $(".about").hide();
    $(".portfolio").hide();
    $(".graphics").hide();
    $(".art").hide();
    $(".photo").hide();
    $(".resume").hide();
    $(".contact_words").hide();
    $(".contact").fadeIn(500);
    $(".navbar").show();
    $("svg").show();
  });
  $("#facebook").click(function(){
    $("#email_words").hide();
    $("#insta_words").hide();
    $("#fb_words").fadeIn(500);
  })
  $("#email").click(function(){
    $("#fb_words").hide();
    $("#insta_words").hide();
    $("#email_words").fadeIn(500);
  })
  $("#instagram").click(function(){
    $("#fb_words").hide();
    $("#email_words").hide();
    $("#insta_words").fadeIn(500);
  })
  $("#close_2").click(function(){
    $(".contact").fadeOut(500);
    $(".menu_text").css("color", "white");
  });

  $(".overlay").click(function(){
    $(".contact").fadeOut(500);
    $(".menu_text").css("color", "white");
  });

  $("#graphics1").click(function(){
    $(".overlay").hide();
    $(".menu-container").hide();
    $(".menu_text").hide();
    $(".about").hide();
    $(".portfolio").hide();
    $(".graphics").fadeIn(500);
    $(".art").hide();
    $(".photo").hide();
    $(".resume").hide();
    $(".contact").hide();
    $(".navbar").show();
    $("svg").hide();
  });

  $("#art1").click(function(){
    $(".overlay").hide();
    $(".menu-container").hide();
    $(".menu_text").hide();
    $(".about").hide();
    $(".portfolio").hide();
    $(".graphics").hide();
    $(".art").fadeIn(500);
    $(".photo").hide();
    $(".resume").hide();
    $(".contact").hide();
    $(".navbar").show();
    $("svg").hide();
  });

  $("#photo1").click(function(){
    $(".overlay").hide();
    $(".menu-container").hide();
    $(".menu_text").hide();
    $(".about").hide();
    $(".portfolio").hide();
    $(".graphics").hide();
    $(".art").hide();
    $(".photo").fadeIn(500);
    $(document).scrollTop(70);
    $(".resume").hide();
    $(".contact").hide();
    $(".navbar").show();
    $("svg").hide();
  });

  $(function() {
    $(".gallery1").hover(function(){
        $(this).addClass("hovered");
    },
    function(){
        $(this).removeClass("hovered");
    });
  });

  $(function() {
    $(".gallery2").hover(function(){
        $(this).addClass("hovered");
    },
    function(){
        $(this).removeClass("hovered");
    });
  });

  });
