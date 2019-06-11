import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Submission from './Submission';
import { stringify } from 'querystring';

var assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  task: {
    type: String
  },
  courseID: {
    type: String,
    required: true
  },
  visibility: {
    type: String
  },
  dueDate: {
    type: String
  },
  pointValue: {
    type: String
  },
  submissions: [{
    type: String
  }]
});


export default mongoose.model('Assignment', assignmentSchema);

