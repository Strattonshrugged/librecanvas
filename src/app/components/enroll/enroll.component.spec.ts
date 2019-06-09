import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrollComponent } from './enroll.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


describe('EnrollComponent', () => {
  let component: EnrollComponent;
  let fixture: ComponentFixture<EnrollComponent>;
  let fakeRouter = {
    navigate: jasmine.createSpy('navigate')
  }
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [EnrollComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [AuthenticationService,
        { provide: Router, useValue: fakeRouter }]    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
