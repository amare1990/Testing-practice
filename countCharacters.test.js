const countCharacters = require('./countCharacters');
//const reverse = require('./reverseString');
//import countCharacters from './countCharacters.js';

test('Counts the number of characters in a string', () => {
  const string1 = 'amare';
  const count1 = countCharacters(string1);
  if (count1 < 1 && count1 >= 10) {
    throw Error ("Invalid String")
  }
  expect(count1).toBe(5);
});

  test('Invalid Input checking', () => {
    const input = 'SoftwareDevelopment';
    expect(() => {
      countCharacters(input).toThrow('Invalid input');
    });
  });