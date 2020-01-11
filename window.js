// WINDOW METHODS / OBJECTS / PROPERTIES

// ALERT
// window.alert('hello');

// Prompt
// const brandonSayes = prompt();
// alert(brandonSayes);

// Confirm
// if(confirm('Are you for sheezie?')){
//   console.log('yup');
// } else {
//   console.log('Nope');
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

//Location Object
val = window.location
val = window.location.hostname
val = window.location.port
val = window.location.href
val = window.location.search


//Redirect
// window.location.href = 'http://google.com';
//Reload
// window.location.reload();

// History Object

// window.history.go(-1)
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;


console.log(val);