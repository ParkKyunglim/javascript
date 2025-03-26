'use strict';

// Promise is a JavaScript object for asynchronous operation.
// → Promise는 비동기 작업을 위한 자바스크립트 객체입니다.

// State: pending -> fulfilled or rejected
// → Promise는 생성되면 "대기(pending)" 상태이며,
// 이후 성공(fulfilled)하거나 실패(rejected) 상태로 바뀝니다.

// Producer vs Consumer
// → Producer는 Promise를 생성하는 사람(코드),
// Consumer는 Promise의 결과를 사용하는 사람(코드)입니다.


// 1. Producer
// when new Promise is created, the executor runs automatically.
// Promise 객체가 생성되면, 안에 전달한 executor 함수가 즉시 실행됩니다.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files) 네트워크 요청, 파일 읽기 등 무거운 작업이 실행됩니다.
    console.log('doning someting...');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network')); 
    }, 2000);
});

// 2. Consumers: then, catch, finally
// Promise의 결과를 처리하는 소비자 역할의 메서드들
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });   

// 3. Promise chaining
// then을 이어붙여서 연속적인 비동기 작업을 순차적으로 처리할 수 있음
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
// 여러 Promise가 이어질 때 중간에서 실패하면 catch로 한 번에 처리 가능
const getHen = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('🐓'), 1000); // 1초 뒤 닭 반환
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
    //   setTimeout(() => resolve(`${hen} => 🥚`), 1000); // 정상 케이스
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); 
      // 일부러 실패 시켜보기
    });

const cook = egg =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => 🍳`), 1000); // 달걀을 요리해서 계란후라이로
    });

getHen() //
.then(getEgg) // (hen => getEgg(hen)) 한 가지만 받아오면 생략 가능 
.catch(error => {
    return '🥖';
})
.then(cook)
.then(console.log)
.catch(console.log);