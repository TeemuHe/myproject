import {Component, OnInit} from '@angular/core';
import {CinemaService} from '../services/cinema.service';
import {Observable} from 'rxjs';
import {News} from '../classes/news';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  private cinemaData$: Observable<News[]>;
  // news: Array<News>;
  news: Array<News>;

  constructor(private cinemaService: CinemaService) {
    /*this.news = [new News('otsikko1', 'tänään',
      'Tarinaa elokuvasta', 'http://media.finnkino.fi/1012/news/5825/ShaunTheSheepMovie2_444.jpg'),
      new News('toinen', 'viikko sitten', 'Hyvä elokuva', 'http://media.finnkino.fi/1012/news/5825/ShaunTheSheepMovie2_444.jpg')];*/
  }

  ngOnInit() {
    this.cinemaService.getData();
    this.cinemaData$ = this.cinemaService.getData();
  }
}
