// FOR LOOP

// for(let i = 0; i <= 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number')
//     continue;
//   }

//   if(i === 5){
//     console.log('stop the loop')
//     break;
//   }

//   console.log(i);
// }

//  WHILE LOOP

// let i = 20

// // while(i < 10){
// //   console.log('number ' + i);
// //   i++;
// // }

// // DO WHILE

// do {
//   console.log(`number is ${i}`);
//   i++;
// }

// while(i < 1); 

const weapons = ['knife', 'gun', 'wire', 'knife', 'poison'];

// let i=0;

// while(i < weapons.length) {
//   console.log(weapons[i]);
//   i++;
// }

// weapons.forEach(function(weapon){
//   console.log(weapon)
// });

// MAP : return a differant array
// const combos = [
//   { punch: 'uppercut', kick: 'roundhouse' },
//   { punch: 'jab-jab', kick: 'shin-kick' },
//   { punch: 'haymaker', kick: 'leg-swipe' }
// ];

// const punches = combos.map(function(combo) {
//   return combo.punch;
// });

// console.log(punches);
// console.log(combos);

const injuries = {
  head: 'gunshot',
  body: 'stabbing',
  feet: 'amputated'
};

for(let x in injuries){
  console.log(x);
  console.log(injuries[x]);
}