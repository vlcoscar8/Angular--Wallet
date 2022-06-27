import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { AccountComponent } from './components/account/account.component';
import { FriendsComponent } from './components/friends/friends.component';
import { AddFriendComponent } from './components/add-friend/add-friend.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LastMovsComponent } from './components/last-movs/last-movs.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    HomeComponent,
    AccountComponent,
    FriendsComponent,
    AddFriendComponent,
    LastMovsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
  ],
})
export class HomeModule {}
