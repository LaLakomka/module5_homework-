//задание 2 (5,3) (определение типов данных)

let x = null; 
if (typeof x === 'number') {
console.log('x-число');
}
else if (typeof x === 'string') {
 console.log('x-строка'); 
}
else {
  console.log('Тип x не определён');
}