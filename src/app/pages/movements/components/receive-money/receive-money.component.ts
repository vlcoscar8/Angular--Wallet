import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receive-money',
  templateUrl: './receive-money.component.html',
  styleUrls: ['./receive-money.component.scss'],
})
export class ReceiveMoneyComponent implements OnInit {
  value = 'Clear me';
  public orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      order: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
    });
  }

  ngOnInit(): void {}

  public submitForm() {
    if (!this.orderForm.valid) {
      return;
    }
    console.log(this.orderForm.value);
    this.clearForm();
  }

  private clearForm() {
    this.orderForm.reset();
    Object.keys(this.orderForm.controls).forEach((key) => {
      this.orderForm.controls[key].setErrors(null);
    });
  }
}
