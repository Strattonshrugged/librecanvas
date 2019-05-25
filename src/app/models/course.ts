import { Assignment } from './assignment';


export class Course {
  _id: string;
  instructorID: string;
  courseTitle: string;
  students: string[];
  enrollmentKey: string;
  assignments: Assignment[];

}
