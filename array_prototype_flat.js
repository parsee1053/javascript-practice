// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

function count1(arr, size, color) {
  let count = 0;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[i][j] == color) {
        count++;
      }
    }
  }
  return count;
}

function count2(arr, color) {
  return arr.flat().filter(v => v === color).length;
}

const arr = JSON.parse(JSON.stringify((new Array(8)).fill((new Array(8)).fill(0))));
arr[0][0] = arr[1][1] = arr[2][2] = arr[3][3] = arr[4][4] = 1;
arr[0][1] = arr[1][0] = 2;

console.log(count1(arr, 8, 0), count2(arr, 0)); // 57 57
console.log(count1(arr, 8, 1), count2(arr, 1)); // 5 5
console.log(count1(arr, 8, 2), count2(arr, 2)); // 2 2
