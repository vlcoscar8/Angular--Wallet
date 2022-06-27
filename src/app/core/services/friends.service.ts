import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { UserDetailResponse } from './model/user.model';

const ACCESS_TOKEN = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  public friendsList$: ReplaySubject<string[]> = new ReplaySubject();

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public addFriend(username: string): Observable<UserDetailResponse> {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const userId: string = token ? JSON.parse(token).userId : '';
    const body = {
      friendUsername: username,
    };

    return this.httpClient.put<UserDetailResponse>(
      `${environment.api_url}user/add/${userId}`,
      body
    );
  }

  public setFriendList(): Observable<UserDetailResponse> {
    return this.authService
      .getUserDetail()
      .pipe(
        tap((res) =>
          this.friendsList$?.next(res.friends.map((el) => el.username))
        )
      );
  }
}
