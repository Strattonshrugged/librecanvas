

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
  },
  assignments: {
    type: [String]
  }
});

// Course.addStudent(student.key, req.payload._id)

courseSchema.statics.addStudent = function (enrollmentKey, userID) {
  return this.findOneAndUpdate(
    { 'enrollmentKey': enrollmentKey },
    { $push: { students: userID } })
  .exec();
};

courseSchema.statics.getAllCourses = courseSchema.statics.getInstructedCourses = function () {
  let foo = this.find().exec();
  return foo;
};

courseSchema.statics.getInstructedCourses = function (inputID) {

  return this.find({ 'instructorID': inputID }).select('courseAbbreviation courseTitle').exec();
};

courseSchema.statics.getEnrolledCourses = function (inputID)  {
  return this.find({ 'students': inputID }).select('courseAbbreviation courseTitle').exec();
}

courseSchema.statics.getAllOtherCourses = function (inputID) {

  return this.find(
    {
      $and: [
        { 'students': { $nin: [inputID] } },
        { 'instructorID': { $ne: inputID } }
      ]
    }
  ).select('courseAbbreviation courseTitle').exec();
}

courseSchema.statics.getCourseDetails = function (inputID) {

}
/*
userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};
*/

export default mongoose.model('Course', courseSchema);
