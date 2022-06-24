import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public hide: boolean = false;
  public registerFormShow: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  public userForm: FormGroup = this.fb.group({
    username: [
      '',
      [
        this.registerFormShow ? Validators.required : Validators.nullValidator,
        Validators.minLength(6),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  submitForm() {
    if (!this.userForm.valid) {
      return;
    }
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
