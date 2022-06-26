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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserDetail().subscribe((res) => {
      console.log(res, 1);
      this.friendsList = res.friends.map((el) => el.username);
    });

    this.authService.friendsList$.subscribe((res) => {
      console.log(res, 2);
      this.friendsList = res;
    });
  }
}
