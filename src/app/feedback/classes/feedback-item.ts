export class FeedbackItem {
  question: string;
  answer: string;
  answerList: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerList = ['Ei arvosteltu', 'Huono', 'Kohtalainen', 'Hyvä', 'Täydellinen'];
  }
}
