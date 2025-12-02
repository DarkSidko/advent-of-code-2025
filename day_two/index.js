const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split(',');
const small = fs.readFileSync('./small_input.txt', 'utf-8').split(',');
let rows = input;

const firstPart = () => {
  let wrongIds = [];
  rows.forEach((row) => {
    const [rangeStart, rangeEnd] = row.split('-');
    for (let i = Number(rangeStart); i <= rangeEnd; i++) {
      const str = String(i);
      const firstHalf = str.slice(0, str.length / 2);
      const lastHalf = str.slice(str.length / 2, str.length);
      if (firstHalf === lastHalf) {
        wrongIds.push(i);
      }
    }
  });
  console.log(wrongIds.reduce((acc, id) => acc + id));
};

const secondPart = () => {
  let wrongIds = [0];
  rows.forEach((row) => {
    const [rangeStart, rangeEnd] = row.split('-');
    for (let i = Number(rangeStart); i <= rangeEnd; i++) {
      const str = String(i);
      const limitOfAttempts = Math.floor(str.length / 2);
      let success = false;
      for (let hopper = limitOfAttempts; hopper > 0; hopper-=1) {
        let start;
        let innerSuccess = true;
        for (let j = 0; j < str.length; j += hopper) {
          const item = str.slice(j, j + hopper);
          if (!start) {
            start = item;
          }
          if (start !== item) {
            innerSuccess = false;
            break;
          }
        }
        if (innerSuccess) {
          success = true;
          break;
        }
      }
      if (success) {
        wrongIds.push(i);
      }
    }
  });
  console.log(wrongIds.reduce((acc, id) => acc + id));
};
//firstPart();
secondPart();
