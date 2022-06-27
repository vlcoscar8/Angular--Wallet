import { FriendsService } from './../../../../core/services/friends.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ErrorResponse } from 'src/app/core/services/model/error.models';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent implements OnInit {
  public friendForm: FormGroup;
  public error?: string;

  constructor(private fb: FormBuilder, private friendService: FriendsService) {
    this.friendForm = this.fb.group({
      username: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  public addFriend() {
    const username = this.friendForm.value.username;

    this.friendService.addFriend(username).subscribe({
      next: () =>
        this.friendService.setFriendList().subscribe(() => this.clearForm()),
      error: (res) => this.setError(res),
    });
  }

  public removeFriend() {
    const username = this.friendForm.value.username;

    this.friendService.removeFriend(username).subscribe({
      next: () =>
        this.friendService.setFriendList().subscribe(() => this.clearForm()),
      error: (res) => this.setError(res),
    });
  }

  private clearForm() {
    this.friendForm.reset();
    Object.keys(this.friendForm.controls).forEach((key) => {
      this.friendForm.controls[key].setErrors(null);
    });
  }

  private setError(res: ErrorResponse) {
    this.error = res.error;
    setTimeout(() => {
      this.error = '';
      this.clearForm();
    }, 2000);
  }
}
