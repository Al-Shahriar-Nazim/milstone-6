function kitchen() {
  let roest = 0;
  return function () {
    roest++;
    return roest;
  };
}
const firstServe = kitchen();
console.log(firstServe);
// Output : anounomas function
console.log(firstServe());
// first serve ouput : 1
console.log(firstServe());
// first serve ouput : 2


const secoundServe = kitchen( );
console.log(secoundServe())
// ouput : 1

console.log(firstServe());
// ouput : 3