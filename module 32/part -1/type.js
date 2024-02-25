// --------------Strongly types programing -------------------
//...........................................................................................
// int a =45;
// string b=" al shahriar nazim";
// bool c= true;
// object student = {id : 1 , name : "Al shahriar nazim" , pass : 2021 isMarried : true }
// int [ ] number = [ 12,54,32,23]
//  string [ ] friends =["motin", "Khotin" , "johim", 'jamal'  "kamal"]

// --------------Daynamics types programing -------------------
/**
 * other's programing language e variable ty kon type er hobe ta bole dete hoi kintu js ta lage nh ai jonno js daynamic proraming language.
 *
 * differant type of two : (1).primitive data type[number , string, boolen,null]
 * (2). Non-primitive data type [ Array ,object]
 */
//...........................................................................................

// .............................primitive type .................
// ========eder modde kono jamela nai =====
const a = 43;
// output: number

const b = "hello bangladesh";
// output : string

const value = true;
// output: boolean

// .............................Non-primitive type .................
// ========eder modde  jamela ase =====
const c = ["halim", "kalim", "jamil"];
// ouput : Object
//  array cheak kore Array.isArray( )
const d = { id: 1, name: " jhoim kagu", proffesion: "bussnesman" };
// ouput : Object

// console.log( typeof a, typeof b, Array.isArray(c), typeof d)
console.log(typeof a, typeof b, typeof c, typeof d, typeof value);
// output : number string object object  boolean

let x = 5;
let y = x;
console.log(x, y);
y=7; /**y er  value  ke reasign korse*/
console.log(x,y)

let p ={job: "Web Developer"}
let q= p;
// output : {job: 'Web Developer'} {job: 'Web Developer'}

// q ={ job : "Frontend developer"} /**value reasign korle  */
// output : {job: 'Web Developer'} {job: 'Frontend developer'}
q.job='senior web master';
// out put: {job: 'senior web master'} {job: 'senior web master'}
/**
 * Non-premitive data type reparence ta dore rake
 */
console.log( p,q)