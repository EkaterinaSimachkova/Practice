let animal = {
    name: 'animal',
    age: 10,
    childs: ['child 1', 'child 2']
}

let cat = clone(animal)
cat.name = 'cat'
cat.age = 5
cat.childs.push('child 3')

console.log(cat.name, cat.age)
console.log(cat.childs)

console.log(animal.name, animal.age)
console.log(animal.childs)

function clone(obj) {
    let newObj = JSON.stringify(obj)
    return JSON.parse(newObj)
}