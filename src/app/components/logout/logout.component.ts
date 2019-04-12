import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout',
  template: `<a  class="dropdown-item" (click)="logout()" >Logout</a>`,
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private user: LoginService) { }

  ngOnInit() {
  }

  logout() {
    let answer = confirm('Are you sure you want to Logout?');
    if (answer) {
      localStorage.removeItem('currentUser');
      this.user.setName('Guest');
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['']);
    }
  }

}
