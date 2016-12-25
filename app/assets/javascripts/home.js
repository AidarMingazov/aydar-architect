$(document).ready(function() {
  $('#fullpage').fullpage({
    'anchors':['1', '2', '3', '4', '5'],
    'css3': true,
    'scrollOverflow': true,
    menu: '.myMenu',
    onLeave: function(index, nextIndex, direction){
      $('.myMenu').toggleClass('moveDown', index >= 1 && nextIndex > 1);
    },
    afterLoad: function(anchorLink, index){
      if (index == 3){
        $('.chart').easyPieChart({
          trackColor: '#6a7a7a',
          barColor:'#34c1c8',
          duration: 900, enabled: true,
          onStep: function(from, to, percent) {
            $('.percent').text(Math.round(percent));
          }
        });
      }
    }
  });
});


