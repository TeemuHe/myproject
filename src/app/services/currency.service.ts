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

    // this.currencyList = [new Currency('', 0)];
  }

  getCurrencyData(): Observable<any> {
    // console.log('ok');
    return this.httpClient.get(this.url).pipe(map(response => {
      // @ts-ignore
      // tee muuttuja lyhenteille
      // console.log(Object.keys(response.rates)); // lyhenteet
      // @ts-ignore
      // console.log(Object.values(response.rates)); // desimaaliluku
      // console.log(Object(response.rates));
      // @ts-ignore
      const objectArray = Object.entries(response.rates);

      objectArray.forEach(([key, value]) => {
       this.currencyList.push(new Currency(key, Number(value)));
        // console.log('Lyhenne ' + key);
        // console.log('Desimaaliarvo ' + value);
      });
      return this.currencyList;
      // console.log(response);
      // console.log('pipen ohi meni');
      // console.log(this.currencyList);

      // return response as Currency[];
      // console.log(objectArray.keys());
      // return objectArray.keys();
    }));
  }

  getCurrencyValue(objectArray) {
    // console.log(objectArray);
    // console.log('Nytte');
    // jasit vaa looppaa json läpiet oikea ja ottaa arvon
  }
}
