import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

var courseSchema = new mongoose.Schema({
  instructorID: {
    type: String,
    required: true
  },
  courseAbbreviation: {
    type: String,
    required: true
  },
  courseTitle: {
    type: String,
    required: true
  },
  enrollmentKey: {
    type: String,
    required: true,
    unique: true
  },
  students: {
    type: [String]
  }
});


courseSchema.statics.getInstructedCourses = function (inputID) {
  // this.find({ 'courseAbbreviation': 'Math 098' }, function (err, courses) {
  console.log('getInstructedCourses has been called');
  /*
  this.find(3, function (err, courses) {
    console.log('and the find function is getting called');
    if (err) {
      console.log('Hey we got some kind of error');
      console.log(err);
      throw err;
    }
  });
  */
  console.log('Type Of ' + typeof inputID);
  console.log(inputID);

  return this.find({ 'instructorID': inputID }).exec();
};


courseSchema.statics.getEnrolledCourses = function (inputID)  {
  console.log('getEnrolledCourses has been called');
  console.log('Type Of ' + typeof inputID);
  console.log(inputID);
  return this.find({ 'students': inputID }).exec();

}


/*
userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};


*/

export default mongoose.model('Course', courseSchema);
