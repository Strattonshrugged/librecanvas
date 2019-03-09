import User from '../models/User';

export function getAllUsers(req, res) {
  if (req.payload.role !== "admin") {
    res.status(401).json({
      "message" : "UnauthorizedError: admin only"
    });
  } else {
    User.find().exec(function(err, users) {
    res.status(200).json(users);
  });
  }
}