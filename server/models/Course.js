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



courseSchema.statics.getAllCourses = courseSchema.statics.getInstructedCourses = function () {
  let matthew = this.find().exec();
  return matthew;
};

courseSchema.statics.getInstructedCourses = function (inputID) {
  // this.find({ 'courseAbbreviation': 'Math 098' }, function (err, courses) {
  // console.log('getInstructedCourses has been called');
  // console.log('Type Of ' + typeof inputID);
  // console.log(inputID);

  return this.find({ 'instructorID': inputID }).select('courseAbbreviation courseTitle').exec();
};

courseSchema.statics.getEnrolledCourses = function (inputID)  {
  // console.log('getEnrolledCourses has been called');
  // console.log('Type Of ' + typeof inputID);
  // console.log(inputID);
  return this.find({ 'students': inputID }).select('courseAbbreviation courseTitle').exec();
}

courseSchema.statics.getAllOtherCourses = function (inputID) {
  // console.log('getEnrolledCourses has been called');
  // console.log('Type Of ' + typeof inputID);
  // console.log(inputID);

  return this.find(
  
    {
      $and: [
        { 'students': { $nin: [inputID] } },
        { 'instructorID': { $ne: inputID } }
      ]
    }
  
  ).select('courseAbbreviation courseTitle').exec();
}

/*
userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};


*/

export default mongoose.model('Course', courseSchema);
