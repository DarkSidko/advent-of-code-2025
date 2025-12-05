const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const small = fs.readFileSync('./small_input.txt', 'utf-8').split('\n');
let rows = input;

const scanForNeighbours = (matrix, i, j) => {
  let counter = 0;
  const scanCombs = [
    [0, +1],
    [0, -1],
    [+1, 0],
    [+1, +1],
    [+1, -1],
    [-1, 0],
    [-1, -1],
    [-1, +1],
  ];
  scanCombs.forEach((comb) => {
    const newI = i + comb[0];
    const newJ = j + comb[1];
    if (matrix[newI]?.[newJ] === '@') {
      counter++;
    }
  });
  return counter;
};

const firstPart = () => {
  const matrix = [];
  rows.forEach((row) => {
    items = row.split('');
    matrix.push(items);
  });
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '@') {
        counter = scanForNeighbours(matrix, i, j);
        if (counter < 4) {
          sum++;
        }
      }
    }
  }
  console.log(sum);
};

const secondPart = () => {
  const processMatrix = (matrix) => {
    let sum = 0;
    let toRemoveCords = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === '@') {
          counter = scanForNeighbours(matrix, i, j);
          if (counter < 4) {
            sum++;
            toRemoveCords.push([i, j]);
          }
        }
      }
    }
    return { sum, toRemoveCords };
  };
  const loopSearch = (matrix) => {
    let cumulative = 0;
    let result = {
      sum: 0,
      toRemoveCords: [],
    };
    do {
      result = processMatrix(matrix);
      result.toRemoveCords.forEach((comb) => {
        matrix[comb[0]][comb[1]] = 'x';
      });
      cumulative += result.sum;
    } while (result.toRemoveCords.length > 0);
    return cumulative;
  };
  const matrix = [];
  rows.forEach((row) => {
    items = row.split('');
    matrix.push(items);
  });
  const res = loopSearch(matrix);
  console.log(res);
};
//firstPart();
secondPart();
