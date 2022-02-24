


describe(`${Person.name} Class`, () => {
  let model;

  beforeEach(() => {
    model = new Person();
  });

  describe('default values', () => {
    it('firstName defaults to empty string', () => {
      expect(model.firstName).toBe('');
    });

    it('lastName defaults to empty string', () => {
      expect(model.lastName).toBe('');
    });

    it('middleName defaults to empty string', () => {
      expect(model.middleName).toBe('');
    });
  });

  describe('full name', () => {
    beforeEach(() => {
      model = new Person({firstName: 'Matteo', lastName: 'Molinari'});
    });

    it('middle initial', () => {
      model.middleName = 'Maurizio';
      expect(model.fullName).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);
    });

    it('wo middle name only first and last', () => {
      model.middleName = '';
      expect(model.fullName).toBe(`${model.firstName} ${model.lastName}`);
    });
  });

  describe('say my name', () => {
    it('alerts the full name', () => {
      model.firstName = 'Matteo';
      model.lastName = 'Molinari';

      spyOn(window, 'alert');

      model.sayMyName();

      expect(window.alert).toHaveBeenCalledWith(model.fullName);
    });
  });

  describe('get code name', () => {
    beforeEach(() => {
      model = new Person();
    });

    it('testing god', () => {
      spyOn(window, 'confirm').and.returnValue(true);

      const result = model.getCodeName();

      expect(window.confirm).toHaveBeenCalledWith('Are you a testing god?');
      expect(result).toBe('TESTING GOD!');
    });

    it('not a god', () => {
      spyOn(window, 'confirm').and.returnValue(false);

      const result = model.getCodeName();

      expect(window.confirm).toHaveBeenCalledWith('Are you a testing god?');
      expect(result).toBe('NOT A GOD');
    });
  });

})