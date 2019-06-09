import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  enrollmentForm: FormGroup;
  error = '';

  constructor(
    private userService: UserService,
    private courseService: CourseService,
    private router: Router,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    this.enrollmentForm = this.fb.group({
      enrollmentkey: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() { return this.enrollmentForm.controls; }


  enroll() {
    if (this.enrollmentForm.invalid) {
      console.log('getting invalid enrollment form');
      return;
    }

    this.courseService.addStudent(
      this.enrollmentForm.get('enrollmentkey').value

    ).subscribe(() => {
      this.router.navigateByUrl('/courses');
    });
  }

} // end of class

