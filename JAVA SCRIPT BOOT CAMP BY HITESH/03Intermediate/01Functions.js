function sayHello(name) {
  console.log('Hello there, Sree');
  console.log('Hello there, ', name); // Old method
  console.log(`Hello there, ${name}. How are you?`); // most used way in recent times
}

// sayHello(); //Calling a function
// sayHello('Vatsa');
// sayHello; // refer to a function

function namastey() {
  return 'Hello in India';
}

var greetings = namastey();

console.log(greetings);
console.log(namastey());
