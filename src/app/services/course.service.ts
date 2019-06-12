import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  // readonly courseBaseUrl = 'http://localhost:4000/courses';
  constructor(private http: HttpClient) { }

  addStudent(key: string) {
    const student = {
      key: key
    }
    return this.http.put('/api/courses/enroll', student,{ headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` } });
  };

  getAllCourses(): Observable<any> {
    return this.http.get('/api/courses/get-allCourses',
      { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` } });
  };

  getCourseDetails(_id: string): Observable<Course> {
    // const url = `${this.courseBaseUrl}/${_id}`;
    const url = `/api/courses/${_id}`;

    return this.http.get<Course>(url,
      { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` } });
  };

  addCourse(abbreviation: string, title: string, key: string) {
    const course = {
      abbreviation: abbreviation,
      title: title,
      key: key
    }
    return this.http.post(`/api/courses/create-course`, course, { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` } });
  }

  // brought over from tour of heroes, hero.service; after http request ...
  // .pipe(catchError(this.handleError<Course>(`getCourseDetails id=${_id}`)))
  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {

      console.error(error); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;

      // TODO: better job of transforming error for user consumption
      throw new Error(`${operation} failed: ${message}`);
    };
  }; 

};  // END OF COURSE SERVICE


