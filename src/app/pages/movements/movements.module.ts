import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsRoutingModule } from './movements-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MovListComponent } from './components/mov-list/mov-list.component';

@NgModule({
  declarations: [
    MovListComponent
  ],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    MatTableModule,
    MatListModule,
  ],
})
export class MovementsModule {}
