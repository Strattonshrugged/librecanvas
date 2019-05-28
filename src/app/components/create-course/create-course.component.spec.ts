import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseComponent } from './create-course.component';

describe('CreateCourseComponent', () => {
  let component: CreateCourseComponent;
  let fixture: ComponentFixture<CreateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseComponent ]
    })
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
