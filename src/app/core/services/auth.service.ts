import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  RegisterResponse,
  User,
  LoginResponse,
  LogoutResponse,
} from './model/user.model';

const ACCESS_TOKEN = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userLogged$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient) {}

  public register(user: User): Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>(
      `${environment.api_url}user/register`,
      user
    );
  }

  public login(user: User): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>(`${environment.api_url}user/login`, user)
      .pipe(
        tap((res: LoginResponse) => {
          const userData = JSON.stringify({
            token: res.token,
            userId: res.userId,
          });
          localStorage.setItem(ACCESS_TOKEN, userData);
          this.userLogged$.next(true);
        })
      );
  }

  public logout(): Observable<LogoutResponse> {
    localStorage.removeItem(ACCESS_TOKEN);
    this.userLogged$.next(false);

    return this.httpClient.post<LogoutResponse>(
      `${environment.api_url}user/logout`,
      ''
    );
  }
}
