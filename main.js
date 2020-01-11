// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,22,76,54);
const fruit = ["Apple", 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

//Get array length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
//Get single value
val = numbers[0];
//Insert into Array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// // MUTATING ARRAYS

// // Add to end
// numbers.push(250);
// // Add to start
// numbers.unshift(120);
// // Take off end
// numbers.pop();
// // Take off start
// numbers.shift();
// // Splice out values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Sorting arrays using the "compare function"
val = numbers.sort(function(x, y) {
  return x - y;
});

//Reverse sort
val = numbers.sort(function(x, y) {
  return y - x;
});

// Find (first number in array under 50)
function under50(num){
  return num < 50;
}

val = numbers.find(under50);


console.log(numbers);
console.log(val);











