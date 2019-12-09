import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencyForm: FormGroup;
  currencyTwo: number;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.currencyForm = this.fb.group({
      currencyOne: ['10', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  onSubmit(currencyOne) {
    console.log(currencyOne.value);
    this.currencyTwo = currencyOne.value * 1.5;
    console.log(this.currencyTwo);
  }

  get currencyOne() {
    return this.currencyForm.get('currencyOne');
  }

}
