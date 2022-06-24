import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  public hidePassword: boolean = false;
  public registerFormShow: boolean = false;
  public userForm?: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
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
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    if (!this.userForm?.valid) {
      return;
    }
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
