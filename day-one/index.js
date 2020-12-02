const fs = require("fs");
const inputArray = fs.readFileSync('./input.txt').toString().split('\n').map(num => Number(num));
inputArray.sort();

let index1, index2, sum;

index1 = 0;
index2 = inputArray.length - 1;
sum = inputArray[index1] + inputArray[index2];

while (sum !== 2020) {
  if (sum < 2020) {
    index1++;
  } else {
    index2--;
  }
  sum = inputArray[index1] + inputArray[index2];
}

const num1 = inputArray[index1];
const num2 = inputArray[index2];

console.log(`${num1} * ${num2} = ${num1*num2}`);
