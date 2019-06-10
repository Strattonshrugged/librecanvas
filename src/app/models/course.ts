

export class Course {
  _id: string;
  instructorID: string;
  instructorName: string;
  courseAbbreviation: string;
  courseTitle: string;
  enrollmentKey: string;
  students: object[];
  assignments: object[];

  constructor(courseAbbreviation: string, courseTitle: string) {
    this.courseAbbreviation = courseAbbreviation;
    this.courseTitle = courseTitle;
  }

}

