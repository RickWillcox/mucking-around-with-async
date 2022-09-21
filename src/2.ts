// just a function that returns a promise at 500ms which resolves to "hello world"
async function helloWorld() {
  return new Promise((resolve) => {
    console.log('waiting 0.5s');
    setTimeout(() => {
      resolve('hello world');
    }, 500);
  });
}

///The below 4 functions all work and essentially do the same thing
// shit code
function thisWorks1() {
  const result = helloWorld();
  return result;
}

// You SHOULD use this one
function thisWorks3() {
  return helloWorld();
}
// Or this one
const thisWorks4 = () => helloWorld();
///

async function run1() {
  const opps1 = thisWorks1();
  const opps3 = thisWorks3();
  const opps4 = thisWorks4();
  console.log({ opps1 }, { opps3 }, { opps4 });
  // notice that opps1, opps3, opps4 are all promises
  // this is because we did not await them

  // notice that thisworksX is not async
  // but we can still await it because it returns a promise because helloWorld is async
  const thisWorks1Result = await thisWorks1();
  const thisWorks3Result = await thisWorks3();
  const thisWorks4Result = await thisWorks4();
  console.log({ thisWorks1Result }, { thisWorks3Result }, { thisWorks4Result });
}

// run1();

function logNames(a: number, b: number, c: number) {
  console.log('logNames');
  console.log(a);
  console.log(b);
  console.log(c);
  console.log('');
}

// logNames(1, 2, 3);

function logNamesTimeout(a: number, b: number, c: number) {
  console.log('logNamesTimeoutWrong');
  console.log(a);
  setTimeout(() => {
    console.log(b);
    console.log('');
  }, 1000);
  console.log(c);
}

// logNamesTimeout(1, 2, 3);

// more on promises both thesem are essentially the same
const promise1 = (flag: boolean) =>
  new Promise((resolve, reject) => {
    if (flag) {
      resolve('promise1 resolved');
    }
    reject('promise1 rejected');
  });

async function promise2(flag: boolean) {
  if (flag) {
    return 'promise2 resolved';
  }
  throw 'promise2 rejected';
}

function run2() {
  console.log('run2');
  promise1(true).then((result) => console.log('promise1 true: ', result));
  promise1(false).catch((result) => console.log('promise1 false: ', result));
  promise2(true).then((result) => console.log('promise2 true: ', result));
  promise2(false).catch((result) =>
    console.log('promise2 false: ', result, '\n'),
  );

  console.log('Notice this will print before all the promises');
}

//make it async
async function run3() {
  console.log('run3');
  await promise1(true).then((result) => console.log('promise1 true: ', result));
  await promise1(false).catch((result) =>
    console.log('promise1 false: ', result),
  );
  await promise2(true).then((result) => console.log('promise2 true: ', result));
  await promise2(false).catch((result) =>
    console.log('promise2 false: ', result),
  );
  console.log('Now it prints last \n');
}

async function runBoth() {
  await run2();
  await run3();
}

runBoth();

// why did I make the runBoth function? comment it out and and uncomment below and look at what happens in the console.
// look at where run2 and run3 print with the code below.
// If you understand why you are good to go.

// run2();
// run3();
