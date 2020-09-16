var name = 'Vatsa';

console.log('Line number 3', name);

function sayName() {
  var name = 'Mr V';
  console.log('Line number 7', name);
  saynameTwo();

  function saynameTwo() {
    console.log('Line number 11', name);
  }
}

sayName();
