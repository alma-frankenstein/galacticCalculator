import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should decrement life expectancy by 5 if the user smokes, 10 if they live on a toxic waste dump', () => {
    const calc = new Calculator(60, 'Venus','true', 'true');
    expect(calc.lifeExpectancy).toEqual(75);
  });

  test('planetLifeExpectancy should automatically be calculated on instantiation', () => {
    const calc = new Calculator(60, 'Venus','true', 'true');
    expect(calc.planetLifeExpectancy).toEqual(121);
  })

  test('should show string literal of life expectancy on a given planet, and how much over/under they are', () => {
    const calc = new Calculator(60, 'Venus','true', 'true');
    expect(calc.lifeExpec()).toEqual("Your life expectancy on Venus is 121 Venus years, and you're already 97 years old. That means you could expect 24 more years!");
  });
});