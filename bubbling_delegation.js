// EVENT BUBBLING

// const tasks = document.getElementById('task-title').addEventListener('click', function(){
//   console.log(tasks)
// });
// const cardAction = document.querySelector('.card-action').addEventListener('click', function(){
//   console.log(cardAction)
// });
// const card = document.querySelector('.card').addEventListener('click', function(){
//   console.log(card)
// });

// function runEvent(e) {
//   console.log(`Event: ${e.target.classList['0']}`);
// }



// EVENT DELEGATION

document.querySelector('.collection-item').addEventListener('click', del);

function del(e) {
  if(e.target.childElement.classList.contains('delete-item')){
    e.target.parentElement.remove();
  } 
  
  console.log(e.target);
}
