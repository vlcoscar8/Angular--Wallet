import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, switchMap, Observable, forkJoin, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Movement, UserDetailResponse } from './model/user.model';

const ACCESS_TOKEN = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class MovementsService {
  public movementsList$: ReplaySubject<Movement[]> = new ReplaySubject();

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  public getMovements(): Observable<Movement[]> {
    return this.authService.getUserDetail().pipe(
      map((res) => {
        const array = res.movements.map((mov) => mov);
        this.movementsList$.next(array);
        return array;
      })
    );
  }

  public receiveMoney(body: object): Observable<UserDetailResponse> {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const userId: string = token ? JSON.parse(token).userId : '';
    return this.httpClient.put<UserDetailResponse>(
      `${environment.api_url}user/receive/${userId}`,
      body
    );
  }
}
