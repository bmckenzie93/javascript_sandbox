//  Set Item to Local Storage
// localStorage.setItem('key', 'value');

//  Set Item to Session Storage
// sessionStorage.setItem('key', 'value');

//  Remove Item from  Storage
// localStorage.removeItem('key');

//  Get item from Storage
// const storageItem = localStorage.getItem('key');
// console.log(storageItem);

//  Clear Storage
// localStorage.clear();

document.getElementById('task-form').addEventListener('submit', 
function(e){
  const taskValue = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(taskValue);
  
  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task Saved!');
  
  e.preventDefault();
})

const taskz = JSON.parse(localStorage.getItem('tasks'));
console.log(taskz);