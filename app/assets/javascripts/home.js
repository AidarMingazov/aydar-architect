$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:['1', '2', '3', '4', '5', '6', '7'],
    css3: true,
    scrollingSpeed: 900,
    scrollOverflow: true,
    offsetSections: true,
    lazyLoading: true,
    menu: '.myMenu',
    // 'fixedElements': '.myfooter',
    // 'normalScrollElements': '.portfolio',
    onLeave: function(index, nextIndex, direction){
      $('.myMenu').toggleClass('moveDown', index >= 1 && nextIndex > 1);
      
      // easyPieChart init
      if (nextIndex == 3){
        setTimeout(function(){
          $('.chart').easyPieChart({
            trackColor: '#e2e4e3',
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

      //incrementalNumber
      if (nextIndex == 6){
        $('.spincrement').spincrement({
          from: 0,
          duration: 1500,
          easing: 'easeInCirc'
        });
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
          }
        };
        // bind filter button click
        $('.filters-button-group').on( 'click', 'button', function() {
          var filterValue = $( this ).attr('data-filter');
          // use filterFn if matches value
          filterValue = filterFns[ filterValue ] || filterValue;
          $grid.isotope({ filter: filterValue });

          // for footer
          $('.portfolio').css({"height":($(window).height()+"px")});

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


      // // CounterUp
      // if (index == 6){
      //   $(document).ready(function( $ ) {
      //     if($("span.count").length > 0){ 
      //       $('span.count').counterUp({
      //         delay: 10, // the delay time in ms
      //         time: 1500 // the speed time in ms
      //       });
      //     }
      //   });
      // }

    }
  });
});
