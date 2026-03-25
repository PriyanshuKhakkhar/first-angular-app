import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './form.html',
  styleUrl: './form.css',
  imports: [FormField],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class App {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });
  loginForm = form(this.loginModel);
}