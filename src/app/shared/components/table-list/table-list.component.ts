import { MovementsService } from './../../../core/services/movements.service';
import { Movement } from './../../../core/services/model/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  public movements: Movement[] = [];
  public updated: boolean = false;
  @Input() public type?: string;
  public array: string[] = ['from', 'to', 'type', 'amount'];

  constructor(private movService: MovementsService) {}

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
