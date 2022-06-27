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
  public updated: boolean = false;
  public array: string[] = ['from', 'to', 'type', 'amount'];
  public dataSource = new MatTableDataSource<Movement>(this.movements);

  constructor(private movService: MovementsService) {}

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.movService.getMovements().subscribe((res) => {
      this.movements.push(res);

      if (this.type === 'last' && this.movements.length > 1) {
        this.movements.shift();
      }

      this.updated = true;
    });
  }
}
