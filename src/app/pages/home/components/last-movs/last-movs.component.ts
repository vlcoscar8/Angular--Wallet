import { MovementsService } from './../../../../core/services/movements.service';
import { Movement } from './../../../../core/services/model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-movs',
  templateUrl: './last-movs.component.html',
  styleUrls: ['./last-movs.component.scss'],
})
export class LastMovsComponent implements OnInit {
  public movements: Movement[] = [];
  public updated: boolean = false;
  public array: string[] = ['from', 'to', 'type', 'amount'];

  constructor(private movService: MovementsService) {}

  ngOnInit(): void {
    this.movService.getMovements().subscribe((res) => {
      this.movements.push(res);
      if (this.movements.length > 1) {
        this.movements.shift();
      }
      this.updated = true;
    });
  }
}
