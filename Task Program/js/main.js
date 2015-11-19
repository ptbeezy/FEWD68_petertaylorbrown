$(document).ready(function(){
  
  //Action item array
  var actionItems = [
    "this is the first to-do",
    "this is the second to-do",
    "this is the third to-do"
  ];

  //step through array and creat checklist of action items
  $(function(){
    console.log('list appended successfully');
    for (var i = 0; i <= actionItems.length - 1 ; i++) {
      $('#action-items').append(
        '<li id="action-item-'+i+'" class="action-item"><input type="checkbox"><label for="action-item-'+i+'">'+actionItems[i]+'</label></li>');
    };
  });

  //function to add a list item from the input
  //save input when user presses enter
  //add new list item to the html
  //add the text to the actionItems array

  $('h1').on('click',function(){
      console.log('click');
    });

  //Read when user clicks an action item, set child checkbox to true
  $('.action-item').on('click',function(){
    console.log('click');
    //check the current checkbox status true or false
    var status = $(this).children('input').is(':checked');
    console.log('status:' + status);
    //set checkbox to true if false, false if true
    if (status == false) {
      $(this).children('input').attr('checked', true);
    } else if (status == true) {
      $(this).children('input').attr('checked', false);
    };
  });
});


