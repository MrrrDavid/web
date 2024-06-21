let flag = true;

while (flag) {
  let znak = prompt("Напишите число, которое больше 5", "");
  if (znak === null) {
    continue;
  }
  if (parseFloat(znak) !== NaN) {
    if (znak > 5) {
      alert("Поздравляем, вы все праивльно ввели!");
      flag = false;
      continue;
    } else {
      alert("Вы ввели число, которое меньше 5!");
      continue;
    }
  } else if (znak.trim() == "".valueOf()) {
    alert("Вы ввели пустоту");
  } else {
    alert("Попробуйте ввести ещё раз!");
  }
}
