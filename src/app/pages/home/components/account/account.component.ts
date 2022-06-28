import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public totalAmount?: number;
  public incomes?: number;
  public losses?: number;
  public username?: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserDetail().subscribe((res) => {
      this.totalAmount = res.cash;
      this.incomes = res.movements
        .filter((el) => el.type === 'receive')
        .reduce((acc, el) => acc + el.amount, 0);
      this.losses = res.movements
        .filter((el) => el.type === 'send')
        .reduce((acc, el) => acc + el.amount, 0);
    });

    this.authService.checkUserLogged();
    this.authService.userLogged$.subscribe((e) => {
      e
        ? this.authService.getUserDetail().subscribe((res) => {
            this.username = res.username;
          })
        : (this.username = undefined);
    });
  }
}
