$(document).ready(function() {

//read the height of the document
	var docHeight = $(document).height();

//create the height of the page container
	var elemHeight = docHeight - 8;

	console.log(elemHeight);

	$('#landing-container').attr('height', elemHeight);


});