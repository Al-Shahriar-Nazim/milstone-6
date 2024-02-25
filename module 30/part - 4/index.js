// normal function
function add(a, b) {
  const result = a + b;
  return result;
}
const sum = add(5, 80);
console.log(sum);

// function expressions
const add2 = function (a, b) {
  return a + b;
};
const sum2 = add(30, 70);
console.log(sum2);


// Arrow functions
// variable =parametter  => condition
const add3=(a,b)=>a+b;
const sum3 =add3(80,50)
console.log(sum3)

// arrow funtion with multiply
const add4=(num1, num2, num3,num4)=>num1*num2*num3*num4;
const sum4=add4(2,2,2,2);
console.log(sum4)