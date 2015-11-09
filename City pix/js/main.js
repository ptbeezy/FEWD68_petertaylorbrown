
$(document).ready(function() {

//focus on the city-type input
  $('#city-type').focus();

  $('#submit-btn').click(function() {
    event.preventDefault();
    
//function to read user input
    var cityInput = $( '#city-type' ).val();
    cityInput = cityInput.toLowerCase().trim();


//Decide to set to new york image
    if (cityInput == 'new york' || cityInput == 'new york city' || cityInput == 'nyc'){
      $('body').attr('class','nyc');
    }
//Decide to set to san fran image
    else if (cityInput == 'san francisco' || cityInput == 'sf' || cityInput == 'bay area'){
      $('body').attr('class','sf');
    }
//Decide to set to los angeles image
    else if (cityInput == 'los angeles' || cityInput == 'la' || cityInput == 'lax'){
      $('body').attr('class','la');
    }
//Decide to set to austin image
    else if (cityInput == 'austin' || cityInput == 'atx'){
      $('body').attr('class','austin');
    }
//Decide to set to sydney image
    else if (cityInput == 'sydney' || cityInput == 'syd'){
      $('body').attr('class','sydney');
    }

    $( '#city-type' ).val('');

  });

});
