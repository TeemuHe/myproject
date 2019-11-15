import {Component, OnInit} from '@angular/core';
import {Person} from '../classes/person';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  checked = false;
  person: Person;
  password: string;

  constructor(private snackBar: MatSnackBar, private router: Router) {
    this.person = new Person();
    this.password = '';
  }

  ngOnInit() {
  }

  openSnackbar() {
    this.snackBar.open('Submittia painettu', 'OK');
  }

  onSubmit(e) {
    console.log(e.value.firstName);
    console.log(e.controls.firstName.status);
    // this.personService.setPerson(this.person);
    this.router.navigate(['/calculator']);
  }

}
