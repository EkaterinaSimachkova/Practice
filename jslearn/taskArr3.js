/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму. */

function getMaxSubSum(arr) {
    let max = 0
    let sum = 0
  
    for (let x of arr) { 
      sum += x
      if (sum > max) max = sum
      if (sum < 0) sum = 0
    }
  
    return max
  }
  
  console.log(getMaxSubSum([-1, 2, 3, -9])) // 5
  console.log(getMaxSubSum([-1, 2, 3, -9, 11])) // 11
  console.log(getMaxSubSum([-2, -1, 1, 2])) // 3
  console.log(getMaxSubSum([100, -9, 2, -3, 5])) // 100
  console.log(getMaxSubSum([1, 2, 3])) // 6
  console.log(getMaxSubSum([-1, -2, -3])) // 0

