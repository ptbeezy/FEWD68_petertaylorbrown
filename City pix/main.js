
$(document).ready(function() {

  $('#city-type').focus();

  $('#submit-btn').click(function() {
    event.preventDefault();
    
    //read user input
    var cityInput = $( '#city-type' ).val();
    cityInput = cityInput.toLowerCase().trim();


    //Set to new york image
    if (cityInput == 'new york' || cityInput == 'new york city' || cityInput == 'nyc'){
      $('body').attr('class','nyc');
    }
    //Set to san fran image
    else if (cityInput == 'san francisco' || cityInput == 'sf' || cityInput == 'bay area'){
      $('body').attr('class','sf');
    }
    //Set to los angeles image
    else if (cityInput == 'los angeles' || cityInput == 'la' || cityInput == 'lax'){
      $('body').attr('class','la');
    }
    //Set to austin image
    else if (cityInput == 'austin' || cityInput == 'atx'){
      $('body').attr('class','austin');
    }
    //Set to sydney image
    else if (cityInput == 'sydney' || cityInput == 'syd'){
      $('body').attr('class','sydney');
    }

    $( '#city-type' ).val('');

  });

});
