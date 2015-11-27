$(document).ready(function(){
    
  //create a new task
  $('#submit-btn').on('click', addNewTask);
  
  //check the task off
  $('ul').on('click','li', checkTask);



  function addNewTask(e) {
    //prevent page reload
    e.preventDefault();

    // get the input value
    var newToDo = $('#new-item').val(); 
    console.log(newToDo);

    //append the list item
    $('#task-list').append('<li><input type="checkbox"><span class="task">'+newToDo+'</span></li>');
    
    //clear the input box
    $('#new-item').val("");
  }

  function checkTask() {
    console.log("clicked");
    $('ul').children('li').toggleClass('checked');
  }
});

 


// 2.  When the user clicks remove next to a to do list item
//   * Select the to-do list item the user wants to remove
//   * Delete the selected item from the page
 
// 3.  When the user clicks the edit better next to a list item
//   * Select the to-do list item the user wants to edit
//   * Replace the text in the list item with an input whose value is the same as the existing text
//   * Show the save edit button and hide the edit button

// 4.  When the user clicks the save edit button
//   * Select the to-do list item the user wants to save
//   * Get the value of the input inside of this item
//   * Replace the input in the list item with the value of the input field
  
// 5.  (if using check box method, there is nothing to do)
// If using line-through method:
//   * When the user clicks on the list item
//   * Get the to-do list item the user clicked on
//   * Add a css line-through style to the item
 
// 6.  When the user clicks the Clear List button
//   * Select the list
//   * Empty the list
// Optional: Store the emptied list to allow the user to go back.

// 7.  When the users clicks the Clear Completed button
//   * Select each to-do list item
//   * Check to see if it has been completed
//   * If it has been completed, remove the to-do list item