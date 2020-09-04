import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should take in an age, divide it by 11.86, and return as an integer', () => {
    const calc = new Calculator(60, 'Jupiter');
    expect(calc.calcJupiterAge(calc.earthAge)).toEqual(5);
  });

  test('should tell user their life expectancy on Jupiter', () => {
    const calc = new Calculator(60, 'Jupiter', 'true', 'true');
    calc.lifeExpec();
    expect(calc.planetLifeExpectancy).toEqual(6);
  })

});