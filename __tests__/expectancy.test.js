import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should decrement life expectancy by 5 if the user smokes', () => {
    const calc = new Calculator(60, 'Venus','true', 'true');
    expect(calc.lifeExpectancy).toEqual(75);
  });

  test('should show string literal of life expectancy on a given planet', () => {
    const calc = new Calculator(60, 'Venus','true', 'true');
    expect(calc.lifeExpec()).toEqual("Your life expectancy on Venus is 121 Venus years, and you're already 97 years old. That means you could expect 24 more years!");
  });

  // test('should treturn template literal telling the user their age on Venus', () => {
  //   const calc = new Calculator(60, 'Venus');
  //   expect(calc.ageCalculator()).toEqual("Your age on Venus is 97");
  // });
});