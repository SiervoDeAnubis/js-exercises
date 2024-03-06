const maxSum = (arr, window, length) => {
  let max = 0;
  let winAdd = 0;
  let start = 0;

  for (let i = 0; i < length; i++) {
    winAdd += arr[i]

    if ((i-start + 1) == window) {
      max = Math.max(max, winAdd);
      winAdd -= arr[start]
      start += 1
    }
  }

  return max
}

let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]
let window = 4;
let { length } = arr;

console.log(maxSum(arr,window, length));