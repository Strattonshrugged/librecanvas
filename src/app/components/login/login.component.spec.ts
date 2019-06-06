import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';





describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule ],
      declarations: [ LoginComponent ],
      providers: [ AuthenticationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reject invalid forms', () => {
    expect(component.loginForm.invalid).toBeTruthy();

  });




}); // END OF DESCRIBE


/*

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
  */
