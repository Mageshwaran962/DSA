// Quick sort DSA
// its basically choose any one of the element --> As pivot
// pending ......
function quickSort(arr, start, end) {
  if (end <= start) {
    return arr;
  }
  let pivot = partitions(arr, start, end);
  console.log("pivot", pivot);
  quickSort(arr, 0, pivot);
  quickSort(arr, pivot, end);
}
function partitions(arr, start, end) {
  let i = start - 1;
  let pivot = arr[end];
  for (let j = start; j <= end - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  let temp = arr[i];
  arr[i] = arr[end];
  arr[end] = temp;

  return i;
}
let data = [8, 2, 5, 3, 9, 4, 7, 6, 1];
console.log("rest", quickSort(data, 0, data.length));
