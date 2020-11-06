// ****** Task 585 ******

function toBinary(num) {
  if (num <= 0) {
    return 0;
  }
  let binary = '';

  while (num > 0) {
    if (num % 2 === 0) {
      binary += '0';
    } else {
      binary += '1';
    }
    num = Math.floor(num / 2)
  }

  return parseInt(binary.split('').reverse().join(''));
}
module.exports = {toBinary}