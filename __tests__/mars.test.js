import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should take in an age, divide it by 1.88, and return as an integer', () => {
    const calc = new Calculator(60, 'Mars');
    expect(calc.calcMarsAge()).toEqual(32);
  });

  test('should treturn template literal telling the user their age on Mars', () => {
    const calc = new Calculator(60, 'Mars');
    expect(calc.ageCalculator()).toEqual("Your age on Mars is 32");
  });
});