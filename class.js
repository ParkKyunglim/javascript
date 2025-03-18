'use strict';
// Object-oriented programming (객체 지향 프로그래밍)
// class: template (클래스는 객체를 만들기 위한 템플릿)
// object: instance of a class (객체는 클래스의 인스턴스)
// JavaScript classes (자바스크립트 클래스)
//  - introduced in ES6 (ES6에서 도입됨)
//  - syntactical sugar over prototype-based inheritance (프로토타입 기반 상속을 문법적으로 개선한 형태)

// 1. 클래스 선언
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
} 

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters (게터와 세터)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private) (필드: 공개, 비공개)
// Too soon! (아직 사용하기 이른 개념 - 일부 브라우저에서만 지원)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2; // 공개 필드 (모든 곳에서 접근 가능)
    #privateField = 0; // 비공개 필드 (클래스 내부에서만 접근 가능)
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4.Static properties and methods (정적 속성과 메서드)
// Too soon! (ES6 이후 도입, 클래스 자체에 속하는 정적 속성/메서드)
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
    super.draw();
    console.log('🔺');
    }
    getArea() {
      return (this.width * this.height) / 2;
    }

    toString() {
    return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
    value.value = 7;
}
change(obj);
console.log(obj);