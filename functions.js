// FUNCTION DECLARATIONS

function kill(weapon = 'gun', hitbox = 'head'){
  return 'You got murdered by a ' + weapon + ' to the ' + hitbox;
}

// console.log(kill());

// FUNCTION EXPRESSIONS

const deadMan = function(man){
  return man + ' has been killed!'
};

// console.log(deadMan('Timmy'));

// IMMEDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
//function you declare and run at the same time

// (function(){
//   console.log('IIFE Ran..')
// })();

// (function(name){
//   console.log('hello ' + name)
// })("Brandon");


// PROPERTY METHODS

const murder = {
  gender: 'male',
  killShot: function(wound){
    return `kill shot to the ${wound}`
  },
  age: 22
};

console.log(murder.age + ' year old ' + murder.gender + ' found dead from a ' + murder.killShot('body'));





