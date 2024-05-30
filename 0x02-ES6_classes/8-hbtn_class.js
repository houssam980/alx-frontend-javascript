export default class HolbertonClass {
  /* hbt class */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    // cast to str
    if (hint === 'string') {
      return this._location;
    }

    // cast to num
    if (hint === 'number') {
      return this._size;
    }
    return 0;
  }
}
