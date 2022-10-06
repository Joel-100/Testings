const capitalize = (string) => {
  if(typeof string !== 'string') {
    throw new Error('Invalid Input');
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = capitalize;