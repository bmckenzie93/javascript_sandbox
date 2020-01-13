// // // document.getElementById()

// // console.log(document.getElementById('task-title'));

// // // Get things from the element
// // console.log(document.getElementById('task-title').id);
// // console.log(document.getElementById('task-title').className);

// // // Change styling
// // console.log(document.getElementById('task-title').style.background = '#333');
// // console.log(document.getElementById('task-title').style.color = '#fff');
// // console.log(document.getElementById('task-title').style.padding = '5px');
// // // console.log(document.getElementById('task-title').style.display = 'none');

// // // Change content
// // document.getElementById('task-title').textContent = 'Task List';
// // document.getElementById('task-title').innerText = 'My Tasks';
// // document.getElementById('task-title').innerHTML = '<span>My Tasks</span>';

// // document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = '#ff0000'
// document.querySelector('ul li').style.color = '#00ff00'

// document.querySelector('li:nth-child(4)').style.color = '#00ff00'
// document.querySelector('li:nth-child(4)').textContent = 'CleverOne'


// MULTIPLE SELECTORS


// document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';


// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);


// const listItemsArr = Array.from(listItems);
// listItemsArr.forEach(function(li){
//   console.log(li);
// });
// console.log(listItemsArr);


// document.querySelectorAll

let evenLi = document.querySelectorAll('li:nth-child(even)');

evenLi.forEach(function(li, index, array){
  li.style.background = '#333';
  li.style.color = '#fff';
});

let oddLi = document.querySelectorAll('li:nth-child(odd)');

oddLi.forEach(function(li, index, array){
  li.style.background = '#ccc';
  li.style.color = '#333';
});