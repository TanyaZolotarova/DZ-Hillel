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
