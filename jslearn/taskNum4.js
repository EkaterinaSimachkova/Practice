/* Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max). */

let random = (min, max) => min + Math.random() * (max - min)

console.log(random(1, 5))
console.log(random(1, 5))
console.log(random(1, 5))