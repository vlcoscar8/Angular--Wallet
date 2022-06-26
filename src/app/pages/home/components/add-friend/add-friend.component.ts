import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent implements OnInit {
  public friendForm?: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.friendForm = this.fb.group({
      username: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  public submitForm() {
    const username = this.friendForm?.value.username;

    this.authService.addFriend(username).subscribe((res) => {
      this.authService.setFriendList().subscribe((res) => console.log(res));
    });
  }
}
