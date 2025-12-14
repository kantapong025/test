const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Input1() {
    rl.question('Input 1: ', (number1) => {
        Input2((number1));
    });
}

function Input2(number1) {
    rl.question('Input 2: ', (number2) => {
        Input3(number1, number2);
    });
}

function Input3(number1, number2) {
    rl.question('Input 3: ', (number3) => {
        // const x = Number(number1);
        // const y = Number(number2);
        // const z = Number(number3);
        // let max;
        // if (x > y && x > z) {
        //     max = x;
        // } else if (y > x && y > z) {
        //     max = y;
        // } else {
        //     max = z;
        // }
        const x = Number(number1);
        const y = Number(number2);
        const z = Number(number3);
        let max = x;
        if (y > max) max = y;
        if (z > max) max = z;
        console.log(max);
        rl.close();
    });
}

Input1();