const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const small = fs.readFileSync('./small_input.txt', 'utf-8').split('\n');
let rows = input;

const firstPart = () => {
  const ranges = [];
  let counter = 0;
  rows.forEach((row) => {
    if (row.includes('-')) {
      const [from, to] = row.split('-');
      ranges.push([Number(from), Number(to)]);
    } else {
      const item = Number(row);
      const match = ranges.some(
        (fresh) => item >= fresh[0] && item <= fresh[1]
      );
      if (match) {
        counter += 1;
      }
    }
  });
  console.log(counter);
};

const secondPart = () => {
  const ranges = [];
  let counter = 0;
  rows.forEach((row) => {
    if (row.includes('-')) {
      const [from, to] = row.split('-');
      ranges.push([Number(from), Number(to)]);
    }
  });
  ranges.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let current = ranges[0];
  for (let i = 1; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    if (start <= current[1]) {
      current[1] = Math.max(current[1], end);
    } else {
      merged.push(current);
      current = ranges[i];
    }
  }
  merged.push(current);
  merged.forEach(([from, to]) => {
    counter += to - from + 1;
  });
  console.log(counter);
};
//firstPart();
secondPart();
