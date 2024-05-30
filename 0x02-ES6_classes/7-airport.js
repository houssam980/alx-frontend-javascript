export default class Airport {
  /* airport */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  //method (function)
  toString() {
    return `[object ${this._code}]`;
  }
}
