import uuidv1 from 'uuid/v1';

export default class User {
    constructor(name, duration, mode, lngLat = [4.357028, 50.860708]) {       
      this.guid = uuidv1();
      this.name = name;
      this.duration = duration;
      this.mode = mode[0];
      this.location = lngLat;
    }
  
    set location(value) {
        this._location = value;
    }
  
    get location() {
        return this._location;
    }
}