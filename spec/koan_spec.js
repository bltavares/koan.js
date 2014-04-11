var __ = 'Fill me in';

describe('koan.js', function () {
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
  });

  describe('Strings', function () {
    describe('literal', function () {
      it('should create Strings', function () {
        expect('a String').toBe(__);
      });

      it('should concatenate Strings', function () {
        expect('a ' + 'String').toBe(__);
      });

      it('should convert an Number to String', function () {
        expect((1).toString()).toBe(__);
      });

      it('should convert an Array to String', function () {
        expect([1, 2, 3].toString()).toBe(__);
      });

      it('should convert an Object to String', function () {
        expect({ 'abc': 1, '2': 'banana'}.toString()).toBe(__);
      });

      it('should have a type', function () {
        expect(typeof '').toBe(__);
      });

      describe('equality', function () {
        it('should equal the other literal', function () {
          expect('a' == 'a').toBe(__);
        });

        it('should equal the number literal', function () {
          expect('1' == 1).toBe(__);
        });

        it('should equal the boolean literal', function () {
          expect('' == false).toBe(__);
        });

        it('should be the same as other literal', function () {
          expect('a' === 'a').toBe(__);
        });

        it('should not be the same as a number', function () {
          expect('1' === 1).toBe(__);
        });

        it('should not be the same as a boolean', function () {
          expect('' === false).toBe(__);
        });
      });
    });

    describe('object', function () {
      it('should create Strings', function () {
        expect(new String('a String')).toBe(__);
      });

      it('should concatenate Strings', function () {
        expect(new String('a ') + 'String').toBe(__);
      });

      it('should convert an Number to String', function () {
        expect(new String(1)).toBe(__);
      });

      it('should convert an Array to String', function () {
        expect(new String([1, 2, 3])).toBe(__);
      });

      it('should convert an Object to String', function () {
        expect(new String({ 'abc': 1, '2': 'banana'})).toBe(__);
      });

      it('should have a type', function () {
        expect(typeof new String()).toBe(__);
      });

      describe('equality', function () {
        it('should equal the other object', function () {
          expect(new String('a') == new String('a')).toBe(__);
        });

        it('should equal the other literal', function () {
          expect(new String('a') == 'a').toBe(__);
        });

        it('should equal to a number', function () {
          expect(new String('1') == 1).toBe(__);
        });

        it('should equal the boolean', function () {
          expect(new String('') == false).toBe(__);
        });

        it('should not be the same as other object', function () {
          expect(new String('a') === new String('a')).toBe(__);
        });

        it('should not be the same as other literal', function () {
          expect(new String('a') === 'a').toBe(__);
        });

        it('should not be the same as a number', function () {
          expect(new String('1') === 1).toBe(__);
        });

        it('should not be the same as a boolean', function () {
          expect(new String('') === false).toBe(__);
        });
      });
    });
  });
});
