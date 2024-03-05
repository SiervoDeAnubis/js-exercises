const maxSuma = (arr, w, arr_length) => {
  let max_suma = 0;

  for (let i = 0; i < w; i++) {
    max_suma += arr[i]
  }
  
  console.log(" ----- ", max_suma);
  let window_add = max_suma;
  for (let i = w; i < arr_length; i++) {
    console.log(`arr ${i} ${w}`, arr[i-w]);
    console.log('arr nor', arr[i]);
    console.log('window add', window_add);
    window_add = window_add - arr[i-w] + arr[i];
    console.log('window add ---- ', window_add);
    max_suma = Math.max(max_suma,window_add);
  }

  return max_suma
}

let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ];
const w = 4;
const arr_length = arr.length;

maxSuma(arr, w, arr_length);