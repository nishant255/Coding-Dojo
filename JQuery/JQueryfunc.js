$(document).ready(function() {

  $('.nclick button').click(function() {
    $('.nclick h1').text('Good Job! You Clicked it!');
  })

  $('.nhide .bhide').click(function() {
    $('.nhide h1').hide();
  })

  $('.nhide .bshow').click(function() {
    $('.nhide h1').show();
  })

  $('.nslide .bup').click(function() {
    $('.nslide h1').slideUp();
  })

  $('.nslide .bdown').click(function() {
    $('.nslide h1').slideDown();
  })

  $('.nslidetoggle .btoggle').click(function() {
    $('.nslidetoggle h1').slideToggle();
  })

  $('.nfade .bin').click(function() {
    $('.nfade h1').fadeIn();
  })

  $('.nfade .bout').click(function() {
    $('.nfade h1').fadeOut();
  })

  $('.naddclass .bclass').click(function() {
    $('.naddclass h1').last().addClass('newclass');
  })

  $('.nbefnaft .bbefore').click(function() {
    $('.nbefnaft h1').before("before h1");
  })

  $('.nbefnaft .bafter').click(function() {
    $('.nbefnaft h1').after("after h1");
  })

  $(".nappend .bappend").click(function() {
    $(".nappend h1").append("Hello");
  })

  $('.nhtml .bhtml').click(function() {
    $('.nhtml h1').html("<h1 class = 'hclass'>HTML Test</h1>");
  })

  $('.nattr .iattr').change(function (){
    $('.nattr h1').text("You checked it");
  })

  function displayVals(){
    var multipleValues = $('.nval .sval').val() || [];
    $('.nval p').html(" <b>Selected:</b> " + multipleValues.join( ", " ));
  }
  $( ".nval select" ).change( displayVals );
  displayVals();
});
