// string and subset related questions
//find the ans from the string given below using recursion
function recursionString(str, i) {
  if (str.length < i) return str;
  if (str.at(i) === "a") {
    str = str.split("");
    str[i] = "";
    str = str.join("");
  }
  i++;
  return recursionString(str, i);
}
// using recursion and substring methods

function recursionEntireString(str) {
  if (str.length == 0) {
    return "";
  }
  if (str.startsWith("apple")) {
    return recursionEntireString(str.substring(5));
  }
  return str.at(0) + recursionEntireString(str.substring(1));
}

// find the exact string is present remove else not remove
function recursionExactString(str) {
  if (str.length == 0) {
    return "";
  }
  if (str.startsWith("app") && !str.startsWith("apple")) {
    return recursionExactString(str.substring(5));
  }
  return str.at(0) + recursionExactString(str.substring(1));
}

//find the unique subset pairs using recursion
function uniqueSubsets(p, str, arr) {
  if (str.length == 0) {
    console.log(p);
    arr.push(p);
    return arr;
  }
  let char = str.at(0);
  uniqueSubsets(p + char, str.substring(1), arr);
  uniqueSubsets(p, str.substring(1), arr);
}
console.log("ssss", uniqueSubsets("", "516", []));
function twoSum(numbers, target) {
  let s = 0,
    e = numbers.length - 1;
  let mid;
  if (numbers.length == 2) {
    if (numbers[0] + numbers[1] == target) {
      return [0, 1];
    }
  }
  while (s <= e) {
    mid = Math.floor((s + e) / 2);
    if (numbers[mid] > target) {
      e = mid - 1;
    } else {
      let arry = numbers.slice(s, e);
      return sum(arry, target);
    }
  }
}
function sum(arr, target) {
  for (let i = 0, j = i + 1; j <= arr.length; i++, j++) {
    if (arr[i] + arr[j] == target) {
      return [i, j];
    }
  }
}
// console.log("ssss", sum([2, 3, 4], 7));
