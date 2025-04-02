// 1. String concatenation (문자열 연결)
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators (숫자 연산자)
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators (증가 및 감소 연산자)
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assignment operators (할당 연산자)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators (비교 연산자)
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not) (논리 연산자)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value (첫 번째 true 값을 찾으면 반환)
console.log(`or: ${value1 || value2 || check()}`);

// && (and), 10 chars
// finds the first falsy value (첫 번째 false 값을 찾으면 반환)
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// (긴 if 문을 줄일 때 사용)

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not) (논리 부정 연산자)
console.log(!value1);

// 7. Equality (동등 비교 연산자)
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (자동 형 변환을 허용하는 동등 연산자)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion (엄격한 동등 연산자로 형 변환 없음)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference (객체는 참조에 의해 비교됨)
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler (예상하기 어려운 동등 비교)
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if (조건문)
// if, else if, else (조건에 따라 실행)
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ? (삼항 연산자)
// condition ? value1 : value2; (조건 ? 참일 때 값 : 거짓일 때 값)
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement (switch 문)
// use for multiple if checks (여러 개의 if 문을 대체할 때 사용)
// use for enum-like value check (열거형 값 비교에 적합)
// use for multiple type checks in TS (TypeScript에서 여러 타입을 검사할 때 유용)
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops (반복문)
// while loop, while the condition is truthy, body code is executed.
// (while 문: 조건이 true이면 코드 블록 실행)
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first, then check the condition.
// (do while 문: 본문을 실행한 후 조건 검사)
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
// (for 문: 초기값; 조건; 증감)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration (변수를 반복문 내에서 선언)
  console.log(`inline variable for: ${i}`);
}

// nested loops (중첩 반복문)
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue (반복문 제어)
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
// (0부터 10까지 반복하면서 짝수만 출력, continue 사용)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
// (0부터 10까지 반복하면서 8까지 출력, break 사용)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}