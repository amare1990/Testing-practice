function reverseString(string) {
  const arrayReversed = string.split('').reverse();
  const strReversed = arrayReversed.join('');
  //console.log(strReversed);
  return strReversed;
}

module.exports = reverseString;