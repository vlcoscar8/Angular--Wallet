import { MovementsService } from './../../../core/services/movements.service';
import { Movement } from './../../../core/services/model/user.model';
import {
  Component,
  HostListener,
  Input,
  OnChanges,
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
export class TableListComponent implements OnInit, OnChanges {
  @Input() public type?: string;
  public movements: Movement[] = [];
  public array: string[] = ['from', 'to', 'type', 'amount'];
  public dataSource: any;
  public isDesktop?: boolean;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private movService: MovementsService) {}

  @HostListener('window:resize')
  onResize() {
    window.innerWidth > 800
      ? (this.isDesktop = true)
      : (this.isDesktop = false);
  }

  ngOnInit(): void {
    this.movService.getMovements().subscribe((res) => {
      if (this.type === 'last') {
        this.movements = res.splice(res.length - 1, 1);
        this.dataSource = new MatTableDataSource(res.splice(res.length - 1, 1));
        this.dataSource.paginator = this.paginator;
        return;
      }

      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    });

    this.movService.movementsList$.subscribe((res) => {
      if (this.dataSource) {
        this.dataSource.data = res;
      }
    });
  }

  ngOnChanges(): void {}
}
