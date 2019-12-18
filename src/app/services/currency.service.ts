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
  currShort: object;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://api.exchangeratesapi.io/latest';

    /*this.rates = [new Currency('CAD: 1,4712'),
    new Currency('HKD: 8.7062'),
    new Currency('ISK: 137'),
    new Currency('PHP: 56.441'),
    new Currency('DKK: 7.4731')];*/
  }

  getCurrencyData(): Observable<any> {
    // console.log('ok');
    return this.httpClient.get(this.url).pipe(map(response => {
      // @ts-ignore
      // tee muuttuja lyhenteille
      console.log(Object.keys(response.rates)); // lyhenteet
      // @ts-ignore
      console.log(Object.values(response.rates)); // desimaaliluku
      // @ts-ignore
      const objectArray = Object.entries(response.rates);

      objectArray.forEach(([key, value]) => {
        console.log('Lyhenne ' + key);
        console.log('Desimaaliarvo ' + value);
      });

      // console.log(response);
      // console.log('pipen ohi meni');
      // return response as Currency[];
      return response as Currency;
    }));
  }

  getCurrencyValue(currencyShort) {
    console.log(currencyShort);
    console.log('Nytte');
    // jasit vaa looppaa json läpiet oikea ja ottaa arvon
  }
}
