// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)


const sumNumbers = (firstNum) => (secondNum) => firstNum + secondNum;

const sumOfNum = sumNumbers(5)(2);
console.log('Currying sumOfNum arrow function ---------- == ', sumOfNum);

 function CarryNumbersSum (firstNum) {
    return function (secondNum) {
        return firstNum + secondNum
    }
 }

 const name = CarryNumbersSum(5)(2);
console.log('Currying name function Declaration ---------- == ', name);