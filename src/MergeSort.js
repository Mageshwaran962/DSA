// merge sorting

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  // here is important part level by level of spilt again again by signle ele and compare and send back
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));

  return merge(left, right);
}
function merge(f, s) {
  let i = 0,
    j = 0;
  let final = [];
  while (i < f.length && j < s.length) {
    console.log("ss", f[i], s[j]);
    if (f[i] > s[j]) {
      final.push(f[i]);
      i++;
    } else {
      final.push(s[j]);
      j++;
    }
  }
  // incase any one array greater than left or right side add in the end
  while (i < f.length) {
    final.push(f[i]);
    i++;
  }
  while (j < s.length) {
    final.push(s[j]);
    j++;
  }

  return final;
}
console.log("tt", mergeSort([5, 3, 1, 4, 2, 6, 8]));
