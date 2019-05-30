import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../../services/authentication.service';
import { ProfileComponent } from './profile.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ ProfileComponent ],
      providers: [ AuthenticationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

