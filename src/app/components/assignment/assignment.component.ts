import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../models/assignment';
import { NgControlStatusGroup, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from 'src/app/services/assignment.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})

export class AssignmentComponent implements OnInit {
assignmentForm: FormGroup = this.fb.group({
  title: "",
  visibility: "",
  dueDate: "",
  pointValue: "",
  task: ""
})
assignment: Assignment;

  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentService,
    private location: Location,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.fetchAssignment();
  }


  fetchAssignment(): void {  
    const id = this.route.snapshot.paramMap.get(`id`);
    this.assignmentService.getAssignment(id)
      .subscribe(serviceResponse => {
        this.assignment = serviceResponse;
        this.loadForm();
      });
  }

  loadForm() {
    this.assignmentForm = 
      this.fb.group({
      title: this.assignment.title,
      visibility: this.assignment.visibility,
      dueDate: this.assignment.dueDate,
      pointValue: this.assignment.dueDate,
      task: this.assignment.dueDate
    })
  }

  saveAssignment() {

  }
} // END OF CLASS
