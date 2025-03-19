'use strict';

// Array🎉 

// 1. Declaration 
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array (배열 순회하기)
// print all fruits (배열 모든 요소 출력)

// a. for문 사용
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for..of 사용 (ES6 문법)
for (let fruit of fruits) {
    console.log(fruit);
}


// c. forEach 사용 (콜백 함수)
fruits.forEach((fruit) => console.log(fruit));


// 4. Addition, deletion, copy (배열 추가, 삭제, 복사)
// push: add an item to the end (배열 끝에 요소 추가)
fruits.push('🍓', '🍑');;
console.log(fruits);
// pop: remove an item from the end (배열 끝 요소 제거)
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning (배열 앞에 요소 추가)
fruits.unshift('🍓', '🍋');
console.log(fruits);


// shift: remove an item from the beginning (배열 앞 요소 제거)
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push (주의!! shift, unshift는 pop, push보다 성능이 느림)

// splice: remove an item by index position (특정 위치 요소 제거 및 추가)
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);

// combine two arrays (두 개의 배열 합치기)
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
// 5. Searching (배열에서 특정 요소 찾기)
// includes (요소 존재 여부 확인)
// lastIndexOf (마지막으로 등장한 인덱스 찾기)

console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));
console.log(fruits.indexOf('🥥'));

// lastIndexOf (마지막으로 등장한 인덱스 찾기)
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); 
console.log(fruits.lastIndexOf('🍎'));
