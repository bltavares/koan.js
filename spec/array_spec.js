describe('Arrays', function () {
  describe('literals', function () {
    it('should create literals', function () {
      expect([1, 2, 3]).toEqual(__);
    });

    it('should access indexes', function () {
      var array = [1, 2, 3];

      expect(array[0]).toEqual(__);
    });

    it('should set values on indexes', function () {
      var array = [1, 2, 3];
      array[3] = 4;

      expect(array).toEqual(__);
    });
  });
});
