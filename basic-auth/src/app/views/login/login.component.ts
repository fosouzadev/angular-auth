import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(10)
    ])
  });

  constructor(private router: Router){}

  logIn() {
    let userName = this.loginForm.get('userName');
    let password = this.loginForm.get('password');

    localStorage.setItem('auth', `${userName?.value};${password?.value}`);
    
    this.router.navigate(['/home']);
  }

}
