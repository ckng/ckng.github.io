
(function($) {

	// Abba A/B Testing
  Abba('Draft: Action')
    .control()
    .variant('Text: Join Beta', function() {
      $('#action a').text("Join Beta");
    })
    .variant('Text: Notify Me', function() {
    	$('#action a').text("Notify Me");
    })
    .variant('Color: carrot', function() {
    	$('#action a').css({ 'background': '#e67e22', 'border-color': '#e67e22' });
    	$('#action a:hover').css({ 'background': '#d35400', 'border-color': '#d35400' });
    })
    .variant('Color: alizarin', function() {
    	$('#action a').css({ 'background': '#e74c3c', 'border-color': '#e74c3c' });
    	$('#action a:hover').css({ 'background': '#c0392b', 'border-color': '#c0392b' });
    })
    .variant('Color: amethyst', function() {
    	$('#action a').css({ 'background': '#9b59b6', 'border-color': '#9b59b6' });
    	$('#action a:hover').css({ 'background': '#8e44ad', 'border-color': '#8e44ad' });
    })
    .start();

  // On successful conversion
  $('#action a').click(function() {
  	Abba('Landing: Member CTA', {persist: true}).complete();
  	window.location = $(this).data('href');
  })


})(jQuery);
