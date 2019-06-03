import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ AdminComponent ],
      providers: [ AuthenticationService ]

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

  it('should call fetchUsers on init', () => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    spyOn(component, 'fetchUsers');

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.fetchUsers).toHaveBeenCalled();
    });
  });

  it('should call deleteUser and fetchUsers on deleteUser', () => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    spyOn(this.component, 'deleteUser');
    spyOn(this.component, 'fetchUsers');

    let button = fixture.debugElement.nativeElement.query(By.css('#logoutButton'));
    button.click();

    fixture.whenStable().then(() => {
      expect(this.component.deleteUser).toHaveBeenCalled();
      expect(this.component.fetchUsers).toHaveBeenCalled();
    })

  });


});
