$(document).ready(function(){
  //Design icon interface logic..
  $('#first p.icon').click(function(){
    $(this).hide();
    $('p.paragraph').show();
  });
  $('p.paragraph').click(function()
{
  $(this).hide();
  $('p.icon').show();
});
