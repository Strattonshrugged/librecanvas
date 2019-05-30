import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, RouterTestingModule ],
    providers: [ AuthenticationService]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});

