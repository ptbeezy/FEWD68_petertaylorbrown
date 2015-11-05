$(document).ready(function(){




var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

// add the array to the menu using $.append()

//for the length of the array, step through and add each city
for (var i = 0; i < cities.length; i++) {
  $('#city-type').append('<option>' + cities[i] + '</option>');
};

//Get the value of the user input using $.val()
$('#city-type').on('change', function(){
  var selection = $(this).val();
  console.log(selection);
  if (selection == 'NYC') {
    $('body').css('background', 'url(images/nyc.jpg)');
  }
  else if (selection == 'SF') {
    $('body').css('background', 'url(images/sf.jpg)');
  }
  else if (selection == 'LA') {
    $('body').css('background', 'url(images/LA.jpg)');
  }
  else if (selection == 'ATX') {
    $('body').css('background', 'url(images/austin.jpg)');
  }
  else if (selection == 'SYD') {
    $('body').css('background', 'url(images/sydney.jpg)');
  }
  else {
    $('body').css('background', 'url(images/citipix_skyline.jpg)');
  }

});

//update the HTML classes based on selection using $.attr()


//if user selects NYC, set to NYC photo

//elseif user selects SF, set to SF photo

//elseif user selects LA, set to LA photo

//elseif user selects ATX, set to ATX photo

//elseif user selects SYD, set to SYD photo

});



