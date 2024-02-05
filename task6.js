function countBS(str) {
    let count = 0
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) == "B") {
            count++
        }
    }
    return count
}

function countChar(str, symb) {
    let count = 0
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) == symb) {
            count++
        }
    }
    return count
}

console.log(countBS('BBBbbaas'))
console.log(countChar('BBBbbaas', 'b'))