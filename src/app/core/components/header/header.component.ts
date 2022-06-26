import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public username?: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.checkUserLogged();
    this.authService.userLogged$.subscribe((e) => {
      e
        ? this.authService.getUserDetail().subscribe((res) => {
            this.username = res.username;
          })
        : (this.username = undefined);
    });
  }
}
