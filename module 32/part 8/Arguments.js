function sum(a, b, c) {
  const result = a + b + c;
  return result;
}
const total = sum(12, 12, 12, 40, 40);
console.log(total);

// way 2
function sum2(a, b, c) {
  console.log(arguments);
  // output : Arguments(5) [12, 12, 12, 40, 40, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  console.log(arguments[4]);
  // output : 36
  console.log(typeof arguments);
  //  output : object

  const args = [...arguments];
  console.log(args);
  // output :  [12, 12, 12, 40, 40]

  const result2 = a + b + c;
  return result2;
}
console.log(sum2.length);

const total2 = sum2(12, 12, 12, 40, 40);
console.log(total2);
