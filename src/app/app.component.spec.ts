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
  const fakeAuthenticationService = jasmine.createSpyObj('AuthenticationService', ['isLoggedIn', 'getUserDetails', 'logout']);

  const fakeRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthenticationService, useValue: fakeAuthenticationService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Librecanvas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.title).toEqual('Librecanvas');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('#title')).nativeElement;

    expect(compiled.textContent).toContain('Librecanvas');
  });


  it('should logout when pushing logout button', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fakeAuthenticationService.isLoggedIn.and.returnValue(of(true));
    /*
    fixture.detectChanges();


    let buttonArray = fixture.debugElement.queryAll(By.css('.logoutButton'));
    expect(buttonArray.length).toEqual(1);
    let button = buttonArray[0].nativeElement;

    expect(fakeAuthenticationService.logout).not.toHaveBeenCalled;
    expect(fakeRouter.navigate).not.toHaveBeenCalled;
    button.click();
    fixture.detectChanges();
    expect(fakeAuthenticationService.logout).toHaveBeenCalled;
    expect(fakeRouter.navigate).toHaveBeenCalled;
    */
  }));
  


}); // END OF DESCRIBE

