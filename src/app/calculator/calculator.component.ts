import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }

  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '+', 'C', '0', '-', '=', 'o'];


  ngOnInit() {
  }

]

}
