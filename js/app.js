$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
  
    return false;
  });

  $('.dropdown-menu a.dropdown-toggle').on('mouseover', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
  
    return false;
  });

/***
 * To enable dropdown on hover for parent 
 */
   
//   $(window).on("load resize", function() {
//     if (this.matchMedia("(min-width: 768px)").matches) {
//         $(".dropdown-parent").hover(
//         function() {
//           const $this = $(this);
//           $this.addClass("show");
//           $this.find($(".dropdown-toggle-parent")).attr("aria-expanded", "true");
//           $this.find(".dropdown-menu-parent").addClass("show");
//         },
//         function() {
//           const $this = $(this);
//           $this.removeClass("show");
//           $this.find($(".dropdown-toggle-parent")).attr("aria-expanded", "false");
//           $this.find(".dropdown-menu-parent").removeClass("show");
//         }
//       );
//     } 
//     else {
//         $(".dropdown-parent").off("mouseenter mouseleave");
//     }
//   });