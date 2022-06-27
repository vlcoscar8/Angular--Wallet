import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Movement, UserDetailResponse } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class MovementsService {
  public movementsList$: ReplaySubject<Movement[]> = new ReplaySubject();

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  public getMovements(): Observable<UserDetailResponse> {
    return this.authService
      .getUserDetail()
      .pipe(tap((res) => this.movementsList$.next(res.movements)));
  }

  public getUserById(userId: string): Observable<UserDetailResponse> {
    return this.httpClient.get<UserDetailResponse>(
      `${environment.api_url}user/${userId}`
    );
  }
}
