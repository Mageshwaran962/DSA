// sorting based on the insertion method
// comapring the left side of ele is greater than the cur then we can swap the values
// its best for partial sorted array

function insertionSorting(arr) {
  // we add the i value less than N-2 because its not go arr out of bound while running the j loop
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log("final==>", insertionSorting([5, 1, 4, 2, 3]));
