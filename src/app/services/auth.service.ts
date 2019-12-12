import {Injectable} from '@angular/core';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  login(email: string, password: string) {
    console.log(email);
    console.log(password);
  }

  logout() {

  }

  getLoggedInUser() {

  }

  checkLoggedInUser() {

  }
}
