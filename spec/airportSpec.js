
describe("Airport", function() {
var airport;

beforeEach(function() {
  airport = new Airport();
});

  describe ('airport', function() {
    it 'can receive a plane', function() {
      airport.land(plane);
      expect(airport.planes).toBeGreaterThan(0)
    });
  });
});
