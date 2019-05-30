import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../../../services/authentication.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { UserEditComponent } from './user-edit.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserEditComponent', () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule ],
      declarations: [ UserEditComponent ],
      providers: [ AuthenticationService ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
