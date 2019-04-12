import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  userName: BehaviorSubject<string> = new BehaviorSubject('Guest');

  constructor() { }

  getName() {
    return this.userName.asObservable();
  }

  setName(name: string): void {
    this.userName.next(name);
  }
  
}