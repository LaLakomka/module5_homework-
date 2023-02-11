//задание 1(5.8)   Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let myMap = new Map ();
myMap.set('1', 'apple');
myMap.set('2', 'watermelon');
myMap.set('3', 'banana');

for(let name of myMap.keys())
{
console.log(" Ключ — "+ name + ", значение — "+ myMap.get(name));
}