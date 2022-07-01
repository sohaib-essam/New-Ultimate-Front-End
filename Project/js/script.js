$(function () {

  "use strict";

  // Toggle [Sidebar Apperance] & [Content Width]
  $(".toggler").on("click", function () {
    $(".page-content, .sidebar").toggleClass("no-sidebar")
  });

  //--------------------------------------------------------------------------------------

  // Toggle Sublinks In Sidebar
  $(".toggle-sub-links").on('click', function (e) {
      $(this).find(".icon").toggleClass("fa-caret-down fa-caret-right");
      $(this).next(".sub-links").slideToggle();
  })

  //--------------------------------------------------------------------------------------

  // Toggle FullScreen View
  $(".maxmize").on("click", function () {
    $(this).toggleClass("full-screen");
    if ($(this).hasClass("full-screen")) {
      openFullscreen()
    } else {
      closeFullscreen()
    }
  });
  let elem = document.documentElement;
  /* View in fullscreen */
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

  //--------------------------------------------------------------------------------------

  // Toggle Settings box
  $(".toggle-settings").on("click", function () {
    $(this).find(".icon").toggleClass("fa-spin")
    $(this).parent().toggleClass("hide-settings")
  })

  //--------------------------------------------------------------------------------------

  // Switch Colors
  let themesArray = [];
  $(".color-options li").each(function () {
    themesArray.push($(this).data("color"));
  });
  $(".color-options li").on("click", function () {
    $('body').removeClass(themesArray.join(" ")).addClass($(this).data('color'));
    $(this).addClass("active").siblings().removeClass("active");
  });

  //--------------------------------------------------------------------------------------

  // Switch Fonts
  let fontsArray = [];
  $(".font-options select option").each(function () {
    fontsArray.push($(this).val());
  });
  $(".font-options select").on("change", function () {
    $('body').removeClass(fontsArray.join(" ")).addClass($(this).find("option:selected").val());
  })

});