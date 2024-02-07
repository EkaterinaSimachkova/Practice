/* Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
Функция должна возвращать числовое значение.
Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». 
В этом случае функция должна вернуть null. */

function readNumber() {
    let num
  
    do {
      num = prompt("Введите число")
    } while (!isFinite(num))
  
    return (num === null || num === '') ? null : +num
  }
  
  console.log(readNumber())