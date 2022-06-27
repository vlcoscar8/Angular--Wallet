import { ReplaySubject, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Movement } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class MovementsService {
  public movementsList$: ReplaySubject<Movement[]> = new ReplaySubject();

  constructor(private authService: AuthService) {}

  public getMovements() {
    return this.authService.getUserDetail().pipe(
      switchMap((res) => {
        const array: Movement[] = [];
        res.movements.forEach((mov) => array.push(mov));
        this.movementsList$.next(array);
        return array;
      })
    );
  }
}
