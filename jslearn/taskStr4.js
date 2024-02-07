/* Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его. */

let extractCurrencyValue = (str) => +str.substring(1)
  
console.log(extractCurrencyValue('$120'))