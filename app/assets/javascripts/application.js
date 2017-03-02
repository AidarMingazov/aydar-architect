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
});


