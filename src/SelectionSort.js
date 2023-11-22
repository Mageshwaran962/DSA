function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let last = arr.length - i - 1;
    let max = getMaxIndex(arr, 0, last);
    console.log("max", arr[max]);
    if (max != -1) {
      let temp = arr[last];
      arr[last] = arr[max];
      arr[max] = temp;
    }
  }
  return arr;
}

function getMaxIndex(arr, start, end) {
  let max = start;
  for (let i = start; i <= end; i++) {
    if (arr[max] > arr[i]) {
      //   console.log("max", i, arr[i]);
      max = i;
    }
  }
  return max;
}
console.log("final==>", selectionSort([4, 1, 3, 5, 2]));
