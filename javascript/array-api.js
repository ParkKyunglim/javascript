// Q1. make a string out of an array 배열을 문자열로 변환하세요

{
    const fruits = ['apple', 'banana', 'orange'];
    // join(separator): 배열의 요소를 하나의 문자열로 합침. separator로 구분자를 지정할 수 있음.
    const result = fruits.join();
    console.log(result);
}

// Q2. make an array out of a string 문자열을 배열로 변환하세요
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // split(separator): 문자열을 separator(구분자) 기준으로 나누어 배열로 변환.
    const result = fruits.split();
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] 배열을 [5, 4, 3, 2, 1] 형태로 변경하세요
{
    const array = [1, 2, 3, 4, 5];
    // reverse(): 배열의 요소 순서를 거꾸로 변경 (원본 배열도 변경됨)
    const result = array.reverse();
    console.log(result);
    console.log(array);

}

// Q4. make new array without the first two elements 새로운 배열을 만들되, 처음 두 개의 요소를 제외하세요.
{
    const array = [1, 2, 3, 4, 5];
    // slice(start, end): start 인덱스부터 end 인덱스 전까지의 새로운 배열을 반환 (원본 배열은 변경되지 않음)
    const result = array.slice(2, 5); // 인덱스 2부터 4까지의 요소를 새로운 배열로 반환
    console.log(result);
    console.log(array);
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 점수가 90인 학생을 찾아라
{
    // find(callback): 조건에 맞는 첫 번째 요소를 반환 (못 찾으면 undefined 반환)
    const result = students.find((student) => student.score === 90);
    console.log(result);

}

// Q6. make an array of enrolled students 등록된 학생(enrolled == true)들의 배열을 만드세요
{
    // filter(callback): 조건을 만족하는 요소들만 배열로 반환
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores 학생들의 점수만 포함하는 배열을 만드세요
// result should be: [45, 80, 90, 66, 88]
{
    // map(callback): 각 요소를 변환하여 새로운 배열 생성
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50 점수가 50점 미만인 학생이 있는지 확인하세요.
{
    console.clear();

    // some(callback): 배열 내 요소 중 하나라도 조건을 만족하면 true 반환
    const result = students.some((student) => student.score < 50);
    console.log(result); 

    // every(callback): 배열 내 모든 요소가 조건을 만족하면 true, 하나라도 안 맞으면 false
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2); 
}

// Q9. compute students' average score 학생들의 평균 점수를 계산하세요
{
    // reduce((누적값, 현재값) => 계산식, 초기값): 배열을 하나의 값으로 축소
    const totalScore = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(totalScore / students.length);
}

// Q10. make a string containing all the scores  모든 점수를 포함하는 문자열을 생성하세요.
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student) => student.score) // 점수만 배열로 변환
    .filter((score) => score >= 50) // 50점 이상만 필터링
    .join(); // 배열을 문자열로 변환
    console.log(result)
}

// Bonus! do Q10 sorted in ascending order  Q10의 결과를 오름차순 정렬하여 문자열로 변환하세요
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
    .map((student) => student.score) // 점수만 배열로 변환
    .sort((a, b) => a - b) // 오름차순 정렬
    .join(); // 문자열로 변환
    console.log(result); 
}