describe('PracticFuns', function() {

  var practicFuns;

  beforeEach(function() {
    practicFuns = new PracticFuns();
  });

  describe('practicFuns', function() {
    it('returns practicFuns', function() {
      expect(practicFuns.greeting()).toEqual('hello');
    });
  });
