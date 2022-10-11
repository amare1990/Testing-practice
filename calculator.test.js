const Calculator = require('./calculator');


const calc = new Calculator();

describe('Addition checking', () => {
  test('Addition test 1', () => {
    expect(calc.add(4, 2)).toBe(6);
  });

  test('Addition test 2', () => {
    expect(calc.add(-2, 10)).toBe(8);
  });
  
  test('Addition test 3', () => {
    expect(calc.add(-2, 0)).toBe(-2);
  });

});

describe('Substraction Testing', () => {
  test('Substraction checking 1', () => {
    expect(calc.subtract(10, 6)).toBe(4);
  });

  test('Substraction checking 2', () => {
    expect(calc.subtract(6, 10)).toBe(-4);
  });

  test('Substraction checking 3', () => {
    expect(calc.subtract(-10, 6)).toBe(-16);
  });

});

 
describe('Multplication Testing', () => {
  test('Multiplication testin 1', () => {
    expect(calc.multiply(8, 4)).toBe(32);
  });
  test('Multiplication testing 2', () => {
    expect(calc.multiply(0, 4)).toBe(0);
  });
  test('Multiplication testing 3', () => {
    expect(calc.multiply(2, 0)).toBe(0);
  });

});

describe ('Division Testing', () => {
  test('Division checking 1', () => {
    expect(calc.divide(10, 2)).toBe(5);
  });
  test('Division checking 2', () => {
    expect(calc.divide(2, 10)).toBe(0.2);
  });
  test('Division checking 3', () => {
    expect(calc.divide(0, 4)).toBe(0);
  });

  test('Division checking 4', () => {
    //expect(calc.divide(4, 0)).toHaveReturnedWith('inifinity');
    expect(calc.divide(4, 0)).toBe(Infinity);
  });

});