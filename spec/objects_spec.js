describe('Objects', function () {
  var person;

  beforeEach(function () {
    person = { first_name: 'Name' };
  });

  it('should create objects', function () {
    expect(person).toEqual(__);
  });

  describe('access properties', function () {
    it('should access properties', function () {
      expect(person.first_name).toEqual(__);
    });

    it('should access non defined properties', function () {
      expect(person.age).toEqual(__);
    });

    it('should access properties', function () {
      expect(person['first_name']).toEqual(__);
    });

    it('should access the property dinamically', function () {
      expect(person[__ + 'name']).toEqual('Name');
    });
  });

  describe('set properties', function () {
    it('should set properties', function () {
      person.first_name = 'Another name';

      expect(person).toEqual(__);
    });

    it('should set non defined properties', function () {
      person.age = 100;

      expect(person.age).toEqual(__);
    });

    it('should set properties', function () {
      person['first_name'] = 'Another name';

      expect(person).toEqual(__);
    });

    it('should access the property dinamically', function () {
      person[__ + 'name'] = 'Another name';

      expect(person).toEqual({ first_name: 'Another name' });
    });
  });

  describe('equality', function () {
    it('should not equal objects literals', function () {
      expect({} == {}).toBe(__);
    });

    it('should not equal numbers', function () {
      expect({} == 1).toBe(__);
    });

    it('should not equal strings', function () {
      expect({} == 'abc').toBe(__);
    });

    it('should not be the same objects literals', function () {
      expect({} === {}).toBe(__);
    });

    it('should not be the same as numbers', function () {
      expect({} == 1).toBe(__);
    });

    it('should not be the same as strings', function () {
      expect({} == 'abc').toBe(__);
    });
  });
});
