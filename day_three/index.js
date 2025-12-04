const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const small = fs.readFileSync('./small_input.txt', 'utf-8').split('\n');
let rows = input;

const firstPart = () => {
  let cumulative = 0;
  rows.forEach((row) => {
    let curr = 0;
    for (let i = 0; i < row.length - 1; ++i) {
      for (let j = i + 1; j < row.length; j++) {
        const firstNumber = row[i];
        const secondNumber = row[j];
        const sum = Number(firstNumber + secondNumber);
        if (sum > curr) {
          curr = sum;
        }
      }
    }
    console.log(row);
    console.log(curr);
    cumulative += curr;
  });
  console.log(cumulative);
};

const secondPart = () => {
  const getBiggest = (row, start, fin) => {
    let firstBiggest = 0;
    let firstBiggestIndex = 0;
    for (let i = start; i <= row.length - fin; ++i) {
      const item = Number(row[i]);
      if (item > firstBiggest) {
        firstBiggest = item;
        firstBiggestIndex = i;
      }
    }
    return {
      firstBiggest,
      firstBiggestIndex,
    };
  };
  let cumulative = 0;
  rows.forEach((row) => {
    let pos = 0;
    let left = 12;
    let joltaboy = '';
    while (left > 0) {
      const { firstBiggest, firstBiggestIndex } = getBiggest(row, pos, left);
      left--;
      pos = firstBiggestIndex + 1;
      joltaboy += firstBiggest;
    }
    cumulative += Number(joltaboy);
  });
  console.log(cumulative);
};
//firstPart()
secondPart();
