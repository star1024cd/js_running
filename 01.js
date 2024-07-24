let uninitialized;
console.log(uninitialized); 
// 결과값 < undefined > 
// 이유 : 변수에 값을 할당해주지 않아서

const apple = "사과";
apple = "바나나"; 
// TypeError: Assignment to constant variable
// 이유 : 상수 const의 값을 재할당하려고 했기 때문에 뜨는 에러

let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); 
// 결과값 < 19 >
// 이유 : 배열은 [0]부터 시작하기 때문에 [3] = 4번째 값, 19.

let mySchedule = "";
console.log(mySchedule || false); 
// false
// 이유 : 문자열 "" = false. false or false 둘 다 false 이기 때문에 false 반환.
console.log(!!mySchedule); 
// false 
// 이유 : myschedule = false, !! = 부정의 부정 => 원점 false


