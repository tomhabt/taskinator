
// creating list in the task to do section
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#task-to-do");

// adding event listener to the button
/* 
buttonEl.addEventListener("click", function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
  });
*/

/* 
note that the code block above, that is starting from the
  function (){.......} up to the append method, is mostly 
  repeating to creat multiple elements, style and append 
  them. Therefore we need to assign that part into 
  something to minimize the repeation. so lets use
  var createTaskHandler = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl)
  so we will comment out the above and re-write it as 
  follows
*/
    var createTaskHandler = function() {
      var listItemEl = document.createElement("li");
      listItemEl.className = "task-item";
      listItemEl.textContent = "This is a new task.";
      tasksToDoEl.appendChild(listItemEl);
    }

  buttonEl.addEventListener("click", createTaskHandler);
  

  
  

  




