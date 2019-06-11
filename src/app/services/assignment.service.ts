import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  constructor(private http: HttpClient) { }


  addAssignment(
    title: string,
    visibility: string,
    dueDate: string,
    pointValue: string,
    task: string,
    courseID: string)
    {
      const assignment = {
        title: title,
        visibility: visibility,
        dueDate: dueDate,
        pointValue: pointValue,
        task: task,
        courseID: courseID
      }
      // console.log(assignment);
      return this.http.post('/api/create-assignment', assignment, { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` } });
  }

  getAssignment(_id: string): Observable<Assignment>  {
    const url = `/api/assignment/${_id}`;

    return this.http.get<Assignment>(url,
      { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` } });
  };



} // End of AssignmentService
