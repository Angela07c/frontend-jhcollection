import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formData!: FormGroup;
  message!: string;

  constructor(private authService: AuthService) {
    this.formData = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  handleSubmit() {
    if (this.formData.valid) {
      console.log(this.formData.value);
      this.authService
        .loginUser(this.formData.value)
        .subscribe((data: string | boolean) => {
          console.log(data);

          if (data == 'error') {
            this.message = 'error en el servidor';
          } else if (!data) {
            this.message = 'El usuario no existe por favor Registrese!!';
          } else {
            this.message = 'Logueando por favor espere';
          }

          setTimeout(() => {
            this.message = '';
          }, 2000);
        });
      this.formData.reset();
    }
  }
}
