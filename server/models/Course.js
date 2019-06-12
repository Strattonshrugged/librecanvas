

import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';


var courseSchema = new mongoose.Schema({
  instructorID: {
    type: String,
    required: true
  },
  instructorName: {
    type: String
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
    type: [
      {
        name: {
          type: String,
          required: true
        },
        id:    {
            type: String,
            required: true
        }
      }
    ]
  },
  assignments: {
    type: [
      {
        title: {
          type: String,
          required: true
        },
        id:    {
            type: String,
            required: true
        }
      }
    ]
  }
});

courseSchema.statics.addAssignmentTag = function (courseID,assignmentTitle,assignmentID) {
  return this.findOneAndUpdate({'_id': courseID},
    { $push:
      { assignments: 
        {
            'title': assignmentTitle,
            'id': assignmentID
        }
      }
    })
  .exec()
}

courseSchema.statics.addStudent = function (enrollmentKey, userID, userName) {
  return this.findOneAndUpdate(
    // find a course with the same enrollment key
    { 'enrollmentKey': enrollmentKey },
    // push into students array a new StudentNameID object
    { $push:
      { students: 
        {
            'name': userName,
            'id': userID
        }
      }
    })
  .exec()
};

courseSchema.statics.getAllCourses = courseSchema.statics.getInstructedCourses = function () {
  let foo = this.find().exec();
  return foo;
};

courseSchema.statics.getInstructedCourses = function (inputID) {
  return this.find({ 'instructorID': inputID }).select('courseAbbreviation courseTitle').exec();
};

courseSchema.statics.getEnrolledCourses = function (inputID)  {
  return this.find({ 'students.id': inputID }).select('courseAbbreviation courseTitle').exec();
}


courseSchema.statics.getAllOtherCourses = function (inputID) {
  return this.find(
    {
      $and: [
        { 'students.id': { $nin: [inputID] } },
        { 'instructorID': { $ne: inputID } }
      ]
    }
  ).select('courseAbbreviation courseTitle').exec()
}


export default mongoose.model('Course', courseSchema);
