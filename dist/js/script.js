$(function(){"use strict";$(".toggler").on("click",function(){$(".page-content, .sidebar").toggleClass("no-sidebar")}),$(".toggle-sub-links").on("click",function(e){$(this).find(".icon").toggleClass("fa-caret-down fa-caret-right"),$(this).next(".sub-links").slideToggle()}),$(".maxmize").on("click",function(){$(this).toggleClass("full-screen"),$(this).hasClass("full-screen")?e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen():document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()});let e=document.documentElement;$(".toggle-settings").on("click",function(){$(this).find(".icon").toggleClass("fa-spin"),$(this).parent().toggleClass("hide-settings")});let s=[],t=($(".color-options li").each(function(){s.push($(this).data("color"))}),$(".color-options li").on("click",function(){$("body").removeClass(s.join(" ")).addClass($(this).data("color")),$(this).addClass("active").siblings().removeClass("active")}),[]);$(".font-options select option").each(function(){t.push($(this).val())}),$(".font-options select").on("change",function(){$("body").removeClass(t.join(" ")).addClass($(this).find("option:selected").val())})});