import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './components/header/components/menu/menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
  providers: [AuthService],
  imports: [CommonModule, HttpClientModule, MatMenuModule, MatIconModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
