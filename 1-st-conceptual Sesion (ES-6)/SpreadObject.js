const person = {
  name: "Al Shahriar Nazim",
  age: 23,
  phone: "01824062430",
  address: " jagotPur",
  p: [1, 2, 3, 4],
};
// const person1 = { ...person };
// person1.email = "nazimking7634@gamil.com";
// console.log(person);
/**output : {name: 'Al Shahriar Nazim', age: 23, phone: '01824062430', address: ' jagotPur', p: Array(4)} */

// console.log(person1);
/**ouput : {name: 'Al Shahriar Nazim', age: 23, phone: '01824062430', address: ' jagotPur', p: Array(4), …}
 */

//----------------------------------------------------------------//
// *----------/*Array destractring*/---------------------------
//-----------------------------------------------------------------//
const studentID = {
  name: "Mofijul Islam",
  roll: 53433,
  class: "ten",
  addres: " Shantir hat",
};

const { name, roll, address, addres } = studentID;
// console.log(name);
// console.log(roll);

// console.log(studentID.name)
// console.log(studentID.roll)
// console.log(studentID.class)
// console.log(studentID.address)

//---function er vitor function takle
const gameFriends = {
  name1: " kamal uddin",
  age: 23,
  addres1: {
    zilla: "feni",
    union: "Dagonbhuiyan",
  },
};
const { name1, age, addres1 } = gameFriends;
const { zilla } = addres1;
console.log(zilla);


//---------object er vitore proparty name issa korle change kora jay ----
// const nayok ={
//     name2 : "hero alom",
//     age2 : 43,
//     workplace : 'actor',
//     addres2 : 'bangladesh'
// }
// const {age2,name2:bangladesherNayok}=nayok;
// console.log(bangladesherNayok) /**hero alom */


// --------object spredd or rest operator --------------
const nayok ={
    name2 : "hero alom",
    age2 : 43,
    workplace : 'actor',
    addres2 : 'bangladesh'
}

const {name2 ,...age2}=nayok;
console.log(name2,age2)
// ouput : hero alom {age2: 43, workplace: 'actor', addres2: 'bangladesh'}
