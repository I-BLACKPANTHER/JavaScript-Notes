// User is only allowed to make a purchase when he is:
// logged in
// email verified
// cardinfo - valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

Method - 1;

if (isLoggedIn) {
  console.log('Logged in Success');
  if (isEmailVerified) {
    console.log('Email is Verified');
    if (cardInfo) {
      console.log('You can make a purchase');
    }
  }
}

Method - 2;

if (isLoggedIn && isEmailVerified && cardInfo) {
  console.log('Allow user to make a purchase');
} else {
  console.log('Access Denined.! Please LogIn again');
}
