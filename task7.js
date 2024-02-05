function range(a, b, step = 1) {
    let arr = []
    let i = a
    while ((step > 0) ? i <= b : i >= b) {
        arr.push(i)
        i += step
    }
    return arr
}

let sum = (arr) => arr.reduce((sum, x) => sum + x, 0)

console.log(sum(range(1, 10)))
console.log(range(1, 10, 2))
console.log(range(5, 2, -1))