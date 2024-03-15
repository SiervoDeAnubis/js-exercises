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
  let ans = {}
  for (let i = 0; i < arr.length; i++) {
    let complemento = target - arr[i];
    // comp = 9 - arr[i=0] 2
    // comp = 7

    // comp = 9 - arr[i=1] 7 
    // comp = 2
    if (ans[complemento] !== undefined) {
      // checa si en el hashmap existe el valor del completo
      // exist el  valor de  ans[7]

      // en valor ans[2] si existe
      // entonces regresa el valor  previament guardado en la ruta ans[2] = 0
      // regresa el un arreglo [0, 1]
      return [ans[complemento], i]
    }
    // ans[2] = 0 ===> {2:0}

    ans[arr[i]] = i;
  }
}

console.log("-----",twoSum([2,7,11,15], 9))
