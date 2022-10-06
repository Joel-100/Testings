const capitalize = require('./capitalize');

test('capitalize string', () => {
  expect(capitalize('joel')).toBe('Joel');
});

test('Type check', () => {
  expect(() => {
    capitalize(3);
  }).toThrow('Invalid Input');
});