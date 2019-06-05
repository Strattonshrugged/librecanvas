import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCourseComponent } from './create-course.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('CreateCourseComponent', () => {
  let component: CreateCourseComponent;
  let fixture: ComponentFixture<CreateCourseComponent>;
  let fakeRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule ],
      declarations: [ CreateCourseComponent ],
      providers: [AuthenticationService, { provide: Router, useValue: fakeRouter }]
    }
      )
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

    let buttonArray = fixture.debugElement.queryAll(By.css('.submitButton'));
    expect(buttonArray.length).toEqual(1);
    let button = buttonArray[0].nativeElement;
    button.click();
    expect(fakeRouter.navigate).not.toHaveBeenCalled;

    component.createCourseForm.get('coursetitle').setValue('');
    component.createCourseForm.get('courseabbreviation').setValue('');
    component.createCourseForm.get('enrollmentkey').setValue('123');
    button.click();
    expect(fakeRouter.navigate).not.toHaveBeenCalled;

    component.createCourseForm.get('coursetitle').setValue('Choc 123');
    component.createCourseForm.get('courseabbreviation').setValue('Chocolate Making');
    component.createCourseForm.get('enrollmentkey').setValue('1234');
    button.click();
    expect(fakeRouter.navigate).toHaveBeenCalled;

  });

});

