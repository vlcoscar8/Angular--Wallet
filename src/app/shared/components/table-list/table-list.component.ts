import { forkJoin, switchMap } from 'rxjs';
import { MovementsService } from './../../../core/services/movements.service';
import { Movement } from './../../../core/services/model/user.model';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit, AfterViewInit {
  @Input() public type?: string;
  public movements: Movement[] = [];
  public array: string[] = ['from', 'to', 'type', 'amount'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private movService: MovementsService) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.movService.getMovements().subscribe((res) => {
      this.movements = res.reverse();

      if (this.type === 'last' && this.movements) {
        this.movements = this.movements
          .reverse()
          .splice(this.movements.length - 1, 1);
      }

      this.dataSource = new MatTableDataSource(this.movements);
      this.dataSource.paginator = this.paginator;
    });
  }
}
