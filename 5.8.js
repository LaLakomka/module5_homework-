//задание 2 (5.7) (показать кол-во четных и не четных НЕ РАБОТАЕТ ХЗ ПОЧЕМУ)

let arr = [1, "abc", 3, 4, 9, null, 0];
let chet = 0;
let anchet = 0;
let nullCount = 0;
for (let i = 0; i < arr.length; i++){ 
if (typeof arr[i] != 'string')

else if (arr[i] == null) {
        nullCount++
} 
else if (arr[i] % 2 == 0) {
        chet++
} 
else {
        anchet++
}
}
    console.log('Четных чисел' + chet);
    console.log('Нечетных чисел' + anchet);
    console.log('Нулей' + nullCount);  
    