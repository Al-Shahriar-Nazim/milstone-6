/**
 * .............................Truthy : ......................................
 *(1). True
 (2).any number (+ve , -ve) will be truthy
(3). any string is truthy
(4). any string other then empty string
(5).empty object is truthy value
(6).empty array is truthy value


 * .....................................Falsy : ...............................
 *(1)False
 *(2). 0 (zero)
 (3). '' (empty string is falsy)
 (4).undefined is a falsy value
 (5).Null is falsy value


 */
// ----------truthy 1(true)---------------------
//============================
const x = true;
if (x) {
  console.log("Value is x of truthy");
} else {
  console.log("value is x of falsy");
}

// ----------truthy 2(any number (+ve , -ve) will be truthy)---------------------
//================================================
const x1 = 4;
if (x1) {
  console.log("Value is positive of truthy");
} else {
  console.log("value is positive of falsy");
}

const x2 = -4;
if (x2) {
  console.log("Value is negative of truthy");
} else {
  console.log("value is negative  of falsy");
}

// ----------truthy 3(any string is truthy)---------------------
//====================================
const x3 = "Al Shahriar Nazim";
if (x3) {
  console.log("Value is string of truthy");
} else {
  console.log("value is string of falsy");
}

// ----------truthy 4(any string other then empty string)---------------------
//===============================================
const x4 = " ";
if (x4) {
  console.log("Value is space-string of truthy");
} else {
  console.log("value is space-string of falsy");
}
// ----------truthy 5(empty object is truthy value)---------------------
//===============================================
const x5 = { };
if (x5) {
  console.log("Value is empty object of truthy");
} else {
  console.log("value is empty object of falsy");
}
// ----------truthy 6(empty array is truthy value)---------------------
//=========================================
const x6= { };
if (x6) {
  console.log("Value is empty array of truthy");
} else {
  console.log("value is empty array of falsy");
}

// ////////////////////////////////////////////////////
// ----------falsy1(false)---------------------
//============================
const y = false;
if (y) {
  console.log("Value is x of truthy");
} else {
  console.log("value is x of falsy");
}

// ----------falsy  2(0)---------------------
//============================
const y1 = 0;
if (y1) {
  console.log("Value is zero of truthy");
} else {
  console.log("value is zero of falsy");
}

// ----------falsy  3(''Empty string is truthy)---------------------
//======================================
const y2 = "";
if (y2) {
  console.log("Value is empty of truthy");
} else {
  console.log("value is empty of falsy");
}

// ----------falsy  4(undefined is a falsy value)---------------------
//========================================
let y3;
console.log(y3)
if (y3){
    console.log("y3 is truthy value")
}
else {
    console.log("y3 is a falsy value")
}
// ----------falsy  5( null is a falsy value)---------------------
//========================================
let y4=null;
console.log(y4)
if (y4){
    console.log("y4 is truthy value")
}
else {
    console.log("y4 is a falsy value")
}