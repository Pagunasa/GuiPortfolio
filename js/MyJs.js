$(document).ready(function() {
  $('#MyLoader').hide();
  $('#MyNavbar').addClass("sticky-top");
  $('#MyNavbar').addClass("navbar-overlap-sticky");
});

$('#RememberMeowModal').on('hide.bs.modal', function(e) {
  var $v = $(e.delegateTarget).find('video');
  $v[0].pause(); 
});

$('#AICustomModal').on('hide.bs.modal', function(e) {
  var $v = $(e.delegateTarget).find('video');
  $v[0].pause(); 
});

$('#CardgeonModal').on('hide.bs.modal', function(e) {
  var $v = $(e.delegateTarget).find('video');
  $v[0].pause(); 
});

$('#NeerasModal').on('hide.bs.modal', function(e) {
  var $v = $(e.delegateTarget).find('video');
  $v[0].pause(); 
});