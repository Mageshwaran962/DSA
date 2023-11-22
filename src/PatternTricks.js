// row and the col is dirctly prop to val, whenever perform any kind of oeprations

// function patternTrcik1(n) {
//   let mid = Math.floor((2 * n) / 2);
//   let val;
//   //   console.log()
//   for (let row = 1; row < 2 * n; row++) {
//     let str = "";
//     let i = 0;
//     if (mid > row) {
//       val = row;
//     } else {
//       let sub = row - mid;
//       val = mid - sub;
//     }
//     while (mid - val > i) {
//       str += " ";
//       i++;
//     }
//     for (let col = 1; col < val; col++) {
//       str += " *";
//     }
//     console.log(str);
//   }
// }
// patternTrcik1(5);
function patternTrcik2(n) {
  let mid = Math.floor((2 * n) / 2);
  for (let i = 2 * n; i >= 0; i--) {
    let str = " ";
    let opertionval = mid < i ? i - mid : mid - i;
    let space = mid - opertionval;
    let j = 0;
    while (space != 0 && space > j) {
      str += " ";
      j++;
    }
    // console.log("test", opertionval);
    for (let j = 0; j <= opertionval; j++) {
      str += ` ${i + 1}`;
    }
    console.log(str);
  }
}
// function patternTrcik3(n) {
//   let mid = Math.floor(n / 2);
//   let check = mid % 2 == 0 ? n : n - 1;
//   for (let i = 0; i <= n; i++) {
//     let str = "";
//     for (let j = 0; j < n; j++) {
//       let s = j + 1;
//       let e = n - 1;
//       if (i == 0 || i == check) {
//         str += ` ${mid > i ? mid - i : i - mid}`;
//       } else {
//         let val = "";
//         if (j == 0 || j == n - 1) {
//           val = " " + mid;
//         } else {
//           val = ` ${mid > i ? mid - i : i - mid}`;
//         }
//         str += val;
//         // str += ` ${mid > i ? mid - i : i - mid} `;
//       }
//     }
//     console.log("\n", str);
//   }
// }
// patternTrcik3(6);
patternTrcik2(4);

// function patternTrcik4(n) {
//   let patVal = 2 * n - 1;
//   for (let row = 0; row <= patVal; row++) {
//     let str = "";
//     for (let col = 0; col <= patVal; col++) {
//       let selectedValue =
//         n - Math.min(Math.min(row, col), Math.min(patVal - row, patVal - col));
//       str += ` ${selectedValue}`;
//     }
//     console.log(str);
//   }
// }
// patternTrcik4(5);
