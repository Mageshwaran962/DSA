// How to Find Missing Number on Integer Array of 1 to 100
// const arr = [1, 2, 3, 4, 6, 7, 9, 8, 10];
// let n = 10;
// const value = (n * (n + 1)) / 2;
// const final = arr.reduce((acc, cur) => {
//   return (acc += cur);
// }, 0);
// console.log("test practice", value - final);

//How do you find the duplicate number on a given integer array both done (only duplicate and removed duplicate)
// const arry = [1, 1, 1, 4, 6, 7, 9, 8, 10];
// const toFindDuplicates = (arry) =>
//   arry.filter((item, index) => {
//     return arry.indexOf(item) !== index;
//   });
// console.log("final ans", toFindDuplicates(arry));

//How do you find the largest and smallest number in an unsorted integer array
// const arr = [-20, 34, 21, -87, 92, 2147483647];
// const final = arr.sort((a, b) => a - b);
// console.log("final", final[0], final[final.length - 1]);

//How do you find all pairs of an integer array whose sum is equal to a given number
// const arr = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];
// let target = 7;
// let final = {};
// let count = 1;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] == target) {
//       final[count] = `(${arr[i]},${arr[j]})`;
//       count++;
//     }
//   }
// }
// console.log("test", final);

//How do you find duplicate numbers in an array if it contains multiple duplicates?
// const arry = [1, 3, 4, 3, 5, 4, 6, 8, 8];
// const toFindDuplicates = (arry) =>
//   arry.filter((item, index) => {
//     return arry.indexOf(item) !== index;
//   });
// console.log("final ans", toFindDuplicates(arry));

//Given an unsorted array of integers, find the length of the longest consecutive elements sequence
const arr = [0, 3, 7, 2, 0, 1, 11, 12, 13, 14, 15, 16];
let count = 1;
const final = arr
  .sort((a, b) => a - b)
  .reduce((acc, cur, index) => {
    if (cur == arr[index + 1] - 1) {
      count++;
    } else {
      acc = count;
      count = 1;
    }
    return acc;
  }, 0);
console.log("final", final);

//How to find a median of two sorts arrays
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// let sorted = arr1.concat(arr2).sort((a, b) => a - b);
// const half = (sorted.length / 2) | 0;
// if (sorted.length % 2) console.log("test1", sorted[half]);
// else console.log("tttt", (sorted[half] + sorted[half - 1]) / 2);

//How do you reverse a given string in place
// let sample = "Testing";
// let final = sample.split("").reverse().toString().replaceAll(",", "");
// console.log(final);

//How do you print duplicate characters from a string
// let sample = "Great responsibility";
// console.log("ss", sample.replace(" ", ""));
// const op = sample
//   .replace(" ", "")
//   .split("")
//   .filter((e, index, arr) => arr.indexOf(e) !== index);
// console.log("duplicate", op);

//How do you check if two strings are anagrams of each other
// let a = "india";
// let b = "nidia";
// if (a.split("").sort().join("") == b.split("").sort().join("")) {
//   console.log("true");
// } else {
//   console.log("false");
// }

//How do you find all the permutations of a string
// const stringPermutations = (str) => {
//   if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
//   return str.split("").reduce((acc, letter, i) => {
//     console.log("ggg", acc, letter, i);
//     return acc.concat(
//       stringPermutations(str.slice(0, i) + str.slice(i + 1)).map((val) => {
//         console.log("sss", val);
//         return letter + val;
//       })
//     );
//   }, []);
// };

// stringPermutations("abc");

//How can a given string be reversed using recursion

// const reverseString = (str) => {
//   if (str.length == 1) {
//     return str;
//   } else {
//     return (
//       str.charAt(str.length - 1) +
//       reverseString(str.substring(0, str.length - 1))
//     );
//   }
// };
// console.log(reverseString("Test"));

// How do you check if a string contains only digits
// const sample = "123";
// console.log(
//   "ttt",
//   [...sample].every((c) => "0123456789".includes(c))
// );
// console.log("123123".isNumber());

//How do you count a number of vowels and consonants in a given string
// let sample = "Please enter some text";
// const op = sample.split("").reduce((acc, val) => {
//   if ("aeiou".includes(val.toLocaleLowerCase())) {
//     return (acc += 1);
//   } else {
//     return acc;
//   }
// }, 0);
// console.log("moddd", op);

// array within array for same element present
// const arr = [4, 5, 6, 7, 4, 1, 6, 2, 0];
// let op = [];
// arr
//   .filter((ele, index) => arr.indexOf(ele) === index)
//   .map((e) => {
//     let sample = [];
//     for (let i = 0; i < arr.length; i++) {
//       console.log("ss", e, arr[i]);
//       if (e === arr[i]) {
//         sample.push(e);
//       }
//     }
//     op.push(sample);
//   });
// console.log("final", op);

