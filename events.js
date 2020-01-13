// // document.querySelector('.clear-tasks').addEventListener('click', function(e){
// //   console.log('clevs');
// //   e.preventDefault;
// // });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//   console.log('on clickkk')
//   e.preventDefault;
// } 




// MOUSE EVENTS

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Double-Click
// clearBtn.addEventListener('dblclick', runEvent);
// Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);
// Mouse Down
// clearBtn.addEventListener('mouseup', runEvent);
// Mouse Enter
// card.addEventListener('mouseenter', runEvent);
// Mouse Enter
// card.addEventListener('mouseleave', runEvent);
// Mouse Enter
// card.addEventListener('mouseover', runEvent);
// Mouse Enter
// card.addEventListener('mouseout', runEvent);
// // Mouse Move
// card.addEventListener('mousemove', runEvent);

// // // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
// };



// FORM EVENTS
const form = document.querySelector('form');
const taskInput = document.getElementById('task');


form.addEventListener('submit', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  e.preventDefault();
}
