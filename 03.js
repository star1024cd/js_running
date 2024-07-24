function isOddEven(x) {
  if(x % 2 === 0) {
    return "짝수";
  }else {
    return "홀수";
  }
}

console.log(isOddEven(10)); // 결과값 "짝수";
console.log(isOddEven(7)); // 결과값 "홀수";