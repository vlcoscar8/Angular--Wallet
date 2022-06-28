import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  public hidePassword: boolean = false;
  public registerFormShow: boolean = false;
  public userForm: FormGroup;
  public error?: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      username: [
        '',
        [
          this.registerFormShow
            ? Validators.required
            : Validators.nullValidator,
          Validators.minLength(6),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  submitForm() {
    if (!this.userForm.valid) {
      return;
    }

    this.userForm.value.username
      ? this.authService.register(this.userForm.value).subscribe({
          next: () => {
            this.registerFormShow = false;
            this.clearForm();
          },
          error: (res) => {
            this.error = res.error;
          },
        })
      : this.authService.login(this.userForm.value).subscribe({
          next: () => {
            this.router.navigate(['/home']);
            this.clearForm();
          },
          error: (res) => {
            this.error = res.error;
          },
        });
  }

  private clearForm() {
    this.userForm.reset();
    Object.keys(this.userForm.controls).forEach((key) => {
      this.userForm.controls[key].setErrors(null);
    });
  }
}
