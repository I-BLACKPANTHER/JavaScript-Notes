// Create an appilication with following roles
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - get acccess to consume content

var user = 'abc';

switch (user) {
  case 'admin':
    console.log('You get full access');
    break;
  case 'subadmin':
    console.log('gets access to create/delet courses');
    break;
  case 'testprep':
    console.log('gets access to create/delete tests');
    break;
  case 'user':
    console.log('get acccess to consume content');
    break;

  default:
    console.log('Trial user');
    break;
}
