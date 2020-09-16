var user = {
  firstName: 'Sree',
  lastName: 'Vatsa',
  role: 'Admin',
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
  info: function () {
    return `Username is ${this.firstName} ${this.lastName} 
            who has an ${this.role} role 
            and his login count is ${this.loginCount} . 
            Is logged with facebook ${this.facebookSignedIn} .
            Enrolled in Courses ${this.courseList}`;
  },
};
console.log(user.getCourseCount());
user.buyCourse('React JS Course');
user.buyCourse('Angular Course');
console.log(user.info());
