
function Weather() {
};

Weather.prototype.randomStormy = function() {
  return Math.random();
};

Weather.prototype.isStormy = function() {
  if ( this.randomStormy() >= 0.75) {
    return true;
  }
  else {
    return false
  };
};
