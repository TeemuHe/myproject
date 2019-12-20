import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../services/currency.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  public currencyData$: Observable<any>;

  currencyForm: FormGroup;
  totalAmount: number;
  MyArrayType: Array<any>;

  currencyValue: string;

  constructor(private fb: FormBuilder, private currencyService: CurrencyService) {
    this.currencyForm = fb.group({});

    this.MyArrayType = [
      {id: 'CAD', value: 1.4624},
      {id: 'HKD', value: 8.6566},
      {id: 'ISK', value: 137.2},
      {id: 'PHP', value: 56.271},
      {id: 'DKK', value: 7.472},
      {id: 'HUF', value: 330.77},
      {id: 'CZK', value: 25.49},
      {id: 'AUD', value: 1.6227},
      {id: 'RON', value: 4.776},
      {id: 'SEK', value: 10.4483},
      {id: 'IDR', value: 15558.78},
      {id: 'INR', value: 78.895},
      {id: 'BRL', value: 4.5097},
      {id: 'RUB', value: 69.5288},
      {id: 'NRK', value: 7.4486},
      {id: 'JPY', value: 121.81},
      {id: 'THB', value: 33.606},
      {id: 'CHF', value: 1.0913},
      {id: 'SGD', value: 1.5075},
      {id: 'PLN', value: 4.2706},
      {id: 'BGN', value: 1.9558},
      {id: 'TRY', value: 6.5732},
      {id: 'CNY', value: 7.7783},
      {id: 'NOK', value: 10.0353},
      {id: 'NZD', value: 1.692},
      {id: 'ZAR', value: 15.97},
      {id: 'USD', value: 1.1115},
      {id: 'MXN', value: 21.09},
      {id: 'ILS', value: 3.893},
      {id: 'CBP', value: 0.85055},
      {id: 'KRW', value: 1296.56},
      {id: 'MYR', value: 4.5999}
    ];
  }

  ngOnInit() {
    this.currencyData$ = this.currencyService.getCurrencyData();
    this.currencyForm = this.fb.group({
      amount: ['100', [Validators.required, Validators.pattern('[0-9]+')]]
    });
  }

  countResult(currencyValue, userAmount) {
    // console.log('Asiakas syötti summan ' + userAmount);
    this.totalAmount = userAmount / currencyValue;
    return this.totalAmount;
  }

  onSubmit(event: any) {
    this.currencyService.getCurrencyValue(this.currencyValue);
    return event.target.currencyShort;
  }

  get amount() {
    return this.currencyForm.get('amount');
  }

}
