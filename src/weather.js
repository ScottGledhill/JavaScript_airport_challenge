
function Weather() {
};

Weather.prototype.isStormy = function() {
  return [true,false][Math.floor(Math.random() * 2)];
};
