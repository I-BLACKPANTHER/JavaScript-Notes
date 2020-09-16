// Allow user to access courses if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = false;
var facebook = false;
var google = false;

if (email) {
  console.log('Login Success through email');
}
if (google) {
  console.log('Login Success through google');
}
if (facebook) {
  console.log('Login Success through facebook');
} else {
  console.log('Login Failed');
}

if (email || facebook || google) {
  console.log('Login Success');
} else {
  console.log('Login Fail');
}
