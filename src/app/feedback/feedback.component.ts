import {Component, OnInit} from '@angular/core';
import {FeedbackItem} from '../classes/feedback-item';
import {FeedbackService} from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackItemsList: Array<FeedbackItem>;

  constructor(private fbData: FeedbackService) {
    this.feedbackItemsList = this.fbData.getFeedback();

    /* this.feedbackItemsList = [new FeedbackItem('Millaista ruoka oli?'),
      new FeedbackItem('Millaista palvelu oli?'),
      new FeedbackItem('Oliko salaatti hyvää?'),
      new FeedbackItem('Neljäs kysymys')];*/
  }

  ngOnInit() {
  }

  onInputChange(feedbackEvent: any, fbItem: FeedbackItem) {
    // console.log(feedbackEvent.value);
    // console.log(fbItem.question);
  }

}
