import { TestBed } from '@angular/core/testing';
import { AssignmentService } from './assignment.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../services/authentication.service';

describe('AssignmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, RouterTestingModule ],
    providers: [ AuthenticationService ]
  }));

  it('should be created', () => {
    const service: AssignmentService = TestBed.get(AssignmentService);
    expect(service).toBeTruthy();
  });
});



