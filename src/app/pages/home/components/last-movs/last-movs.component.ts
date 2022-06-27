import { MovementsService } from './../../../../core/services/movements.service';
import { Movement } from './../../../../core/services/model/user.model';
import { Component, OnInit } from '@angular/core';
import { forkJoin, switchMap } from 'rxjs';

@Component({
  selector: 'app-last-movs',
  templateUrl: './last-movs.component.html',
  styleUrls: ['./last-movs.component.scss'],
})
export class LastMovsComponent implements OnInit {
  public movements?: Movement[];

  constructor(private movService: MovementsService) {}

  ngOnInit(): void {
    this.movService
      .getMovements()
      .pipe(
        switchMap((res) => {
          let users = res.movements.map((mov) => {
            const usersIdArray = [mov.from[0], mov.to[0]];
            const ObservableArray = usersIdArray.map((id) =>
              this.movService.getUserById(id)
            );

            let currentMovement = mov;

            forkJoin(ObservableArray).subscribe((res) => {
              currentMovement.from = res[0].username;
              currentMovement.to = res[1].username;
            });

            return currentMovement;
          });
          return users;
        })
      )
      .subscribe(() => {});

    this.movService.movementsList$.subscribe((res) => (this.movements = res));
  }
}
