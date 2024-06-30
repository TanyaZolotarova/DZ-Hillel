/*Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
Наприклад:
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array,4);
console.log(array); // Результат: [1, 3, 6, 2, 5, 7] */

const arr = [1, 3, 4, 6, 2, 5, 7];
function removeElement (array, item){

    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

removeElement(arr, 3);
console.log('array -------------- ==',arr)


// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = ['blue', 55, {a: 1}, true, 5, null, 555];

function averageSum (arr){

    let numbers = arr.filter(element => typeof element === 'number');
    if (numbers.length === 0) {
        return null;
    }

    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;

}

console.log('Average Sum ---------- ==',averageSum(array));


