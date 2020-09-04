import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should take in an age, divide it by 1.88, and return as an integer', () => {
    const calc = new Calculator(60, 'Mars');
    expect(calc.calcMarsAge(calc.earthAge)).toEqual(32);
  });

  test('should tell user their life expectancy on Mars', () => {
    const calc = new Calculator(60, 'Mars', 'true', 'true');
    calc.lifeExpec();
    expect(calc.planetLifeExpectancy).toEqual(40);
  })
});