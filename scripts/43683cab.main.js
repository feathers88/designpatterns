"use strict";$(".pl-toggle-code").on("click",function(){$(this).parent().next(".pl-preview+pre").toggle(250),$(this).toggleClass("active")});var autoCollapsed=!1;$(".nav-collapse").on("click",function(){autoCollapsed=!1,$("body").toggleClass("pl-collapsed-nav")});var checkNav=function(){var a=$("body").hasClass("pl-collapsed-nav"),b=$(this).width();767>=b&&!a?(autoCollapsed=!0,$("body").addClass("pl-collapsed-nav")):b>767&&autoCollapsed&&$("body").removeClass("pl-collapsed-nav")};$(window).on("resize",checkNav),$(document).on("ready",checkNav),$("body").scrollspy({target:".pl-sidebar > .active",offset:125}),$(":input").inputmask(),$(".select2").select2({minimumResultsForSearch:4}),$('[data-toggle="tooltip"]').tooltip({container:"body",delay:{show:200,hide:0}}),$(".datepicker").datepicker({numberOfMonths:1,showOtherMonths:!0}),$('input[type="checkbox"][indeterminate]').each(function(){this.indeterminate=!0});