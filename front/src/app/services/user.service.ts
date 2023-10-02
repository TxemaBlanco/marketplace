import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  [x: string]: any;
  loggedInUsername: string = "";

  setLoggedInUsername(username: string) {
    this.loggedInUsername = username;
  }

  getLoggedInUsername(): string {
    return this.loggedInUsername;
  }
 
}






