import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';



describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ CoursesComponent ],
      providers: [ AuthenticationService ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
