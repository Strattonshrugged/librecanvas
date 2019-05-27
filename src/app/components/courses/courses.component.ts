import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  instructedCourses: Course[];
  enrolledCourses: Course[];

  constructor(private courseService: CourseService) { }
  
  ngOnInit() {
    this.getInstructedCourses();
    this.getEnrolledCourses();

    // TESTING
    /*
    this.instructedCourses = [{
      _id: '09876543210',
      instructorID: '999999',
      courseAbbreviation: 'Math 3210',
      courseTitle: 'Counting Down With Math',
      students: [],
      enrollmentKey: 'countdown',
      assignments: []
    }];
    this.enrolledCourses = [{
      _id: '0123456789',
      instructorID: '142434546474',
      courseAbbreviation: 'Math 0123',
      courseTitle: 'Counting Up With Math',
      students: ['999999'],
      enrollmentKey: 'countup',
      assignments: []
    }];
    */

  }
  
  getInstructedCourses(): void {
    this.courseService.getInstructedCourses().subscribe(courses => {
      this.instructedCourses = courses.instructedCourses;
    })
  }

  getEnrolledCourses(): void {
    this.courseService.getEnrolledCourses().subscribe(courses => {
      this.enrolledCourses = courses;
    })
  }
  


}


