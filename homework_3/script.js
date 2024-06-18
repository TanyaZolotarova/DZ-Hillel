//output data types using typeof

const str = 'Hello World!';
const num = 55;
const bigIntValue = 55n;
const emptyValue = null;
const undefinedValue = undefined;
const isTrue = true;
const symbol = Symbol("id");
const obj = {a:1, b:2};

console.log('str ==',typeof str);
console.log('num ==',typeof num);
console.log('bigIntValue ==',typeof bigIntValue);
console.log('emptyValue ==',typeof emptyValue);
console.log('undefinedValue ==',typeof undefinedValue);
console.log('isTrue ==',typeof isTrue);
console.log('symbol ==',typeof symbol);
console.log('obj ==',typeof obj);


//create 3 strings and output them using template literals

const city = 'Kharkiv';
const country = 'Ukraine';
const name = 'Tetiana';
const message = `My name is ${name}, i'm from ${city}, ${country}`;