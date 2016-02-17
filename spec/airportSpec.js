
describe("Airport", function() {

  beforeEach(function() {
    airplane = new Airplane();
    airport = new Airport();
    airplane1 = new Airplane();
    spyOn(weather, 'isStormy').and.returnValue(false);
  });


  describe ('airport', function() {
    it('can receive a plane', function() {
      airport.land(airplane);
      expect(airport.planes).toContain(airplane);
    });
  });

  describe ('airport', function() {
    it('can tell a plane to take off', function(){
      airport.land(airplane);
      airport.takeOff(airplane);
      expect(airport.planes).not.toContain(airplane);
    });
  });

  describe ('weather', function() {
    it('prevents takeoff in stormy weather', function() {
      weather.isStormy.and.returnValue(true);
      expect(airport.takeOff).toThrow('Can\'t take off');
    });
  });

  describe ('weather', function() {
    it('prevents landing in stormy weather', function() {
      weather.isStormy.and.returnValue(true);
      expect(function() {
        airport.land(airplane);
      }).toThrow('Can\'t land');
    });
  });

  describe ('airport', function() {
    it('can\'t accept when capacity is full', function() {
      spyOn(window, 'alert');
      airport.land(airplane);
      airport.land(airplane1);
      expect(window.alert).toHaveBeenCalledWith('NOOOOOOOOOOO');
    });
  });
});
