$(function () {
  "use strict";
  $(".toggler").on("click", function () {
    $(".page-content, .sidebar").toggleClass("no-sidebar")
  });

  $(".toggle-sub-links").on('click', function (e) {
      $(this).find(".icon").toggleClass("fa-caret-down fa-caret-right");
      $(this).next(".sub-links").slideToggle();
  })
});