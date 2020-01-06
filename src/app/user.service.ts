import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from "rxjs/operators";

interface User {
  name: string;
  birthDate: string;
};

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private users: Array<User> = [
    {
      name: "murris",
      birthDate: "1979/10/22"
    },
    {
      name: "Guillermo",
      birthDate: "1991/02/25"
    },
    {
      name: "Jesuco",
      birthDate: "1000/01/25"
    }
  ];

  constructor() { }

  /**
   * getUsers
   */
  public getUsers() {
    return of(this.users).pipe(
      map(users => {
        return users.map( user => {
          return <User>{
            name: this.convertToUpper(user.name),
            birthDate: user.birthDate
          }
        })
      })
    )
  }

  private convertToUpper(value: string) {
    return value.toUpperCase();
  }

}
