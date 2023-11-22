// prime check
//optimized way of checking the prime
function primeNumber(range) {
  // make the size of element as false
  let boolCheck = Array(range).fill(false);
  // sqrt of numbers is again repeats
  for (let i = 2; i * i <= range; i++) {
    console.log("ss", i);
    if (!boolCheck[i]) {
      console.log("inner", i);
      for (let j = i * 2; j <= range; j += i) {
        boolCheck[j] = true;
      }
    }
  }
  for (let i = 2; i < boolCheck.length; i++) {
    if (!boolCheck[i]) console.log(i);
  }
}
// primeNumber(100);

// ways to find the sqrt of number and optimized solution
function binarySqrtNumber(n) {
  let s = 0;
  let e = n;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (mid * mid == n) {
      return mid;
    }
    if (mid * mid > n) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return e;
}
function finalAns(n, p) {
  let rootValue = binarySqrtNumber(n);
  let level = 0.1;
  for (let i = 0; i < p; i++) {
    while (rootValue * rootValue <= n) {
      rootValue += level;
    }
    rootValue -= level;
    level /= 10;
  }
  return rootValue;
}
// console.log("final value===>", finalAns(40, 3));

// ways to find the sqrt of number and optimized solution before solution
// using newtons Rapson methdod
// formula is root = squrt ( x + n/x )
function newtonsSqurt(n) {
  let x = n;
  let root;
  while (true) {
    root = 0.5 * (x + n / x);
    // console.log("ttt", root, x);
    if (Math.abs(root - x) < 0.01) {
      break;
    }
    x = root;
  }
  return root;
}

// factorial best practice
// make a squrt of the value and run the loop will reduce amt of comparison of unwanted numbers
function factorialMath(n) {
  let final = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (n / i == i) {
        console.log(i);
      } else {
        final.push(n / i);
        console.log(i);
      }
    }
  }
  final.reverse().forEach((e) => {
    console.log(e);
  });
}
// factorialMath(100);

//GCD_LCM
//using recursion and Euclidean algorithm ==> gcd(a,b) = gcd(b%a,a)
function gCD(a, b) {
  if (a == 0) {
    return b;
  }
  return gCD(b % a, a);
}
function lCM(a, b) {
  return (a * b) / gCD(a, b);
}
console.log("LCM", lCM(15, 18));
