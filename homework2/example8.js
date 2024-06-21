let date = new Date(2020, 10, 11); // Месяцы начинаются с 0 (январь - 0)
let options = { day: 'numeric', month: 'long', year: 'numeric' };
let formattedDate = date.toLocaleDateString("ru-RU", options); 
console.log("Отформатированная дата:", formattedDate);