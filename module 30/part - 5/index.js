// multiple pharametter takle
const substraction = (a, b) => a + b;
const sum = substraction(5, 90);
console.log(sum);
//  three pharametter takle
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const mul = multiply(2, 2, 2);
console.log(mul);

// single Pharametter taklw
// (objects)
const student = { name: "all shahriar naxim", age: 20 };
const getAge = (person) => person.age;
const age = getAge(student);
console.log(age);

// array
const getThird = (numbers) => numbers[3];
const thired = getThird([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(thired);

const doubleIt = (num) =>
  num * 2; /*single pharametter e bracket nh dele o hoi*/
const number = doubleIt(4);
console.log(number);

// no pharametters
const getPi = () => Math.PI;
console.log(getPi());

// learge arrow function ( function body)
const doMath = (x, y) => {
  const sum = x + y;
  const mul = x * y;
  const div = x / y;
  const sub = x - y;
  const results = sum + mul + div + sub;
  return results;
};
const results = doMath(2, 2);
console.log(results);
