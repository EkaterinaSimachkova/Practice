let arr = [
    [2, 4, 5],
    [1, 2, 3],
    [0, 1, 1],
    [5, 7, 1]
]

arr.sort((a, b) => a.reduce((sum, el) => sum + el, 0) - b.reduce((sum, el) => sum + el))
console.log(arr)