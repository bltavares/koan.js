describe('Prototype', function () {
  describe('Chain', function () {
    var Super;

    beforeEach(function () {
      Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
      };

      Super = function () {};
      Super.prototype.method = function () { return 'super'; }
    });

    xit('invokes the prototype method', function () {
      var instance = Object.create(new Super());

      expect(instance.method()).toBe(__);
    });

    xit('overrides the prototype method', function () {
      var instance = Object.create(new Super());

      instance.method = function () {
        return __;
      };

      expect(instance.method()).toBe('child');
    });

    it('uses new protytpe methods on existing instances', function () {
      var instance = Object.create(new Super());

      Super.prototype.newMethod = function () {
        return 'new';
      };

      expect(instance.newMethod()).toBe(__);
    });
  });
});
