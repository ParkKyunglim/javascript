'use strict';

// JavaScript is synchronous.
// Execute the code block by order after hoisting.
// hoisting: var, function declaration
// (자바스크립트는 기본적으로 동기적이며, 호이스팅 이후 코드 순서대로 실행됨)
// (hoisting: 변수와 함수 선언이 코드 맨 위로 끌어올려지는 현상)
console.log('1');
setTimeout(function() {
    console.log('2');
}, 1000);
console.log('3');

// Synchronous callback 동기 콜백 함수
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback 비동기 콜백 함수
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); 

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id); 
                // (로그인 성공 시 onSuccess 콜백 호출)
            } else {
                onError(new Error('not found')); 
                // (로그인 실패 시 onError 콜백 호출)
            }
            }, 2000);

    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
        if (user === 'ellie') {
            onSuccess({ name: 'ellie', role: 'admin' }); 
            // (권한 확인 성공 시 onSuccess 콜백 호출)
        } else {
            onError(new Error('no access')); 
            // (권한이 없으면 onError 콜백 호출)
        }
        }, 1000); // (1초 후 권한 확인)
    }
    }

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
    error => {
        console.log(error);
    }
    );
    },
    error => {
        console.log(error);
    }
);