// questions refered in interviews
// function sum(a = 11, b = 5) {
//   return a + b;
// }
// console.log(sum(null, 20));
// console.log(sum(undefined, 20));
// console.log(sum());

// recursive achive
// function recursive(num) {
//   if (num > 0) {
//     console.log("ttt", num);
//     return num + recursive(num - 1);
//   } else {
//     return num;
//   }
// }
// console.log(recursive(5));
//fibonacci series
// function fibonacci(num) {
//   if (num < 2) {
//     return num;
//   } else {
//     return fibonacci(num - 2) + fibonacci(num - 1);
//   }
// }
// for (let i = 0; i < 6; i++) {
//   console.log(fibonacci(i));
// }

//non replicating elements
// let sample = "abcab";
// const final = sample
//   .split("")
//   .filter((ele, index, arr) => arr.indexOf(ele) === arr.lastIndexOf(ele));
// console.log("final", final);

// function x() {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
//   let i = 1;
// }
// x();

// valid paranthesis
// var isValid = function (s) {
//   console.log(s.indexOf("{}"));
//   while (
//     s.indexOf("{}") !== -1 ||
//     s.indexOf("()") !== -1 ||
//     s.indexOf("[]") !== -1
//   )
//     s = s.replace(
//       s.indexOf("{}") !== -1
//         ? "{}"
//         : s.indexOf("()") !== -1
//         ? "()"
//         : s.indexOf("[]") !== -1
//         ? "[]"
//         : null,
//       ""
//     );
//   return s === "";
// };
// console.log(isValid("{"));

//string check
// function test(s) {
//   console.log(s.indexOf("ab"));
// }
// test("cba");

//typeof
// console.log("tttt", typeof null);

//array methods
// const arr = [1, "b", "c", "d"];
// console.log(arr.join(""));
// console.log(arr.findIndex((e) => e == "b"));
// console.log(arr.indexOf("c"));
// console.log(arr.slice(1));
// console.log(arr.fill("c"));

// const arr = [1, 5, 8, 2, 6, 9];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let sample = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = sample;
//     }
//   }
// }
// console.log("final", arr);
// function multiply(a, b) {
//   return "i".repeat(a).repeat(b).length;
// }
// console.log(multiply(5, 6));
// function multiple(a, b) {
//   let sample = a;
//   for (let i = 1; i < b; i++) {
//     sample += a;
//   }
//   return sample;
// }
// console.log(multiple(2, 4));

// const checkValue = (param) => {
//   switch (param) {
//     case 200:
//       return "SUCCESS";
//     case 404:
//       return "PAGE NOT FOUND";
//     case 500:
//       return "SERVER ERROR";
//     default:
//       return "SOMETHING WENT WRONG";
//   }
// };

// console.log("test switch", checkValue(200));
// let employees = [
//   {
//     firstName: "ishu",
//     lastName: "elago",
//     age: 40,
//     joinedDate: "December 15, 2017",
//   },
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 27,
//     joinedDate: "December 15, 2017",
//   },

//   {
//     firstName: "Ana",
//     lastName: "Rosy",
//     age: 25,
//     joinedDate: "January 15, 2019",
//   },

//   {
//     firstName: "Zion",
//     lastName: "Albert",
//     age: 30,
//     joinedDate: "February 15, 2011",
//   },
// ];
// const final = employees.sort((a, b) => {
//   return a.age - b.age;
// });
// console.log("tttt", final);

// let heigh_value = 11;
// let result = heigh_value / 3;
// let grand = null;
// let round_value = Math.round(result);
// console.log("tttttttttttt", Math.round(result));
// if (round_value == 3) {
//   grand = 5;
// }

// console.log("tttttttttttt");

// function isKeyPresent(obj, key) {
//   // Base case: if the object is null or undefined, return false
//   if (obj === null || typeof obj !== "object") {
//     return false;
//   }

//   // Check if the key is directly present in the current object
//   if (key in obj) {
//     return true;
//   }

//   // Recursively check each nested object
//   for (let nestedKey in obj) {
//     if (isKeyPresent(obj[nestedKey], key)) {
//       return true;
//     }
//   }

//   // Key not found
//   return false;
// }
// const data = {
//   y: 12,
//   x: 6,
//   data: { y: 12, x: 6, marker: "12 lbs \nNov, 2022", recordedFrom: "4" },
// };
// const data2 = null;
// console.log(isKeyPresent(data, "marker"));
// console.log(isKeyPresent(data2, "marker"));
// var singleNumber = function (nums) {
//   let output = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (output[nums[i]]) {
//       delete output[nums[i]];
//     } else {
//       output[nums[i]] = 1;
//     }
//   }
//   console.log("ttt", Object.keys(output)[0]);
//   Object.keys(output)[0];
// };
// singleNumber([4, 1, 2, 1, 2]);
