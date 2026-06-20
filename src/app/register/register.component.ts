import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router:Router){}
  isLoading: boolean = false;
  something: boolean = false; 

  registerForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl ('',[Validators.required,Validators.minLength(6)])
  });
register() {

  this.registerForm.markAllAsTouched();

  if (this.registerForm.invalid) return;

  this.isLoading = true;

  setTimeout(() => {

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find(
      (u: any) => u.email === this.registerForm.value.email
    );

    if (existingUser) {
      this.isLoading = false;
      alert('Email already exists');
      return;
    }

    const newUser = {
      id: Date.now(),
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      role: 'user'
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    this.isLoading = false;

    this.router.navigate(['/login']);

  }, 1000);
}
getPasswordStrength(): number {

  const password = this.registerForm.value.password || '';

  let strength = 0;

  if (password.length >= 6) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*]/.test(password)) strength++;

  return strength;
}
     
}
