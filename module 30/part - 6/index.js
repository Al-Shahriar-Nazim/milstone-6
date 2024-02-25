// max ---way one
const max = Math.max(20, 12, 15, 14, 15, 33, 99, 66, 55, 741, 47);
console.log(max);

const min = Math.min(20, 12, 15, 14, 15, 33, 99, 66, 55, 741, 47);
console.log(min);
// way -----two
const numbers = [20, 12, 15, 14, 15, 33, 99, 66, 55, 741, 9999];
// const arrayMax = Math.max(numbers);
// console.log(arrayMax);
// output : NaN
/*----------spread operator use korte hobe----------*/
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

/*spread operator to copy*/
const num1 = [20, 12, 15, 14];
const num2 = num1;
num2.push(100);

// console.log(num2);
// output :  [20, 12, 15, 14, 100]

// console.log(num1);
// output :  [20, 12, 15, 14, 100]

// console.log(...num1)
// output: 20 12 15 14 100

const num3 = [...num1];
num1.push(200);
console.log(num1);
// [20, 12, 15, 14, 100, 200]

console.log(num3);
// [20, 12, 15, 14, 100]
