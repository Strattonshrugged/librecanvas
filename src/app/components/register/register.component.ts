import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  error = '';
  
  constructor(private auth: AuthenticationService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
  register() {
    if (this.registerForm.invalid) {
      return;
    }
    
    // Use values from form to register user
    var credentials: TokenPayload = {
      email: this.f.email.value,
      name: this.f.name.value,
      password: this.f.password.value
    };
    
    this.auth.register(credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      this.error = err.error.message;
      console.error(err);
    });
  }

}
