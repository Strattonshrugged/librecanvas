import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

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


