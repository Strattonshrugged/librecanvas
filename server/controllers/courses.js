

import Course from '../models/Course';
import User from '../models/User';

export function addCourse(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {
    User.findById(req.payload._id)
      .select('name').exec()
      .then(result => {

        let course = new Course();
        course.instructorID = req.payload._id;
        course.instructorName = result.name;
        course.courseAbbreviation = req.body.abbreviation;
        course.courseTitle = req.body.title;
        course.enrollmentKey = req.body.key;

        course.save((err) => {
          if (err && err.code === 11000) {
            res.status(409);
            res.json({
              "message": "User already exists"
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
            "message": "Course Created!"
          });
        });
      });
  }
} // end of allCourse


export function enroll(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message": "Unauthorized. ID not found in payload."
    });
  } else {
    // lookup the name
    User.findById(req.payload._id)
      .select('name').exec()
      .then(userName => {
        Course.addStudent(req.body.key, req.payload._id, userName.name)
      })
      .then(result => {
        res.status(200).json({
          "message": "Student added"
        })
      })
      .catch(function (err) {
        console.log('got an error');
        console.log(err);
        res.status(404);
      })
  }  // end of if-else
} // end of enroll

export function getAllCourses(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message": "Unauthorized. ID not found in payload."
    });
  } else {
    res.status(200)
    const promisedInstructedCourses = Course.getInstructedCourses(req.payload._id);
    const promisedEnrolledCourses = Course.getEnrolledCourses(req.payload._id);
    const promisedAllOtherCourses = Course.getAllOtherCourses(req.payload._id);
  Promise.all([
    promisedInstructedCourses,
    promisedEnrolledCourses,
    promisedAllOtherCourses
    ])
    .then(resultArray => {
      res.json({
        "instructedCourses": resultArray[0],
        "enrolledCourses": resultArray[1],
        "allOtherCourses": resultArray[2]
      })
    })
    .catch(function (err) {
      console.log('got an error');
      console.log(err);
      res.status(404);
      res.json({});
    }).finally(function () {
      //console.log('Finally!');
    });
    return;
  }

} // end of getAllCourses

export function getCourseDetails(req, res) {
    if (!req.payload._id) {
    res.status(401).json({
      "message": "Unauthorized. ID not found in payload."
    });
    } else {
      Course.findById(req.params.id)
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
} // end of getCourseDetails




