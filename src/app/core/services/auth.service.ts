import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  RegisterResponse,
  User,
  LoginResponse,
  LogoutResponse,
  UserDetailResponse,
} from './model/user.model';

const ACCESS_TOKEN = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userLogged$: ReplaySubject<boolean> = new ReplaySubject();

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

  public getUserDetail(): Observable<UserDetailResponse> {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const userId: string = token ? JSON.parse(token).userId : '';
    return this.httpClient.get<UserDetailResponse>(
      `${environment.api_url}user/${userId}`
    );
  }

  /**
   * Function that check if the user is logged getting the token from localstorage
   */
  public checkUserLogged(): any {
    localStorage.getItem(ACCESS_TOKEN)
      ? this.userLogged$.next(true)
      : this.userLogged$.next(false);
  }

  public getBearerToken(): string {
    const token = localStorage.getItem(ACCESS_TOKEN);
    return token ? JSON.parse(token).token.split(' ')[1] : '';
  }

  public addFriend(username: string): Observable<UserDetailResponse> {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const userId: string = token ? JSON.parse(token).userId : '';
    const body = {
      username: username,
    };
    return this.httpClient.put<UserDetailResponse>(
      `${environment.api_url}user/add/${userId}`,
      body
    );
  }
}
