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



// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27


function createIncrementor() {
    let n = 0;
    return function (num){
        return n += num
    }
}

const sum = createIncrementor();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));


function createSum(n) {
    return function (num){
        n += num
        return n;
    }
}

const sumNum = createSum(0);

console.log(sumNum(4));
console.log(sumNum(6));
console.log(sumNum(10));
console.log(sumNum(7));



// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) .
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.
//Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації,
// то функція виводить в консоль останній введення користувача і завершує функцію.


function showUserNumber (){

    const minNum = 100;
    const maxIteration = 10;
    let i = 0;
    let userNum;

    while ( i < maxIteration ){
        userNum = prompt("Please enter a number greater than 100: ");

        if (userNum === null) {
            console.log("User cancelled the prompt.");
            return;
        }
        userNum = +userNum;

        if (!isNaN(userNum) && userNum > minNum) {
            console.log("Last input Last input validated: " + userNum);
            return;
        }
        i++;
    }
    console.log("Last input: " + userNum);

}

showUserNumber();

