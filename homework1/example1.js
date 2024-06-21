const znak = prompt("Напишите свой знак зодиака", "");
if (znak.toLowerCase === "телец".valueOf) {
  alert("Привет : " + znak);
} else if (znak.toLowerCase() == "овен".valueOf()) {
  alert("Привет : " + znak);
} else if (znak.toLowerCase() == "близнецы".valueOf()) {
  alert("Привет : " + znak);
} else if (znak.toLowerCase() == "рак".valueOf()) {
  alert("Привет : " + znak);
} else if (znak.toLowerCase() == "лев".valueOf()) {
  alert("Привет : " + znak);
} else if (znak.toLowerCase() == "дева".valueOf()) {
  alert("Привет : " + znak);
} else if (znak.toLowerCase() == "весы".valueOf()) {
  alert("Привет : " + znak);
} else if (znak.toLowerCase() == "скорпион".valueOf()) {
  alert("Привет : " + znak);
} else if (znak.toLowerCase() == "стрелец".valueOf()) {
  alert("Привет : " + znak);
} else if (znak.toLowerCase() == "козерог".valueOf()) {
  alert("Привет : " + znak);
} else if (znak.toLowerCase() == "водолей".valueOf()) {
  alert("Привет : " + znak);
} else if (znak.toLowerCase() == "рыбы".valueOf()) {
  alert("Привет : " + znak);
} else if (znak.trim() == "".valueOf()) {
  alert("Вы ввели пустоту");
} else {
  alert("Такого знака зодиака не существует: " + znak);
}
