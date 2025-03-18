// Function (함수)
// - fundamental building block in the program (프로그램에서 기본적인 구성 요소)
// - subprogram can be used multiple times (재사용할 수 있는 서브 프로그램)
// - performs a task or calculates a value (작업을 수행하거나 값을 계산하는 역할)

// 1. Function declaration (함수 선언)
// function name(param1, param2) { body... return; }
// 함수는 한 가지 기능만 수행해야 함
// 함수명은 동작을 나타내는 동사로 작성
// e.g. createCardAndPoint -> createCard, createPoint (하나의 함수에 여러 기능을 넣지 말 것)
// 함수는 자바스크립트에서 객체처럼 사용 가능
function printHello() {
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(message)
}
log('Hello@');
log(1234);

// 2. Parameters (매개변수)
// primitive parameters: passed by value (원시 타입 변수는 값이 복사되어 전달됨)
// object parameters: passed by reference (객체 타입 변수는 참조값이 전달됨)
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);

// 3. Default parameters (기본 매개변수, ES6 추가)
// 함수 호출 시 전달되지 않은 매개변수에 기본값을 설정할 수 있음
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (나머지 매개변수, ES6 추가)
// 전달받은 모든 인자를 배열로 저장하여 활용 가능
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); // error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit (조기 종료)
// bad (나쁜 예제)
function upgradeUser(user) {
    if (user.point > 10) {
      // long upgrade logic... (업그레이드 로직 실행)
    }
  }

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
      // long upgrade logic... 
}

// First-class function (일급 함수)
// functions are treated like any other variable (함수는 변수처럼 다룰 수 있음)
// can be assigned as a value to variable (변수에 할당 가능)
// can be passed as an argument to other functions. (함수를 다른 함수의 인자로 전달 가능)
// can be returned by another function (함수를 반환 가능)

// 1. Function expression (함수 표현식)
// a function declaration can be called earlier than it is defined. (hoisted)
// (함수 선언식은 선언되기 전에 호출 가능 - 호이스팅됨)
// a function expression is created when the execution reaches it.
// (함수 표현식은 실행 도중 생성됨)
const print = function () {
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 1. Function expression (함수 표현식)
// a function declaration can be called earlier than it is defined. (hoisted)
// (함수 선언식은 선언되기 전에 호출 가능 - 호이스팅됨) 선언된 것을 가장 위로 올려줌... 차이점 !
// a function expression is created when the execution reaches it.
// (함수 표현식은 실행 도중 생성됨)
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function (익명 함수)
const printYes = function () {
    console.log('yes!');
};

// named function (기명 함수)
// better debugging in debugger's stack traces (디버깅할 때 유용)
// recursions (재귀 호출 가능)
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function (화살표 함수)
// always anonymous (항상 익명 함수 형태)
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMutiply = (a, b) => {
    return a * b;
};

// IIFE: Immediately Invoked Function Expression (즉시 실행 함수)
(function hello() {
    console.log('IIFE');
})();