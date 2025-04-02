'use strict';
// Objects
// one of the JavaScript's data types. (자바스크립트 데이터 타입 중 하나)
// a collection of related data and/or functionality. (관련 데이터와 기능의 집합)
// Nearly all objects in JavaScript are instances of Object (거의 모든 객체는 Object의 인스턴스)
// object = { key : value }; (객체는 key-value 쌍으로 구성됨)

const obj1 = {};  // 'object literal' syntax ('객체 리터럴' 문법, 가장 일반적인 방식)
const obj2 = new Object(); // 'object constructor' syntax ('객체 생성자' 문법, 덜 선호됨)

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties (계산된 속성)
// key should be always string (키는 항상 문자열이어야 함)
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');

// 3. Property value shorthand (속성 값 축약)
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);
// 4. Constructor Function (생성자 함수)

function Person(name, age) {
    // this = {}; (자동으로 빈 객체가 생성됨)
    this.name = name;
    this.age = age;
    // return this; (자동으로 this가 반환됨)
}

// 5. in operator: property existence check (속성 존재 여부 확인)
console.log('name' in ellie); // true (name 속성이 존재)
console.log('age' in ellie); // true (age 속성이 존재)
console.log('random' in ellie); // false (random 속성이 없음)
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj) (객체의 모든 키 반복)
console.clear();
for (let key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
    console.log(value);
}

// 7. Fun cloning (객체 복사)
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user; // 같은 참조 (얕은 복사)
console.log(user);
    
// old way (오래된 방식)
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example (객체 병합 예제)
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // 'blue' (뒤에 나온 fruit2 덮어쓰기 됨)
console.log(mixed.size); // 'big'
