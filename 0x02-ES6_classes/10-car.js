export default class Car {
  /* car */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }


  cloneCar() {
    const Spec = this.constructor[Symbol.Spec];
    return new Spec();
  }

  static get [Symbol.Spec]() {
    return this;
  }
}
