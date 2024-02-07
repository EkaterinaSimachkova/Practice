/* Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false. */

let checkSpam = (str) => (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX'))

console.log(checkSpam('buy ViAgRA now')) // true
console.log(checkSpam('free xxxxx')) // true
console.log(checkSpam("innocent rabbit")) // false