import { Component} from '@angular/core';
import { UserService } from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day5';
  public users;
  constructor(private userService: UserService) {
    this.userService.getUsers().toPromise().then(users => {
      this.users = users;
      console.log(this.users)
    });
  }
}
