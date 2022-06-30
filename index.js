const Calculate = {
  factorial(inputNumber) {
    if (inputNumber < 1) {
      throw new Error("ERROR: input must be greater than 0");
    }
    let output = 1;
    for (let i = inputNumber; i > 0; i--) {
    output *= i;
    }
    return output;
  }
}

module.exports = Calculate;