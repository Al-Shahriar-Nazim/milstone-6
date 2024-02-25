// data access
const data = [{ id: 1, name: "Abdul Motin", address: "kosu khete take" }];
// console.log(data.address)
//  output : undefined
//  [ becuse ay address ta selo akta function er modde ar data value  hoose array .tai age array index declear korte hobe then addree]
console.log(data[0].address);

//------------------------------------------------------------------------------------------------------------------------//
// example - 2
// product two price?
const product = {
  count: 5000,
  data: [
    { id: 1, name: "iphone", price: 80000 },
    { id: 2, name: "macbook", price: 165000 },
  ],
};
console.log(product.data[1].price);

//------------------------------------------------------------------------------------------------------------------------//
// example - 3
//  user er street er secound ?
const user = {
  id: 55001,
  name: "Al Shahriar Nazim",
  address: {
    street: {
      first: '54/1 uttora side',
      secound : "poribager goli",
      thried : 'nodorai'
    },
    city:"Dhaka",
  },
};
console.log(user.address.street.secound)

//------------------------------------------------------------------------------------------------------------------------//
// example -4
const user2={
    id:443,
    name :'poribibi',
    address :{
        city : 'Dhaka',
        country : "Bangladesh"
    }
}
// console.log(user.address.street.secound)
// [ option chaining - ? ]
console.log(user2.address.street ?.secound)