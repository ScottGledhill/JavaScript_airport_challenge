
function Airport(planes, airportname){
this.planes = [];
this.airportname = airportname;
this.flying = true;
weather = new Weather();
CAPACITY = 1;
}

Airport.prototype.land = function(plane) {
  if (weather.isStormy()) throw 'Can\'t land';
  if (this.planes.length >= CAPACITY) throw 'Can\'t land';
  this.flying = false;
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  if (weather.isStormy()) throw 'Can\'t take off';
  this.flying = true;
  this.planes.splice(plane);
};
