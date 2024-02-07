/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву. */

let camelize = (str) => str
                        .split('-')
                        .map((el, idx) => (idx != 0) ? el[0].toUpperCase() + el.slice(1) : el)
                        .join('')

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))