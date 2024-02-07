/* Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью. */

let randomInteger = (min, max) => Math.floor(min + Math.random() * (max +1 - min))

console.log(random(1, 5))
console.log(random(1, 5))
console.log(random(1, 5))