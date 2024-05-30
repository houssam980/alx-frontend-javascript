import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a currency type');
    }

    this._amount = amount;
    this._currency = currency;
  }


  get amount() {
    return this._amount;
  }

  set amount(nwam) {
    if (typeof nwam !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = nwam;
  }


  get currency() {
    return this._currency;
  }

  set currency(nwcur) {
    if (!(nwcur instanceof Currency)) {
      throw new TypeError('Currency must be a currency type');
    }
    this._currency = nwcur;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
