// only for sorted array in this case and time complexity is O(log n)

let sample = [0, 1, 3, 4, 6, 7, 9, 11, 16, 19, 23, 33, 44, 67, 88, 99];
let sample2 = [99, 87, 76, 45, 33, 21, 21, 10, 5, 2, 1, 0, -1, -10, -29];
let leetcode = [5, 7, 7, 8, 8, 10];
function binarySearch(data, target) {
  // first insert the start and end items
  let start = 0;
  let end = data.length - 1;
  // find the given array as asending or desc
  let isAsc = data[start] < data[end];

  console.log("test asc", isAsc);
  while (start <= end) {
    // find the mid val from the given array
    console.log("loop", start, end);
    let mid = Math.floor((start + end) / 2);
    if (data[mid] == target) return mid;
    if (isAsc) target < data[mid] ? (end = mid - 1) : (start = mid + 1);
    else target > data[mid] ? (end = mid - 1) : (start = mid + 1);
  }
  console.log("ssss", start, end);
  // if no match found
  return -1;
}

function findtheceiling(data, target) {
  // first insert the start and end items
  let start = 0;
  let end = data.length - 1;
  let mid;
  // find the given array as asending or desc
  let isAsc = data[start] < data[end];

  console.log("test asc", isAsc);
  while (start <= end) {
    // find the mid val from the given array
    mid = Math.floor((start + end) / 2);
    if (data[mid] == target) return mid;
    if (isAsc) target < data[mid] ? (end = mid - 1) : (start = mid + 1);
    else target > data[mid] ? (end = mid - 1) : (start = mid + 1);
  }
  // if no match found note:based on asc and desc change the less and greater symbol
  if (data[mid] > target) {
    return end;
  } else {
    return start;
  }
}
function findstartandend(data, target, findStartIndex) {
  // first insert the start and end items
  let ans = -1;
  let start = 0;
  let end = data.length - 1;
  let mid;
  //   console.log("test asc", isAsc);
  while (start <= end) {
    // find the mid val from the given array
    mid = Math.floor((start + end) / 2);

    if (target < data[mid]) {
      end = mid - 1;
    } else if (target > data[mid]) {
      start = mid + 1;
    } else {
      ans = mid;
      if (findStartIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return ans;
}
function binaryFinalAns(data, target) {
  let ans = [-1, -1];
  let start = findstartandend(data, target, true);
  let end = findstartandend(data, target, false);
  ans[0] = start;
  ans[1] = end;
  return ans;
}

/// https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/
function ans(data, target) {
  let start = 0;
  let end = 1;
  console.log("out", data[end]);
  while (target < data[end]) {
    console.log("dddddd", data[end]);
    let newStart = end + 1;
    end = end + (end + (start + 1)) * 2;
    start = newStart;
  }
  return binarySearchPostion(data, target, start, end);
}

function binarySearchPostion(data, target, start, end) {
  //   console.log("test asc", isAsc);
  let isAsc = data[start] < data[end];
  while (start <= end) {
    // find the mid val from the given array
    console.log("loop", start, end);
    let mid = Math.floor((start + end) / 2);
    if (data[mid] == target) return mid;
    if (isAsc) target < data[mid] ? (end = mid - 1) : (start = mid + 1);
    else target > data[mid] ? (end = mid - 1) : (start = mid + 1);
  }
  console.log("ssss", start, end);
  // if no match found
  return -1;
}

function findthepeakele(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

// Hard problemss Find in Mountain Array
function findstartandendMountain(data, target, findStartIndex) {
  // first insert the start and end items
  let ans = -1;
  let start = 0;
  let end = findthepeakele(data);
  let mid;
  //   console.log("test asc", isAsc);
  while (start <= end) {
    // find the mid val from the given array
    mid = Math.floor((start + end) / 2);

    if (target < data[mid]) {
      end = mid - 1;
    } else if (target > data[mid]) {
      start = mid + 1;
    } else {
      ans = mid;
      if (findStartIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return ans;
}
function binaryFinalAnsMountain(data, target) {
  let ans = [-1, -1];
  let start = findstartandendMountain(data, target, true);
  // let end = findstartandend(data, target, false);
  ans[0] = start;
  // ans[1] = end;
  return ans;
}
// let final = findthepeakele([1, 2, 3, 4, 5, 3, 1]);
// let index = binaryFinalAns(leetcode, 8);
// console.log(
//   "test binary search==>",
//   binaryFinalAnsMountain([0, 1, 2, 4, 2, 1], 3)
// );

//Find the Rotation Count in Rotated Sorted array
// find the pivot eele in the given array
function rotatedArrayPeak(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (mid > start && arr[mid - 1] > arr[mid]) {
      return mid - 1;
    }
    if (arr[mid] <= arr[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
// find the pivot in the duplicate array rotation
function rotatedArrayPeak(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (mid > start && arr[mid - 1] > arr[mid]) {
      return mid - 1;
    }
    if (arr[mid] == arr[start] && arr[mid] == arr[end]) {
      if (arr[start] > arr[start + 1]) {
        return start;
      }
      start++;
      if (arr[end - 1] > arr[end]) {
        return end - 1;
      }
      end--;
    }
  }
  return -1;
}
// console.log("test==>", rotatedArrayPeak([12, 2, 3, 6, 12]));

// find the target in matrix sorted array
function BSmatrix(arr, target) {
  let row = 0;
  let col = arr.length - 1;
  console.log("sss", col);
  while (row <= arr.length && col >= 0) {
    if (arr[row][col] == target) {
      return [row, col];
    }
    if (arr[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  return [-1, -1];
}
let matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [28, 29, 37, 49],
  [33, 34, 38, 50],
];
console.log("ttsssss", BSmatrix(matrix, 45));
