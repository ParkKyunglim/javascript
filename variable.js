// 1. Use strict
// ES5에서 추가됨
// 바닐라(순수) 자바스크립트에서 사용 권장
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (절대 사용하지 말 것!)
// var hoisting (m변수 선언을 코드 상단으로 이동)
// block scope 없음
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant 상수 (읽기 전용)
// 가능하면 항상 const를 사용
// 변수 값이 변경될 필요가 있는 경우에만 let을 사용
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// 불변(Immutable) 데이터 타입: 원시 타입 premitive types, frozen objects (i.e. object.freeze())
// 가변(Mutable) 데이터 타입: JS에서 기본적으로 모든 객체(object)는 변경 가능
// favor immutable data type always for a few reasons:
//  - 보안(security)
//  - 스레드 안전성(thread safety)
//  - 실수 방지(reduce human mistakes)

// 4. Variable types
// 원시 타입 (primitive): 단일 데이터 - number, string, boolean, null, undefined, symbol
// 객체 타입 (object): 데이터를 담는 컨테이너
// 함수 (function): first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - 특수한 숫자 값들: Infinity(무한), -Infinity(음수 무한), NaN(숫자가 아님)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt  (비교적 최근 도입됨 - 아직 사용 비추천)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// 문자열 string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''(빈 문자열)
// true: 그 외 모든 값
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined (변수는 선언되었지만 값이 할당되지 않음)
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol 객체의 고유 식별자를 만들 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 객체 object 실제 사물과 유사한 데이터 구조
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: 동적 타입 언어
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));