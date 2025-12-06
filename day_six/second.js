const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const small = fs.readFileSync('./small_input.txt', 'utf-8').split('\n');
let rows = input;

const operationsCodes = ['+', '*'];
const secondPart = () => {
  const operationsRow = rows.splice(-1)[0];
  const operations = [];
  let item = 0;
  for (let i = 0; i < operationsRow.length; i++) {
    if (operationsCodes.includes(operationsRow[i])) {
      if (operations[item]?.operation !== undefined) {
        item++;
      }
      operations[item] = {
        operation: operationsRow[i],
        padding: 0,
      };
      continue;
    }
    operations[item].padding += 1;
  }
  const newArr = rows.map((row) => {
    const arr = [];
    let start = 0;
    let padding = 0;
    operations.forEach((operation) => {
      padding = start + (operation.padding || row.length);
      const item = row.slice(start, padding);
      start = start + operation.padding + 1;
      arr.push(item);
    });
    return arr;
  });
  const newNums = [];
  for (let i = 0; i < operations.length; i += 1) {
    const operation = operations[i];
    const subNum = [];
    const padding = operation.padding || 3;
    for (let j = 0; j < padding; j++) {
      let newNum = '';
      newArr.forEach((row) => {
        newNum += row[i][j];
      });
      subNum.push(Number(newNum));
    }
    newNums.push(subNum);
  }
  let cumulative = 0;
  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i].operation;
    let sum = operation === '*' ? 1 : 0;

    newNums[i].forEach((num) => {
      if (operation === '*') {
        sum *= num;
      }
      if (operation === '+') {
        sum += num;
      }
    });
    cumulative += sum;
  }
  console.log(cumulative);
};
secondPart();
