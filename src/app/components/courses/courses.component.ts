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


}


