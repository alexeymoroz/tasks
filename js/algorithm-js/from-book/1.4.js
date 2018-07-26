// 1.4. Составить программу вывода на экран числа, вводимого с клавиатуры. 
// После выводимого числа должно следовать сообщение " - вот какое число Вы ввели".

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите число: ", (number) => {
  console.log("${number} - вот какое число Вы ввели.");

  rl.close();
});