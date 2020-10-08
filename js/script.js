$(document).ready(function(){
  //Design icon interface logic..
  $('#first p.icon').click(function(){
    $(this).hide();
    $('p.paragraph').show();
  });
  $('p.paragraph').click(function(){
  $(this).hide();
  $('p.icon').show();
});
//development icon interface
$('#second p.dev').click(function(){
  $(this).hide();
  $('p.para').show();
});
$('p.para').click(function(){
$(this).hide();
$('p.dev').show();
//product icon dev_icon
$('#second p.product').click(function(){
  $(this).hide();
  $('p.parag').show();
});
$('p.parag').click(function(){
$(this).hide();
$('p.product').show();
});
