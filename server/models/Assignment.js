import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Submission from './Submission';

var assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: Text
  },
  visibility: {
    type: boolean
  },
  dueDate: {
    type: Date
  },
  pointValue: {
    type: number
  },
  submissions: {
    type: [Submission]
  }
});


export default mongoose.model('Assignment', assignmentSchema);

