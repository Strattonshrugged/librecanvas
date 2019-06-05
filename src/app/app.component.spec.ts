import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from './services/authentication.service';
import { By } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserDetails } from './models/user';
import { of } from 'rxjs';

describe('AppComponent', () => {


  beforeEach(async(() => {

    const fakeAuthenticationService = jasmine.createSpyObj('AuthenticationService', ['isLoggedIn']);
    fakeAuthenticationService.isLoggedIn.and.returnValue(of(true));

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        // { AuthenticationService, useValue: fakeAuthenticationService }
        AuthenticationService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Librecanvas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Librecanvas');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('#title')).nativeElement;

    expect(compiled.textContent).toContain('Librecanvas');

  });


}); // END OF DESCRIBE

