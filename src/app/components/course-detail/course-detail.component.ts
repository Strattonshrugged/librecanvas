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
  course: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location) { }

  ngOnInit() {
    // this.course.courseAbbreviation = 'loading';
    // this.course.courseTitle = 'loading';

    this.getCourseDetails();
  }


  getCourseDetails(): void {
    const id = this.route.snapshot.paramMap.get(`id`);
    console.log(id);
    this.courseService.getCourseDetails(id)
      .subscribe(courseResponse => this.course = courseResponse);
  }


} // end of Component


