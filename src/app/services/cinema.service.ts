import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {News} from '../classes/news';
import {map} from 'rxjs/operators';
import {parseString} from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  url: string;
  // private moviesObservable: Observable<any>;
  // news: Array<News>;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://www.finnkino.fi/xml/news/';

    /*this.news = [new News('otsikko1', '1.1.2001', 'Tarinaa elokuvasta',
      'http://media.finnkino.fi/1012/news/5825/ShaunTheSheepMovie2_444.jpg'),
      new News('toinen', '5.5.2005', 'Hyvä elokuva',
        'http://media.finnkino.fi/1012/news/5825/ShaunTheSheepMovie2_444.jpg'),
      new News('Kolmas elokuva', '7.7.2007', 'Kolmas elokuvan kuvaus',
        'http://media.finnkino.fi/1012/news/5825/ShaunTheSheepMovie2_444.jpg'),
      new News('Viimenen filmi', '9.9.2009', 'Elokuva vuodelta 1995',
        'http://media.finnkino.fi/1012/news/5825/ShaunTheSheepMovie2_444.jpg')];*/
  }

  getData(): Observable<any> {
    return this.httpClient.get(this.url, {responseType: 'text'})
      .pipe(map(response => {
        // console.log('getXMLData....' + response);
        let newsData: News[] = [];
        parseString(response, {
          trim: true,
          explicitArray: false,
          mergeAttrs: true
          // tslint:disable-next-line:only-arrow-functions
        }, function(err, result) {
          newsData = result.News.NewsArticle;
        });
        return newsData;
      }));
  }
}
