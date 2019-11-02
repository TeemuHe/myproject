import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  buttons: string[];
  prevValue: string;
  private calculation: string;

  constructor() {
    this.calculation = '';
    this.prevValue = '';
    this.buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '+', 'C', '0', '=', '-'];
  }

  ngOnInit() {

  }

  addValue(value: string) {
    if (value === '=') {
      // tslint:disable-next-line:no-eval
      this.calculation = eval(this.calculation);
    } else if (value === 'C') {
      this.calculation = '';
    } else {
      this.calculation += value;
    }
  }

}
