import { MovementsService } from './../../../../core/services/movements.service';
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

  constructor(private fb: FormBuilder, private movService: MovementsService) {
    this.orderForm = this.fb.group({
      amount: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
    });
  }

  ngOnInit(): void {}

  public submitForm() {
    if (!this.orderForm.valid) {
      return;
    }
    this.movService
      .receiveMoney(this.orderForm.value)
      .subscribe((res) => console.log(res));
    this.clearForm();
  }

  private clearForm() {
    this.orderForm.reset();
    Object.keys(this.orderForm.controls).forEach((key) => {
      this.orderForm.controls[key].setErrors(null);
    });
  }
}
