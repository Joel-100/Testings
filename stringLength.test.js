const stringLength = require('./stringLength.js');

test('returns the count of characters in a string', () =>{
  expect(stringLength('joe')).toBe(3);
});

test('string should not be longer than 10 characters.',() => {
  expect(() => {
    stringLength('kugonza joel');
  }).toThrow('string too long');
});

test('string should be atleast 1 character long.', () => {
  expect(() => {
    stringLength('');
  }).toThrow('string can not be empty');
});