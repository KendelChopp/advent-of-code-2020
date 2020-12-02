const fs = require("fs");
const inputArray = fs.readFileSync('./input.txt').toString().split('\n').map(num => Number(num));
inputArray.sort((a, b) => a-b);
//inputArray.shift();
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

for (let lowIndex = 1; lowIndex < inputArray.length; lowIndex++) {
  const targetSum = 2020 - inputArray[lowIndex];

  let calculatedSum, middleIndex, highIndex;
  middleIndex = lowIndex + 1;
  highIndex = inputArray.length - 1;
  calculatedSum = inputArray[middleIndex] + inputArray[highIndex];

  while (calculatedSum !== targetSum && middleIndex !== highIndex) {
    if (calculatedSum < targetSum) {
      middleIndex++;
    } else {
      highIndex--;
    }
    calculatedSum = inputArray[middleIndex] + inputArray[highIndex];
  }

  if (calculatedSum === targetSum) {
    const lowNum = inputArray[lowIndex];
    const middleNum = inputArray[middleIndex];
    const highNum = inputArray[highIndex];
    console.log(`${lowNum} * ${middleNum} * ${highNum} = ${lowNum * middleNum * highNum}`)
    break;
  }
}
