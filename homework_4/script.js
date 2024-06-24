//Use the prompt to ask for the "username"
//Use alert to print "Hello, John! How are you?", where "John" is what the user entered

const username = prompt('Please enter your name:');
alert(`Hello, ${username}! How are you?`);


/* Rewrite the code below using the construct switch…case:
let numOrStr = prompt('input number or string');
console.log(numOrStr)
if(numOrStr === null) {
    console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
    console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
} */

const numOrStr = prompt('input number or string');

switch (true){
    case numOrStr === null:
        console.log('ви скасували')
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}


// Дано тризначне число, яке надае користувач, потрібно визначити:
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?


const userNumber = prompt('Please enter a three-digit number:');
const strNumber = userNumber.toString();

const num1 = strNumber[0];
const num2 = strNumber[1];
const num3 = strNumber[2];

let equalNum;
if (num1 === num2 && num2 === num3) {
    equalNum = true;
} else {
    equalNum = false;
}

let duplicatesNum;
if (num1 === num2 || num1 === num3 || num2 === num3) {
    duplicatesNum = true;
} else {
    duplicatesNum = false;
}

console.log(`Всі цифри однакові == ${equalNum}`);
console.log(`Чи є серед цифр однакові? == ${duplicatesNum}`);


// Основне завдання, cтворити скрипт яки повинен виконувати наступне:
//     запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
//     При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
//
//     його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце
// точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.
//     Додаткове завдання *
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту,
// то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
//
// Все це має бути відображено в одному вікні (алерті).
//
//     Додаткове завдання
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення –
// “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .


const userBirthday = prompt('Please enter your year of birth:');
if(userBirthday === null){
    alert('Шкода, що Ви не захотіли ввести свій рік народження :(');
} else {
    const userCity = prompt('Please enter where are you live:');
    if(userCity === null){
        alert('Шкода, що Ви не захотіли ввести своє місто :(');
    } else {
        const userFavoriteSport = prompt('Please enter your favorite sport:');
        if(userFavoriteSport === null){
            alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту :(');
        } else {
            const currentYear = new Date().getFullYear();
            const userAge = currentYear - userBirthday;

            let userInfoCity;
            if (userCity.toLowerCase() === 'київ') {
                userInfoCity = 'Ти живеш у столиці України.';
            } else if (userCity.toLowerCase() === 'вашингтон') {
                userInfoCity = 'Ти живеш у столиці США.';
            } else if (userCity.toLowerCase() === 'лондон') {
                userInfoCity = 'Ти живеш у столиці Великобританії.';
            } else {
                userInfoCity = `Ти живеш у місті ${userCity}.`;
            }

            let userInfoSport;
            if (userFavoriteSport.toLowerCase() === 'футбол') {
                userInfoSport = 'Круто! Хочеш стати як Дієго Марадона?';
            } else if (userFavoriteSport.toLowerCase() === 'баскетбол') {
                userInfoSport = 'Круто! Хочеш стати як Майкл Джордан?';
            } else if (userFavoriteSport.toLowerCase() === 'бокс') {
                userInfoSport = 'Круто! Хочеш стати як Олександр Усик?';
            } else {
                userInfoSport = `Твій улюблений вид спорту: ${userFavoriteSport}!`;
            }

            alert(`Твій вік: ${userAge} років\n${userInfoCity}\n${userInfoSport}`);
        }
    }
}



