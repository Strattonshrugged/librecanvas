
import Course from '../models/Course';

/*var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};*/


export function addCourse(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {
    let course = new Course();
    console.log(req.body)
    course.instructorID = req.payload._id;
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

  }
} // end of allCourse

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
      res.status(200).json({
        "course":Course.findById(req.payload._id)
      })
    // tried setting json directly to Course query, no errors but nothing came back
    .catch(function (err) {
      console.log('got an error');
      console.log(err);
      res.status(404);
      res.json({});
    }).finally(function () {
      console.log(res.json);
    });
    return;
  }
}









/*
export function getInstructedCourses(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message": "Unauthorized. ID not found in payload."
    });
  } else {
    Course.getInstructedCourses(req.payload._id).then(function (courses) {
      res.status(200).json({
        "instructedCourses": courses
      });
    }).catch(function (err) {
      console.log('got an error');
      console.log(err);
      res.status(404);
      res.json({});
    }).finally(function () {
      //console.log('Finally!');
    });
    return;
  }
}

export function getEnrolledCourses(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message": "Unauthorized. ID not found in payload."
    });
  } else {
    //console.log(getAllCourses());
    Course.getEnrolledCourses(req.payload._id).then(function (courses) {
      res.status(200).json({
        "enrolledCourses": courses
      });
    }).catch(function (err) {
      console.log('got an error');
      console.log(err);
      res.status(404);
      res.json({});
    }).finally(function () {
      //console.log('Finally!');
    });
    return;
  }
}

export function getAllOtherCourses(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message": "Unauthorized. ID not found in payload."
    });
  } else {
    Course.getAllOtherCourses(req.payload._id).then(function (courses) {
      res.status(200).json({
        "allOtherCourses": courses
      });
    }).catch(function (err) {
      console.log('got an error');
      console.log(err);
      res.status(404);
      res.json({});
    }).finally(function () {
      //console.log('Finally!');
    });

    return;
  }
}
*/


