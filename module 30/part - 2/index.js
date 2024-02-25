// way one
function add( num1 , num2){
let result =0;
console.log(num1 , num2 , result)
result=num1+num2;
return result;
}
const sum=add(5,10)
// output :5 10 0

// way two
function add( num1 , num2){
    let result =0;
    console.log(num1 , num2 , result)
    result=num1+num2;
    return result;
    }
    const sum1=add(5)
    // output :  5 undefined 0
    // way three
    function  add (num1, num2){
        let result =0;
        console.log(num1, num2, result)
        result =num1+num2;
        return result;
    }
    const sum3=add()
    // output :undefined undefined 0

    // way four
    function  add (num1=0, num2=0){
        let result =0;
        console.log(num1, num2, result)
        result =num1+num2;
        return result;
    }
    const sum4=add()
    // output : 0 0 0
    const sum5=add(5)
    // output : 5 0 5