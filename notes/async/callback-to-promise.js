'use strict';

// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id); 
                    // (로그인 성공 시 onSuccess 콜백 호출)
                } else {
                    reject(new Error('not found')); 
                    // (로그인 실패 시 onError 콜백 호출)
                }
                }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (user === 'ellie') {
            resolve({ name: 'ellie', role: 'admin' }); 
            // (권한 확인 성공 시 onSuccess 콜백 호출)
        } else {
            reject(new Error('no access')); 
            // (권한이 없으면 onError 콜백 호출)
        }
        }, 1000); // (1초 후 권한 확인)
    });
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);
