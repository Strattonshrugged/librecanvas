import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';


var assignmentSchema = new mongoose.Schema({
  student: {
    type: String,
    required: true
  },
  assignment: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  pointsGiven: {
    type: number
  }
});


export default mongoose.model('Assignment', assignmentSchema);
