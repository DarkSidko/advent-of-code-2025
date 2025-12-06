const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const small = fs.readFileSync('./small_input.txt', 'utf-8').split('\n');
let rows = small;

const firstPart = () => {
  const operations = rows
    .splice(-1)[0]
    .split(' ')
    .filter((it) => it);
  let numRows = rows.map((it) =>
    it
      .split(' ')
      .filter((it) => it)
      .map((it) => Number(it))
  );
  let cumulative = 0;
  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    let sum = operation === '*' ? 1 : 0;
    numRows.forEach((num) => {
      if (operation === '+') {
        sum += num[i];
      }
      if (operation === '*') {
        sum *= num[i];
      }
    });
    cumulative += sum;
  }
  console.log(cumulative);
};

firstPart();
