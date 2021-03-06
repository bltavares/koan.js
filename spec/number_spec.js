describe('Numbers', function () {
  it('should create literals', function () {
    expect(1).toBe(__);
  });

  it('should add numbers', function () {
    expect(1 + 1).toBe(__);
  });

  it('should subtract numbers', function () {
    expect(1 - 1).toBe(__);
  });

  it('should multiply numbers', function () {
    expect(2 * 2).toBe(__);
  });

  it('should divide numbers', function () {
    expect(2 / 2).toBe(__);
  });

  describe('Infinity', function () {
    it('sums', function () {
      expect(Infinity + Infinity).toBe(__);
    });

    it('multiplies', function () {
      expect(Infinity * Infinity).toBe(__);
    });

    it('does not substract', function () {
      expect(Infinity - Infinity).toBe(__);
    });

    it('does not divide', function () {
      expect(Infinity / Infinity).toBe(__);
    });
  });
});
