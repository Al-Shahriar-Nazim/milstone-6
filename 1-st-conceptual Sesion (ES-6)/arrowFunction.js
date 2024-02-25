// function add(x, y) {
//   return x + y;
// }
// console.log(add(2, 3));


/**
 * arrow function declear korar system :
 *
 * system - 1
 * const variableName = parametter => {
 * retrun condition ;
 *
 * system  - 2
 * const variableName = parametter => condition
 * }
 */

// system : 1
// const add =(x,y)=>{
//     return x+y;
// }
// console.log(add(2, 3));

//system : 2
const add = (x, y) => (x + y);
console.log(add(2, 3));
