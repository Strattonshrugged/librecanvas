
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


}

/* CANNOT GET SYNTAX RIGHT
export function getCourses(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message": "Unauthorized. ID not found in payload."
    });
  } else {
    Course.getInstructedCourses(req.payload._id).then(res.json.bind(res));

    Course.getInstructedCourses(req.payload._id).then(function (courses) {
      console.log('this is what comes back from CourseModelFunction');
      console.log(Course.getInstructedCourses(req.payload._id));
      res.status(200).json({
        "instructedCourses": courses,
        "enrolledCourses": courses,
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


    // TESTING
    /*
    res.json
    {
      _id: '0123456789',
      instructorID: '142434546474',
      courseAbbreviation: 'Math 0123',
      courseTitle: 'Counting Up With Math',
      students: ['999999'],
      enrollmentKey: 'countup',
      assignments: []
    }
    */

    // TESTING
    /*
    res.json({
      "instructedCourses" : [
      {
        _id: '09876543210',
        instructorID: '999999',
        courseAbbreviation: 'Math 3210',
        courseTitle: 'Counting Down With Math',
        students: [],
        enrollmentKey: 'countdown',
        assignments: []
      }]
    });
    */

