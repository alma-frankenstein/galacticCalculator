import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should take in an age, divide it by .62, and return as an integer', () => {
    const calc = new Calculator(60, 'Venus');
    expect(calc.calcVenusAge()).toEqual(97);
  });

  test('should treturn template literal telling the user their age on Venus', () => {
    const calc = new Calculator(60, 'Venus');
    expect(calc.ageCalculator()).toEqual("Your age on Venus is 97");
  });
});