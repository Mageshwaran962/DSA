// for sorting techniques

function bubblesort(arr) {
  for (let i = 0; i <= arr.length; i++) {
    let swapped = false;
    for (let j = 1; j <= arr.length - i - 1; j++) {
      //comparing ele and swap
      console.log("test", arr[i], j);
      if (arr[j] > arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapped = true;
      }
    }
    // this swapped flag is protect from is already sorted array came its check atleast one swap is happen or not in process
    // based on that its update the flag
    if (!swapped) break;
  }
  return arr;
}

console.log("sorted arr", bubblesort([8, 1, 2, 2, 3]));
