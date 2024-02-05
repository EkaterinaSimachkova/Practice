let board = ''

for (let i = 1; i < 9; i++) {
    switch (i % 2){
        case 1:
            board += '# '.repeat(4) + '\n'
            break
        case 0:
            board += ' #'.repeat(4) + '\n'
            break
    }
}

console.log(board)