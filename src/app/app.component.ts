import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-sandbox';
  
  constructor(private router: Router, private auth: AuthenticationService) {}
  
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
