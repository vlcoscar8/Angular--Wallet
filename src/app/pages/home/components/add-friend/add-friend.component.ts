import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent implements OnInit {
  public friendForm?: FormGroup;

  constructor(private fb: FormBuilder) {
    this.friendForm = this.fb.group({
      username: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  public submitForm() {
    console.log(this.friendForm?.value);
  }
}
