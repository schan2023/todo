
var removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" width="100" height="100"><g id="surface1"><path class="fill" d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C   20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z "/></g></svg>'

var completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" width="50" height="50"><g id="surface1"><path class="fill" d="M 25 3 C 12.863281 3 3 12.863281 3 25 C 3 37.136719 12.863281 47 25 47 C 37.136719 47 47 37.136719 47 25 C 47 12.863281 37.136719 3 25 3 Z M 25 5 C 36.058594 5 45 13.941406 45 25 C 45 36.058594 36.058594 45 25 45 C 13.941406 45 5 36.058594 5 25 C 5 13.941406 13.941406 5 25 5 Z M 34.0625 14.46875 L 23.125 31.46875 L 15.78125 24.84375 L 14.4375 26.34375 L 22.625 33.75 L 23.5 34.53125 L 24.125 33.53125 L 35.75 15.53125 Z "/></g></svg>'

//User clicked on add button
//If there is any text inside item field, add that text to todo list
document.getElementById('add').addEventListener('click', function() {
  //Gets value of element of that id ("Enter activity..")
  var value = document.getElementById('item').value;
  //Add to to-do list if value is not empty
  if(value) {
    addItemTodo(value);
    document.getElementById('item').value = '';
  }
});

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  //Check if item should be added to completed or todo
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

//Adds a new item to the todo list
function addItemTodo(text) {
  var list = document.getElementById('todo');

  //Retrieves items from list
  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  //Remove
  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;

  //Add click event for removing item
  remove.addEventListener('click', removeItem);

  //Complete
  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;

  //Add click event for completed items
  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);


}
