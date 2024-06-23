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