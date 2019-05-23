import { Submission } from './submission';


export interface Assignment {
  _id: string;
  title: string;
  requirement: string;
  visibility: boolean;
  dueDate: Date;
  pointValue: number;
  submissions: Submission[];
}




