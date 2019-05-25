'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    var len = arr.length;
    
    var pos = 0;
    var neg = 0;
    var zero = 0;

    for (var i = 0; i < len; i++) {
        if (arr[i] > 0) pos++;
        if (arr[i] < 0) neg++;
        if (arr[i] < 1 && arr[i] > -1 ) zero++;
    }
    var posrat = pos / len
    var neg = neg / len
    var zero = zero /len
    return (posrat.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zero.toFixed(6)  + "\n");
    
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

   
    console.log(plusMinus(arr));
}
