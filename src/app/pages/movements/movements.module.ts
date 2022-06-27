import { MatIconModule } from '@angular/material/icon';
import { MovementsComponent } from './movements.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsRoutingModule } from './movements-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReceiveMoneyComponent } from './components/receive-money/receive-money.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovementsComponent,
    ReceiveMoneyComponent,
    TotalAmountComponent,
  ],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    MatTableModule,
    MatListModule,
    SharedModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
})
export class MovementsModule {}
