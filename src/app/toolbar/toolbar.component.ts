import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  userEmail$: Observable<string>;

  constructor(private authService: AuthService, private router: Router) {
    this.userEmail$ = this.authService.getLoggedInUser();
    console.log(this.userEmail$ + 'uuseri');
  }

  ngOnInit() {

  }

  /*getEmail(email) {
    this.authService.checkLoggedIn(email);
    return email;
    // this.authService.checkLoggedIn(this.userEmail$);
    // console.log('säpö on ' + this.userEmail$);
  }*/

}
