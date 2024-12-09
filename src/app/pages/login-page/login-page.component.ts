import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  username: string | undefined;
  password: string | undefined;
  correctUsername = 'MyProject';
  correctPassword = 'IWantGoToProject';

  constructor(private router: Router) {}
  onSubmit() {
    const { username, password } = this.form.value; // Получаем значения из формы

    if (
      username === this.correctUsername &&
      password === this.correctPassword
    ) {
      this.router.navigate(['/search']); // Переход на другую страницу
    } else {
      alert('Неверный логин или пароль');
    }
  }
}
