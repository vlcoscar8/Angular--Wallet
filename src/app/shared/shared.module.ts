import { TableListComponent } from './components/table-list/table-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableListComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TableListComponent],
})
export class SharedModule {}
