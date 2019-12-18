import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../services/currency.service';
import {Currency} from '../classes/currency';
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

  /*currencyNames: Array<string> = ['CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'AUD', 'RON',
    'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF',
    'SGD', 'PLN', 'BGN', 'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'USD',
    'MXN', 'ILS', 'GBP', 'KRW', 'MYR'];*/
  currencyShort: string;
  // rates: Array<Currency>;
  /*rates = [new Currency('CAD: 1.4712', 'EUR', 'pvm'),
    new Currency('HKD: 8.7062', 'EUR', 'pvm'),
    new Currency('ISK: 137', 'EUR', 'pvm'),
    new Currency('PHP: 56.441', 'EUR', 'pvm'),
    new Currency('DKK: 7.4731', 'EUR', 'pvm')];*/

  constructor(private fb: FormBuilder, private currencyService: CurrencyService) {
    this.currencyForm = fb.group({});
  }

  ngOnInit() {
    this.currencyData$ = this.currencyService.getCurrencyData();
    /*this.currencyService.getCurrencyData().subscribe(result => {
      console.log('Data fetched from API');
    });*/
    this.currencyForm = this.fb.group({
      amount: ['100', [Validators.required, Validators.pattern('[0-9]+')]]
    });
  }

  countResult(rate, amountFrom, amountTo/*, userAmount*/) {
    /*console.log(amountFrom);
    amountFrom = amountFrom.substring(18, amountFrom.length - 3);
    console.log(amountFrom);

    console.log(userAmount);

    this.totalAmount = userAmount * (amountTo / amountFrom);
    console.log(this.totalAmount);
    return this.totalAmount;*/
    console.log('ei tee vielä mittää');
    return rate;
  }

  onSubmit(event: any) {
    console.log(this.currencyShort);
    // console.log('Selevä homma ' + event.target.currencyShort);
    this.currencyService.getCurrencyValue(this.currencyShort);
    return event.target.currencyShort;
  }



  get amount() {
    return this.currencyForm.get('amount');
  }

}
