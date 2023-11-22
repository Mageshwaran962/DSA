// notes in DSA folder

// odd or even found using bit wise operator

function oddorevenBit(n) {
  return (n & 1) == 1;
}
// console.log("test", oddorevenBit(45));

// found the givend number of array having twise the same number find the unique number in this set
function uniqueNumberTwice(n) {
  let unique = 0;
  let i = 0;
  while (i < n.length) {
    unique ^= n[i];
    i++;
  }
  return unique;
}
// console.log("find", uniqueNumberTwice([2, 3, 2, 4, 3, 5, 6, 5, 6]));

// find unique number in thrice the array
function uniqueNumberThrice(n) {
  let unique = 0;
  let i = 0;
  let carry = 0;
  while (i < n.length) {
    i++;
  }
  return unique;
}
// console.log(
//   "find",
//   uniqueNumberThrice([7, 3, 3, 7, 7, 2, 3, 5, 5, 6, 6, 5, 6])
// );

// add two numbers using bitwise operators
function addTwo(a, b) {
  let sum = 0;
  let saml = a & 1;
  console.log("AND", (a & b) << 1);
}
// console.log("tesss", addTwo(3, 7));

// find the magic number // amazon question
function magicNumber(n) {
  let ans = 0;
  let base = 5;
  while (n > 0) {
    let lastVal = n & 1;
    n = n >> 1;
    ans += lastVal * base;
    base = base * 5;
  }
  return ans;
}
// console.log("finalsss", magicNumber(6));

// find the number of digits in binary
function numberofdigitsinbinary(n) {
  let ans = 0;
  while (n > 0) {
    n = n >> 1;
    ans++;
  }
  return ans;
}
// console.log("sss", numberofdigitsinbinary(100));

// find the number of digits in binary or anything using formula
// time complexity is O (log n)
function numberofdigitsAnything(n, base) {
  let ans = parseInt(Math.log(n) / Math.log(base)) + 1;
  return ans;
}
// console.log("sss", numberofdigitsAnything(100, 10));

// how to find the power  time base of the number using this bitwise

function bitwisePowerbase(base, power) {
  let ans = 1;
  while (power > 0) {
    if ((power & 1) == 1) {
      ans *= base;
    }
    power = power >> 1;
    base = base * base;
  }
  return ans;
}

// console.log("ffff", bitwisePowerbase(2, 3));

// find the set bits of the given value
// here you can fin number of 1s persent in the binary value using easy formula
function setbits(n) {
  let count = 0;
  while (n > 0) {
    count++;
    n = n & (n - 1);
  }
  return count;
}
// to verify aadd this line of code  (100 >>> 0).toString(2)
console.log("fff", (100 >>> 0).toString(2), setbits(100));

// google ques flip the image of 2d array of binary
function flippingImage(arr) {
  let prime = arr.length;
  for (let i = 0; i < prime; i++) {
    for (let j = 0; j < prime; j++) {
      let temp = arr[i][j];
      arr[i][j] = temp ^ 1;
    }
    arr[i].reverse();
  }
  return arr;
}
console.log(
  "sssxx",
  flippingImage([
    [1, 1, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
