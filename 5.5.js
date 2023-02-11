//задание 2 (5.4) (Рандомные числа)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (min, max) + min); 
  }
  
  var random_num = getRandomInt(0, 100);
  console.log(random_num);
  