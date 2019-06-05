import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseService } from '../../services/course.service';
import { of } from 'rxjs';


describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  const fakeCourseService = jasmine.createSpyObj('CourseService', ['getAllCourses']);
  fakeCourseService.getAllCourses.and.returnValue(of(
    {
      "instructedCourses": [],
      "enrolledCourses": [],
      "allOtherCourses": []
    }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ CoursesComponent ],
      providers: [ AuthenticationService,
        {
          provide: CourseService,
          useValue: fakeCourseService
        }
      ]

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
