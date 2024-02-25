/**
 * 8 way to get undefined:
 * (1).variable that is not initilized will give undefined
 * (2).Function with no retrun will give undefined
 * (3).Parameter that is not passed will give undifined
 * (4). if return has nothing on the right side will give undefined
 * (5).proparty that  doesnt exists on an object will give you undefined
 * (6) Acssing array elements outside of the index range you undefined
 * (7) deleting an element inside an array
 * (8)Set a value directly to undefined
 */
// --------------way 1 (variable that is not initilized will give undefined)-------------
let frist;
console.log(frist);

// -------------way 2 (Function with no retrun will give undefined)--------------------
function secound(a, b) {
  const total = a + b;
}
const result = secound();
console.log(result);

//  ----------way 3 (Parameter that is not passed will give undifined)-------------
function thired(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
thired(3, 4);
// output : 3 4 undefined undefined

// ---------way 4 (if return has nothing on the right side will give undefined)-----
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return; /**b er man negative tai ai khane asce but aikhane kisu korte bole ni tai undefined output delam */
  } else {
    return a + b;
  }
}
const total = noNegative(2, -3);
console.log(total);

// ---------way 5( proparty that  doesnt exists on an object will give you undefined)----
const fifth = { id: 2, name: "abdul motin", age: 21 };
console.log(
  fifth.name,
  fifth.sallary
); /**aikhane sallary nai tai sallary er poriborte undefined output debe */
// output :abdul motin undefined

// -------way 6(Acssing array elements outside of the index range you undefined)-------
const sixth = [23, 45, 76, 47, 90];
console.log(
  sixth[1],
  sixth[200]
); /** index 200 nai tai output undefined show korbe */
// output : 45 undefined

//---------way 7 (deleting an element inside an array)-----------------------
const seventh = [23, 45, 76, 47, 90];
/**ai babe delete kora tik nh .slice use korte hobe */
delete seventh[1];
console.log(seventh[1], seventh[200]);
// output : undefined undefined

//---------way 8 (Set a value directly to undefined)-------------
const eight = undefined;
console.log(eight);

console.log(typeof undefined);
// output : undefined

console.log(typeof null)
// output : object

/**
 * kono akta value nai oitar jonno sob somoy null use korte hobe
 */
