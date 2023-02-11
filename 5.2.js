//Задание 1 (5.3) (определение числа)

let num = prompt('Введите число');
if (typeof(+num) != 'number' || isNaN(+num) || num == ''){
  console.log('Упс, вы ошиблись')
} else if (num % 2 === 0) {
  console.log('Четное число')
} else {
  console.log('Нечетное число')
}