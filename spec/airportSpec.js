
describe("Airport", function() {

  beforeEach(function() {
    airplane = new Airplane();
    airport = new Airport();
  });

  describe ('airport', function() {
    it('can receive a plane', function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.land(airplane);
      expect(airport.planes.length).toBeGreaterThan(0);
    });
  });

  describe ('airport', function() {
    it('can tell a plane to take off', function(){
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.land(airplane)
      airport.takeOff(airplane);
      expect(airport.planes.length).toEqual(0)
    });
  });

  describe ('weather', function() {
    it('can be set to true', function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(weather.isStormy()).toEqual(true)
    });
  });
});
