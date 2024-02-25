const product = [
  { id: 1, name: "Hot inifinix 453", price: 45000 },
  { id: 2, name: "Dell", price: 145000 },
  { id: 3, name: "mac", price: 65000 },
  { id: 4, name: "Iphone max - narzo", price: 95000 },
];
// -----------------Map--------------------------------------
const names = product.map((pro) => pro.name);
console.log(names);
const prices = product.map((price) => price.price);
console.log(prices);

// ----------------------forEach-----------------------------
product.forEach((iod) => console.log(iod.id));
//------------------filter()------------------------------------
const expensive = product.filter((pri) => pri .price> 50000);
console.log(expensive);
// ---------------------fined()------------------------------
const affordable =product.find(p=>p.price<50000);
console.log(affordable)

//------------------------reduces-----------------------------------
const total =product.reduce((accum,current)=>accum+current.price6, 0)
console.log(total)