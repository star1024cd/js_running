
//해당 문제를 forEach로 변경하여 풀어주세요
1.
let arr1 = [10, 20, 30];

// 해당 로직을 작성하세요  
// 결과 값: [100, 200, 300] 출력해주세요 

let multi10 = [];
arr1.forEach(function (item) {
  multi10.push(item * 10);
})
console.log(multi10);

2.
let arr2 = [10, 22, 33];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

// 결과값 [10]

let multipleOfFive = [];
arr2.forEach(function (item) {
  if(item % 5 ===0){
    multipleOfFive.push(item);
  }
})
console.log(multipleOfFive);