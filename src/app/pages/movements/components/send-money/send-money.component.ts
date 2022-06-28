import { MovementsService } from './../../../../core/services/movements.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { FriendsService } from './../../../../core/services/friends.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss'],
})
export class SendMoneyComponent implements OnInit {
  public selectedValue?: string;
  public friendsList?: string[];
  public sendForm: FormGroup;
  public error?: string;

  constructor(
    private friendService: FriendsService,
    private movService: MovementsService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.sendForm = this.fb.group({
      to: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
    });
  }

  ngOnInit(): void {
    this.authService.getUserDetail().subscribe((res) => {
      this.friendsList = res.friends.map((el) => el.username);
    });

    this.friendService.friendsList$.subscribe((res) => {
      this.friendsList = res;
    });
  }

  public submitForm() {
    this.movService.sendMoney(this.sendForm.value).subscribe({
      next: () => {
        this.movService.updateMovementsListeners();
      },
      error: (res) => {
        this.error = res.error;
        setTimeout(() => {
          this.error = undefined;
        }, 2000);
      },
    });

    this.clearForm();
  }

  private clearForm() {
    this.sendForm.reset();
    Object.keys(this.sendForm.controls).forEach((key) => {
      this.sendForm.controls[key].setErrors(null);
    });
  }
}
