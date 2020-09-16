var user = {
  firstName: 'Sree',
  lastName: 'Vatsa',
  role: 'Admin',
  loginCount: 32,
  facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user['lastName']); // Its not aa good practise to use this method.

console.table(user);
console.log(user);

var mobile = {
  brand: 'Apple',
  modelNo: '11 Pro',
  color: 'Space Grey',
  ram: '8 Gb',
  rom: '256 Gb',
  camera: '32 Mega Pixel',
  price: 90000,
};

console.table(mobile);
