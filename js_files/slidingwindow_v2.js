let ans = Infinity;
let add = 0;
let l = 0;
let arr = [5,1,3,5,10,7,4,9,2,8,15]
let valueToFind = 15;

for (let r = 0; r < arr.length; r++) {
  add += arr[r];
  while(add >= valueToFind) {
    ans = Math.min(ans, r-l+1)
    add -= arr[l]
    l++
  }
}

console.log("numero de elementos minimos para obter un valor igual o mayor a 15 es ", ans)


console.log('pwwkew'.split(""))
let acc = 'pwwkew'.split("");

const twoSum = (arr, target) => {
  let ans = new Map();
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let result = target - arr[i];
    console.log("sdf", result);
    // 9-2 = 7
    // 9-7 = 2
    // 9-11
    if (ans.has(result)) {
      result[0] = ans.get(result);
      result[1] = i
      return result
    }
    // ans.set('7', 0)
    // ans.set('2', 1)
    ans.set(result, i)
  }
  console.log(result);
  return result
}

console.log("-----",twoSum([2,7,11,15], 9))
