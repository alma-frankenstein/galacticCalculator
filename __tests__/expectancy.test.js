import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should decrement life expectancy by 5 if the user smokes', () => {
    const calc = new Calculator(60, 'Venus');
    expect(calc.lifeExpec('true', 'false')).toEqual(85);
  });

  // test('should treturn template literal telling the user their age on Venus', () => {
  //   const calc = new Calculator(60, 'Venus');
  //   expect(calc.ageCalculator()).toEqual("Your age on Venus is 97");
  // });
});