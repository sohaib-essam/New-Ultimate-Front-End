$(function () {
  "use strict";
  $(".toggler").on("click", function () {
    $(".page-content, .sidebar").toggleClass("no-sidebar")
  });
});