
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



    /*
    User.findById(req.payload._id).exec(function (err, user) {
      res.status(200).json(user);
    });
    */
  }


}
