var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('tests that the output of 5! is equal to 120', () => {
      // Setup
      const inputNumber = 5;
      const expected = 120;
      // Exercise
      const actual = Calculate.factorial(inputNumber);
      // Verify
      assert.equal(actual, expected);
    });
      it('tests that the output of 4! is equal to 24', () => {
      // Setup
      const inputNumber = 4;
      const expected = 24;
      // Exercise
      const actual = Calculate.factorial(inputNumber);
      // Verify
      assert.equal(actual, expected);
      });
      it('raises an error if the input is less than 1', () => {
      // Setup
      const inputNumber = 0;
      // Exercise
      const exercise = () => { Calculate.factorial(inputNumber) };
      // Verify
      assert.throws(exercise, /input must be greater than 0/);
    });
  });
});