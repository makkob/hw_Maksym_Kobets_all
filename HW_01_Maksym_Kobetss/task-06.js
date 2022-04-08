let input = prompt("Введите номер");
let total = 0;

for (let i = 0; input !== null; i++) {
  if (input !== null) {
    if (!isNaN(Number(input))) {
      total += Number(input);
      input = prompt("Введите номер");
    } else {
      alert("Не число");
      input = prompt("Введите номер");
    }
  }
}

console.log(total);
