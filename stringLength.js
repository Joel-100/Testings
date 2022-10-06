function stringLength(string) {
  if (string.length < 1) {
    throw 'string can not be empty'
  } else if(string.length > 10) {
    throw 'string too long'
  }
  return string.length;
}
module.exports = stringLength;