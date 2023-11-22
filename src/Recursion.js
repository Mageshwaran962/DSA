// Its helps to resolve the complex and bigger problem in easy way
// f(N) = f(N-1) + f(N-2) its called recurrence relation

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log("fiii", fibonacci(7));
function recursion1(n) {
  // this kind of recursion is called as tailed
  // this is last function call in this program
  recursion1(n + 1);
}

// recursion using binary search
function binarySearchRecursion(arr, target, start, end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == target) {
    return mid;
  }
  if (start <= end) {
    if (target < arr[mid]) {
      return binarySearchRecursion(arr, target, start, mid - 1);
    }
    return binarySearchRecursion(arr, target, mid + 1, end);
  }
  return -1;
}
let arr = [2, 3, 4, 5, 44, 77, 99];
// console.log("RBS", binarySearchRecursion(arr, 99, 0, arr.length - 1));

// leve 2 recursion questions
// revPrint
function recursionSimple(n) {
  if (n == 1) {
    return;
  }
  console.log("itee", n);
  recursionSimple(n - 1);
}
// recursionSimple(5);
//printForword
function recursionSimpleRev(n) {
  if (n == 0) {
    return;
  }
  recursionSimpleRev(n - 1);
  //here each exe wait until the above function finish exe in stack
  console.log("itee", n);
}
// recursionSimpleRev(5);
/// both direction in one
function recursionboth(n) {
  if (n == 0) {
    return;
  }
  console.log("itee", n);
  recursionboth(n - 1);
  //here each exe wait until the above function finish exe in stack
  console.log("itee", n);
}
// recursionboth(5);

//factorial of given number
function factorialRecursion(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorialRecursion(n - 1);
}
function sumOFlRecursion(n) {
  if (n <= 1) {
    return 1;
  }

  return n + sumOFlRecursion(n - 1);
}
function sumofDigitsRecursion(n) {
  if (n == 0) {
    return 0;
  }

  return (n % 10) + Math.floor(sumofDigitsRecursion(n / 10));
}
function prodDigitsRecursion(n) {
  if (n % 10 == n) {
    return n;
  }

  return (n % 10) * prodDigitsRecursion(Math.floor(n / 10));
}

let finalval = 0;
function reverNumberRecursion(n) {
  finalval = finalval * 10 + (n % 10);
  if (n % 10 == n) {
    return finalval;
  }
  return reverNumberRecursion(Math.floor(n / 10));
}
// console.log("revers", finalval, reverNumberRecursion(4627))
let count = 0;
function countTheZeros(n) {
  if (n == 0) {
    return count;
  }
  if (n % 10 == 0) {
    count++;
  }
  return countTheZeros(Math.floor(n / 10));
}
// console.log("find ", countTheZeros(230405601));

//leetcode problem
let ans = 0;
function numberStepsToZero(n) {
  if (n == 0) {
    return ans;
  }
  ans++;
  return numberStepsToZero(n & (1 == 1) ? n - 1 : n / 2);
}
// console.log("sss", numberStepsToZero(8));
//find the array is sorted or not using recursive

function recursiveArraySorted(arr, i, j) {
  if (arr[i] < arr[j]) {
    if (j == arr.length - 1) {
      return true;
    }
    return recursiveArraySorted(arr, i + 1, j + 1);
  } else {
    return false;
  }
}
// console.log("sss", recursiveArraySorted([1, 10, 3, 4, 5], 0, 1));

// linear search using recursion
// function linearSearchRecur(arr, target, i) {
//   if (arr[i] == target) return i;
//   else return i <= arr.length - 1 ? linearSearchRecur(arr, target, i + 1) : -1;
// }
let anss = [];
function linearSearchRecur(arr, target, i, anss) {
  if (i >= arr.length - 1) {
    return anss;
  }
  if (arr[i] == target) {
    anss.push(i);
  }
  return linearSearchRecur(arr, target, i + 1, anss);
}
// without passing argus final ans
function linearSearchRecurWA(arr, target, i) {
  let final = [];
  if (i >= arr.length - 1) {
    return final;
  }
  if (arr[i] == target) {
    final.push(i);
  }
  return final.concat(linearSearchRecurWA(arr, target, i + 1));
}
// console.log("sssss", linearSearchRecurWA([3, 2, 1, 15, 15, 96], 15, 0));

// recursion call using binarysearch find target in roated array without using a pivot ele
//check later not fixed
function binarysearchRoatedArr(arr, target) {
  let s = 0;
  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    // if match return the mid
    if (target == arr[mid]) return mid;
    console.log("sss", mid);
    if (arr[s] <= arr[mid]) {
      console.log("one");
      if (target >= arr[s] && target <= arr[mid]) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }
    if (target >= arr[mid] && target >= arr[e]) {
      s = mid + 1;
    }
    e = mid - 1;
  }
  return -1;
}
// console.log("sss", binarysearchRoatedArr([5, 6, 7, 8, 9, 1, 2, 3], 2));
