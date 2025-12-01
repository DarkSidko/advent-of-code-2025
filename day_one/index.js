const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const small = fs.readFileSync('./small_input.txt', 'utf-8').split('\n');
const rows = input;

const startPoint = 50;
let counter = 0;

const bootstrap = () => {
  let point = startPoint;
  rows.forEach((item) => {
    console.log(item);
    const direction = item[0];
    const val = Number(item.slice(1));
    if (direction === 'L') {
      if (point === 0) {
        counter += Math.floor(val / 100);
      } else if (val >= point) {
        counter += Math.floor((val - point) / 100) + 1;
      }
      point = (((point - val) % 100) + 100) % 100;
    } else {
      if (point === 0) {
        counter += Math.floor(val / 100);
      } else if (val + point >= 100) {
        counter += Math.floor((val + point - 100) / 100) + 1;
      }
      point = (point + val) % 100;
    }

    console.log('counter:', counter);
    console.log('point:', point);
  });
  console.log('password', counter);
};

bootstrap();
