import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  
  constructor() {}

  userArray: User[] = [];

  isRegistered(user: User) {
    let result: string | null = localStorage.getItem('users');
    if (result == null) {
      return false;
    } else {
      this.userArray = JSON.parse(result);
      for (const element of this.userArray) {
        if (element.name == user.name && element.password == user.password){
          return true;
        } 
      }
      return false;
      }
    }
  
  
  writeUser(user: User) {
    if (localStorage.getItem('users') == null) {
      user.id = 1;
      this.userArray.push(user);
      localStorage.setItem('users', JSON.stringify(this.userArray));
      this.userArray = [];
    } else {
      let result: string | null = localStorage.getItem('users');
      if (result != null) {
        this.userArray = JSON.parse(result);
        user.id = this.userArray.length + 1;
        this.userArray.push(user);
        localStorage.setItem('users', JSON.stringify(this.userArray));
        this.userArray = [];
      }
    }
  }

  isPseudoFree(pseudo: string): boolean {
    let result: string | null = localStorage.getItem('users');
    if (result == null) {
      return true;
    } else {
      this.userArray = JSON.parse(result);
      for (const element of this.userArray) {
        if (element.name == pseudo){
          return false;
        } 
      }
      return true;
    }
  }
}
