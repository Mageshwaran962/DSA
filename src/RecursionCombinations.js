//recursion using to find the combinations of given inputs
function mobilePhone(p, up, arr) {
  if (up.length == 0) {
    arr.push(p);
    return;
  }
  let digit = parseInt(up.at(0));
  let cond;
  let i = (digit - 2) * 3;
  if (digit == 7) {
    cond = digit * 3 - 2;
  } else if (digit == 8) {
    cond = digit * 3 - 2;
    i += 1;
  } else if (digit == 9) {
    cond = digit * 3 - 1;
    i += 1;
  } else {
    cond = digit * 3 - 3;
  }
  while (i < cond) {
    let char = String.fromCharCode("a".charCodeAt(0) + i);
    mobilePhone(p + char, up.substring(1), arr);
    i++;
  }
}
let final = [];
mobilePhone("", "9", final);
// console.log(final);

// dice problem using recursion
function dice(p, target) {
  if (target == 0) {
    console.log(p);
    return;
  }
  for (let i = 1; i <= 6 && i <= target; i++) {
    dice(p + i, target - i);
  }
}
dice("", 4);
