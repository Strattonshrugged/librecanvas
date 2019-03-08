import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error = '';
  
  constructor(private auth: AuthenticationService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  get f() { return this.loginForm.controls; }
  
  login() {
    if (this.loginForm.invalid) {
      return;
    }
    
    var credentials: TokenPayload = {
      email: this.f.email.value,
      password: this.f.password.value
    };
    
    this.auth.login(credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      this.error = err.error.message;
      console.error(err);
    }); 
  }
  
}
