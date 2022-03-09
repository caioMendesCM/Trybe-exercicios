const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz testSuite', () => {
  test('numeros divisiveis', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    expect(myFizzBuzz(9)).toMatch('fizz');
    expect(myFizzBuzz(10)).toMatch('buzz');
  });

  test('numero não divisivel', () => {
    const expectation = 8;
    expect(myFizzBuzz(expectation)).toEqual(expectation);
  });

  test('não numero', () => {
    expect(myFizzBuzz('não')).toBeFalsy();
  });
});
