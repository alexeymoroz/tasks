const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите число: ", (number) => {
  console.log("Вы ввели число: ${number}");

  rl.close();
});