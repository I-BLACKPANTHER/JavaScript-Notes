var countries = ['INDIA', 'USA', 'JAPAN', 'RUSSIA'];

var states = new Array('RAJASTHAN', 'DELHI', 'MAHARASTRA', 'ASSAM');

console.log(states);

console.log(states[0]);

console.log(states.length);

states[0] = 'PUNJAB';
console.log(states);

states.pop(); // pop is used to remove the last value in an array
console.log(states);

states.unshift('BIHAR'); // to add a new element into an array at index 0
console.log(states);
states.shift(); // to remove element from an array at index 0
console.log(states);

console.log(states.indexOf('DELHI'));
console.log(states.indexOf('AP')); // as AP is no there in our array list we got '-1' as an output.
// we can use this '-1' in loops and can generate a pop-up message.

console.log(Array.from('VATSA'));
