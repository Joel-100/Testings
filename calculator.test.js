const Calculator = require('./calculator');

describe("calculator", () => {
  const calculator = new Calculator();
  describe('addition', () => {
    test('Add two numbers', () => {
      expect(calculator.add(2, 5)).toBe(7);
    });
    test('Type check', () => {
      expect(() => {
        calculator.add('c', 3);
      }).toThrow('Invalid Input');
    });
    test('Type check', () => {
      expect(() => {
        calculator.add(3, 'b');
      }).toThrow('Invalid Input');
    });
    test('Null or empty', () => {
      expect(() => {
        calculator.add();
      }).toThrow('Input a value');
    });
  });

  describe('subtraction', () => {
    test('Subtract two numbers', () => {
      expect(calculator.subtract(2, 5)).toBe(-3);
    });
    test('Type check', () => {
      expect(() => {
        calculator.subtract('c', 3);
      }).toThrow('Invalid Input');
    });
    test('Type check', () => {
      expect(() => {
        calculator.subtract(3, 'b');
      }).toThrow('Invalid Input');
    });
    test('Null or empty', () => {
      expect(() => {
        calculator.subtract();
      }).toThrow('Input a value');
    });
  })

  describe('dividing two numbers', () => {
    test('Divide two numbers', () => {
      expect(calculator.divide(2, 5)).toBe(0.4);
    });
    test('Type check', () => {
      expect(() => {
        calculator.divide('c', 3);
      }).toThrow('Invalid Input');
    });
    test('Is it a number', () => {
      expect(() => {
        calculator.divide(3, 'b');
      }).toThrow('Invalid Input');
    });
    test('Null or empty', () => {
      expect(() => {
        calculator.divide();
      }).toThrow('Input a value');
    });    
    test('Division by zero', () => {
      expect(() => {
        calculator.divide(3, 0);
      }).toThrow('Division by zero');
    });
  })

  describe('multiplying two number', () => {
    test('Multiply numbers', () => {
      expect(calculator.multiply(2, 5)).toBe(10);
    });
    test('Type check', () => {
      expect(() => {
        calculator.multiply('c', 3);
      }).toThrow('Invalid Input');
    });
    test('Type check', () => {
      expect(() => {
        calculator.multiply(3, 'b');
      }).toThrow('Invalid Input');
    });
    test('Null or empty', () => {
      expect(() => {
        calculator.multiply();
      }).toThrow('Input a value');
    });
  })

});