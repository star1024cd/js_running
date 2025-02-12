1.
//배열 API map 활용
var arr = [10, 20, 30]
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
// 결과 값: [100, 200, 300]을 출력해주세요

let multiply100 = arr.map (function(item){
  return item * 10 ;    
});
console.log(multiply100);  

2.
//배열 API filter 활용
var arr = [10, 22, 33]
// 5의 배수를 찾아 반환해주세요
// 결과값 [10]을 출력해주세요

let multipleOfFive = arr.filter(function(item){
  return item % 5 === 0;
})
console.log(multipleOfFive);  
 
3.
const numbers = [5, 10, 15, 20, 25];
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
// 출력값 [20, 25]

let biggerThan15 = numbers.filter(function(item){
  return item > 15;
})
console.log(biggerThan15);  

4.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요
 
let fourWords = arr.filter(function(item){
  return item.length >= 4;
})
console.log(fourWords);  
 
5.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요

let lengthIsOdd = arr.filter(function(item){
  return item.length % 2 !== 0;
})
console.log(lengthIsOdd);  

6.
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// 오름차순으로 정렬하여 출력해주세요

let ascNumber = arr.sort(( a, b ) => ( a-b ));
console.log(ascNumber); 

7.
var student =[
      {name:"이재상", age: 25 },
      {name:"정윤오", age: 30 },
      {name:"김준현", age: 12312}
];
// age를 이용하여 내림차순으로 정렬하고 출력해주세요

let descAge = student.sort(( a, b ) => ( b.age - a.age ));
console.log(descAge);

8.
var student =[
      {id : 1, name:"이재상"},
      {id : 2, name:null},
      {id : 3, name:"김준현"}
];
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요

let isNameNull = student.some(function(item){
  return item.name === null;
});
console.log(isNameNull);

9.
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.

 let isWordsOverFive = arr.some(function(item){
  return item.length > 5;
});
console.log(isWordsOverFive);

10.
var arr = ["banana", "kiwi", "mango"];
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요

arr.splice(2, 0, 'apple');
console.log(arr); 

11.
var arr = [1, 5, -3, 10, 0, 8];
// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요

let hasMinus = arr.some(function(item){
  return item < 0 ;
});
console.log(hasMinus);

12.
var arr = [1, 5, -3, 10, 0, 8];
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요

let everyMinus = arr.every(function(item){
  return item < 0 ;
});
console.log(everyMinus);