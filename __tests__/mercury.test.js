import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should take in an age, divide it by .24, and return as an integer', () => {
    const calc = new Calculator(60, 'Mercury');
    expect(calc.calcMercuryAge(calc.earthAge)).toEqual(250);
  });

  test('should tell user their life expectancy on Mercury', () => {
    const calc = new Calculator(60, 'Mercury', 'true', 'true');
    calc.lifeExpec();
    expect(calc.planetLifeExpectancy).toEqual(313);
  })
});