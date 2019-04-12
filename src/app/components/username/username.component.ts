import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-username',
  template: `
  <ng-container *ngIf="userName == 'Guest'">
    <div class="nav-link dropdown">
				<a type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
					aria-expanded="false">
					<i class="fa fa-user mt-1"></i> {{userName}}
			  </a>
				<div class="dropdown-menu">
          <a  class="dropdown-item" routerLink="/register" >Register</a>
          <a  class="dropdown-item" routerLink="/login" >Login</a>
        </div>
    </div>
  </ng-container>
  <ng-container *ngIf="userName !== 'Guest'">
    <div class="nav-link dropdown">
				<a type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
					aria-expanded="false">
					<i class="fa fa-user mt-1"></i> {{userName}}
			  </a>
				<div class="dropdown-menu">
					<app-logout></app-logout>
        </div>
    </div>
  </ng-container>
    
    
    `,
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  private userName: string;

  constructor(private user: LoginService) {
    
    this.user.getName().subscribe(response => {
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      
      let user = '';
      if (currentUser) {
        user = currentUser.userName;
      }
      if (response == "Guest") {
        this.userName = "Guest";
        
      } else {
        this.userName = response;
        
      }
    });
  }
  ngOnInit() {
  }

}
