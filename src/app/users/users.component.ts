// import { Component, computed, signal } from '@angular/core';
import { Component, computed, EventEmitter, Input, Output } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent {

  @Input({required: true}) user!: {
    id: string,
    name: string,
    avatar: string
  }

  @Input({required: true}) selected! : boolean

  // @Input() avatar!: string;
  // @Input() name!: string;
  // @Input() id!: string;
  @Output() select = new EventEmitter();


  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectUser(id : string) {

    this.select.emit(id);

    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // console.log('clicked!');
  }

}
