$(document).ready(function() {

	/* For the placeholder images */

	$('#example_1 input.tb-name').phImage();
	
	$('#example_2 .fields input, #example_2 .fields textarea').phImage();
	
	$('#example_3 .fields input, #example_3 .fields textarea').phImage({
		remove_current: false,
		padding: '0 0 0 40px'
	});
	
});