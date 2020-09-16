/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with a;; access 
sub admin - with access to create/delete courses
test prep - with access to create/delete tests
user - consume all content
othe = trail user.

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role) {
  switch (role) {
    case 'admin':
      return `${name} is admin with all access`;
      break;
    case 'subadmin':
      return `${name} is sub-admin with all access to create and delete courses`;
      break;
    case 'testprep':
      return `${name} is admin with all access to create and delete tests`;
      break;
    case 'user':
      return `${name} is a user to consume content`;
      break;

    default:
      return `${name} is a trail user`;
      break;
  }
};

console.log(getUserRole('Vatsa', 'admin'));

var getRole = getUserRole('Sree', 'subadmin');

console.log(getRole);
