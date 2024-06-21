function multiplyRandom() {
    let num1 = Math.floor(Math.random() * 51); // Случайное от 0 до 50
    let num2 = Math.floor(Math.random() * 51);
    return num1 * num2;
}
let result = multiplyRandom();
console.log("Произведение случайных чисел:", result);