
$(document).ready(function () {
  var service = $(".service_slider");
  if (service.length) {
    service.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: false,
      autoplayTimeout: 6000,
      nav: true,
      smartSpeed: 4000,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      responsive: { 0: { nav: false }, 768: { nav: true }, 992: { nav: true } },
    });
  }
})
$(document).ready(function () {
  var service = $(".service_slider1");
  if (service.length) {
    service.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: false,
      autoplayTimeout: 6000,
      nav: true,
      smartSpeed: 4000,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      responsive: { 0: { nav: false }, 768: { nav: true }, 992: { nav: true } },
    });
  }
})

jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
});
(function ($) {
  'use strict';

  jQuery(document).on('ready', function () {

    $('a.page-scroll').on('click', function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
      }, 1500);
      e.preventDefault();
    });

  });


})(jQuery);
jQuery("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,

  animateOut: 'fadeOut',
  animateIn: 'fadeIn',

  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 4000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }
  }
});

var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: (window.innerWidth / 2),
  endY: (window.innerHeight / 2),
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector('.cursor-dot'),
  $outline: document.querySelector('.cursor-dot-outline'),
  
  init: function() {
      // Set up element sizes
      this.dotSize = this.$dot.offsetWidth;
      this.outlineSize = this.$outline.offsetWidth;
      
      this.setupEventListeners();
      this.animateDotOutline();
  },
  
//     updateCursor: function(e) {
//         var self = this;
      
//         console.log(e)
      
//         // Show the cursor
//         self.cursorVisible = true;
//         self.toggleCursorVisibility();

//         // Position the dot
//         self.endX = e.pageX;
//         self.endY = e.pageY;
//         self.$dot.style.top = self.endY + 'px';
//         self.$dot.style.left = self.endX + 'px';
//     },
  
  setupEventListeners: function() {
      var self = this;
      
      // Anchor hovering
      document.querySelectorAll('a').forEach(function(el) {
          el.addEventListener('mouseover', function() {
              self.cursorEnlarged = true;
              self.toggleCursorSize();
          });
          el.addEventListener('mouseout', function() {
              self.cursorEnlarged = false;
              self.toggleCursorSize();
          });
      });
      
      // Click events
      document.addEventListener('mousedown', function() {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
      });
      document.addEventListener('mouseup', function() {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
      });


      document.addEventListener('mousemove', function(e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + 'px';
          self.$dot.style.left = self.endX + 'px';
      });
      
      // Hide/show cursor
      document.addEventListener('mouseenter', function(e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
      });
      
      document.addEventListener('mouseleave', function(e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
      });
  },
  
  animateDotOutline: function() {
      var self = this;
      
      self._x += (self.endX - self._x) / self.delay;
      self._y += (self.endY - self._y) / self.delay;
      self.$outline.style.top = self._y + 'px';
      self.$outline.style.left = self._x + 'px';
      
      requestAnimationFrame(this.animateDotOutline.bind(self));
  },
  
  toggleCursorSize: function() {
      var self = this;
      
      if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
      }
  },
  
  toggleCursorVisibility: function() {
      var self = this;
      
      if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
      } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
      }
  }
}

cursor.init();