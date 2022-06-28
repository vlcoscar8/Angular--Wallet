import { MovementsService } from './../../../../core/services/movements.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.scss'],
})
export class TotalAmountComponent implements OnInit {
  public totalAmount?: number;
  constructor(
    private authService: AuthService,
    private movService: MovementsService
  ) {}

  ngOnInit(): void {
    this.authService.getUserDetail().subscribe((res) => {
      this.totalAmount = res.cash;
    });

    this.movService.totalAmount$.subscribe((res) => {
      this.totalAmount = res;
    });
  }
}
