//
//= require scrolloverflow.min
//= require jquery
//= require jquery_ujs
//= require foundation
//= require jquery-ui
//= require_tree .

$(function(){ 
  $(document).foundation(); 
  autosize($('textarea'));


  $('textarea').each(function(){
    autosize(this);
  }).on('autosize:resized', function(){
    $('.contact').css({"height":($(window).height()+"px")});
  });


  // Portfolio isotope filter
  $(window).load(function() {
      var $container = $('.portfolio-items');
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });
      $('.cat a').click(function() {
          $('.cat .active').removeClass('active');
          $(this).addClass('active');
          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          return false;
      });
  });
});


