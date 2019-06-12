import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignmentComponent } from './assignment.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AssignmentService } from '../../services/assignment.service';


describe('AssignmentComponent', () => {
  let component: AssignmentComponent;
  let fixture: ComponentFixture<AssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule ],
      providers: [ AssignmentService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
