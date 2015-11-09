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
    $('body').attr('class', 'nyc');
  }
  else if (selection == 'SF') {
    $('body').attr('class', 'sf');
  }
  else if (selection == 'LA') {
    $('body').attr('class', 'la');
  }
  else if (selection == 'ATX') {
    $('body').attr('class', 'austin');
  }
  else if (selection == 'SYD') {
    $('body').attr('class', 'sydney');
  }
  else {
    $('body').attr('class', 'default');
  }

});

//update the HTML classes based on selection using $.attr()


//if user selects NYC, set to NYC photo

//elseif user selects SF, set to SF photo

//elseif user selects LA, set to LA photo

//elseif user selects ATX, set to ATX photo

//elseif user selects SYD, set to SYD photo

});



