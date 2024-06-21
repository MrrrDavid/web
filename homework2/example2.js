document.addEventListener(`DOMContentLoaded`, function () {
  const data = ["Apple", "Banana", "Orange"];
  const list = document.getElementById("myList");

  data.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.index = index;
    list.appendChild(li);
  });
  list.querySelectorAll("li").forEach((element) => {
    element.addEventListener("mouseenter", function () {
      console.log(`Длина массива: ${data.length}`);
      console.log(`Индекс элемента: ${this.index}`);
    });
  });
});
