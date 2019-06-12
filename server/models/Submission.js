import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';


var submissionSchema = new mongoose.Schema({
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
    type: String
  }
});


export default mongoose.model('Submission', submissionSchema);
