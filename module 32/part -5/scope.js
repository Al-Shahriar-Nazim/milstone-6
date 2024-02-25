function add(a, b) {
  const total = a + b;
  if (b>5){
    const sum =25+a+b;
  }
  else {
    const sum =5+a+b;
    var current =sum; /**hoisting */
  }
  console.log(current)
  return total;
}
add(5,7)

// const sum = add(5, 5);
// console.log(sum);
