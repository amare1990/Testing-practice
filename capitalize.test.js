const capitalize = require('./capitalize');

test('Capitalize the first letter', () => {
  let string = 'amare';
  const name = capitalize(string);
  expect(name).toBe('Amare');
});

test('Capitalize the first letter', () => {
  //let string = 1;
  //const name = capitalize(string);
  expect(() => {
    capitalize(100);
  }).toThrow('It is not a string type');
});