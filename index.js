// const arr = [1, 2, 3, 4, 5, 1, 1, 2, 3, 4, 5, 6, 1, 7, 7, 1, 2, 3, 4, 5];
// const arr2 = [33, 45, 1, 3, 23, 10];
// let final = {};
// function sortArray(param) {
//   //   let final = param.sort((a, b) => a - b);
//   //   console.log(final);
//   const max = param.reduce((acc, val, index) => {
//     console.log("ttt", index, val, acc);
//     if (index > param.length - 1) {
//       return acc > val ? acc : val;
//     } else {
//       return val;
//     }
//   });

//   return max;
//   //   console.log(final[final.length - 2]);
// }
// arr.map((e, index) => {
//   if (final[e]) {
//     final[e].push(index);
//   } else {
//     final[e] = [index];
//   }
// });
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   printName: function () {
//     console.log("ref 1", this.firstName + " " + this.lastName);
//   },
// };
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   printName: function () {
//     console.log("ref 2", this.firstName + " " + this.lastName);
//   },
// };
// const greetingJane = person1.printName.bind(person1);
// greetingJane();
// console.log("tetss", sortArray(arr2));
// if (
//   (function () {
//     return true;
//   })()
// ) {
//   console.log("tets undeified", function () {});
// } else {
//   console.log("tets else undeified");
// }

// const sampleDes = ["sample1"];
// const [sample1, sample2 = "test"] = sampleDes;
// console.log("final", sample1, sample2);
// const objectDes = { name: "magesh", role: "engineer" };
// const { name, role } = objectDes;
// console.log("obje", name, role);
// const arr = [4, 5, 0, 1, 0, 2, 0, 4];
//op-> 4,5,1,2,4,0,0,0,0
// let final = [];
// let lev2 = [];
// arr.map((e) => {
//   if (e != 0) {
//     console.log("ttt", e);
//     final.push(e);
//   } else {
//     console.log("ttte", e);
//     lev2.push(e);
//   }
// });
// console.log("arra", final.concat(lev2));

// const array = ["magesh", true, 5, [1, 2], { a: 1 }];
// let final = 0;
// array.map((e) => {
//   if (typeof e == "number" || typeof e == "object") {
//     if (typeof e == "object") {
//       console.log(
//         "object",
//         Object.values(e).map((ele) => {
//           console.log("dd", ele);
//           final += ele;
//         })
//       );
//     }
//     if (typeof e == "number") {
//       final += e;
//     }
//   }
// });
// console.log("final ans", final);

// const array = [1, 2, 3, 2, 3, 6, 7, 8, 9, 2, 3, 4, 6];
// let final;
// array.map((e, index) => {
//   if (index == 0) {
//     final.push(e);
//   } else if (!final.includes(e)) {
//     final.push(e);
//   }
// });
// final = array.filter((e) => !final.includes(e) && e);
// console.log("final", final);

// function checkIfAnagram(param1, param2) {
//   let a = param1.split("").sort();
//   let b = param2.split("").sort();
//   console.log(a.join(""), b.join(""));
//   let final = true;

//   a.map((e) => {
//     // console.log(b.includes(e));
//     if (!b.includes(e)) {
//       final = false;
//     }
//   });
//   return final;
//   for (let i = 0; i < a.length; i++) {
//     console.log("sss", b[i]);
//     for (let j = 0; j < b.length; j++) {
//       console.log("sss", b[i], a[j]);

//       if (b[i] === a[j]) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }
// }
// console.log(checkIfAnagram("abcde", "eacdb"));
// console.log(checkIfAnagram("abcde", "eafdb"));

// let users = [
//   {
//     name: "abc1",
//     id: "1",
//   },
//   {
//     name: "abc2",
//     id: "2",
//   },
//   {
//     name: "abc3",
//     id: "3",
//   },
//   {
//     name: "abc4",
//     id: "4",
//   },
// ];

// let orders = {
//   1: {
//     response: [{ sK: 100 }, { sK: 200 }],
//   },
//   2: {
//     response: [{ sK: 300 }, { sK: 400 }, { sK: 500 }],
//   },
//   3: {
//     response: [],
//   },
//   4: {
//     response: [{ sK: 600 }],
//   },
// };

// let ans = users
//   .map((e) => {
//     let output = {};
//     output[e.name] = orders[e.id].response.length;
//     return output;
//     //
//   })
//   .sort((a, b) => {
//     return Object.values(b)[0] - Object.values(a)[0];
//   });

// console.log("final1", ans);
// var tests = [
//   "900,google.mail.com",
//   "50,yahoo.com",
//   "1,intel.mail.com",
//   "5,wiki.org",
//   "8,sports.org",
// ];
// let final = {};
// tests.map((e) => {
//   const [count, domain] = e.split(",");
//   const dname = domain.split(".");
//   if (final[dname[dname.length - 1]]) {
//     final[dname[dname.length - 1]] += Number(count);
//   } else {
//     final[dname[dname.length - 1]] = Number(count);
//   }
//   final[domain] = Number(count);
//   // console.log("test", dname[dname.length - 1]);
// });
// console.log("test", final);
// let strs = ["flower", "flow", "flight", "dog"];
// let final = {};
// strs.map((e) => {
//   if (final[e.substring(0, 2)]) {
//     final[e.substring(0, 2)] += final[e.substring(0, 2)];
//   } else {
//     final[e.substring(0, 2)] = 1;
//   }
//   console.log("sss", e.substring(0, 2));
// });
// if (Object.keys(final).length != 0) {
//   const values = Object.entries(final).sort(([, vala], [, valb]) => {
//     return valb - vala;
//   });
//   return values[0][0];
// } else {
//   return "";
// }

// Mfine
// var x = 21;
// var Mfine = function () {
//   console.log("testx", x);
//   var x = 20;
// };
// Mfine();

// console.log("testy", y);
// var y = 20;

// console.log("testb", b);
// let b = 20;

// for (var i = 0; i < 50; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 0);
//   console.log(i);
// }

// for (let i = 0; i < 100000; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// array sort without using sort method
// const arr=[1,3,3,2,1,2,3,2,1,4,7,8];
// const final=[];
// arr.map((e,index)=>{
//   if(index==0){
//     final.push(e)
//   }else if(!final.includes(e)){
//     final.push(e)
//   }
// });
// console.log("Hello, World!",final);
// for(let i=0;i<final.length;i++){
//   for(let j=0;j<final.length;j++){
//     if(final[j]>final[j+1]){
//       let sample=final[j];
//     final[j]=final[j+1];
//     final[j+1]=sample;
//   }

//   }
//   // console.log(final[i]);
// }

//

// const finalResult = {};
// testCall(courses, "courses_");
// function testCall(data, key_data) {
//   const keys = Object.keys(data);

//   keys.forEach((key, index) => {
//     if (typeof data[key] == "object") {
//       testCall(data[key], key_data + key + "_");
//     } else {
//       finalResult[key_data + key] = data[key];
//     }
//   });
// }

// console.log("final", finalResult);

//find the pivot of given mountain sorted array
// let sample = [1, 2, 3, 4, 5, 63, 3, 1];

// function findpivotusingbinarysearch(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] < arr[mid - 1]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return start - 1;
// }
// console.log(
//   "test the pivot value ==>>",
//   sample[findpivotusingbinarysearch(sample)]
// );

// const text = `Robotics is an interdisciplinary branch of engineering and science that includes mechanical engineering, electronics engineering, information engineering, computer science, and others. Robotics deals with the design, construction, operation, and use of
//           robots, as well as computer systems for their control, sensory feedback, and information processing. These technologies are used to develop machines that can substitute for humans and replicate human actions. Robots can be used in many situations
//           and for lots of purposes, but today many are used in dangerous environments (including bomb detection and deactivation), manufacturing processes, or where humans cannot survive (e.g. in space). Robots can take on any form but some are made to
//           resemble humans in appearance. This is said to help in the acceptance of a robot in certain replicative behaviors usually performed by people. Such robots attempt to replicate walking, lifting, speech, cognition, and basically anything a human
//           sd`;
// let ref = {};
// text.split("\n").map((e, index) => {
//   ref[index] = e;
// });
// console.log(ref);
// let num = 19;

// function squre(value, sum) {
//   if (value == 1) {
//     return value;
//   }
//   while (value) {
//     sum += Math.pow(value % 10, 2);
//     value = Math.floor(value / 10);
//   }
//   return squre(sum, 0);
// }
// console.log("tttttttt", squre(num, 0));
