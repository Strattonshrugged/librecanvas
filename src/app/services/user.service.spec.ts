import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AuthenticationService } from '../services/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, RouterTestingModule ],
    providers: [ AuthenticationService ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});




/*
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
  */

