import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public updateFriendList: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public updateToggle(event: boolean) {
    this.updateFriendList = event;
  }
}
