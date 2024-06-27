// Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)

for( let i = 20; i <= 30;  i += 0.5){
    console.log('cycle for ==', i);
}

let a = 20;

while ( a <= 30){
    console.log('cycle for------2 ==', a);
    a = a += 0.5;
}

//Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const uah = 26;

for(let usd = 10; usd <= 100; usd += 10){
    let exchange = uah * usd;
    console.log('exchange----------For ==', exchange);
}

let dollar = 10;

while(dollar <= 100){
    let exchange = uah * dollar;
    console.log('exchange----------while ==', exchange);
    dollar = dollar += 10;
}


//Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

const N = parseInt(prompt('Please enter some number:'), 10);

if(!isNaN(N)){
    let i = 1;
    let message = '';

    while (i <= 100){
        if (Math.pow(i, 2) <= N) {
            message = message += i + ' ';
        }
        i++;
    }
    alert(message);
} else {
    console.log('isNaN');
}


// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе)


const num = parseInt(prompt('Please enter some number:'), 10);
let primeNum = true;


if (num <= 1) {
    primeNum = false;
} else {

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primeNum = false;
            break;
        }
    }
}

if (primeNum) {
    alert(`your number ${num} is prime`);
} else {
    alert(`your number ${num} is not prime`);
}

