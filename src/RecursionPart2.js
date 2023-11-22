// recursion part questions with patterns ,bubble sort and selection sorts
// without any loops only on recursion
function recursionPatter1(r, c, str) {
  if (r == 0) {
    return;
  }
  if (r > c) {
    str += " *";
    recursionPatter1(r, c + 1, str);
  } else {
    recursionPatter1(r - 1, 0, "");
    console.log(str);
  }
}
// recursionPatter1(6, 0, "");

//bubble sort using recursion
function bubblesort(r, c, arr) {
  if (r == 0) {
    return arr;
  }
  if (r > c) {
    if (arr[c + 1] < arr[c]) {
      let temp = arr[c];
      arr[c] = arr[c + 1];
      arr[c + 1] = temp;
    }
    return bubblesort(r, c + 1, arr);
  } else {
    return bubblesort(r - 1, 0, arr);
  }
}
let data = [5, 2, 1, 4, 8, 6];
// console.log("final==>", bubblesort(data.length - 1, 0, data));

// selection sort using recursion
function selectionSort(r, c, arr, max) {
  if (r == 0) {
    return arr;
  }
  if (r >= c) {
    if (arr[max] > arr[c]) {
      return selectionSort(r, c + 1, arr, max);
    } else {
      return selectionSort(r, c + 1, arr, c);
    }
  } else {
    if (max != -1) {
      let temp = arr[max];
      arr[max] = arr[r];
      arr[r] = temp;
    }
    return selectionSort(r - 1, 0, arr, 0);
  }
}
console.log("final==>", selectionSort(data.length - 1, 0, data, 0));
