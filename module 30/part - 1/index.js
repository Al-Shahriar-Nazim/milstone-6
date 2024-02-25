// var     : no reason to use var
// let      :allow it to reassign
// const :do not allow it to reassign
//  ES6 meaning Ecama Script

const money=550;
// money=540;
// console.log(money)
// output : TypeError: Assignment to constant variable.
// output error ase karon aita constant
const rice=money+50;
console.log(rice)


const numbers=[34, 44,33,12,56,32]
// numbers =[43,43, 09, 89]
// const dele reasign kora jabe nh but vitore element gulo ke change kora jabe
numbers [3]=1;
numbers.push(44, 55,443,21)
console.log(numbers)

// object
const student ={
    name : 'Al Shahriar Nazim',
    roll : 683971
}
// student={
//     name: 'hagol '
// }
student.name='Moywor konti';
console.log(student)
// output :{ name: 'Moywor konti', roll: 683971 }


// loop
let sum=0;
for (let i=0 ; i<10 ;i++){
    sum=sum+i;
    console.log(sum)
}
