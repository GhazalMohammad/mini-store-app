import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl,Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router,private route:ActivatedRoute){}
  errorMessage: string = '';
  successMessage:string = '';
        loginForm = new FormGroup ({
         email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      });   
      returnUrl: string = '/home';

      ngOnInit(){
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
         let users = JSON.parse(localStorage.getItem('users') || '[]');

  const adminExists = users.some((u: any) => u.role === 'admin');

  if (!adminExists) {
    users.push({
      id: 1,
      email: 'admin@test.com',
      password: '123456',
      role: 'admin'
    });

    localStorage.setItem('users', JSON.stringify(users));
  }
      }

login() {

  if (this.loginForm.invalid) return;

  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;

  let users = JSON.parse(localStorage.getItem('users') || '[]');

  const foundUser = users.find((u: any) =>
    u.email === email && u.password === password
  );

  if (!foundUser) {
    this.errorMessage = 'Email or password is incorrect';
    this.successMessage = '';
    return;
  }

  this.errorMessage = '';
  this.successMessage = 'Login successful 🎉';

  localStorage.setItem('user', JSON.stringify(foundUser));

  setTimeout(() => {

    // 👇 هنا الفرق الحقيقي
    if (foundUser.role === 'admin') {
      this.router.navigate(['/admin']);   // 👑 admin dashboard
    } else {
      this.router.navigate(['/home']);    // 👤 user home
    }

  }, 800);
}
}


