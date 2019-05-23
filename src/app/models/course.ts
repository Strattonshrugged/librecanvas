import { Assignment } from './assignment';


export interface Course {
  _id: string;
  enrollmentKey: string;
  assignments: Assignment[];
}
