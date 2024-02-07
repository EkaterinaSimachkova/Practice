/* Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" 
в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
Метод должен понимать плюс + и минус -. 

Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его. 

Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/

function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }

    this.calculate = function(str) {
        let res
        [a, symb, b] = str.split(' ')

        if (this.methods[symb] && !isNaN(+a) && !isNaN(+b) ) {
            res = this.methods[symb](+a, +b)
        } else return NaN

        return res
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func
    }
}

let calc = new Calculator
console.log(calc.calculate("3 + 7")) // 10

let powerCalc = new Calculator
powerCalc.addMethod("*", (a, b) => a * b)
powerCalc.addMethod("/", (a, b) => a / b)
powerCalc.addMethod("**", (a, b) => a ** b)
console.log(powerCalc)

let result = powerCalc.calculate("2 ** 3")
console.log(result) // 8