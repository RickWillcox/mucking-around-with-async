function funcX1() {
  return 'im a normal function';
}

const funcX2 = () =>
  'im an arrow function, => into a single statement, no need for a return';

const funcX3 = () => {
  return 'im an arrow function with a block, I need a return inside the block';
};

console.log('funcX1', funcX1());
console.log('funcX2', funcX2());
console.log('funcX3', funcX3());

//These two are the same (for your use case, there is minor differences with with you wont encounter yet)
function addTwoNumbers1(a: number, b: number) {
  return a + b;
}

const addTwoNumbers2 = (a: number, b: number) => a + b;

console.log('addTwoNumbers1', addTwoNumbers1(1, 2));
console.log('addTwoNumbers2', addTwoNumbers2(1, 2));

//This is a function that returns a function
function minusNumbers(a: number) {
  return (b: number) => a - b;
}
console.log('squareNumber', minusNumbers(7)(5));

// this is same as above
const minusNumbers2 = (a: number) => (b: number) => a - b;
console.log('squareNumber', minusNumbers2(7)(5));

// same again but using function keyword
function minusNumbers3(a: number) {
  return function (b: number) {
    return a - b;
  };
}

console.log('squareNumber', minusNumbers3(7)(5));

// we cant declare that inside function properly like this because we dont know a is hence why we do it like above.
// commented out so we can compile
// function insideFunction1(b:number) {
//   return a - b;
// }

// make a function that sets a 100ms timeout
const ms = 1000;
const timeout = (ms: number) =>
  new Promise((resolve) => {
    console.log('instantly prints', ms);
    return setTimeout(resolve, ms);
  });

timeout(ms).then(() => console.log(`this prints after ${ms} ms`)); // stop doing string "," + string nub pls.
// .then is called promise chaining you can do as many as you want

timeout(ms)
  .then(() => console.log(`multiple promise chains 1`))
  .then(() => console.log(`multiple promise chains 2`));

/*
  Notice below that since we called timeout twice, 
  it will print instantly prints 1000 twice, 
  then after 1000ms it will print the first then, 
  then after another 1000ms it will print the second then.
  
  to understand this better just comment out the code immediately above
  
  instantly prints 1000
  instantly prints 1000
  this prints after 1000 ms
  multiple promise chains 1
  multiple promise chains 2
  */

//  how can we change that behaviour if say we waited to wait for the first timeout to finish before starting the second one?
//  we can use async await
// however unless you are on like es2022 or something like that you CANNOT use async await outside of a function.
// since this code is just running in the main thread, we need to wrap it in a function
// go to next file
