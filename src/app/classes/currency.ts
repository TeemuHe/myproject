export class Currency {
  /*rates: [];
  base: string;
  date: string;*/
  valueKey: string;
  currencyValue: number;
  // currencyData: [];

  constructor(/*rates: [], base: string, date: string, */key: string, value: number, /*currencyData: []*/) {
    /*this.rates = rates;
    this.base =  base;
    this.date = date;*/
    this.valueKey = key;
    this.currencyValue = value;
    // this.currencyData = currencyData;
  }
}
