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

  constructor(
    private friendService: FriendsService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.sendForm = this.fb.group({
      friend: ['', [Validators.required]],
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
    console.log(this.sendForm.value);
  }
}
