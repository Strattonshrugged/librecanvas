import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAssignmentComponent } from './create-assignment.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AssignmentService } from '../../services/assignment.service';

describe('CreateAssignmentComponent', () => {
  let component: CreateAssignmentComponent;
  let fixture: ComponentFixture<CreateAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAssignmentComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule ],
      providers: [ AssignmentService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


