const reverseString = require('./reverse');


test('Reversing a string: ', () => {
  const testCase1 = 'amare';
  const reversedStr = 'erama';
  const reversedByFunction = reverseString(testCase1);
  expect(reversedStr).toEqual(reversedByFunction);
});