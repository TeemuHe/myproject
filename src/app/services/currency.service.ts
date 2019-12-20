import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Currency} from '../classes/currency';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url: string;
  currencyList: Array<Currency>;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://api.exchangeratesapi.io/latest';
    this.currencyList = new Array<Currency>();
  }

  getCurrencyData(): Observable<any> {
    return this.httpClient.get(this.url).pipe(map(response => {
      // @ts-ignore
      const objectArray = Object.entries(response.rates);

      objectArray.forEach(([key, value]) => {
       this.currencyList.push(new Currency(key, Number(value)));
        // console.log('Lyhenne ' + key);
        // console.log('Desimaaliarvo ' + value);
      });
      return this.currencyList;
    }));
  }
}
