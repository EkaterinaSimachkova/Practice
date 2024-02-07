/* У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию. */

let copySorted = (arr) => [...arr].sort() // или arr.slice().sort()

let arr = ["HTML", "JavaScript", "CSS"]
let sorted = copySorted(arr)

console.log(sorted) // CSS, HTML, JavaScript
console.log(arr) // HTML, JavaScript, CSS 