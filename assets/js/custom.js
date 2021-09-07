/* 
   Sticky Nav
   ========================================================================== */

window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= 40) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//  Pre Loader TImeOut
setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 700);

// Contact Page Validation

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            if (form.checkValidity() === true) {
              alert("Email has been Sent");
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// jQuery counterUp
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 1000,
});

//Active liks
$(document).on("click", "ul li a", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

/* 
		=================================================================
		01 - Event Slider JS
		=================================================================	
		*/

$(".event-slider").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 10,
  touchDrag: true,
  mouseDrag: true,
  nav: false,
  dots: true,
  autoplaySpeed: 1200,
  navText: [
    "<i class='fal fa-angle-left'></i>",
    "<i class='fal fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 2,
    },
  },
});

/* 
		=================================================================
		02 - Testimonial Slider JS
		=================================================================	
		*/

$(".testimonial-slider").owlCarousel({
  autoplay: true,
  loop: true,
  touchDrag: true,
  mouseDrag: true,
  items: 1,
  nav: false,
  dots: true,
  autoplayTimeout: 6000,
  autoplaySpeed: 3000,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

/* 
		=================================================================
		03 - Blog Slider JS
		=================================================================	
		*/

$(".popular-casess").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 20,
  touchDrag: true,
  mouseDrag: true,
  items: 4,
  nav: false,
  dots: false,
  autoplayTimeout: 6000,
  autoplaySpeed: 1200,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },

    1200: {
      items: 4,
    },
  },
});

/* 
		=================================================================
		04 - Youtube Popup JS
		=================================================================	
		*/

$(".popup-youtube").magnificPopup({
  disableOn: 50,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
});

/* Search
	-------------------------------------------------------*/
var $searchWrap = $(".search-wrap");
var $navSearch = $(".nav-search");
var $searchClose = $("#search-close");

$(".search-trigger").on("click", function (e) {
  e.preventDefault();
  $searchWrap.animate({ opacity: "toggle" }, 500);
  $navSearch.add($searchClose).addClass("open");
});

$(".search-close").on("click", function (e) {
  e.preventDefault();
  $searchWrap.animate({ opacity: "toggle" }, 500);
  $navSearch.add($searchClose).removeClass("open");
});

function closeSearch() {
  $searchWrap.fadeOut(200);
  $navSearch.add($searchClose).removeClass("open");
}

$(document.body).on("click", function (e) {
  closeSearch();
});

$(".search-trigger, .main-search-input").on("click", function (e) {
  e.stopPropagation();
});

// Sidenav

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(".smooth-goto").on("click", function () {
  $("html, body").animate({ scrollTop: $(this.hash).offset().top - 130 });
  return false;
});

/* 
		=================================================================
		04 - Price Range Popup JS
		=================================================================	
		*/
$(document).ready(function () {
  const minus = $(".quantity__minus");
  const plus = $(".quantity__plus");
  const input = $(".quantity__input");
  minus.click(function (e) {
    e.preventDefault();
    var value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });

  plus.click(function (e) {
    e.preventDefault();
    var value = input.val();
    value++;
    input.val(value);
  });
});
