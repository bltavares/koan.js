describe('Functions', function () {
  it('returns values', function () {
    function fn() { return __; }
    expect(fn()).toBe(true);
  });

  it('does not return values when there is no return statement', function () {
    function fn() { }
    expect(fn()).toBe(__);
  });

  it('receives arguments', function () {
    function fn(arg) { return arg; };
    expect(fn(1)).toBe(__);
  });

  it('does not need to receive all arguments', function () {
    function fn(arg, another) { return another; };
    expect(fn(1)).toBe(__);
  });

  it('holds all the arguments on a special variable', function () {
    function fn() { return arguments; };
    expect(fn(1, 2, 3)).toEqual(__);
  });

  it('can be stored on variables', function () {
    var fn = function () { return 1 };
    expect(fn()).toBe(__);
  });

  it('can be return from functions', function () {
    function fn1() {
      var fn2 = function () { return 'fn2'; }
      return fn2;
    };
    var fn = fn1();

    expect(fn()).toBe(__);
  });

  it('can be called immediately', function () {
    expect(function () { return 1 }()).toEqual(__);
  });

  it('can be returned immediately', function () {
    function fn() { return function () { return 'nested function' } };
    var nestedFunction = fn();
    expect(nestedFunction()).toBe(__);
  });

  it('can be called immediately after returning', function () {
    function fn() { return function () { return 'nested function' } };
    expect(fn()()).toBe(__);
  });
});
