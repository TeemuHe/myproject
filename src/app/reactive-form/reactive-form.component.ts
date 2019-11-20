import {Component, OnInit} from '@angular/core';
import {Person} from '../classes/person';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag

    if (password !== confirmPassword) {
      console.log('Does not match');
      AC.get('confirmPassword').setErrors({MatchPassword: true});
    } else {
      // console.log('Correct Password');
      return null;
    }
  }
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  // person: Person;
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {
    this.profileForm = fb.group({
      password: [''],
      confirmPassword: ['']
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
        firstName: ['Aku', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
        lastName: ['Ankka', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
        email: ['aku@ankka.fi', [Validators.required, Validators.minLength(5),
          Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]],
        userName: ['111199-813R', [Validators.required, Validators.minLength(11), Validators.maxLength(11),
          Validators.pattern('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d\\+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$')]],
        password: ['123456789Ok', [Validators.required,
          Validators.minLength(10), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{10,}')]],
        termsAndConditions: ['', [Validators.requiredTrue]],
        confirmPassword: ['123456789Ok', [Validators.required]]
      }/*,
    {
      validator: PasswordValidation.MatchPassword // Custom validation
    }*/);
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get userName() {
    return this.profileForm.get('userName');
  }

  get password() {
    return this.profileForm.get('password');
  }

  get termsAndConditions() {
    return this.profileForm.get('termsAndConditions');
  }

  get confirmPassword() {
    return this.profileForm.get('confirmPassword');
  }

  onSubmit() {
    console.log(this.profileForm);
    this.router.navigate(['/calculator']);
  }

  openSnackbar() {
    this.snackBar.open('Reactive form Submit painettu', 'OK');
  }
}
