let num1=5;
let num2 =7;
function multifly (a,b){
    a =4;
    const result =a*b;
    return result;
}
const output =multifly(num1,num2)
console.log(output)
////////////////////////////////////////////
let student1 = {name : "jalil", partner : " Borsa"};
let student2 = {name : 'raj' , partner : "Anika"};
function makeMovie ( couple1, couple2){
    couple1.name='Onnto'
   couple2.partner='Min';
}
console.log(student1,student2)
// output : {name: 'jalil', partner: ' Borsa'} {name: 'raj', partner: 'Anika'}
makeMovie(student1,student2)
console.log(student1,student2)
// output :  {name: 'Onnto', partner: ' Borsa'} {name: 'raj', partner: 'Min'}