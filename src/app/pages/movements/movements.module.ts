import { MovementsComponent } from './movements.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsRoutingModule } from './movements-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MovementsComponent],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    MatTableModule,
    MatListModule,
    SharedModule,
  ],
})
export class MovementsModule {}
