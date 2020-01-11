let val;

const today = new Date();
let birthday = new Date('04-22-1993 11:22:33')
birthday = new Date('September 22, 1993 11:22:33')
birthday = new Date('4/22/93 11:22:33') 

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(2);
birthday.setMinutes(30);

console.log(birthday); 