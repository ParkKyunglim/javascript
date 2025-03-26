// async & await
// clear style of using promise :) 
// (비동기 처리를 더 명확하고 간결하게 작성할 수 있는 방법)

// 1. async
async function fetchUser() {
    // do network reqeust in 10 secs.... (네트워크 요청이 10초 걸린다고 가정)
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await (await 키워드를 사용해 비동기 흐름을 동기식처럼 작성)

// delay 함수는 ms 만큼 기다리는 Promise를 반환
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000); 
    // (2초 대기 후 결과 반환)
    return '🍎';
}

async function getBanana() {
    await delay(1000); 
    // (1초 대기 후 결과 반환)
    return '🍌';
}

async function pickFruits() {
    const applePromise = getApple(); 
    const bananaPromise = getBanana(); 
    // (각 과일을 병렬로 가져오기 시작)
    const apple = await applePromise; 
    const banana = await bananaPromise; 
    // (병렬로 요청하되, 개별적으로 결과를 기다림)
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful APIs ✨
// (Promise 관련 유용한 API들)

// Promise.all: 모든 Promise가 완료될 때까지 기다림
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
    );
}
pickAllFruits().then(console.log); 
  // (모든 과일을 병렬로 수확 후, 조합해서 출력)

  // Promise.race: 가장 먼저 완료된 Promise 결과만 사용
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log); 
  // (가장 빨리 끝난 과일 하나만 출력, 여기선 🍌)
