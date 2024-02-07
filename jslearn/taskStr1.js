/* Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. */

let ucFirst = (str) => str.replace(str[0], str[0].toUpperCase())

console.log(ucFirst("вася")) 