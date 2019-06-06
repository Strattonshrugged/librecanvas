import { Assignment } from './assignment';


export class Course {
  _id: string;
  instructorID: string;
  courseAbbreviation: string;
  courseTitle: string;
  students: string[];
  enrollmentKey: string;
  assignments: Assignment[];

  constructor(courseAbbreviation: string, courseTitle: string) {
    this.courseAbbreviation = courseAbbreviation;
    this.courseTitle = courseTitle;
  }



}
