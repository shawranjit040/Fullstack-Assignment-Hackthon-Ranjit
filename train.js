const { ObjectId } = require('mongodb');

class Train {
  constructor(name, route, distance) {
    this._id = new ObjectId();
    this.name = name;
    this.route = route;
    this.distance = distance;
    this.price = distance * 1.25; // Calculate the ticket price based on distance
  }
}

module.exports = Train;
