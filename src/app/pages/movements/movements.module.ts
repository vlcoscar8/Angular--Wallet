import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsRoutingModule } from './movements-routing.module';
import { MovementsComponent } from './movements.component';

@NgModule({
  declarations: [MovementsComponent],
  imports: [CommonModule, MovementsRoutingModule],
})
export class MovementsModule {}
