export class Currency {
  rates: [];
  base: string;
  date: string;

  constructor(rates: [], base: string, date: string) {
    this.rates = rates;
    this.base =  base;
    this.date = date;
  }
}
