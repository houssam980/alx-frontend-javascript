export default class Currency {
  
  constructor(code, name) {
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    if (typeof name !== 'string') throw new TypeError('Name must be a string');

    this._code = code;
    this._name = name;
  }


  get code() {
    return this._code;
  }

  set code(nwcode) {
    if (typeof nwcode !== 'string') throw new TypeError('Code must be a string');
    this._code = nwcode;
  }


  get name() {
    return this._name;
  }

  set name(nwnm) {
    if (typeof nwnm !== 'string') throw new TypeError('Name must be a string');
    this._name = nwnm;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
