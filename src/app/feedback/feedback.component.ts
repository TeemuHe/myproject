import {Component, OnInit} from '@angular/core';
import {FeedbackItem} from './feedback-class/feedback-item';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackItemsList: Array<FeedbackItem>;

  constructor() {
    this.feedbackItemsList = [new FeedbackItem('Millaista ruoka oli?'),
      new FeedbackItem('Millaista palvelu oli?'),
      new FeedbackItem('Oliko salaatti hyvää?')];
  }

  ngOnInit() {
  }

  onInputChange(feedbackEvent: any, fbItem: FeedbackItem) {
    console.log(feedbackEvent.value);
    console.log(fbItem.question);
  }

}
