$(document).foundation();
$(document).on('click', '.manacor', function(){
  $('[name=dimoni] option').filter(function() {
      return ($(this).text() == 'Manacor'); //To select Blue
  }).prop('selected', true);
});
$(document).on('click', '.arta', function(){
  $('[name=dimoni] option').filter(function() {
      return ($(this).text() == 'Artà'); //To select Blue
  }).prop('selected', true);
});
$(document).on('click', '.santllorenc', function(){
  $('[name=dimoni] option').filter(function() {
      return ($(this).text() == 'Sant Llorenç des Cardassar'); //To select Blue
  }).prop('selected', true);
});
$(document).on('click', '.algaida', function(){
  $('[name=dimoni] option').filter(function() {
      return ($(this).text() == 'Algaida'); //To select Blue
  }).prop('selected', true);
});
