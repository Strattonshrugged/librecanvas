import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService, TokenPayload } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'mean-sandbox';
  currentUser: TokenPayload;
  
  constructor(public auth: AuthenticationService, private cd: ChangeDetectorRef) {
    this.auth.currentUser.subscribe(x => {
      this.currentUser = x;
      this.cd.detectChanges()
    });
  }
  
  get isLoggedIn() {
    return this.currentUser;
  }
}
