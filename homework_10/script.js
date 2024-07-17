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





