/* Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr. */

function unique(arr) {
    let uniqArr = []
    
    for (let el of arr) {
        if (!uniqArr.includes(el)) {
            uniqArr.push(el)
        }
      }

    return uniqArr
  }
  
let strings = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O"
]

console.log(unique(strings)) // кришна, харе, :-O