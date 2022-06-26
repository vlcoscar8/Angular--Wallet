import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public panelOpenState: boolean = false;
  public totalAmount?: number;
  public incomes?: number;
  public losses?: number;

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
  }
}
