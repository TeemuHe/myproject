import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://api.exchangeratesapi.io/latest';
  }

  getCurrency(): Observable<any> {
    return this.httpClient.get(this.url, {responseType: 'text'}).pipe(map(response => {

    }));
  }
}
