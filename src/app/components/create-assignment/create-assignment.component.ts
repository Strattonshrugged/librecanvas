import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../models/assignment';
import { NgControlStatusGroup, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from 'src/app/services/assignment.service';
import { Course } from '../../models/course';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})
export class CreateAssignmentComponent implements OnInit {
  createAssignmentForm: FormGroup;
  assignment: Assignment;
  courseAddress: string;

    constructor(
      private route: ActivatedRoute,
      private assignmentService: AssignmentService,
      private location: Location,
      private router: Router,
      private fb: FormBuilder) { }
  
    ngOnInit() {
      this.courseAddress = this.route.snapshot.paramMap.get(`id`);
      this.loadBlankForm();
    }
  
  loadBlankForm(): void {
    this.createAssignmentForm = this.fb.group({
      title: '',
      visibility: '',
      dueDate: '',
      pointValue: '',
      task: '',
      courseID: this.route.snapshot.paramMap.get(`id`)
    })
  } // end of loadForm
  
  createAssignment()  {
    if (this.createAssignmentForm.invalid) {
      console.log('getting invalid create course');
      return;
    }

    this.assignmentService.addAssignment( 
      this.createAssignmentForm.get('title').value,
      this.createAssignmentForm.get('visibility').value,
      this.createAssignmentForm.get('dueDate').value,
      this.createAssignmentForm.get('pointValue').value,
      this.createAssignmentForm.get('task').value,
      this.createAssignmentForm.get('courseID').value
    ).subscribe(() => {
      this.router.navigateByUrl('/courses/' + this.courseAddress)
    })
  } // end of createAssignment
  
  
  
  
  
} // END OF CLASS