import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public userLogged?: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.checkUserLogged()
    this.authService.userLogged$.subscribe((res) => (this.userLogged = res));
  }

  public logout() {
    this.authService.logout().subscribe((res) => {
      if (res.status === 200) {
        this.router.navigate(['']);
      }
    });
  }
}
