import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCourseComponent } from './create-course.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('CreateCourseComponent', () => {
  let component: CreateCourseComponent;
  let fixture: ComponentFixture<CreateCourseComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule ],
      declarations: [ CreateCourseComponent ],
      providers: [ AuthenticationService ]    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate the form', () => {
    expect(component.createCourseForm.invalid).toBeTruthy();

    // expect form object to be invalid

    // put in values to make it valid

    // expect form object to be valid

    // put in bad email value (ex. greg@ )

    // expect form object to be invalid (or expect form field to be invalid)

    //expect();
    //component.createCourseForm.get('coursetitle').setValue('Jared')
  });
});
