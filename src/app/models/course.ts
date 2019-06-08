import { Assignment } from './assignment';


export class Course {
  _id: string;
  instructorID: string;
  courseAbbreviation: string;
  courseTitle: string;
  enrollmentKey: string;
  students: string[];
  assignments: string[];

  constructor(courseAbbreviation: string, courseTitle: string) {
    this.courseAbbreviation = courseAbbreviation;
    this.courseTitle = courseTitle;
  }



}

