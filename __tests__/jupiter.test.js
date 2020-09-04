import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should take in an age, divide it by 11.86, and return as an integer', () => {
    const calc = new Calculator(60, 'Jupiter');
    expect(calc.calcJupiterAge()).toEqual(5);
  });

  // test('should treturn template literal telling the user their age on Jupiter', () => {
  //   const calc = new Calculator(60, 'Jupiter');
  //   expect(calc.ageCalculator()).toEqual("Your age on Jupiter is 5");
  // });
});