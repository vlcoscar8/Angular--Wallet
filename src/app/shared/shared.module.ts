import { TableListComponent } from './components/table-list/table-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [TableListComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  exports: [TableListComponent],
})
export class SharedModule {}
