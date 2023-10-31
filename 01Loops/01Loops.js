/*

Q1 - Sum of all Natural Numbers from 1 to n

Sum of 1 to 5: 1 + 2 + 3 + 4 + 5 = 15

*/


function sumOfNaturalNumber(num) {
    let sum = 0;
    for (let index = 1; index <= num; index++) {
        sum += index;
    }
     return sum;
}

console.log(sumOfNaturalNumber(5))