$(document).ready(function() {
  $('img').click(function() {
    var check = $(this).attr('count');
    console.log(check);
    if (check === "1") {
      var data = $(this).attr('data-alt-src');
      $(this).attr('src',data);
      $(this).attr('count','2');
    }
    else if (check === "2") {
      var data = $(this).attr('main-src');
      $(this).attr('src',data);
      $(this).attr('count','1');
    }
  });
})
