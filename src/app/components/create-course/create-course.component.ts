import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})

export class CreateCourseComponent implements OnInit {
  createCourseForm: FormGroup;
  error = '';

  constructor(private userService: UserService, private fb: FormBuilder) {

  }

  
  ngOnInit() {
    this.createCourseForm = this.fb.group({
      coursetitle: ['', [Validators.required]],
      courseabbreviation: ['', [Validators.required]],
      enrollmentkey: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  

  get f() { return this.createCourseForm.controls; }

  createcourse() {
    console.log('creating course');

    if (this.createCourseForm.invalid) {
      console.log('getting invalid create course');
      return;
    }

    this.userService.addCourse(
      this.createCourseForm.get('courseabbreviation').value,
      this.createCourseForm.get('coursetitle').value,
      this.createCourseForm.get('enrollmentkey').value

    ).subscribe(() => { console.log('course posted') });


    // console.log(this.createCourseForm.get('coursetitle').value);
    // this.userService.addCourse(this.createCourseForm.get('coursetitle'))

  } // end of create course

} // end of class
