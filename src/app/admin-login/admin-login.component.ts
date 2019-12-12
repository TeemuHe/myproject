import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  logInFunction(email: string, password: string) {
    this.authService.login(email, password);
  }

  onSubmit() {
    console.log(this.userForm);
  }

  cancelLogging() {
    this.router.navigate(['/calculator']);
  }

}
