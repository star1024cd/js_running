const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function calculator(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
}

// function plusThree(scores) {
//     for(let i = 0 ; i < scores.length ; i++ ){
//         scores[i] += 3; 
//     }
// }

function plusThree(scores) {
  for(let i = 0 ; i < scores.length ; i++ ){
      scores[i] = calculator(scores[i],"+",3);
  }
}

plusThree(scores);
console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]