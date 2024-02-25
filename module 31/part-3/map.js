//  -----------------------------Normal function used-----------------------------------------
const  number =[2,3,4,5,6,7,8,9];
const doubled =[ ];
for (const num of number){
    const double=num*2;
    doubled.push(double);
}
console.log(doubled)


// ---------------------------map(calBack function)-------------------------------------------
const number2 =[1,2,3,4,5,6,7,8,9];
function doubleIt(num){
    return num*2;
}
 const output1 =number2.map(doubleIt)
 console.log(output1);

//  --------------------------Arrow function ()-------------------------------------------------
const number3=[2,4,6,8];
const doubleIt2 =num =>num*2;

 const output2 =number3.map(doubleIt2)
 console.log(output2)

//  ---------------------------short cart arrow function -----------------------------------------
const  number4 =[1,3,5,7,9];
const output3= number4.map(num=>num*2);
console.log(output3);

// --------------------------element er length--------------------------------------------------
const friends =['jahi', 'jibon', 'jamal', 'kamal', 'pamal'];
const length =friends.map(frnd =>frnd.length)
// console.log(length)
const firstLetter = friends.map(frnds=>frnds[0])
console.log(firstLetter)