import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../services/authentication.service';
import { CourseService } from './course.service';

describe('CourseService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ AuthenticationService ]

  }));

  it('should be created', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service).toBeTruthy();
  });
});


