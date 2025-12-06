const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const small = fs.readFileSync('./small_input.txt', 'utf-8').split('\n');
let rows = small;
const secondPart = () => {
    const operations = rows
        .splice(-1)[0]
        .split(' ')
        .filter((it) => it);
    console.log(rows);
    const numRows  = rows.map((row) => {
   //     console.log(row);
        const arrStr = [];
        let numPrep = '';
        for (let j = 0; j < row.length; j++) {
            if (row[j] === ' ') {
                if (!/\d/.test(numPrep)) {
                    numPrep += ' ';
                    continue;
                }
                arrStr.push(numPrep);
                numPrep = '';
            } else {
                numPrep += row[j];
            }
        }
        arrStr.push(numPrep);
      //  console.log(arrStr);
        return arrStr;
    })
    console.log(numRows)
    //console.log(numRows)
    /*
    let numRows = rows.map((it) =>
        it
            .split(' ')
            .filter((it) => it)
            .map((it) => it)
    );
    let cumulative = 0;
    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        let sum = operation === '*' ? 1 : 0;
        const toOperate = [];
        let highestDigitsAmount = 0;
        numRows.forEach((num) => {
            toOperate.push(num[i]);
            if (highestDigitsAmount < num[i].length ) {
                highestDigitsAmount = num[i].length;
            }
        });
        console.log(highestDigitsAmount);
        console.log(toOperate);
        const toOperateFilled = toOperate.map((it) => {
            const toPush = highestDigitsAmount - it.length;
            return ('*'.repeat(toPush)) + it;
        })
        const reversed = [];
        for (j = highestDigitsAmount -1; j >=0; j--) {
            let newNum = '';
            toOperateFilled.forEach((num) => {
                if (num[j] !== '*') {
                    newNum += num[j];
                }
            })
            reversed.push(newNum);
        }
        console.log(reversed);
        cumulative += sum;
    }
    console.log(cumulative);

     */
};
secondPart();