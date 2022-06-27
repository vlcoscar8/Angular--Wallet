import { FriendsService } from './../../../../core/services/friends.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  public panelOpenState: boolean = false;
  public friendsList?: string[];

  constructor(
    private authService: AuthService,
    private friendService: FriendsService
  ) {}

  ngOnInit(): void {
    this.authService.getUserDetail().subscribe((res) => {
      this.friendsList = res.friends.map((el) => el.username);
    });

    this.friendService.friendsList$.subscribe((res) => {
      this.friendsList = res;
    });
  }
}
