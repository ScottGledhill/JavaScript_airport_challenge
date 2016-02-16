
function Airport(planes, airportname){
this.planes = []
this.airportname = airportname
this.flying = true
weather = new Weather()
};

Airport.prototype.land = function(plane) {
  // if (weather.isStormy() == true)
  // error
  this.flying = false;
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  // if (weather.isStormy() == true)
  // error
  this.flying = true;
  this.planes.splice(plane);
};
