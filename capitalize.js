function capitalize(string) {
  if(typeof string != 'string') {
    throw  Error('It is not a string type');
  }
  
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;