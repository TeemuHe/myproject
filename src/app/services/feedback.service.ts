import { Injectable } from '@angular/core';
import {FeedbackItem} from '../classes/feedback-item';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedbackItemsList: Array<FeedbackItem>;

  constructor() {
    this.feedbackItemsList = [new FeedbackItem('Millaista ruoka oli?'),
      new FeedbackItem('Millaista palvelu oli?'),
      new FeedbackItem('Oliko salaatti hyvää?'),
      new FeedbackItem('Neljäs kysymys')];
  }

  getFeedback(): Array<FeedbackItem> {
    return this.feedbackItemsList;
  }
}
