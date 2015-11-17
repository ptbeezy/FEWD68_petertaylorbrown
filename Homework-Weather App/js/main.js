// weather key: ad0f9821f4386c137e0b7187abd83996
//
$(document).ready(function(){
  $('#submit-button').on('click',function(e){
    e.preventDefault();
    //grab the zip
    var zip = $('#zip-code').val();
    console.log(zip);

    //pull the json
    $('#new-header').append('<h2>Here is the current temperature for '+zip+':</h2>');

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?zip='+zip+','+'us&APPID=ad0f9821f4386c137e0b7187abd83996',
      dataType: 'jsonp',
      success: function(data){
        console.log(data);
        // $("#data-confirm").text(JSON.parse(data));
        for (var i = 0; i < data.length; i++) {
          console.log(data[i]);
        }
        console.log(data.main.temp);
        $('#current-temp').html((data.main.temp-273.15)/1.8+32);
      }
    });
  });
});