import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';

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
});
