import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should take in an age and return it unchanged', () => {
    const calc = new Calculator(60, 'Earth');
    expect(calc.earthAge).toEqual(60);
  });

  test('should treturn template literal with earth age and planet age', () => {
    const calc = new Calculator(60, 'Earth');
    expect(calc.ageCalculator()).toEqual("Your age on Earth is 60");
  });
  
});