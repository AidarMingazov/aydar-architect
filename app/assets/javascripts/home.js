$(document).ready(function() {
  $('#fullpage').fullpage({
    'anchors':['1', '2', '3', '4', '5'],
    'css3': true,
    'scrollOverflow': true,
    menu: '.myMenu',
    'onLeave': function(index, nextIndex, direction){
      $('.myMenu').toggleClass('moveDown', index >= 1 && nextIndex > 1);
    },

    afterLoad: function(anchorLink, index){
      if (index == 3){
        $('.chart').easyPieChart({
          animate: 700
          // easing: 'easeOutBounce',
          // animate: 700,
          // onStep: function(from, to, percent) {
          //     $(this.el).find('.percent').text(Math.round(percent));
          // }
        });

        // $('.chart').easyPieChart({
        //   easing: 'easeOutBounce',
        //   onStep: function(from, to, percent) {
        //     $(this.el).find('.percent').text(Math.round(percent));
        //   }
        // });

      }
    }
  });
});
