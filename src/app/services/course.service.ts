import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  readonly coursesUrl = 'http://localhost:4000/courses';
  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any> {
    return this.http.get('/api/courses/get-allCourses', { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` } });
  };

  /*
  getCourses(): Observable<any> {
    return this.http.get('/api/courses/get-courses', { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` } });
  };
  
  getInstructedCourses(): Observable<any> {
    return this.http.get('/api/courses/get-instructed-courses', { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` } });
  };

  getEnrolledCourses(): Observable<any> {
    return this.http.get('/api/courses/get-enrolled-courses', { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` } });
  };

  getAllOtherCourses(): Observable<any> {
    return this.http.get('/api/courses/get-allOther-courses', { headers: { Authorization: `Bearer ${localStorage.getItem('mean-token')}` } });
  };
  */
}


