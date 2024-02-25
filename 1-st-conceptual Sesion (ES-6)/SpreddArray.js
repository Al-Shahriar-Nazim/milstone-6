// const number =[32, 54, 87, 90]
// const number1 = number;
// number.push(10)
// number1.push(20)
// console.log(number)/** [32, 54, 87, 90, 10, 20] */
// console.log(number1) /** [32, 54, 87, 90, 10, 20] */
/**
 * object non-primitive howr karone reparence ta dore reke number and number1 duitar vitorei output same ase ai problem ta dur korar jonnoi spreed operator . and for loop o use kore kora jay
 */
//---------way one for loop---------------//
// const number = [10, 20, 30];
// const numbers = [];
// numbers.push(40);
// number.push(50)
// for (let num of number) {
//   numbers.push(number);
// }
// console.log("number value is :", number);
// console.log("numbers value is :", numbers);

//--------------way two spreed operator------------

// const number =[1,2,3,4]
// const number1 =[ number]
// number.push(10)
// number1.push(20)
// console.log("number value is :" , number) /* output : [1, 2, 3, 4, 10]*/
// console.log("Number1 value is ",number1)/* output : [1, 2, 3, 4, 20]*/

//-----------------------------------------------------------------//
//-------------------Array destracting-----------------------//
//------------------------------------------------------------------//
const number = [12, 23, 34, 56, 1, 2, 3, 4];

// const a =number[0];  /*12*/
// const b =number[1];  /**23 */
// const c= number[2];  /**34 */

/*array destracting mane array ke benge nijer moto kore make kora*/
// const [ a,b,c]=number; /**  12   23   34   */
const [a, b, ...c] = number;
console.log(a, b, c); /**12 23  [34, 56, 1, 2, 3, 4] */
