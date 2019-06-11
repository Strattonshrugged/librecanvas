import Assignment from '../models/Assignment';
import Course from '../models/Course';

export function getAssignment(req, res) {
    if (!req.payload._id) {
    res.status(401).json({
      "message": "Unauthorized. ID not found in payload."
    });
    } else {
      Assignment.findById(req.params.id)
        .then(result => {
          res.status(200).json(result)
        })
        .catch(function (err) {
          console.log('got an error');
          console.log(err);
          res.status(404);
          res.json({});
        });
    }
} // end of getAssignment

export function addAssignment(req, res) {
    if (!req.payload._id) {
      res.status(401).json({
        "message": "UnauthorizedError: private profile"
      });
    } else {

        let assignment = new Assignment();
        assignment.title = req.body.title;
        assignment.visibility = req.body.visibility;
        assignment.dueDate = req.body.dueDate;
        assignment.pointValue = req.body.pointValue;
        assignment.task = req.body.task;
        assignment.courseID = req.body.courseID;
        assignment.save((err) => {
            if (err && err.code === 11000) {
              res.status(409);
              res.json({
                "message": "Assignment already exists"
              });
              return;
            }
  
            if (err) {
              console.log(err);
              res.status(400);
              res.json({
                "message": "Bad Request"
              });
              return;
            }
  
            res.status(201);
            res.json({
              "message": "Assignment Created!"
            });
        // need to insert the short tag into Course
        // console.log(assignment.courseID);
        // how do I get the ID of the assignment I just saved, and do I need to daisy chain promise
        Course.addAssignmentTag(assignment.courseID,assignment.title,assignment._id);


        });
    }
  } // end of allCourse