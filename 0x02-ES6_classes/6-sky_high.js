import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /* sky hight */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // get
  get floors() {
    return this._floors;
  }

  // set
  set floors(Floors) {
    this._floors = Floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
