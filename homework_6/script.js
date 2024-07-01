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


// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.


const userString = prompt('Please enter a few words: ');
const userRemoveSymbol = prompt('Please enter the symbols to be deleted: ');
const removeSymbol = userRemoveSymbol.split('');
function removeSymbols(userString, userRemoveSymbol) {

    const removeSymbolSet = new Set(userRemoveSymbol);

    let resultString = '';
    for (let smb of userString) {
        if (!removeSymbolSet.has(smb)) {
            resultString += smb;
        }
    }
    return resultString;
}

const result = removeSymbols(userString, userRemoveSymbol);
alert(result);




