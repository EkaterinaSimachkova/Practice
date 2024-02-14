let arr = [1, 8, 4, 4, 6, 1, 8]

let set = new Set()
arr.forEach((el) => {
    if (set.has(el)){
        set.delete(el)
    } else set.add(el)
})
console.log([...set][0])