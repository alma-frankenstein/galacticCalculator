import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should take in an age, divide it by .24, and return as an integer', () => {
    const calc = new Calculator(60, 'Mercury');
    expect(calc.calcMercuryAge()).toEqual(250);
  });

  // test('should treturn template literal telling the user their age on Mercury', () => {
  //   const calc = new Calculator(60, 'Mercury');
  //   expect(calc.ageCalculator()).toEqual("Your age on Mercury is 250");
  // });
});