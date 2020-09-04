import Calculator from '../src/js/planets';

describe('Calculator', () => {

  test('should take in an age and return it unchanged', () => {

    const earthCalc = new Calculator(60);
    expect(earthCalc.earthAge).toEqual(60);
  });
});