// se debe buscar el minimo de elementos de un array
// que sumados sean iguales o mayor al valor buscado
// una variable para salvar el numero de elementos sumados sea el menor posible
// un variable para guardar el valor sumado y compararlo con el buscado


let ans = Infinity;
let arr = [5,1,3,5,10,7,4,9,2,8]
let valueToFind = 15;

for (let i = 0; i < arr.length; i++) {
  let add = 0;
  for (let j = i; j < arr.length; j++) {
    // add = 0 y j[0] = 5 = 5 i = 0
    // add = 5 y j[1] = 1 = 6 i = 0
    // add = 6 y j[2] = 3 = 9 i = 0
    // add = 9 y j[3] = 5 = 14 i = 0
    // add = 14 y j[4] = 10 = 24 i = 0

    // add = 0 y j[1] = 1 = 1 i =1
    // add = 1 y j[2] = 3 = 4 i =1
    // add = 4 y j[3] = 5 = 9 i =1
    // add = 9 y j[4] = 10 = 19 i =1

    // add = 0 y j[2] = 3 = 3 i =2
    // add = 3 y j[3] = 5 = 8 i =2
    // add = 8 y j[4] = 10 = 18 i =2

    // add = 0 y j[3] = 5 = 5 i =3
    // add = 5 y j[4] = 10 = 15 i =3        
    if (add += arr[j] >= valueToFind) {
      add += arr[j];
      ans = Math.min(ans, j-i+1);
      break;
      // comparar el valor minimo inicial con el numero de elementos obtenidos
      // ans = min(ans, j-i+1)
      // 4-0+1 = 5
      // salvamos valor de elementos minimos para obtener el numero buscado es 5 al momento
      // rompemos el for

      // aqui con i = 1
      // comparamos ans que vale 5
      // ans = min(ans, j-1+1)
      // 5, 4-1+1
      // 5, 4
      // ans = 4
      // rompe el for

      // aqui con i = 2
      // comparamos con ans = 4
      // ans = min(ans, j-i+1)
      // ans = min(ans, 4-2+1)
      // ans = min(4, 3)
      // ans = 3

      // aqui con i = 3
      // comparamos con ans = 3
      // ans = min(ans, j-i+1)
      // ans = min(ans, 4-3+1)
      // ans = min(3, 2)
      // ans = 2
    }

    add += arr[j]
  }
}

let add = 0;
let l = 0
for (let r = 0; r < arr.length; r++) {
  add += arr[r];
  // add = 0 + arr[0]5 = 5
  // add = 5 + arr[1]1 = 6
  // add = 6 + arr[2]3 = 9
  // add = 9 + arr[3]10 = 19

  // aqui left vale 1
  // add vale 14
  // add = 14 + arr[4] = 7
  // add = 21

  // aqui left vale 4
  // add vale 13
  // add = 13 + arr[5] = 4
  // add = 17
  while (add >= valueToFind) {
    // 19 >= 15
    // min(infinity, 3-0+1)
    // min(infinity, 4)
    // ans = 4
    // add = 19 - arr[left que es 0] = 5
    // add 19 - 5 = 14
    // l = 0 + 1 = 1

    // 21 >= 15
    // min(4, 4-1+1)
    // min(4, 4)
    // ans = 4
    // add 21 - arr[left que vale 1] = 1 = 20
    // l = 2
    // 20 >= 15
    // min(4, 4-2 + 1)
    // min(4, 3)
    // ans = 3
    // add = 20 - arr[left que vale 2] = 3 = 17
    // l = 3
    // 17 >= 15
    // min(4, 4-3 + 1)
    // min(4, 2)
    // ans = 2
    // add = 17 - arr[left que vale 3] = 5 = 13
    // l = 4

    // 17 >= 15
    // min(4, 5-4 + 1)
    // min(4, 2)
    // ans = 2
    // add = 17 - arr[left que vale 4] = 10 = 7
    // l = 5

    ans = Math.min(ans, r-l+1)
    add -= arr[l]
    l++
  }
}
console.log("numero de elementos minimos para obter un valor igual o mayor a 15 es ", ans)