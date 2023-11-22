//rotate the array elements to the left by d positions.
// const rotateArray = (data, n) => {
//   for (let i = 0; i < n; i++) {
//     data.push(data.shift());
//   }
//   console.log("sssssssss", data);
// };
// rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
//Find the majority element in the array. A majority element in an array A[] of size n is an element that appears more than n/2 times
// const majorityFind = (data) => {
//   let halfSize = data.length / 2;
//   let final = {};
//   let result = null;
//   for (let i = 0; i < data.length; i++) {
//     if (final[data[i]]) {
//       final[data[i]] += 1;
//       if (final[data[i]] > halfSize) {
//         result = data[i];
//       }
//     } else {
//       final[data[i]] = 1;
//     }
//   }
//   console.log(result);
// };
// majorityFind([3, 3, 4, 2, 4, 4, 2, 4]);
//Given a non-negative number represented as an array of digits, add 1 to the number ( increment the number represented by the digits ). The digits are stored such that the most significant digit is the first element of the array.
// const plusOne = (data) => {
//   let value = data;
//   for (let i = value.length - 1; i >= 0; i--) {
//     if (value[i] < 9) {
//       value[i] += 1;
//       break;
//     } else {
//       value[i] = 0;
//       plusOne(value[i]);
//     }
//     if (i == 0) {
//       value.unshift(1);
//       break;
//     }
//   }
//   console.log("sss", value);
// };
// plusOne([1, 2, 4, 5, 6, 7, 8, 9]);
// finc the max length of the sentence
// var mostWordsFound = function (sentences) {
//   let max = 0;
//   sentences.forEach((ele) => {
//     let words = ele.split(" ").length;
//     if (words > max) {
//       max = words;
//     }
//   });
//   console.log("eee", max);
// };
// mostWordsFound([
//   "alice and bob love leetcode",
//   "i think so too",
//   "this is great thanks very much",
// ]);

// remove duplicate from the array
let array = [1, 2, 3, 3, 4, 4, 5];
let duplicate;
let final = [];
arr.forEach((e, i) => {
  if (e != arr[i + 1]) {
    final.push(e);
  }
});
