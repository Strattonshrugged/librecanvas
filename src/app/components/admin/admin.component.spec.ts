import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import { detectChanges } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/user';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  let fakeRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    const fakeUserService = jasmine.createSpyObj('UserService', ['getAllUsers']);
    fakeUserService.getAllUsers.and.returnValue(of( [{
      _id: '123', 
      email: 'test@example.com',
      name: 'joe',
      role: 'user',
      exp: 0,
      iat: 0
    }] as UserDetails[]
    ));

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ AdminComponent ],
      providers: [ AuthenticationService,
        {provide: UserService, useValue: fakeUserService},
        {provide: Router, useValue: fakeRouter } ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllUsers on init', () => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(this.fakeUserService.getAllUsers).toHaveBeenCalled();
    });
  });

  
  it('should call editUser when edit user button is pushed', async (() => {
    //fixture = TestBed.createComponent(AdminComponent);
    //component = fixture.componentInstance;
    
    //spyOn(component, 'editUser');
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      //spyOn(this.component, 'editUser');
      //expect(fixture.debugElement.query(By.css('.editUserButton'))).toBe(null);
      //expect(fixture.debugElement.query(By.css('.editUserButton')).nativeElement.isPresent()).toBe(true);
      let buttonArray = fixture.debugElement.queryAll(By.css('.editUserButton'));
      expect(buttonArray.length).toEqual(1);
      let button = buttonArray[0].nativeElement;
      button.click();
      //expect('editUser').toHaveBeenCalled;

      expect(fakeRouter.navigate).toHaveBeenCalledWith([`users/edit/123`]);

    })
  }));

  it('should call deleteUser when delete user button is pushed', () => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;

    fixture.whenStable().then(() => {
      spyOn(this.component, 'deleteUser');
      let button = fixture.debugElement.nativeElement.query(By.css('#deleteUserButton'));
      button.click();
      // TODO mock userService, verify deleteUser and fetchUser get called?
    })
  });


}); // END OF DESCRIBE
