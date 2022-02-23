


describe(`${Person.name} Class`, () => {

  describe('default values', () => {
    it('firstName defaults to empty string', () => {
      expect(new Person({firstName: null}).firstName).toBe('');
    });

    it('lastName defaults to empty string', () => {
      expect(new Person({lastName: null}).lastName).toBe('');
    });

    it('middleName defaults to empty string', () => {
      expect(new Person({middleName: null}).middleName).toBe('');
    });
  })

})