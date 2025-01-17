module.exports = function toReadable (number) {

let numsObj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
};

let tensObj = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
}

let hundreds, tensQty, hundredQty;

function findDigit (obj, digit) {
  return Object.entries(obj).find((elem) => {
  const [num, textValue] = elem;
  if (digit === +num) return elem;
})[1];
}

function findFromTwentyTillNinetyNine (number) {
  if (number % 10 === 0) {
    tensQty = number / 10;
    return findDigit(tensObj, tensQty);
};
    if (number % 10 !== 0) {
      tensQty = Math.trunc(number / 10);
      return `${findDigit(tensObj, tensQty)} ${findDigit(numsObj, number % 10)}`;
};
}

if (number >= 0 && number <= 19) return findDigit(numsObj, number);
if (number > 19 && number < 100) return findFromTwentyTillNinetyNine (number);

if (number > 99) {
 hundredQty = Math.trunc(number / 100);
 hundreds = `${findDigit(numsObj, hundredQty)} hundred`;

  if ( number % 100 === 0) return `${hundreds}`;
  else {
    if (number % 100 > 0 && number % 100 <= 19) {
      return `${hundreds} ${(findDigit(numsObj, number % 100))}`;
    }
    else return `${hundreds} ${findFromTwentyTillNinetyNine (number % 100)}`;
};
};
}