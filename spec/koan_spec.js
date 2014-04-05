var FILL_IN = 'Fill me in';

describe('koan.js', function () {
  describe('Strings', function () {

    it('should create Strings', function () {
      expect('a String').toBe(FILL_IN);
      expect(new String('a String')).toBe(FILL_IN);
    });

    it('should concatenate Strings', function () {
      expect('a ' + 'String').toBe(FILL_IN);
      expect(new String('a ') + 'String').toBe(FILL_IN);
    });

    it('should convert an Number to String', function () {
      expect((1).toString()).toBe(FILL_IN);
      expect(new String(1)).toBe(FILL_IN);
    });

    it('should convert an Array to String', function () {
      expect([1, 2, 3].toString()).toBe(FILL_IN);
      expect(new String([1, 2, 3])).toBe(FILL_IN);
    });

    it('should convert an Object to String', function () {
      expect({ 'abc': 1, '2': 'banana'}.toString()).toBe(FILL_IN);
      expect(new String({ 'abc': 1, '2': 'banana'})).toBe(FILL_IN);
    });

    it('should have a type', function () {
      expect(typeof '').toBe(FILL_IN);
      expect(typeof new String()).toBe(FILL_IN);
    });

  });
});
