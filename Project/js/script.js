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
});