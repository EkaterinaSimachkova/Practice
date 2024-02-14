let arr1 = [4, 5, 6]
let arr2 = [4, 5, 6]

console.log(compareArrs(arr1, arr2))

let arr3 = [4, 5]
let arr4 = [4, 5, 7]

console.log(compareArrs(arr1, arr3))
console.log(compareArrs(arr1, arr4))

function compareArrs(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    } else {
        for (let i = 1; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false
            }
        }
    }
    return true
}
