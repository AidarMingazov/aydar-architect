$(document).ready(function() {
  $('#fullpage').fullpage({
    'anchors':['1', '2', '3', '4', '5'],
    'css3': true,
    'scrollOverflow': true,
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['1', '2', '3', '4', '5'],
    menu: '.myMenu',
    'onLeave': function(index, nextIndex, direction){
      $('.myMenu').toggleClass('moveDown', index >= 1 && nextIndex > 1);
    }
  });
});
