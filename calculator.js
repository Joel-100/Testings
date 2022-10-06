class calculator {
  constructor() {
    this.invalid = 'Invalid Input'
  }

  add(a, b) {
    if(!a || !b) {
      throw new Error('Input a value');
    } else if(typeof a !== 'number' || typeof b !== 'number') {
      throw `${this.invalid}`;
    }
    return a+b;
  }


  subtract(a,b) {
    if (!a || !b){
      throw new Error('Input a value');
    } else if (typeof a !== 'number' || typeof b !== 'number') {
      throw `${this.invalid}`;
    }
    return a-b;
  }

  divide(a, b) {
    if (a === 0 || b === 0) {
      throw new Error('Division by zero');
    }else if (!a || !b) {
      throw new Error('Input a value');
    }else if (typeof a !== 'number' || typeof b !== 'number') {
      throw`${this.invalid}`;
    }
    return a/b;
  }


  multiply(a,b) {
    if (!a || !b) {
      throw new Error('Input a value');
    } else if (typeof a !== 'number' || typeof b !== 'number') {
      throw`${this.invalid}`
    }
    return a*b;
  }
}

//const calculator = newCalculator();

module.exports = calculator;