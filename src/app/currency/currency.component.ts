import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../services/currency.service';
import {Currency} from '../classes/currency';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {conditionallyCreateMapObjectLiteral} from '@angular/compiler/src/render3/view/util';

/*import {CURRENCIES} from '../mock-currencies';

export const CURRENCIES: Currency[] = [

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
  {id: 'NZD', value: 	1.692},
  {id: 'ZAR', value: 15.97},
  {id: 'USD', value: 1.1115},
  {id: 'MXN', value: 21.09},
  {id: 'ILS', value: 3.893},
  {id: 'CBP', value: 0.85055},
  {id: 'KRW', value: 1296.56},
  {id: 'MYR', value: 4.5999}
];*/

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  // currencies = CURRENCIES;

  public currencyData$: Observable<any>;

  currencyForm: FormGroup;
  totalAmount: number;
  MyArrayType: Array<any>;


  /*currencyNames: Array<string> = ['CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'AUD', 'RON',
    'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF',
    'SGD', 'PLN', 'BGN', 'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'USD',
    'MXN', 'ILS', 'GBP', 'KRW', 'MYR'];*/
  currencyValue: string;
  // rates: Array<Currency>;
  /*rates = [new Currency('CAD: 1.4712', 'EUR', 'pvm'),
    new Currency('HKD: 8.7062', 'EUR', 'pvm'),
    new Currency('ISK: 137', 'EUR', 'pvm'),
    new Currency('PHP: 56.441', 'EUR', 'pvm'),
    new Currency('DKK: 7.4731', 'EUR', 'pvm')];*/

  constructor(private fb: FormBuilder, private currencyService: CurrencyService) {
    this.currencyForm = fb.group({});
    // type MyArrayType = Array<{ id: string, value: number }>;

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
    // console.log(this.MyArrayType);
    /*this.currencyService.getCurrencyData().subscribe(result => {
      console.log('Data fetched from API');
    });*/
    this.currencyForm = this.fb.group({
      amount: ['100', [Validators.required, Validators.pattern('[0-9]+')]]
    });
  }

  countResult(currencyValue, userAmount) {
    // console.log('Asiakas syötti ' + userAmount);
    this.totalAmount = userAmount / currencyValue;
    return this.totalAmount;
  }

  onSubmit(event: any) {
    // console.log(this.currencyValue + 'sit se submittinappi');
    // console.log('Selevä homma ' + event.target.currencyShort);
    this.currencyService.getCurrencyValue(this.currencyValue);
    return event.target.currencyShort;
  }

  get amount() {
    return this.currencyForm.get('amount');
  }

}
