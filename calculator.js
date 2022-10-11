class Calculator {
  

  add (a, b) {
    return a + b;
  }

  subtract (a, b) {
    return a - b;
  }

  multiply (a, b) {
    return a*b;
  }

  divide (a, b) {
    if (b === 0 || a === 0 && b === 0) {
      return Infinity;
    }
    return a/b;
  }
  
}

module.exports = Calculator;