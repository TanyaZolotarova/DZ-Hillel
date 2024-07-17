//Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо.
// Створіть метод об'єкту для отримання та відображення цих даних.

const User = {
    name: 'John',
    surname: 'Snow',
    age: 30,
    city: 'Kharkiv'
};

function showUserInfo(user) {
    const userInfo = Object.entries(user);
    let showInfo = '';

    for (const entry of userInfo) {
        const key = entry[0];
        const value = entry[1];
        showInfo += `${key}: ${value}, `;
    }

    return showInfo.slice(0,-2);
}

const showPersonInfo = showUserInfo(User);
console.log('showPersonInfo-----------', showPersonInfo)


//ДЗ 10.2. Отримання парних чисел з масиву
//Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву,
// в якому лише парні числа з оригінального масиву.


const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArrNumbers = arrNumbers.filter(num => num % 2 === 0);

console.log('newArrNumbers ----------- == ', newArrNumbers)