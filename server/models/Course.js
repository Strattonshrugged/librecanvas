import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

var courseSchema = new mongoose.Schema({
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



export default mongoose.model('Course', courseSchema);
