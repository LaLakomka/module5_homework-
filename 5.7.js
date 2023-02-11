//задание 1 (5.6) (Проверить одинаковые ли эдементы)

let arr = [1,1,1];
let b = true;
  for (i = 0; i < arr.length; i++) {
    if(arr[i] != arr[0]){
      b = false
      break
    }
  } 
console.log(b)