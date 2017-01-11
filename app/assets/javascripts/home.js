$(document).ready(function() {
  $('#fullpage').fullpage({
    'anchors':['1', '2', '3', '4', '5', '6'],
    'css3': true,
    'scrollingSpeed': 900,
    'scrollOverflow': true,
    'lazyLoading': true,
    menu: '.myMenu',
    // 'fixedElements': '.footer1',
    // 'normalScrollElements': '.portfolio',
    onLeave: function(index, nextIndex, direction){
      $('.myMenu').toggleClass('moveDown', index >= 1 && nextIndex > 1);

      // easyPieChart init
      if (nextIndex == 3){
        setTimeout(function(){
          $('.chart').easyPieChart({
            trackColor: '#6a7a7a',
            barColor:'#34c1c8',
            duration: 900,
            animate: 2000,
            onStep: function(from, to, percent) {
              $(this.el).find('.percent').text(Math.round(percent));
            }
          });
        // easyPieChart init time
        }, 250);
      }
    },
    afterLoad: function(anchorLink, index){
      if (index == 4){
        // init Isotope
        var $grid = $('.grid').isotope({
          animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
          },
          itemSelector: '.grid-item',
          layoutMode: 'fitRows'
        });
        // filter functions
        var filterFns = {
          // show if number is greater than 50
          numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
          },
          // show if name ends with -ium
          ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
          }
        };
        // bind filter button click
        $('.filters-button-group').on( 'click', 'button', function() {
          var filterValue = $( this ).attr('data-filter');
          // use filterFn if matches value
          filterValue = filterFns[ filterValue ] || filterValue;
          $grid.isotope({ filter: filterValue });
        });
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
          var $buttonGroup = $( buttonGroup );
          $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
          });
        });
      }
    }
  });
});
