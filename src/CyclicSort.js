//whenever you see the question is start or use with 1 to n /// make it sure its definitly comes under the cyclic sort method

function cyclicSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // start swap from here
    while (i < arr.length) {
      let correct = arr[i] - 1;
      if (arr[i] != arr[correct]) {
        swap(arr, i, correct);
      } else {
        i++;
      }
    }
  }
  return arr;
}
function swap(arr, first, second) {
  console.log("test", first, second);
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}
function cyclicSortModified(arr) {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] != arr[correct]) {
      swap(arr, i, correct);
    } else {
      i++;
    }
  }
  console.log("ss", arr);
  for (let i = 0; i < arr.length; i++) {
    // start swap from here
    if (arr[i] != i) {
      return i;
    }
  }

  return arr.length;
}
function cyclicSortFindDuplicate(arr) {
  let i = 0;
  let final = [];
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] != arr[correct]) {
      swap(arr, i, correct);
    } else {
      i++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    // start swap from here
    if (arr[i] != i + 1) {
      final.push(arr[i]);
    }
  }
  return final;
}

console.log(
  "final==>cyclic",
  cyclicSortFindDuplicate([4, 3, 2, 7, 8, 2, 3, 1])
);
