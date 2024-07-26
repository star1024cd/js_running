
// 메소드 체이닝

1.
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
 ];

// 여기에 코드를 작성해주세요
// 예상 출력: ["이재상", "김준현"]

// 모르겠습니다ㅠ 





2.
const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]

let multi2 = numbers.map (function(item){
  return item * 2 ;   
}).filter(function(item){
  return item <= 30;
});

console.log(multi2);