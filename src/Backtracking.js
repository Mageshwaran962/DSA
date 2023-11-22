//backtracking related problems and hints
function maze(r, c) {
  if (r == 1 || c == 1) {
    return 1;
  }
  let left = maze(r - 1, c);
  let right = maze(r, c - 1);
  return left + right;
}
// console.log(maze(3, 3));

// drive the path using this same approach
function path(p, r, c) {
  if (r == 1 && c == 1) {
    console.log(p);
    return;
  }
  if (r > 1) {
    path(p + "D", r - 1, c);
  }
  if (c > 1) {
    path(p + "R", r, c - 1);
  }
}
// path("", 3, 3);

// path have restrictions with 3x3 matrix examples

function mazePathrest(p, arr, r, c) {
  if (r == arr.length - 1 && c == arr[0].length - 1) {
    console.log(p);
    return;
  }
  if (arr[r][c] == false) return;
  if (r < arr.length - 1) {
    mazePathrest(p + "D", arr, r + 1, c);
  }
  if (c < arr[0].length - 1) {
    mazePathrest(p + "R", arr, r, c + 1);
  }
}

// find all the possible paths using backtracking
// same approach to find the all the possible ways to travel the destination points
function mazeBacktracking(p, arr, r, c) {
  if (r == arr.length - 1 && c == arr[0].length - 1) {
    console.log(p);
    return;
  }
  if (arr[r][c] == false) return;
  // here is the place we are tracking the path travled
  arr[r][c] = false;
  if (r < arr.length - 1) {
    mazeBacktracking(p + "D", arr, r + 1, c);
  }
  if (c < arr[0].length - 1) {
    mazeBacktracking(p + "R", arr, r, c + 1);
  }
  if (r > 0) {
    mazeBacktracking(p + "U", arr, r - 1, c);
  }
  if (c > 0) {
    mazeBacktracking(p + "L", arr, r, c - 1);
  }
  //here the function exe is over
  // here the functions get removed, also need to removed the changes were the functions made
  // here the backtracking comes
  arr[r][c] = true;
}

// To print the path using the number find the length of the path
// to print the path travese as number in the matrix
function mazeBacktrackingUsingNum(p, count, arr, r, c, steps) {
  if (r == arr.length - 1 && c == arr[0].length - 1) {
    steps[r][c] = count;
    for (let i = 0; i < steps.length; i++) {
      console.log(steps[i]);
    }

    console.log(p);
    return;
  }
  if (arr[r][c] == false) return;
  // here is the place we are tracking the path travled
  arr[r][c] = false;
  steps[r][c] = count;
  if (r < arr.length - 1) {
    mazeBacktrackingUsingNum(p + "D", count + 1, arr, r + 1, c, steps);
  }
  if (c < arr[0].length - 1) {
    mazeBacktrackingUsingNum(p + "R", count + 1, arr, r, c + 1, steps);
  }
  if (r > 0) {
    mazeBacktrackingUsingNum(p + "U", count + 1, arr, r - 1, c, steps);
  }
  if (c > 0) {
    mazeBacktrackingUsingNum(p + "L", count + 1, arr, r, c - 1, steps);
  }
  //here the function exe is over
  // here the functions get removed, also need to removed the changes were the functions made
  // here the backtracking comes
  arr[r][c] = true;
  steps[r][c] = 0;
}
let sample = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
];
const matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
mazeBacktrackingUsingNum("", 0, sample, 0, 0, matrix);
