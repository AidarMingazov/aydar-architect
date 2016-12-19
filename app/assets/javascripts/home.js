$(document).ready(function() {
  if ( $('.fullpage-home').length ) {
    $.fn.fullpage({
      anchors:['1', '2', '3', '4'],
      scrollOverflow: true,
      css3: true,
      menu: '.myMenu',
      afterRender: function(){
        // $('.menu').hide();
        $('.myMenu').addClass('firstPage')
      },
      afterLoad: function(anchor, index){
        if(index == 1){
           // $('.menu').fadeOut("fast");
          $('.myMenu').addClass('firstPage')
          $('.myMenu').removeClass('anotherPage')
        }else{
          // $('.menu').fadeIn("fast");
          $('.myMenu').removeClass('firstPage')
          $('.myMenu').addClass('anotherPage')
        }
      },

    });
  }
});
