import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should take in an age, divide it by .62, and return as an integer', () => {
    const calc = new Calculator(60, 'Venus');
    expect(calc.calcVenusAge(calc.earthAge)).toEqual(97);
  });

  test('should tell user their life expectancy on Venus', () => {
    const calc = new Calculator(60, 'Venus', 'true', 'true');
    calc.lifeExpec();
    expect(calc.planetLifeExpectancy).toEqual(121);
  })
});