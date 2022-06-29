import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, switchMap, Observable, forkJoin, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Movement, SendForm, UserDetailResponse } from './model/user.model';

const ACCESS_TOKEN = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class MovementsService {
  public movementsList$: ReplaySubject<Movement[]> = new ReplaySubject();
  public totalAmount$: ReplaySubject<number> = new ReplaySubject();

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  private getUserIdLocalStorage(): string {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const userId: string = token ? JSON.parse(token).userId : '';
    return userId;
  }

  public getMovements(): Observable<Movement[]> {
    return this.authService.getUserDetail().pipe(
      map((res) => {
        const array = res.movements.map((mov) => mov);
        this.movementsList$.next(array);
        return array.reverse();
      })
    );
  }

  public receiveMoney(body: object): Observable<UserDetailResponse> {
    const userId = this.getUserIdLocalStorage();
    return this.httpClient.put<UserDetailResponse>(
      `${environment.api_url}user/receive/${userId}`,
      body
    );
  }

  public sendMoney(formBody: SendForm): Observable<Movement> {
    const userId = this.getUserIdLocalStorage();
    const requestBody: object = {
      from: userId,
      ...formBody,
    };

    return this.httpClient.put<Movement>(
      `${environment.api_url}user/send`,
      requestBody
    );
  }

  public updateMovementsListeners() {
    this.authService.getUserDetail().subscribe((res) => {
      this.movementsList$.next(res.movements.reverse());
      this.totalAmount$.next(res.cash);
    });
  }
}
