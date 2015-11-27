$(document).ready(function(){

  /******************************************/
  /*Init
  /******************************************/

  var undoText = "";
  // var undoIndex = 0;
  var counter = 5;
  var interval;
  var text = "";

  //load in current action items
  var currentActionItems = [
    "this is the first action",
    "this is the second action",
    "this is the third action" 
  ]

  //add current action items to action items
  $(function(){
    for (var i = 0; i < currentActionItems.length; i++) {
      $('#actionItems').append(
        '<li class="action-item"><input type="checkbox"><label>'+currentActionItems[i]+'</label><a href="#" class="edit-btn">Edit</a><a href="#" class="remove-btn">Remove</a></li>');
        // '<li class="action-item"><input type="checkbox"><label for="action-item-'+i+'">'+currentActionItems[i]+'</label><a href="#" class="edit-btn">Edit</a><a href="#" class="remove-btn">Remove</a></li>');
    }
   
  });

  /******************************************/
  /*Interactivity
  /******************************************/

  //when user presses enter, create a new action item
  $('#submitBtn').on('click', addNewAction);

  //when user clicks remove, remove the action item
  $('#actionItems').on('click','.remove-btn', removeAction);

  //when a user clicks undo, bring the item back
  $('#actionItems').on('click', '.undo', undoRemove);

  //when user clicks edit, change to input field
  $('#actionItems').on('click','.edit-btn', editAction);

  //when user presses enter, or outside of the edit, remake the action item
  $('#editSubmit').on('click', remakeAction);
  $('#actionItems').on('blur', '#editField', remakeAction);


  function addNewAction(e) {
    
    //prevent page reload
    e.preventDefault();

    //get the value of the input
    var newAction = $('#actionInput').val();

    //count size of current list
    var newIndex = currentActionItems.length + 1;

    //create a new action in the list
    $('#actionItems').append('<li class="action-item"><input type="checkbox"/><label>'+newAction+'</label><a href="#" class="edit-btn">Edit</a><a href="#" class="remove-btn">Remove</a></li>');

    //initialize the action input
    $('#actionInput').val("");

  };



  function removeAction(e) {

    //end other counter if already started
    clearInterval(interval);

    //initialize counter
    counter = 3;

    //prevent page reload
    e.preventDefault();

    //remove any other undo item
    $('.undo').remove();  

    //save the action text for undo
    undoText = $(this).siblings('label').text();

    //remove the list item and replace with undo button
    $(this).parent('li').replaceWith('<li class="undo"><a class="undo-btn">Undo "Remove"</a></li>');
    
    //print current counter
    $('li.undo').append('<span>'+counter+'</span>');

    //Start counter
    interval = setInterval(function(){
      //delete current counter number
      $('li.undo').children('span').remove();
      
      //decrease counter
      counter--;

      //print current counter
      $('li.undo').append('<span>'+counter+'</span>');

      //if counter hits zero, then delete the list item
      if (counter==0){
        $('.undo').remove();
        clearInterval(interval);
      }
      
    }, 1000);

  }



  function undoRemove(e) {

    //prevent page reload
    e.preventDefault();

    //replace list item with undo text 
    $(this).replaceWith('<li class="action-item"><input type="checkbox"/><label>'+undoText+'</label><a href="#" class="edit-btn">Edit</a><a href="#" class="remove-btn">Remove</a></li>')

  }



  function editAction(e){

    //prevent page reload
    e.preventDefault();

    //grab the current action
    text = $(this).siblings('label').text();

    //create input with the current text inside it
    $(this).parent('li').replaceWith('<li class="action-item"><input type="textbox" id="editField" value=' + text + ' autofocus><input type="submit" id="editSubmit"></li>');

    //assign the text variable to the input
    // $('#actionItems').children('#editField').val(text);
    $('#actionItems').children('#editField').focus();
    console.log(text);

  }


  function remakeAction(e){

    //prevent page reload
    e.preventDefault();

    //remake the task item
    $(this).parent('li').replaceWith('<li class="action-item"><input type="checkbox"/><label>'+text+'</label><a href="#" class="edit-btn">Edit</a><a href="#" class="remove-btn">Remove</a></li>');


  }


















  //function to add a list item from the input
  //save input when user presses enter
  //add new list item to the html
  //add the text to the actionItems array

  // $('h1').on('click',function(){
  //     console.log('click');
  //   });

  // //Read when user clicks an action item, set child checkbox to true
  // $('.action-item').on('click',function(){
  //   console.log('click');
  //   //check the current checkbox status true or false
  //   var status = $(this).children('input').is(':checked');
  //   console.log('status:' + status);
  //   //set checkbox to true if false, false if true
  //   if (status == false) {
  //     $(this).children('input').attr('checked', true);
  //   } else if (status == true) {
  //     $(this).children('input').attr('checked', false);
  //   };
  // });
});


