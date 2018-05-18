const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

var count = 0;

document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('#add').onclick = () => {
    var newLi = document.createElement('li');
    newLi.className = classNames.TODO_ITEM;
    var newInput = document.createElement('input');
    newInput.setAttribute('type', 'checkbox');
    newInput.className = classNames.TODO_CHECKBOX;
    var newP = document.createElement('p');
    newP.innerHTML = 'New task!!!';
    newP.className = classNames.TODO_TEXT;
    var clearDiv = document.createElement('div');
    clearDiv.className = 'clear';
    var newButton = document.createElement('button');
    newButton.innerHTML = 'DELETE';
    newButton.className = classNames.TODO_DELETE;
    newLi.appendChild(newInput);
    newLi.appendChild(newP);
    newLi.appendChild(clearDiv);
    newLi.appendChild(newButton);

    list.appendChild(newLi);

    document.querySelectorAll('.todo-delete').forEach(e => {
      e.onclick = e => {
        if (e.target.parentElement.children[0].checked === true) count--;
        e.target.parentNode.remove(e.target.parentElement);
        itemCountSpan.innerHTML = list.childElementCount;
        uncheckedCountSpan.innerHTML = itemCountSpan.innerHTML - count;
      }
    });

    itemCountSpan.innerHTML = list.childElementCount;
    uncheckedCountSpan.innerHTML = itemCountSpan.innerHTML - count;

    newInput.onclick = e => {
      if (e.target.checked === true) count++;
      else count--;
      uncheckedCountSpan.innerHTML = itemCountSpan.innerHTML - count;
    }
  }
});
