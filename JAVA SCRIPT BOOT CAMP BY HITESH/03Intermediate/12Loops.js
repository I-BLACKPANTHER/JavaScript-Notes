// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

const myStates = [
  'Rajasthan',
  'Delhi',
  'Assam',
  1947,
  'Tamilnadu',
  'Maharastra',
];

// for (let i = 0; i < myStates.length; i++) {
//   if (typeof myStates[i] !== 'string') continue;
//   const element = myStates[i];
//   console.log(element);
// }

// console.log('---------------');

// for (let i = 0; i < myStates.length; i++) {
//   if (typeof myStates[i] !== 'string') break;
//   const element = myStates[i];
//   console.log(element);
// }

// console.log('---------------');

// for (let i = 0; i < myStates.length; i++) {
//   if (typeof myStates[i] === 'string') continue;
//   const element = myStates[i];
//   console.log(element);
// }

// let i = 0;

// while (i < myStates.length) {
//   console.log(myStates[i]);
//   i++;
// }

// do {
//   console.log(myStates[i]);
//   i++;
// } while (i < myStates.length);

myStates.forEach((s) => console.log(s));
