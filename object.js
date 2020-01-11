const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'Florida'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
};

let val;

val = person;
// GET SPECIFIC VALUe
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();


console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40},
];

for(let i=0; i < people.length; i++) {
  console.log(people[i].name);
}



// My Examples

const workFamily = [
  {name: 'Brett', age: 27},
  {name: 'Denise', age: 24},
  {name: 'Eliot', age: 7}
];

for(i=0; i<workFamily.length; i++) {
  console.log(workFamily[i].name)
}