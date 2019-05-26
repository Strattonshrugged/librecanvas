import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})

export class CreateCourseComponent implements OnInit {
  createCourseForm: FormGroup;
  error = '';

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createCourseForm = this.fb.group({
      // instructor: ... need id from payload ... how to get userID from payload?
      courseTitle: ['', [Validators.required]],
      courseAbbreviation: ['', [Validators.required, Validators.email]],
      enrollmentKey: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() { return this.createCourseForm.controls; }

  createcourse() {
    if (this.createCourseForm.invalid) {
      return;
    }

    // how do I actually send this to the database ...



  } // end of create course

} // end of class
