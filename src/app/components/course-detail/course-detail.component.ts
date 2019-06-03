import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input() courseID: string;
  course: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourseDetails();
  }

  getCourseDetails(): void {
    this.courseService.getCourseDetails(this.courseID).subscribe(course => {
      this.course = course;
    })
  }




} // end of Component


/*
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.courseService.getAllCourses().subscribe(courses => {
      this.instructedCourses = courses.instructedCourses;
      this.enrolledCourses = courses.enrolledCourses;
      this.allOtherCourses = courses.allOtherCourses;
    })
  }
*/


/*
export class CoursesComponent implements OnInit {
  instructedCourses: Course[];
  enrolledCourses: Course[];
  allOtherCourses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.courseService.getAllCourses().subscribe(courses => {
      this.instructedCourses = courses.instructedCourses;
      this.enrolledCourses = courses.enrolledCourses;
      this.allOtherCourses = courses.allOtherCourses;
    })
  }
  */

