let arr = [1, 8, 4, 4, 6, 1, 8]

let set = new Set()
arr.forEach((el) => {
    if (set.has(el)){
        set.delete(el)
    } else set.add(el)
})
console.log([...set][0])


// если в массиве числа повторяются больше двух раз, то

let arr2 = [1, 1, 8, 4, 4, 6, 1, 8]

let map = new Map()
arr2.forEach((el) => {
    if (map.has(el)){
        map.set(el, map.get(el)+1)
    } else map.set(el, 1)
})
for (let [el, count] of map.entries()) {
    if (count == 1) {
        console.log(el)
        break
    }
}

