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
  }
});


courseSchema.statics.getInstructedCourses = function (instructorID) {
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

  return this.find({ 'courseAbbreviation': 'Math 098' }).exec();
};


/*
export function getInstructedCourses(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message": "Unauthorized. ID not found in payload."
    });
  } else {
    res.status(200);
    res.json({ Course.getInstructedCourses(req.body._id) });
    return;
  }
}

export function getEnrolledCourses(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message": "Unauthorized. ID not found in payload."
    });
  } else {
    res.status(200);
    res.json({ Course.getEnrolledCourses(req.body._id) });
    return;
  }
}

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};


*/

export default mongoose.model('Course', courseSchema);
