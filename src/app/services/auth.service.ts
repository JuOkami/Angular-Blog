import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated() {
    let result = localStorage.getItem('currentUser');
    if (result === null || result == 'null'){
      return false;
    } else {
      return true;
    }
  }

  login(user:User){
    localStorage.setItem('currentUser', user.name);
  }

  logout(){
    localStorage.setItem('currentUser', JSON.stringify(null));
  }

  constructor() { }
}
