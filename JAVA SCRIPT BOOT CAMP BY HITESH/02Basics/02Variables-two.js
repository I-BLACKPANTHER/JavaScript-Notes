var firstName = 'Sree Vatsa';
var lastName = 'Sistla';
var email = 'sistlasreevatsa@yahoo.com';
var password = '123456';
var confirmPassword = '123456';
var Country = 'India';
var State = 'Telangana';
const uniqueId = Math.floor(Math.random() * 0x100000);
var courseCount = 0;
var isLoggedInFromFacebook = false;
var isLoggedInFromGoogle = false;

// fullname = promt("Enter your name");

console.log('Full Name is: ' + firstName + ' ' + lastName);
console.log(email);
console.log(password);
console.log(confirmPassword);
console.log(Country);
console.log(State);
console.log(uniqueId);
console.log(courseCount);
console.log(isLoggedInFromFacebook);
console.log(isLoggedInFromGoogle);

console.log(`
    With Unique ID: ${uniqueId}
    User is : ${firstName + ' ' + lastName}
    and his emailId is : ${email}
    and he uses password as : ${password}
    Country : ${Country}
    State : ${State}
    CourseCount : ${courseCount}
    FacebookLogin : ${isLoggedInFromFacebook}
    GoogleLogin : ${isLoggedInFromGoogle}    
`);
