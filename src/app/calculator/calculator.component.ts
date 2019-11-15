import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  buttons: string[];
  private calculation: string;
  lastChar: string;
  lastChar2: string;

  constructor() {
    this.calculation = '';
    this.buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '+', 'C', '0', '=', '-'];
  }

  ngOnInit() {

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    console.log('Calculator component ngOnDestroy');
  }


  addValue(value: string) {
    if (value === '=') {
      // tslint:disable-next-line:no-eval
      this.calculation = eval(this.calculation);
    } else if (value === 'C') {
      this.calculation = '';
    } else {
      this.calculation += value;
      this.lastChar = this.calculation[this.calculation.length - 1];
      this.lastChar2 = this.calculation[this.calculation.length - 2];

      // tslint:disable-next-line:max-line-length
      if (this.lastChar === '/' && this.lastChar2 === '/' || this.lastChar === '/' && this.lastChar2 === '*' || this.lastChar === '/' && this.lastChar2 === '+' || this.lastChar === '/' && this.lastChar2 === '-' || this.lastChar === '*' && this.lastChar2 === '/' || this.lastChar === '*' && this.lastChar2 === '*' ||  this.lastChar === '*' && this.lastChar2 === '+' || this.lastChar === '*' && this.lastChar2 === '-' || this.lastChar === '+' && this.lastChar2 === '/' || this.lastChar === '+' && this.lastChar2 === '*' || this.lastChar === '+' && this.lastChar2 === '+' || this.lastChar === '+' && this.lastChar2 === '-' || this.lastChar === '-' && this.lastChar2 === '/' || this.lastChar === '-' && this.lastChar2 === '*' || this.lastChar === '-' && this.lastChar2 === '+' || this.lastChar === '-' && this.lastChar2 === '-' || this.lastChar === '=' && this.lastChar2 === '/' || this.lastChar === '=' && this.lastChar2 === '*' || this.lastChar === '=' && this.lastChar2 === '+' || this.lastChar === '=' && this.lastChar2 === '-') {
        console.log('Virhe');
        this.calculation = this.calculation.substring(0, this.calculation.length - 1);
      }
      // console.log(this.lastChar);
      // console.log(this.lastChar2);
    }
  }

}
